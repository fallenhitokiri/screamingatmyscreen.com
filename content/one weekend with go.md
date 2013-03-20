title: One Weekend With Go
date: 2013-03-20 23:07:00
layout: post
tags: [Go, Python, Ruby, deployment]
---
After reading many positive things about the Go language I decided to give it a try. I spent one weekend reading about the basics, some more detailed stuff I am especially interested in and worked my way through the first examples and some tutorials. I have to admit I am a bit torn between "wow, great language" and "meh, not sure if I like it".
<!--MORE-->

These days I primarily do two things. Writing backend code in Python, most of the time using Django and Flask, or developing iOS applications with Objective-C and Xcode. After I read about Go I was not sure if I should be interested. It is developed by some highly respected people, sponsored by one of the biggest companies and praised for many different things. I am happy with my current tools and languages. Being a bit curious, I could not resist. Even if I would not use it for anything, learning something new, even if only the basics to be able to read some code, can always be handy.

There are several things I expect from any language I use. Most of the time I am free to decide what works best for a given project and just use it, so there have to be use cases where Go shines to be considered an option in my toolbox.

## Editors and IDEs
I have to admit I am one of those people who love Xcode. It is not the best IDE, it does not have the most features, it is not the fastest one and it has some flaws. But for me it is a great package and works fine. For Java I preferred NetBeans. I am not sure how good it performs today, since the last time I wrote Java was around 2004. 

I do not need an IDE. But if I use an editor I want some basic stuff like code intel that actually works and working auto indent. If you believe this is always given you never tried Textmate 2. I will not discuss the IDEs and editors, so a quick conclusion: SublimeText 2 and vim work great. For bigger projects I would still prefer an IDE with some refactoring magic. I was not able to find one I actually like.

## Some basics about the language
I want to work with a clean, easy to read and write, language, with stable 3rd party libraries and a complete toolchain. Most topics people see as a reason for holy crusades like statically typed vs dynamically typed languages do not matter for me. I have my preferences and I know how to take advantage of both of them and how to navigate around the consequences.

### Syntax
Every time I learn a new language the first thing I look at is some source code. After spending too much time with Perl I developed a pretty strong feeling towards languages which are easy to read. Python is basically what I love. A clear style guide, most of the time one obvious way to do something and no unnecessary clutter.

Go is not bad. But it is also not Python. You have mustaches, stars for your pointers and some stuff which just looks plainly wrong at the beginning but which makes a lot of sense if you understand what actually happens. I would say it is okay. Not the most elegant language but still okay to work with.

### Statically vs dynamically typed
I have to admit I prefer statically typed languages. Catching obvious error at compile time saves me a lot of trouble, testing and doing the same things over and over again. Go is statically typed. For me this is a point on the plus site.

If you believe in dynamically typed languages and feel like someone smashed your kneecaps if you are forced to use something else Go is likely not for you.

### Style guides and folder structures
Go has a nice, little tool which formats you code according to some best practices and style guides. I do not agree with every style decision as I do not agree with everything in PEP8. Even if you do not use it (you should!), if you want to read some source code which just looks plain ugly and nearly unreadable, a nicer version is one command, ```go fmt```, away.

The folder structure first looks a bit confusing and unnecessary bloated, but after some time, fetching packages, cross compiling, etc. I slowly understand why they suggest the this particular structure. As with code style, you are free to disagree and use something else.

The fact that I can use something the authors of the language do not prefer is a big plus point. Sometimes there are reasons to break with the style guides or best practices. Never less I believe in sticking to officially declared best practices as often as possible. It helps contributors a lot if they do not have to learn one new coding standard for every project they start working on.

### Tools, tools and more tools
You get many handy tools out of the box. Maybe some descriptions are not the most accurate, but it should be enough to give you an idea what is included.

```get``` downloads packages and projects, ```fmt``` formats your code according to the official style guide, ```fix``` to make sure your programs and libraries are compatible with new versions and ```doc``` giving you, most of the time, many handy informations about packages and functions. Just to name some of them.

### Not as object oriented as you might think
In Go you have structs and functions. Something which looks like a class and something which looks like inheritance. Do not let it fool you, even if it looks this way, it is not.

What I found refreshing, to my own surprise, is how clear and easy it looks if you just define a struct and some functions which belong to it. It does not make such a big difference to defining a class and adding methods, but every time I write one or look at one I got this "this is just clear and so right" feeling.

I will not explain the whole concept. There are many good posts pointing out the differences and if you are interested in the language you will find the documentation containing the informations pretty quickly and early.

## The good parts
There are several things I like and one special thing I just love. And this is not exaggerated. It was one of the reasons why I was interested in Go. There are, as in most languages, some parts that just feel right and after using and understanding them you have to think "why did no one else do this?!".

### Cross compilation
I currently develop on an MacBook running OSX 10.7.5. My servers either run Debian/Ubuntu or FreeBSD. Every time I add a new VM, jail or maybe a server for a client project I setup nginx or lighttpd, sometimes a database, some kind of key value store and so on. To deploy a web application written in Python and Django I setup an virtualenv, install build tools, install dependencies and libraries and upload the project.

Do you know what is really fun? If you run apt-get update; apt-get upgrade and your virtualenv dies because someone screwed up (I am looking at you Ubuntu).

Something works fine on your local system and breaks while on the testing system or even worse in production because a library could not be updated or is installed in a slightly different version or compiled with other parameters? This should not happen, especially not from testing to production, but you have to take care of it.

And here comes Go. I wrote a small web and socket server to test some things, compiled it for Windows, copied it to my significant others gaming systems and it just worked. Without installing Go or libraries and anything else. It just worked.

For me, this is refreshing. If it compiles and works just copy the binary and you are done. No pip and bundler, no rvm and virtualenv, no version checking. One binary.

### Standard library
I believe there is not much you will miss. HTML templating, networking, IO, you name it and it is likely there. I believe you can crunch numbers, write web applications and do mostly everything that comes to your mind with the standard library. I do not use Go long enough to validate this point or point out the differences between Go and Python, but from a quick look it is pretty complete.

### Concurrency
I wrote stuff with gevent, twisted and Node.js. I have been in callback hell. I have worked with threads in Java and C++. From what I have seen channels and go routines are by far the most easy to use implementation to let stuff happen simultaneously.

It does not make your code ugly or forces you into a code style you never had or have to use for anything else. 

### Performance
From some quick and dirty tests Go is fast. I will not make any comparisons. I have no scientifically acquired numbers and I have no real tests or highly optimized code. I did a quick implementation of a service in Go which mimics an existing service running in production using twisted. It seems to be faster. Before I have "real numbers" I will not say anything else about performance. There are already too many false claims and useless charts, I do not have to contribute to this waste of bandwidth.

As a side note: Compilation time is also pretty good.

## The bad parts
Not everything is great. There are, as most of the time, some dark corners or things you would like to be different. Go is one of the youngest languages used in production I know of. Everything needs some time, so some of the next points should not be considered too bad. They can changed.

### Libraries
Let us say you want to write a web application but you do not want to invent everything from ORM to templating yourself. I believe everyones standard reaction is to look for a web framework. Django, Flask, Ruby on Rails and Sinatra are well known frameworks and for most of us one of them is the first package to install if we talk about developing a web application.

Searching for web frameworks for Go is a bit like looking at a drawing book of a 6 year old. On the first five pages you think he understood which color he should use for human skin and on the sixth page he draws a blue women. On page 8 he just does not draw hands anymore. 

What Go currently completely misses are GUI libraries.

Many libraries are pretty young, sometimes incomplete and not always as stable as you would like them to be. Sometimes it depends on how you use them. The PostgreSQL library worked perfectly fine in my test, other people have problems if they connect regularly for availability checks. If you use Python on a regular basis you are spoiled and will likely be a bit disappointed.

### Pointers
I just admit it. I prefer pass by reference. It is possible, but it is ugly and I believe most people will consider it bad practice. I am not fully decided on this one, yet.

### Error handling and exceptions
There are no exceptions. Handling every possible error, sometimes with multiple return values, is a bit painful and troublesome. I would really prefer another approach on this one. Of course, this is a personal preference but every second line being an ```if (err != nil)``` is not just ugly and far from elegant but also a lot of work for something that could be a lot simpler.

### Named arguments
There is no such thing. You can, as you can in Ruby for example, work around this limitation but in my humble opinion this is a dirty way of doing it. An editor or IDE with some sense shows you what a function expects. This makes it bearable but I would still prefer support for named arguments.

### The name is just stupid
While I do not believe "Go" was a good choice I do not believe it was easier to find something about the programming language one year after Python or Ruby were released.

Time will show if the name becomes "okay" or if we just have to continue searching for "golang".

## Community and adoption
Nearly every time I searched for some informations the mailing list came up as the top result. What you rarely see is someone blogging about Go beyond the initial "I used Go for x weeks, this is what I think" post.

One of the reasons why I did not mention any libraries or how cross compilation and deployment could look like is because I plan to write separate posts. The other reason is that this post is longer than expected and I did not want to include anything moving too far away from my first impressions.

I hope, as the language becomes more mature, the community will grow to a degree comparable with Python, Ruby and Node.js. In the last few months I have read many blog posts from companies migrating existing solutions to Go. This will definitely help.

## Conclusion
There is much more about the language than I just talked about but I hope I gave an idea what you can expect from Go. Even if you do not use it right away it can become relevant pretty quickly for the stated reasons.

I am currently working on replacing a Python based service with one written in Go. After the first deployment I can give you more useful informations, but currently my suggestion is that you take a look at Go. I will blog about it, of course. The next posts will be about web frameworks and cross compilation, maybe possible deployment scenarios included.