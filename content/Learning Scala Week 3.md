title: "Learning Scala - Week 3: Webdevelopment"
date: 2013-10-06 19:25:00
layout: post
tags: ["Scala", "development"]
---
Another week with Scala. After ditching the Coursera course I just started working a bit with the language and building some smaller applications. I looked at Scalatra and Play, deployed a test application and finally uninstalled Eclipse. Let us talk about web applications.
<!--MORE-->

Naturally I am most interested in anything web related. It is my job, I enjoy doing it and it is the area where I am most likely to use a new programming language, framework or technology. So how does Scala compare to what I am currently using - Django, Node.js and Golang?

Deploying Scala is pretty easy. Just throw it at a servlet container or embed Jetty and start your war file using `java`. Pretty simple. Compiled, one file, all the joy of Golang - a pleasure compared to Django - with more and better third party libraries than Go but not with the same development speed. This is highly unscientific and only based on my experience but compared to Golang the learning curve feels a lot steeper and I have to open the API reference or Google more often.

I did not run any benchmarks and if I did, we all know they would likely be wrong. If we stick with [TechEmpower][1] for framework and performance comparisons we can say that Scala and Go are, especially using a framework, both a solid choice if you need to write performant services. But judging from the adoption of Scala it will likely be a lot easier to find developers who already have experience deploying Scala applications to production and knowing how the language and tools behave if you throw more than 5 requests / second at it.

As some of you could know, I am a fan of Golang. But if you are operating on a tight deadline, have a team who has to work on the codebase and if the Go standard library is not enough to get the job done I would currently suggest you take a look at Scala. Compared to Go it is ready for its prime time. Libraries are just more stable, tested and well maintained, often thanks to the fact that you can "just" use a Java library. I know, bad practice and stuff, but sometimes shipping is more important than writing yet another ORM.

[1]: http://www.techempower.com/benchmarks/#section=data-r6&hw=i7&test=db&f=2niog-8vn0g0-0