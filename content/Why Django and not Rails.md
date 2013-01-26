title: Business Decision - Why I use Django and not Ruby On Rails
date: 2012-02-19 12:00:00
layout: post
tags: ['Django', 'Ruby on Rails', 'development', 'Python', 'Ruby']
---
My [company][1] is currently working on some websites for a business client.
I will not go into details now. There is nothing I could just use or alter
to achieve everything they want. So I have to develop a custom solution.
Before I started I was looking at the options I got and there were only two
I really considered. [Django][2] and [Ruby On Rails][3]. Why did I choose to
go with Django and not RoR? Let me give you some thoughts.
<!--MORE-->

Before I start with the main reasons for the decision let me just make one
thing clear. I am 100% sure that I could have implemented the websites in
both frameworks in about the same time. I am also sure that the expansions
we are currently planning would have been possible in both frameworks and that
the initial development and hosting costs would have been the same. So why
was there a reason to choose "a" over "b"?

##Frameworks
Django and Ruby On Rails are just frameworks. They roughly provide the same
features and have shortcomings. No matter how much you love your framework
you will always find something the other is doing better. But since
they are just frameworks there is something else you should consider. The
language underneath.

###Other Frameworks
I know that there are many frameworks out there. But they are neither as
complete as those two nor are they as feature rich. There are times when the 
flexibility they give you is an advantage, most of the time they just make your
work more complicated.

###Language
There are some differences between Python and Ruby and I believe you
already know them. Just for the occasional reader doing some research a
short recap.

In Python there is only one way doing things. There are guidelines how to
write and format your code and there is, well most of the time, a clean
structure in your code, no matter what you do. Python follows the old
principle "code is much more read then written".

If you choose to work with Ruby there will happen three things. You will
get a feeling most of us had back in 199x when we broke our fingers trying
to input all those fancy characters Perl required us to write. You will
read a lot of stuff about coding styles and you will see them raped in every
dark corner where someone publishes a piece of code. And last but most
important: You will finally believe in magic. There are many things just
happening or possible you cannot even imagine. The most abstract constructions
just work somehow.

###Third Party Libraries
Some of you know what I am thinking of 3rd party libraries. You will use them
and you will have problems. But my experience is that Python libraries tend
to be more powerful or mature. It might be possible that there are some
exceptions. I do not claim to know them all.

###Little Helpers
There are some tools that will make your life easier. They will help you
maintain and deploy your code. If you take some time to learn them they will
return it in saving you many hours. Precious hours you can use to chill with your
friends, have fun with your girl or make more money. 

Most Python evangelists will hate me for this sentence but nearly every cool
tool is written in Ruby. If you look at the alternatives they are there. And
they work. But compared to the original one they just suck. Sadly most of them
only support Ruby.

Let us call this a draw. If you prefer one language over another you know what
framework you will be using. If you do not care and see advantages in both of
them it gets really interesting.

##Django - Tuxedo And A Top Hat
I think the best description is on the front page. 

  The Webframework for perfectionists with deadlines

There is nearly nothing I can add. If you just have to get it done and if it is
in the capabilities of Django you are blazing fast. And you cannot produce
something that is unmaintainable. You have all the cool stuff like helpers, a
working ORM, a great admin interface and more.

###Object-relational Mapper
If you hate SQL, and let us be honest, every sane person does, you love an ORM.
Thanks to Djangos default implementation you write your database as Python class
and query it using Python. You do not have to write one line SQL by yourself.

If you try to do something that is not in line with the ORM you are screwed.
No matter how much you love it - better hope that there is the ability to do
what you want or you have a problem.

The good news are that they are working on it. Since 0.96 when I started using
Django, before you had to use the SVN version, they have come a long way and
slowly they try to solve the problems we had for years. Existing database models.
Anyone?

The sad part is that you still need a third party library for migrations. I
suggest you take a look at [South][4]. It works out of the box and I never had a
major problem with it.

###Admin Interface
If you are taking care of the website or your client does not matter. You need a
way to manage all the content. If you do not have to write it you save time. It
is powerful, customizable and I think in most cases there is no need for something
else. If it saves you time and work and if it is working it is good.

###Community And Known Projects
There is a reason why I said grey suit and top hat. One of the front page examples
is the [Washington Post][5]. I think I have read about some gaming sites and 
[Curse][6] being the largest that also use it.

And here is the main point of this topic. Django is used by many people. Most of the
time just not spectacular. It is used by regular people to power some sites. There
is nothing fancy about it. It is just a tool in a tool chain to build stuff. Most
of the time you only read a short and boring note about it.

##Ruby On Rails - Get Your Hawaii Shirt And A Joint
The main reason so many people love RoR is "convention over configuration". Stuff
just works. You write one line of code and you do so much things you do not even
know about. And that is the point where RoR can get a pain in the ass. If something
does not work you sometimes have a really hard time to even find the place where
it fails miserably. Sometimes you have to look behind the magic and at this point
you realize that the cute girl that was just cut in half has something between her
legs you did not want to know.

###Migrations Are Great
I think RoR was the first project that did migrations right. And they are way ahead
of their competitors. At least the last time I checked. Maybe they caught up, maybe
they are better in some scenarios but most of the time migrations done by RoR are
just awesome.

###IDEs - If You Like Them You Win
If you like IDEs go with RoR. There are so many of them and most just rock. 
They help you developing and deploying your applications, at least to a certain 
point. They match perfectly and "just work". And I currently did not see an 
alternative for Django that works as good as [RubyMine][7] or [RadRails][8].

I do not really like IDEs but after I worked with RubyMine for some days I have
to admit that I would buy it if I would be using RoR on a regular basis. Or to
be more precise: I would at least consider it.

###Deployment
Please, do not get me started. There are so many ways to deploy RoR you cannot
really count them. If you are looking for easy deployment go with RoR. There are
a lot of tools, tutorials, they just cover nearly every insane deployment
scenario you can imagine. 

###Community And Known Projects
Looking at those fancy startups they all seem to prefer RoR. They tell you
how great it is, why their product is only possible because RoR and other
cool tools and that they all love everything about their setup. They are young,
they run startups and they are hipsters. This is the current, for me and some
people I talked to, picture of the typical RoR user.

If you are looking for a solution you find at least 20 ways doing it. Not one
way from 2003 (that shockingly still works). You can choose how to work and 
how to solve problems. You can build up some debt and just clue everything 
together to fix it later or just make sure that your code is beautiful and
elegant from the beginning. I believe this is the reason why so many
startups choose RoR. Clue everything together, release a product, survive till
you get some money and start paying your debt. In the most critical timeframe,
when you have no money, no product and when you need both of them, RoR helps
you to get stuff done.

##Make Up Your Mind
The basic decision you have to make, from a technical point, is what your
priorities are. Do you want a fast release? Do you prefer an easy to understand
system? Do you want to play with all the cool kids or with the boring dudes in
their offices? Can you build up debt?

  Short sidenote. The coolness and community factor is IMHO not tied to
  Django and Ruby on Rails. The same applies to Python and Ruby.

The first thing you have to do when choosing your framework is to make sure it
fits your project and workflow. I plan my projects and deliver in time. I consider
problems and add some time before I send the client my quote. I deliver when the 
product is ready not while I am working on it. I can afford using Django. 
This is the most important thing in the process of evaluating the right framework. 
But there are other things.

###Sometimes You Need Additional People For Your Project
If I have a project that has to be done in a short timeframe, if I have more than
one project in a certain period of time or if I just have other reasons why I
cannot work on it myself I need to hire someone. 

I believe that you can get competent developers for both frameworks. You may have
a better chance to find someone that already worked with RoR than Django but you
will also find many people that can learn Django in a short amount of time that you
can sometimes afford.

If I work with other people I end up having to maintain the code of all of them.
So preferably I can easily read and understand the code and if I have an additional
wish I do not have to solve a rubik cube to understand the magic.

###Deployment
I do not deploy really often. When the system is working there is nearly no reason 
to touch it beside the usual updates or additions. If I would have to, or would have an
advantage if I did, deploy several times a week or even a day I would consider this
point. But it is not necessary, so one of RoR biggest advantages are just gone.

I do not think there are really big differences beside the tools. When you have
everything on your server the setups are done in a few minutes.

###Decision
I went for Django. I prefer solid products that are easy to maintain. I do not say
that you cannot get this with Ruby on Rails but it will be a lot harder. If I would
be in another situation it could be that I would have gone for RoR.

Beside that one project my company will focus on delivering stunning web applications
and systems build on Django - at least if it fits the client. In my humble opinion
there are many reasons and advantages in using Django. If you or your company stands
before the same decision make up your mind what you are doing. There are strong
arguments for both frameworks but I believe that it depends on your project, even if
you have the impression that everyone is a Ruby on Rails fan, reading blogs and
other resources.

[1]: http://www.blazeit.de
[2]: http://www.djangoproject.com
[3]: http://www.rubyonrails.org
[4]: http://south.aeracode.org/
[5]: http://www.washingtonpost.com
[6]: http://www.curse.com
[7]: http://www.jetbrains.com/ruby/index.html
[8]: http://www.aptana.com/products/radrails