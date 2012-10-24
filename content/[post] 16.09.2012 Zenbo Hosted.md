title: Taking Zenbo To The Next Level - Zenbo-hosted
date: 2012-09-16 12:00:00
layout: post
---
The beta is running pretty great and I am making progress towards a [1.0 release candidate][zenbo]. While working on [a project][project] for my company to enable forms and other dynamic features in Zenbo I thought about something totally different. Providing a hosted service for Zenbo. How exactly would this look like?
<!--MORE-->

Before I start I want to mention that I do not plan becoming the next Tumblr or Posterous and that I also have no intention to compete with Wordpress over the last 14 year old who just wants to post about his new puppy. Neither are the plans really polished or in a final "I have a big announcement" state. This is more a public brainstorming to see if I get some reactions or people who would be interested and give it a try.

Zenbo-hosted, internal development name which is still open for discussion, would target a certain group of people. A group I did not believe would be interested in such a service till I read a tweet from [Gary Bernhardt][gb] (which I cannot find anymore. He tweets too much) and did some research to find out that more people would love to see such a service.

I thought that developers and tech-savvy people are fine running their own blog and server. After looking at some posts there is one common sentence: "I would love a service that lets me do $this and $that." Turns out some people just want a great platform and do not care about something trivial like blogging software and running ```apt-get update; apt-get upgrade``` from time to time.

Now what would Zenbo-hosted look like?

### Features

- Admin interface to quickly post from a browser
- Service to post by mail
- Still everything in a git repository
- Static generated site
- Backend service so you can submit forms, save them and receive them as mail
- Everything in git

So you would basically be free how to submit content. Write it in vim and push your repository, write in your browser like you would do it with every other content management system or send posts via mail. The backend service is in my opinion not as necessary for most people who would be interested in a git based hosted blog platform but a nice to have. Okay, I also have a nearly finished implementation, so why not? :)

### Scaling
I do not believe I will attract high traffic sites that make it to the frontpage of HN once a week. But since developers have a tendency to write great posts it could be possible that there are unknown amounts of visits. I currently think and hope that this would not become a problem.

Hopelesscom currently runs on the [smallest vServer Hetzner][hetzner] offers with some stuff consuming huge amounts of the already small amount of RAM. Just a default, unoptimized lighttpd without any caching. My [last post][project] had 40-70k requests/hour. The server did not show any significant load. It did not even go above 1.00.  

Scaling is the thing that would likely give me the most headaches. If people really trust me to host their blogs they use to publish great stuff I want those blogs to be available all the time. No matter how. Thanks to the nature of static sites the last possible solution, namely Amazon S3, should be the one that should always work if everything else would fail me.

### Pricing Model And LockIn
Initial thought was to just make it free.

If developers and people who currently pay a small VPS for a moderate known site just donate 50% of their current hosting costs it should be more than enough. I refuse to even talk and think about a sell-out or an ad based model.

I see Zenbo-hosted as a fun side project and I do not care if I make $5 or invest $5 as long as I do not pay thousands of dollars every month for other peoples blog. I want this service, I build this service. (The implementation I currently build for my company is definitely nothing I or other tech-savvy people would love to use. It targets a complete different group of people.)

Now you could ask: "Why should we trust him to provide a service I like?" or "what if he screws up and notices that his blue eyed, trusting in mankind, pricing model does not work?" I have a pretty easy answer. Zenbo-hosted, as Zenbo, will be open source. If you like the way it works - roll your own. If you start hating Zenbo, you already have a full copy of your content on your hard disk. I cannot think of a way how it would be easier to migrate everything away.

### Me Likes, Me Wants
If you are interested in Zenbo-hosted just drop me a line, a tweet, send a bird with a message or set something on fire, dance around it and make some smoke signals.

I will build the tools around Zenbo-hosted in some weekend- or evening sessions and release them. I am just not sure if enough people would like seeing me buy some servers and providing everything as a service.

[project]: http://www.hopelesscom.de/2012/9/9/my_stack_is_bigger_than_yours_-_ranting_about_web_applications_and_scalability.html
[hetzner]: http://www.hetzner.de/hosting/produkte_vserver/vq7
[gb]: https://twitter.com/garybernhardt
[zenbo]: http://www.hopelesscom.de/2012/8/14/the_road_to_zenbo_1_0.html