title: First day with Zenbo
date: 2011-12-12 12:00:00
layout: post
---
Today is the first day with my server running Zenbo. Everything is fine and the only
process currently running is [Lighttpd][1]. But let us first look at yesterday. This post will
mostly be a recapitulation of what happened and what will happen.
<!--MORE-->

###Testing Zenbo
I was a bit sceptical if everything will work as expected. I first used a
vhost to test everything. While fixing the design I did 23 deploys and I had
not one error. So I was pretty sure everything should work well while blogging.

Using the post-receive hook seems pretty solid. After the repo is pushed it is automatically
checked out and up to date. What I currently do not know is how long it will take when
the repo gets bigger, the load gets higher and if there will be a downtime while the
checkout is running.

###Nice URLs
I want URLs that do not include a file extensions. Looks and feels wired after all
those years that there is an extension again. I already found a rewrite that works
but sadly I am not sure how to manage multiple extensions based on conditions.

Having a RSS feed with a .html extension looks as wrong as a CSS file with an .html
at the end. Even if it would work it is just not right.

###RFC conform dates
The date in an RSS feed should be RFC-822 compatible so it validates. Currently I
only add a date on a year-month-day scheme since it is enough for my blog.

Adding hours and minutes should not break my sorting but it could. So I need some
time for testing. Well or I just check if the feed works without a valid date.

###Editor
I currently use [TextWrangler][6] to write this post. I will also try to replace vim with it.
After using vim for 12 years now I feel like I should really give something else a fair
chance. Again.

###404
Definitely need a 404 page. Nothing to add to this point.

##Next few weeks
I made up my mind what I will fix next. There will be some improvements in my
CSS files and I will add syntax highlighting that actually works. I use pygments and
guess the lexer what does not always work as intended. Than there is the plugin
system that really wants some love and attention.

But basically after Zenbo is now running I will do the most obvious thing. Blogging.
My blog solution works and I am happy that it is released and I also want to add
some features but the basic idea behind Zenbo was that blogging should be fun
again and no fight against strange Ajax interfaces.

I also do not talk about every feature I will add or what I am currently working on.
There is [GitHub Issues][2] that holds every idea and a description how far I got.

If you want to add features I suggest you wait till the plugin system is working. There
will be some major changes and generators will also become plugins. Filters will stay
the same. If you are using Zenbo or start someday drop me a line or add yourself to
the [GithHub Wiki Page][3].

##Twitter Comments
As a side project I am looking in a way to pull all tweets using a specific hashtag in
a local file and load them with every page using JavaScript. Basically a comment
system using Twitter.

Instead of a file it is also possible that I will use [redis][7] since I fear some performance
problems with plain/text files and I am also too lazy to work on anything cache
related. Mostly because caches tend to break or mess something up at some point.

But this is nothing that is finished or even in an early alpha stage.

##Webserver
I use lighttpd for many years now. Compared to [Apache][4] it has enough features, is
sometimes faster, easier to configure and has some regex url magic included.

Since it is possible that I will hit more problems with nice looking URLs and rewrites
I consider using Apache or [Nginx][5]. Load and speed is not really a problem. Especially
since they now only have to serve static files - one of the best arguments against
Apache as far as I know. And if there will be some load problems in future I can still
try to mess around with caching,...

There should be a way to add .htaccess support to Lighttpd. I do not know how stable
and well supported it is. But it should solve most problems.

I think I created something that will entertain me for many months and serve me well
for - I hope - many years. Somehow I feel a bit satisfied... and thankfully my 
significant other did not get mad at me for all the hours I talked about it or, well,
cursed because something just did not work. Thanks to her I will also have a great
logo, so I believe she is not too pissed,... :)

[1]: http://www.lighttpd.net/
[2]: https://github.com/fallenhitokiri/Zenbo/issues?sort=created&direction=desc&state=open
[3]: https://github.com/fallenhitokiri/Zenbo/wiki/Who%3F
[4]: http://httpd.apache.org/ 
[5]: http://nginx.org/
[6]: http://www.barebones.com/products/textwrangler/
[7]: http://redis.io/