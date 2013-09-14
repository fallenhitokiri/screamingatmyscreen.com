title: Why we dropped Internet Explorer 8 support from our standard contract
date: yyyy-mm-dd hh:mm:ss
layout: post
tags: [tag1, tag2]
---
In one of my [last posts][lastpost] I talked about about outdated browsers and Internet Explorer support. I got some reactions from people telling me that it is not that bad and that it is possible to support it. I do not disagree. It is possible. Sometimes it is even possible without much trouble. We still dropped support for everything below Internet Explorer 9 from our standard contract. I was asked to explain why, so here we go.
<!--MORE-->

The most important thing, and this is especially difficult for people doing web design and development for more than five years, is to notice and admit that Internet Explorer is not the black sheep in the browser market anymore. The times you had to rewrite major parts of your site or not use some nice features making your life easier are over. If you are asked for Internet Explorer support it is not the more pleasant option to just set yourself on fire and run away anymore. The browser got better. It became standard compliant. It just does not suck anymore. I know it is hard to get used to a world where your old enemy is not an enemy anymore, but get over it.

## Market Share
Currently it does not matter what source you look at, no one agrees on what the market share of the different browsers and versions is. Maybe because no one found a way to measure it. Maybe we should ask the NSA, the could have the most reliable database for it.

If I take the average of some statistics I get the following numbers: IE6 is around 1-2%, IE7 around 4-5% (sometimes it is the other way around) and IE8 at 5-10%.

Judging from this numbers is looks like an insanely stupid idea to drop Internet Explorer 8 support and pretty reasonable to ignore IE 6 and 7. But even if we take those numbers for granted there are some more things we should consider.

### Location
Some sites tried to map browsers to their geolocation. We all know that geolocation detection for browsers and IPs is sometimes as accurate as blindly throwing a knife in the air, hoping it hits the map on the wall at the right location. Sometimes it works great. Let's take the [Pingdom charts][pingdom] as example. It is outdated but at least it does not require flash and the trend you can see is still the same.

What can we see there? IE6 and 7 are most popular in Asia, for the rest of the world IE6 does not even show up. Even there IE6 and IE7 "only" have a market share of ~5%.

If we drop IE7 support we exclude 2-4% of potential users. If we drop IE8 support we exclude 10-15% of potential users. Please remember that this chart is outdated and current numbers are lower.

So depending on the market you target you will not exclude many potential users if you drop support for older Internet Explorer versions.

### Who Are Your Users?
Who is most likely to use an outdated version of Internet Explorer? I base this on my experience working on various client projects from the local pet shop to financial consulting and investment companies. Nothing will beat the log files of your web server showing you real numbers for the project you are currently working on.

There are two major user groups still using old Internet Explorer version.

The first one are people who have absolutely no idea how those things in front of them work, have no interest in learning it and have no one taking care of their systems. They click on the symbol someone told them to click on once and this is the Internet. This will not change. They do not care. They do not want to care. This group is getting smaller and smaller. People start growing up with computers. They talk to friends, they see other people use them and sometimes they understand the basics. Others just do not have this "thing" they do not care about anymore and just use a tablet or smartphone. This is still a minority but this minority will grow.

The big advantage is that this is most likely the group for which you have to support outdated browsers. They are the ones who heard that you can order dog food at your local pet shop online or see if they have it in stock. They try to use the Internet from time to time and are pretty fast annoyed if something does not work and absolutely do not care why, it is "the Internets" or websites fault. The best thing that could happen is having those people all move to tablets and smartphones with an auto-update function. The smaller this group  gets the better.

The second group consists of businesses. The bigger they are the slower they upgrade anything. But even those slow moving enterprises are forced to have newer browsers. Some never switched to Vista and XP support is running out, some are on Vista and hate it, some executives heard from their kids that they are stupid for running such old software,… you know all the scenarios. If they run on stock Windows 7, without any updates or additional software, they are on Internet Explorer 8. So even slow moving companies are likely on IE8 or will be soon.

## Sometimes Old Things Have To Die
Remember when your first pet died? It was sad. It was maybe even more devastating than the death of the old, grumpy, slightly right-wing extremist uncle you only met once a year. But time is moving on. Things change. Software changes. Likely nothing changes as fast as software and still so many time is wasted to support browser which should already be dead.

Internet Explorer 7 was released in 2006. This is over 7 years ago. Internet Explorer 8 was released in 2009. This is over 4 years ago. Most people do not own a phone that old. Many people do not wear the same cloth for 4 years. People consider cars outdated after 7 years. But they keep clinched to their outdated browsers breaking the web.

Supporting this is like cheering for people having the rotting, dead body of their uncle sitting in the living room bringing them a fresh cup of coffee every morning.

## Internet Explorer 8
This one is a special little snowflake. Most of the time is is quiet easy to support. Do not let your self fool from missed acid tests. The changes required are not much, even teaching this old dog new tricks like CORS is pretty easy. It takes some effort but not as much as getting a CSS based layout right in IE6.

You could argue that if it is so easy you should do it. Fact is it still takes time. You invest two or three hours getting it right. If you client does not care about money this is reasonable. But if budget is thigh, if your client hardly has any visitors using Internet Explorer 8 or if your client decides that he really does not care why put the effort in supporting a browser that should finally die?

Internet Explorer 6 and 7 require a lot more work. They should *never* be included in any standard contract. If they should be supported it takes effort and time which costs your client money. Money a client should not have to spend without knowing that it is likely wasted.

## Do Not Drop Support For Any Project
Even if there are enough reasons to ignore outdated browser there are moments when you just have to support them. If the first and most important goal is to show informations to *everyone* no matter who, no matter what it costs you have to support them. If you are building a website for a public institution it does not matter who visits the site, everyone should be able to obtain those informations.

Could you say the same thing for any other project? I do not think so. Let us stay with the example of public institutions. They are there to serve everyone in every possible situation. Does this blog has to serve everyone? No. It is target at people interested in what I write, people likely being tech-savvy. Is a pet shops homepage serving everyone? No. If a browser breaks the whole site people just go to the shop or call as they did all the years before. Does a companies website serve everyone? No, only potential customers. Most businesses have a solid analysis of customers they want and who is interested in their products. If they do not target middle aged, non-tech-savvy people using a computer that was build before their web designer was born why should they pay money to optimize their site for them?

Support for Internet Explorer starts with version 9 according to our standard contract. We tell our clients the possible scenario and consequences of this sentence. We tell them how much time and money is needed to support IE8, we tell them how much time and money is needed to support IE7. We tell them what we think is necessary. Some of them decide that IE8 support is necessary and we agree. No one ever decided IE6 or 7 support is needed. But those who decide they do not want us to support IE8 save money. They make the decision on a solid information basis and this is the most important part: tell them everything they need to know to decide if the investment makes sense.

What do you gain for making this extra effort? Customers usually like the fact that you let them decide what is done. They usually like getting explained some small details they can use to show off. And the most important part: If everything goes well you do not have to support an outdated version of Internet Explorer.


[lastpost]: http://screamingatmyscreen.com/2013/8/the-joy-and-pain-of-using-a-static-site-generator-for-private-and-client-work/
[pingdom]: http://royal.pingdom.com/2012/04/23/current-status-of-the-browser-wars/