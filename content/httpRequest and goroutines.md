title: http.Request and goroutines
date: 2013-06-19 21:02:00
layout: post
tags: ["development", "golang"]
---
I was starting to write a web service using Go this weekend. I already deployed two services replacing a Flask and a Sinatra application but this time was different. It was the first time I found a part in the Go language which did not make sense immediately. Did you ever try to pass a http.Request to a goroutine? Do you want to know what happens if you do?
<!--MORE-->

For me, the hardest part using a new language or framework is always the little differences between them and the, sometimes, strong opinions how things should work after all the years writing code. This weekend I encountered the first thing in Go which did not seem right. After some discussions in #go-nuts I understood the issue but I am still not entirely sold on the way it works.

Just as a short side note before we start looking at the code I want to mention that the people in #go-nuts are great. It is one of the really helpful channels on FreeNode and one of the most newbie friendliest ones I am aware of.

## Return as fast as possible
I want to replace an existing service which does just one simple thing. Accept a CORS request, process some data and save it to the database. The client does not need to know if it succeeded or anything else. It is basically fire and forget.

For simplicity we just use curl to post some data

    curl -i http://localhost:8080/api/add --data "foo=bar"

Since the client does not need to know what happens to our data we should finish the request as fast as possible. Goroutines are great and this is one of the cases where they are the right tool to use.

If the processing is done outside the request handler it should be able to return nearly immediately since spinning up a goroutine is insanely fast. The final service could use channels and be a bit more sophisticated but I wanted to extend it slowly.

    package main
    
    import (
        "github.com/gorilla/mux"
    	  "log"
        "net/http"
        "time"
    )
    
    func main() {
      	log.Println("Starting server...")
    
      	router := mux.NewRouter()
      	router.HandleFunc("/api/add", AddHandler).Methods("POST")
    
      	http.Handle("/api/", router)
    
      	log.Println("Now listening on port 8080")
      	http.ListenAndServe(":8080", nil)
    }
    
    func AddHandler(respWriter http.ResponseWriter, request *http.Request) {
      	respWriter.Header().Set("Content-Type", "application/json")
      	go PrintStuff(request)
      	respWriter.Write([]byte("Thanks\n"))
    }
    
    func PrintStuff(request *http.Request) {
      	request.ParseForm()
      	time.Sleep(time.Second * 3)
      	log.Println(request.PostForm)
    }


Pretty obvious code, isn't it? We spin up a go routine and return a "Thanks". Let us look at the output

    envy% go run src/apiserver/server1.go
    2013/06/19 17:58:18 Starting server...
    2013/06/19 17:58:18 Now listening on port 8080
    2013/06/19 17:58:23 map[]

Why is our map empty? We posted ```foo=bar```! The problem is that the request body is closed, the handler finished executing before our goroutine started processing everything. (At least this is the final explanation I got. If this is still not entirely correct please send me a mail or tweet)

Calling ```ParseForm()``` before spinning up the goroutine on the other hand works fine. First we change our code

    func AddHandler(respWriter http.ResponseWriter, request *http.Request) {
        respWriter.Header().Set("Content-Type", "application/json")
        request.ParseForm()
        go PrintStuff(request)
        respWriter.Write([]byte("Thanks\n"))
    }
    
    func PrintStuff(request *http.Request) {
        time.Sleep(time.Second * 3)
        log.Println(request.PostForm)
    }

And after running curl we should see

    envy% go run src/apiserver/server1.go
    2013/06/19 18:04:21 Starting server...
    2013/06/19 18:04:21 Now listening on port 8080
    2013/06/19 18:04:26 map[foo:[bar]]

Now this solves our problem, right? Kind of but not in an elegant way.

### Half usable request
This is the part I do not like. I cannot call ```ParseForm()``` but I can access ```PostForm```. I would prefer an all or nothing approach. 

I am also not sure if everyone would come to the conclusion why this happens after "just" reading the documentation. The last part of the ```Handler``` interface gives a hint but neither ```http.Request``` nor ```ParseForm()``` mention anything related. It is possible that I missed something or just read it wrong but judging from the reactions I got after asking about this my idea was not so obscure.

As I said it may be a problem with being opinionated and having seen other frameworks and languages with a different behavior. I still believe that if I can do "a" I should be able to do "b" on a struct.

### A better solution
I do not talk about best practices, I am not experienced enough with Go to do that, but I think you should just ignore the request outside the handler. If only some things are possible you should consider it gone. So we have to pass our data to the goroutine in a different way.

Using a simple map our code would look like this

    func AddHandler(respWriter http.ResponseWriter, request *http.Request) {
        respWriter.Header().Set("Content-Type", "application/json")
        request.ParseForm()
    
        body := make(map[string][]string)
        body["foo"] = request.PostForm["foo"]
        go PrintStuff(body)
        
        respWriter.Write([]byte("Thanks\n"))
    }
    
    func PrintStuff(body map[string][]string) {
        time.Sleep(time.Second * 3)
        log.Println(body)
    }

And let us look at the output

    envy% go run src/apiserver/server1.go
    2013/06/19 18:26:51 Starting server...
    2013/06/19 18:26:51 Now listening on port 8080
    2013/06/19 18:26:58 map[foo:[bar]]

As expected. Moral of the story? Do not pass a request to a goroutine.