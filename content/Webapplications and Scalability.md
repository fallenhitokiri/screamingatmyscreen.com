title: My Stack Is Bigger Than Yours - Ranting About Web Applications And Scalability
date: 2012-09-09 12:00:00
layout: post
tags: ['development', 'scalability', 'deployment']
---
Building a web application is serious business. Reading start up blogs, High Scalability or other sites you see many different tools, opinions how stuff should be designed and build, how you should deploy everything and of course even more opinions why this particular stack is superior to everything else. Sadly people who read this believe they have to do the same things and use as many tools as everyone else does.
<!--MORE-->

Let me give you an example. I build [Zenbo][1] and I am currently using it for two clients. They both want a contact form and one of them also wants a form for his job page so people can submit an application. I was aware that this would eventually happen when I was writing Zenbo and I also had a plan for this situation: Writing a backend service. Use Ajax to send the form to it and store it. Send users a mail that there is a new message and add a web interface so they can check it and mark it as 'read'.

This is the trivial version which covers the immediate needs. There are some plans for extending it, but they will need some time and will likely be finished at the end of the year.

The basic plan is using Zenbo for as much projects as possible and provide a solid hosting service. Scaling is easy, sites can look the way my clients and I want them to look and with some backend power there is not drawback. So it could be possible that I will have to add more features and face some serious traffic.

### How To Solve This The Start Up Way

If I build dynamic sites I use Django. But my backend is more of a service and an API. Naturally Flask came to my mind. If you do not know why I suggest you take a look at Kenneth Reitz - "Why Django sucks". But I could also think of Ruby On Rails which is, in my humble opinion, a good framework for fast and basic REST and CRUD.

I thought about joining all fields, storing them in one key and let the frontend handle the presentation. There is no need for indexing and searching, so it does not hurt. A key (client specific) with a value (form data) are the easiest way to use the same backend for all clients. If I think of key value storage I think of Redis. Adding store to PostgreSQL could also work.

Sending EMails? Just add a job to Celery. A queue systems and some worker scripts should be fine.

Webinterface? Well, it could be great to build a single page application so it feels responsive and improves the user experience. Node.js is the new black for SPAs. 

Deployment? As much as I love Fabric, Chef seems to do a better job. Not sure about that, but most start ups seem to choose Chef over Fabric and they are all pretty smart - so they should know what they are doing, right?

So what do we have so far? 

Programming/Scripting languages:

- Python
- Ruby
- JavaScript

Frameworks, applications and tools:

- Zenbo
- Flask
- Node.js
- Celery
- Chef
- Redis

We use the best tools and best frameworks for every part of the system. This is great, right?

### How To Solve It In A Sane Way
Write a freaking Django application. Use the tools you know are often suggested and most of the time sufficient. It is easy to learn most of the tools I mentioned, especially since I know most of the stuff already and would only need to look up some stuff I do not have present in my mind.

Add the application to ```/backend``` and post your data. Store it in a PostgreSQL database with three fields. Id, key, value. Create a web interface. If a user logs in query the database, read all entries where ```key``` matches the user key and show the values in a nice way.

### The Big Difference
While installing everything I mentioned in the "start up stack" I created the basic application mentioned in the "sane stack". Does this mean that the start up stack is stupid or that they are doing it all wrong? Well... no.

Most of them have to handle a different load than I will face in the first few months. And I would not buy an additional server when I encounter the first load problems. I am aware of the possibilities and I can easily separate the backend from the frontend, add a task queue or improve the user experience for big data sets.

Until this happens I do not waste time developing and creating things I may never need. I do not waste time maintaining a stack of frameworks and languages I currently do not need. I keep it small and easy until I need it. But I consider the possibilities and try to make sure I can easily add the option to scale.

Why do I not just create a Django or Flask application for each client? Because using Zenbo, I can just host more small sites on one server. I can keep the hosting and administration costs low. Everyone wins.

### Why Do I Rant About This?
I have recently talked to some friends who work on their first product and start up. And they fall into the big "everyone is doing it"-trap. Just because other start ups use something does not mean you have to, even if their arguments make sense. They have different needs, they have different engineers, they have different use cases.

The best advices I could give them were

- keep your stack as small as possible
- always keep scaling in mind
- only scale when you need it
- use what you know
- "it works" is good enough most of the time

This will not work for everyone, though. Look at App.net for example: They knew that they will face a certain load. It would have made no sense to deliver fast and ignore scaling. The whole business model is build around the fact that they have to grow as fast as possible, which means scaling.

[1]: http://www.hopelesscom.de/2012/8/14/the_road_to_zenbo_1_0.html
