title: Code Challenge - The Ideas
date: 2012-04-20 12:00:00
layout: post
---
If you read the [post][1] about "code challenge" you know what I am talking about. If you
did not, you should now. I thought about the challenge and what I could learn and
write. It is possible that I do not really follow the [idea][2] but it should be fine.
<!--MORE-->

Even if it is basically about learning something new just for the sake of learning I
refuse to build useless things. So it will not just be a to-do list app. Also I have
some ideas I was thinking about the last few weeks and did not find the opportunity to
fully evaluate existing solutions. Maybe I will also skip the "simple" part.

Let me give you a short idea what I might build in the next few weeks.

### Task Queue
I need a simple task queue. Existing solutions look full featured with a lot of stuff
and administration overhead I do not need and want. It does not have to be high
performance or scale across thousands of servers, at least not now :>

The implementation could be really simple. Accept socket requests - yes, there is a 
reason why I want to use sockets instead of other protocol - add stuff to a queue and
run the queue based on priority and waiting time.

There program will not be bound to a specific task. Instead it will just run scripts
and pass arguments. This way it will be flexible enough to be used in many different
applications / stacks / setups.

### Multi Server Management
This could be the bigger challenge. Creating a application that lets you run remote
commands (using ssh) on many servers. But instead of just running them on a set of
servers you could predefine them in lists.

You could create a list for one client or for one task. Imagine you have three clients. 
Each of them has one Django application server, each of them has a PostgreSQL server, 
two of them have a mail server.

Now you create lists for all Django, database and mail servers and one for every client
and add functions describing what commands you want to run.

If you want to update all servers you just run ```app all update``. If you want to get
statistics how your database servers perform you run ```app database status```. 

Pretty easy and I believe it is possible with existing tools. Not sure if I should go for
this one or the task queue.

### Language
Implementing both ideas in Python would be easy (read: make the app do what I have in my 
mind) - this means that I already have a basic idea how I will design those applications.

The last time I used Ruby was the time Rails 2 was new, hot stuff. So I basically have to
learn the language again. Should be done in one or two days and after that the hacking
can begin.

On the other hand I was looking for a reason to play around with node.js. I do not really
like JavaScript as a language, but I see the strengths in node.js. It does not matter if I
learn a framework or get used to Ruby - it should take the same amount of time.

It is possible that I will use what I write. In a normal situation I would go for Python,
especially since I do not like mixed language projects or stacks. I know I cannot
prevent it but I can try to use as less languages / frameworks as possible as long as it 
is viable. 

Using Ruby would mean using a well established language that proved what it
can do. 

Using node.js would mean using a new language that could just blow up and
everything would be gone. But node.js is new, it is interesting and it is currently
showing that it can work.

I am not really sure which I will pick. But as always I will keep you updated.

[1]: http://www.hopelesscom.de/2012/4/16/code_challenge_-_the_challenge.html
[2]: http://fredboyle.com/codechallenge/