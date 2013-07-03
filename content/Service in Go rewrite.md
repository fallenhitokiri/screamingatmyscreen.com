title: Should I rewrite my app in Go for better scalability?
date: 2013-07-03 19:32:00
layout: post
tags: ["golang", "scalability", "development"]
---
In the past few months we have seen many articles about big companies and well known start-ups rewriting a part of their infrastructure in Go. And all articles have one thing in common. They tell you how much faster the app is, how many servers they could turn off and how awesome Go is. Should you do the same and rewrite your app in Go?
<!--MORE-->

I have chosen the title because it is a questions I received two times now and I thought a bit longer answer could not hurt. The answer is sadly not just a simple 'yes' or 'no' but more an "it depends on…" type.

## Web development and Go
There is a great number of different frameworks which are comparable to frameworks you likely know and have used. It starts with pretty simple stuff proving routing and sessions to full featured frameworks which position themselves as counterpart to Ruby on Rails or Django. You will also find libraries for nearly anything you can imagine.

The downside is that they are pretty young, not nearly as feature rich as the libraries you usually use with other languages and not always stable enough for production. If you heavily depend on third party libraries doing the majority of your work and are not willing to fix someone else's code or reinvent the wheel you will likely have a hard time using Go for bigger applications.

## Replacing a Ruby on Rails or Django application
Do not do this. It is really that easy. If you have a non trivial application using multiple models, controllers and views  it will take a lot of time to rewrite everything and you will not have the same comfort as you have with those two frameworks. All the time you would waste for the rewrite could be invested in cleaning up your codebase, adding new features and improving the performance of your existing app.

The question is not if it is possible - but to answer it: yes, it is - the question is if it is a good idea and a good investment of your time.

## Start thinking SOA
If you already have a service oriented architecture or if you are planning to split parts away from your gigantic application into smaller services you should consider using Go. I already deployed three services using it and I am quite satisfied with the results.

### From Flask to Gorilla
There was a service which I hacked together in two or three hours. Nothing impressive. It did three things:

1. Receive data (http POST / JSON)
2. Store data (redis)
3. On request process data and send it (http GET / JSON)

The service is nothing spectacular or impressive and I believe everyone who is not drunk and has used Python and Flask for more than three hours would have been able to implement it. It is in production for nearly a year and works flawless, but more people started using it and the server sees a lot of load recently, sometimes taking more time than acceptable to respond to requests.

The easy solution would be moving redis to its own server and adding a second application server. I decided to rewrite it in Go. It took a bit more time, but it worked. After I flipped the switch and put it in production the server load moved down, response times got faster and looking at the load it could even be deployed to a smaller server.

### heroku ps:scale web=+2
In January a friend asked me to help him with a project. He and his company were a bit behind the timeline and they could not afford to be late with this one. They had a solid codebase and already used a SOA. I worked on two services.

Last month we met for a coffee and talked about the Flask application I recently replaced. He was curious why the service was down the first time in a year. He thought about hiring me to replace some of the services with a rewrite in Go. After a short talk about the advantages and disadvantages we came to the conclusion that it would be best to just add additional dynos.

First let us start with some simple math. Two additional Heroku dynos cost them $71 / month. If he would hire me to replace a service we would talk about ~$100 / hour (roughly, we bill each other in Euro). The services are far from trivial, but for the sake of those who do not like complex math imagine I would only need one day to write, test and deploy one service. Two days, with 8 hours of work, are $1600. For this amount of money they could pay the two additional dynos for two years. But what if they unexpectedly need to scale further? Let us add two additional dynos bringing us to $143 / month. We are still around a year of Heroku costs vs development costs.

Another thing to factor in is that neither he nor one of his employees is currently using Go or planning to learn it. Extending or fixing something on one of the services would lead to additional costs.

### When I would consider using Go
If I would start from scratch or add a new service to an existing infrastructure - and if more people are working on a project someone beside me is familiar with Go - I would not hesitate using it if I would not need many third party libraries.

## Stop talking about scalability and start thinking about costs
There are some [impressive benchmarks][1] clearly showing what Go is capable of. What some people seem to miss is the fact that more requests per second does not mean it scales better. It just means you can process more requests per second and have to worry about scaling later than sooner.

It is possible that your database will be the bottleneck before you need additional application servers, it could be possible that you will be IO bound but just processing more req/s will not save you from the fact that you need a plan for scaling and in an ideal world a clean codebase enabling you to do so.

What you really should consider, especially if you are just starting with the development of the next world disrupting, society changing, kitten picture sharing service, is the costs associated with developing and running the service. If you cannot afford the server costs all your work, your scaling strategy and everything else is worth nothing.

Most people choose to use Ruby on Rails or Django for a minimal viable product. Fast to develop in, many libraries, cheap contractors, support by many big hosting providers, lots of tutorials,… There are many advantages. But what would you gain if you invest a bit more time in your MVP?

We all know benchmarks suck and we should ignore them but let us assume that Go performs three times better than the same application written in another language. If only half of the benchmarks we have seen are not entirely wrong this should be a safe assumption.

Your typical stack to start with likely looks like this. One server for your app, one for your database. You could put both on the same system but you want to be on the safe side when the millions of cat lovers storm your service. Now someone tells you you should have some backup system if there goes something wrong. You add another app server and a database server. You are successful. More and more users joins your service so you start adding app servers.

This is exactly the moment where it would pay off if you would have invested more time in your MVP. While your typical app can handle 5000 users with one server your Go app now handles 15000. If you are growing fast this can be a lot of money you will safe.

### At least in theory
Please remember I am not telling you to use Go, no matter what. I am not advocating to throw away RoR or Django. I am not even saying that those benchmarks and theoretical numbers can be reached. We just do not have enough data and real wold examples to prove anything.

And while "invest more time" does sound like an okay tradeoff you should remember that Go and its libraries are young. If do not already now what you will be using, maybe played around with it and have a vague idea if you would have to implement fifty percent of the features you expect from your ORM yourself you could have a bad time seeing a competitor releasing "your product" after a night of heavy drinking and writing PHP.

If you are just starting your future career as developer and want to decide which language you should learn I would suggest you go for Ruby or Python. They are both mainstream and if your kitten picture sharing service does not take off you can easily find a job or some freelance work to make some money for your next ground braking idea.

## Conclusion
Go is a solid choice. After getting used to it you can likely write code as fast as in another language, it has a promising community and libraries are slowly maturing. While Go itself is pretty robust and feature complete you will have to invest time and effort if you are planning to use third party libraries.

You can succeed and gain many advantages if you choose Go, you can end up with a horrible mess and hate yourself every day for doing something unbelievable stupid.

You should carefully consider your options and the pros and cons. I am currently happy with Go and I will continue using it when it is appropriate but it is not the last language I will ever use and it is not the right tool for every project.

[1]: http://www.techempower.com/benchmarks/#section=data-r6