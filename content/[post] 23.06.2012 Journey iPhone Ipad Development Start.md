title: My Journey - iOS Development
date: 2012-06-23 12:00:00
layout: post
---
I love learning new things. One of the most obvious and also a
long time member on my "do it,… just do it already" list is iOS
development. Every time I want to learn something new I browse
the web and try to find a way that fits my work / learning flow.
But iOS resources seem to be rare and not always up to date. So
I decided that it would be a good idea to blog about my journey
becoming an iOS developer.
<!--MORE-->

Before I start with all the little details I should say that I
know and worked with C++ for some years. I believe it was back
in 1996 or 97. Back then Borland C++ Builder was one of the best
products (at least for me) to build graphical applications for
Windows. A great and useful debugger was included and after I
started working on a bigger project I understood why everyone
was always telling me that a debugger more important than an
IDE.

I believe it was around 2000 when my focus shifted. I was bored
developing graphical applications or low level stuff in C++. I
did not really like the language, I did not have any interesting
projects and I just have not seen a point in focusing on it.
After a short brain storming what I could do I came to the 
conclusion that it was time to use Perl for more than scripts
that solve boring administrative tasks. I once have written a
tournament planing system for one of our LAN parties so I knew
the capabilities. I started working on smaller web project.

There is no way to give you a 100% correct year but according
to people that knew me back in 2006 and sometimes visited me
I believe it was around Christmas when I started switching to
Python and Django. I was still doing web projects, declaring
Internet Explorer users as the most stupid people I have ever
met (disclaimer: those who knew it sucked but used it anyway
because "it was just there") and wasted hours and hours
figuring out this damn response object.

I was sold on web development. Today it pays my bills. iOS
and mobile applications are important and will not just die,
no matter what some people blog. Looking at the requests I
receive there is, especially in the enterprise market, a
great chance to get new customers. Since quality matters and
I refuse to deliver something else there are currently only
two options for my company.

  1. learn how to write quality software for iOS
  2. outsourcing

I will not elaborate number two, since this is stuff for another
post in my awesome "Let us talk business" series that is
currently changing lives, saving kittens and,… okay I will stop
here.

## How To Start Learning Objective-C and Cocoa (Touch)
The most confusing point was that I am not working with a 
scripting language anymore. I nearly forgot the pain of 
compiling before checking if everything works. Thanks to
modern systems it is better than 199x when you could get
a coffee and cure cancer while waiting for your application
that used more templates than a web project to finish
compiling.

After browsing the web I decided that the easiest way and
a new way of learning I wanted to try would be iTunes U.
A short search and I found "CS193P: iPad and iPhone App
Development (Fall 2011)" provided by Stanford. Fall 2011
is a good starting point since they already cover iOS5
with all those shiny new features that do not force you
to care about memory management and make it a lot easier
to shoot yourself in the foot.

Since I prefer reading I came up with a backup solution
and obtained a copy of "Einstieg in Objective-C 2.0 und Cocoa -
2009" published by Galileo Verlag. 2009 is the keyword. They
should show how memory management works and it should make it
easier porting my applications to iOS4 so I can cover more
potential users. I hope that this will not be necessary since
automatic reference counting sounds awesome - if it works as
promised.

I watched the first lesson and thought "okay - pretty strange
syntax" but this model - view - controller stuff sounds somehow
familiar. Before I continued to the second one I also watched
the "debugger special". While watching the second lesson I
coded the project that was shown and sometimes had to count
all those bracers. I am just not used to so much overhead. But
it makes sense so I will not complain. The elegance of Python
is still not even nearly reached. I am also not sure if the
dot notation makes more sense than bracers but I will just
stick with it.

After the second session I worked on the first assignment. And
there I have seen what I was looking for. How powerful Xcode is
in reality. I love it. Beside all those important features like
["look up this function name as Twitter user name"][1] I can only
say so much till now: the integrated documentation rocks. If you
understood how you send messages to objects and classes you do
not need to browse the documentation outside of Xcode. Just type
your object or class name and you will see everything you need.

I still consider Objective-C ugly and I am still not sure how
much I hate the way you pass arguments to methods (only talking
about the notation) but I think I can handle it.

This post was primarily meant as an introduction. More detailed
posts will follow but I should first get some stuff done before
I give you some hints. If you are planning on watching the 
Stanford videos to learn iOS development I hope you have some
C(++) background. If not you will maybe just feel lost. In the
first four videos are a lot references to C(++) you just will 
not get and that are necessary to understand what the tutor is 
talking about.

[1]: https://www.evernote.com/shard/s7/sh/9f608358-317b-46d5-85a4-9ca8f9e8c6b5/cebff9b2a57c7b1f906a422bce24fc9e