title: The state of Django and Ruby on Rails - one year later
date: 2013-08-13 19:24:00
layout: post
tags: ["Django", "Ruby on Rails", "development", "Python", "Ruby"]
---
Back in 2012 I wrote a [post][1] why my preferred choice for projects I realize with [Blaze IT][2] is Django and not Ruby on Rails. Since then it got a lot of attention and is still linked in some discussions and tweets today. People asked me for an update and if it is still relevant, so here we go.
<!--MORE-->

Before we start let me clarify two things: 

Both frameworks are a solid choice. If you cite this or my [last post][1] as an "OMG look at these arguments, $foo is clearly superior" source you did not understand the intention and arguments very well. You will get stuff done with both frameworks and your app will be fully functional and working. The choice is basically arguing on a pretty high level of comfort and the differences are pretty small (but still existing) - so one framework can beat the other in certain circumstances. It is a situational and personal decision, not an universal truth.

A framework will not magically fix your existing project or build your app for you. It is one potential tool in your toolbox. If you are only building an API for a mobile app it can be a viable choice to skip the overhead of Django and RoR and just go for [Flask][3] or [Sinatra][4]. A framework is no magic. Well, RoR kind of is, but not the way you imagine.

Let us start going through the points we already discussed and add some new ones at the end of the list.

### Object Relational Mapper and migrations
While RoR had this integrated for many years, Django will now get a full integration of South thanks to a kickstarter campaign. This will not only remove the necessity for a third party library but will also see a lot of improvements.

If you want to stay up to date with the development I suggest you start reading Andrew Godwins [blog][5].

With those fixes and improvements it is a clear tie between the frameworks. Even if it is not integrated yet it will be there and depending on when your project starts it could be possible that you will already be able to use it.

### IDE
Last year there were better IDEs available for Ruby than for Python. JetBrain, those who build a great Ruby IDE, also have [PyCharm][6] which became better and better. Beside PyCharm many community driven projects emerged and are in a state between beta and "people use it to get stuff done".

I still prefer an editor with some convenient features on top but if you refuse to work on a codebase without an IDE you will likely be satisfied with options for both languages.

### Admin Interface
Yes Django ships an admin interface and I told you it is okay to use it. This still stands. But it is not as unique as people believe. There are gems for RoR which provide the same functionality with the same comfort. It is not an unique feature.

Another thing I see discussed often is people using is extensively for everything and everyone. If you build a customer facing project you will have to build a new interface. There is no way around this. The existing interfaces are great if you know the app and do some maintenance but you do not want to expose them to users.

The lack of comfort, a clear workflow and the security implications are more than enough reasons that you invest some time into building something your users will love.

### Deployment
There are now enough options for both languages and frameworks to save you the pain of running your own server. And if you prefer to do it anyway you will find enough tools to make it dead simple and comfortable. You will not gain any major advantages choosing one framework over another.

### Hiring
More and more popular projects and start-ups use Django, like Pinterest and Instagram (just to name two of the biggest). Many developers started considering Django as a viable option building something. RoR still outperforms Django in the number of available jobs and talented devs though.

### Community
I do not believe there is one month without a Ruby or Rails conference and most of them provide videos, slides and a lot of exposure for both, the language / framework and the speakers.

I have not seen the same for Python or Django. Of course there are conferences and great speakers but the hype around it and the exposure are by far not on the same level.

## New and noteworthy
There are four things I did not talk about the last time but I received a lot of questions about those, thanks to recent incidents, events and blog posts.

Before we dive right in just the reminder, again, that both frameworks are nearly equal in both aspects, the statements are not true for every situation and you can shoot yourself in the foot with both of them - as you can with nearly anything.

### Updates
Updating from one release to another is always troublesome. Both frameworks provide a documentation and tell you what is deprecated and what will be deprecated in a future release. If you do not read those announcements you cannot blame the framework.

According to my experience updating some bigger applications in both, Django and RoR, the last year, Django and Python are a lot less painful to update.

The biggest pain does not even come from the frameworks. Of course sometimes you have to adjust to some changes, likely a bit more often in Rails - but the last year is not fair for a comparison. Rails made the step from 3.x to 4. That's a major release while Django only saw a minor release update.

Here is a typical scenario what can happen with a Ruby project:
You run Ruby 1.93-p123. Your hosting provider only supports Ruby 1.02-p134 which is not compatible with Rails. So you change your hosting provider. Now you have a library which does not work with Ruby 1.93-p123 but only with 1.93-p122. It was not updated and used some obscure feature, you do not know if it will ever see an update. You start looking for alternatives and writing your own.

Some Ruby libraries which are quite popular come right from what I call "version ghetto".

Chances are high you will not encounter those problems if you start working on your app. But if it grows, if your start-up grows and if time passes chances are higher that you will see them a lot more often than a Python shop. It seems to get better.

This does not mean this cannot happen if you use Python. The adoption and support for Python 3 is a good example. And Python is not without its own flaws, making updates hard. The first time you see error messages because some encoding broke you will know what I mean.

### Security
The last year we have seen many security incidents targeting the most basic things, proving default configurations as broken and showing how easy some apps can be attacked.

Breaking news: Every framework providing authorization, authentication, sessions,… you name it - is vulnerable and will screw up at some point.

But what we can also see is that RoR incidents are a lot more discussed and that the community comes up with fixes and work-arounds until the problem is officially fixed a bit faster and with more exposure.

If you use md5 to store passwords, do not sign cookies, do not restrict access to your administration interface and believe SQLinjections are some kind of story told by old people to scare young and hip developers you are likely the reason for one of the next discussions on HackerNews why people still do not understand the basics of web development, no matter which framework you use.

### Performance
This is a pretty short point and I will not discuss it any further than posting [this link to TechEmpower][7]. Search HN for discussion, look at the benchmark and understand them. Far better than anything I could write here right now.

### Growing with services
One thing which is discussed often today is a service oriented architecture. You basically take parts of your application, put them in its own application and run them on another system so you can scale them easier.

You are able to do it with both frameworks but you likely won't. Most of the time they provide a bigger overhead than using Flask or Sinatra or going even more low level.

With a SOA you are basically free to use whatever you want and what works for the service you are building, you can even combine RoR and Django for one project - even if I would suggest  you stay with one language till you really need more performance or a certain feature that the language can deliver.

A small difference in the Rails and Django approach is something we should keep in mind. A typical RoR workflow, especially for people just starting out and not as experienced with the framework or web app development in general:

You need a model? `rails generate model foo …`. Need a controller? `rails generate controller bar`. And you just continue creating new models and controllers till you wake up one day and see an app with 60 models, 80 controllers and the challenge to break out a certain functionality.

Do not be fooled, you can do the same thing in Django. But if you stick to the idea keeping as much of your project in small, easily exchangeable apps you could just take an app, move it in a new Django project on another server. This will not solve your scalability problems, this is not best practice and this should not be the default way doing things but you can do it if you really need to buy some time.

## One year later…
I still prefer Django. My main reason is still Python. I worked with both languages and frameworks the last year and I shipped projects in both of them. Give both of them a try and see what fits you better. Discussing the benefits and problems is like deciding if you take the Mercedes or BMW to drive your kids to school.

[1]: http://www.screamingatmyscreen.com/2012/2/business-decision-why-i-use-django-and-not-ruby-on-rails/
[2]: http://www.blazeit.de
[3]: http://flask.pocoo.org/
[4]: http://www.sinatrarb.com
[5]: http://www.aeracode.org
[6]: http://www.jetbrains.com/pycharm/
[7]: http://www.techempower.com/benchmarks/#section=data-r6&hw=i7&test=db&l=4qo&p=2hwd2&w=1g&c=1&d=6&a=1&f=so-0-0