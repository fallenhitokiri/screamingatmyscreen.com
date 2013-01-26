title: Meteor Is Just A Toy
date: 2012-04-11  12:00:00
layout: post
tags: ['Meteor', 'JavaScript', 'development', 'node.js']
---
I was always a bit skeptical about [node.js][1]. Using JavaScript for
something else than frontend magic looked insane. Projects building 
awesome products emerged. I still was skeptical. Now they released
[Meteor][2], a framework on top of node.js with even more JavaScript.
<!--MORE-->

And I am skeptical again. Some people, most of them with good
judgement who already proved that they know what it means to write
backends, tweeted that Meteor will be the last bit that was necessary
to make sure JavaScript will win the game. But let us start from the
beginning.

###JavaScript
I use it. It works. That is nearly all I have to say. It looks ugly,
feels wrong but thanks to some third party libraries it is at a point
that I can justify using it.

On the frontend there is just no real alternative. Since most browsers
fully support it, at least if you follow some basic rules, there is no
real reason for not using it.

###Node.js
On the backend it is something different. Much more code and more
complexity. Comparing Ruby or Python to JavaScript is hard since they
have some major differences but a short conclusion: Ruby and Python
are languages I take serious, that have all features that are needed
and that are clear, structured, documented and mature.

I tried node.js. I wrote two applications and I have a basic feeling
how it works and what you can do with it. Language aside, node.js is
not bad. You can do some cool stuff and it looks stable enough. Some
companies even proved that it is production ready.

##Meteor
If you do not know Meteor just watch their presentation. It is build
by people that really know what they are doing so you should take
it serious. I try to simplify it: You write Meteor code, it runs on
top of node.js and you have JavaScript everywhere. If this thought
lets you tremble in fear stop reading this post and ignore everything
that is related to Meteor.

Since it is new and no one has some real experience we should look at
everything we have. I tried those demo applications and looked at
the code but did not write something by myself. The basic trick is that
you get real time, synchronized updates for everyone and everything for
free. I click on a button and you see a counter go up or something is
added to a table.

If you ever wrote something like this by yourself you know how
painful it is and that every bit of code that takes away some work
from you is a present you should accept.

But this is the point where my critique starts. Beside realtime stuff
and integrated deployment tools there is nothing new. If you do not
need this it is likely that you find yourself writing node.js applications.
Another framework, another toolchain, another library just means
another layer of potential problems.

And even if I think their demo is pretty cool: not every application
needs real time communication. Really, even if it is the new joker in
web development bullshit-marketing-bingo you use to win.

Another thing I find a bit troublesome is that they currently expose
the whole database to the frontend. I believe I do not have to say
much more about this, especially after you have read the next point.

There is currently no authorization or authentification system. It
is planed but not implemented. So you basically expose your whole
database to every client without any way to add some security.
Since they already announced that this will change you should not
take this too serious.

And last but not least they are not really near 1.0. And they
announced that the API will change. So you can build an application
that will work with the current version of Meteor. After they release
an update you want or need you likely find yourself rewriting some
parts of your application instead of implementing new features.

##Just A Toy
In its current state Meteor is just a toy. I do not see it being used
in a real world application. Not yet. It lacks some basic functionality
you (IMHO) just need. But when it is mature and fixed most of the stuff
they are already working on we will have to take a serious look for
some projects.

Maybe we will see JavaScript succeed on the server. Maybe node.js will
grow and pull in more developers from Python and Ruby. If JavaScript
succeeds Meteor will likely play a role in it.

[1]: http://www.nodejs.org/
[2]: http://www.meteor.com/
