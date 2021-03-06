title: The joy and pain of using a static site generator for private and client work
date: 2013-08-18 18:09:00
layout: post
tags: ["drupan", "blog", "content management"]
---
Nearly two years ago I [migrated][1] screaming at my screen to [drupan][2], a static site generator I wrote. In the last two years I used drupan, custom build CMSs written in Django and Ruby on Rails and even Wordpress for different projects. And in the last two years I always asked myself if all the hype about static site generators is not just exactly that - a hype.
<!--MORE-->

I believe the popularity of static site generators - let us call them SSG from here on - started with [Tom Preston-Werner][3] and [Paul Stamatiou][4] blogging about "blogging like a hacker" and moving their sites to [Jekyll][5]. Scripts generating a entirely static site was nothing new. But at this time it was a countermovement to the trend that everybody wrote their own blog in ten minutes in the newest and hippest framework for web development.

We all enjoyed exploring new frameworks. What can Rails do what Django cannot? Why not going for TurboGears? Oh look, this one provides ajaxy-things out of the box! But what we got after the initial hype were blogs lacking features, requiring a lot of time to setup and maintain a server and some security related fiascos thanks to the missing experience of some or just flaws in the frameworks.

Going two steps back to static site generator. No matter how broken or disturbingly bad designed your static site generator is - your site is secure and performant. Messing up SSHd and a httpd only serving static content is a hard task after reading some tutorials, likely easily accessible in the wiki of the distribution running on a server. If there is one and not just some $2 shared hosting provider. And the workflow started to become simple again.

But this is hardly the whole story if you ask me. Not fighting against the doom of modern web - or what other people call it: WYSIWYG edit boxes - just writing your post, running a command and seeing it online. Not caring about a server anymore, if it can handle an article on the frontpage of HackerNews or if some exploit in a framework will be found and the server being target of a mass scan for vulnerable sites. Static site generators introduce many people to a new kind of mental calmness and spread some kind of zen-like blogging feeling.

## And than it began to crumble
After two years with drupan, answering people who migrated their blogs and sites over, realizing client projects, helping other agencies who decided to use it for their clients and seeing new static site generators emerge in every language nearly every week I can say one thing for sure: If you go beyond just publishing they all suck.

If you generate you site locally on your laptop - beware Captain Obvious statement - you always need your laptop to publish something. You cannot just sit on a beach, take a photo and publish it. You cannot sit in StarBucks and publish a quick thought or share a link. I am aware that we are living in 2013. You share your photos on Instagram. But the images are tiny and a square. It is not meant for beautiful pictures. You share links on Twitter. But adding more than 130 characters is a pain. And the biggest bummer? You do not own your content.

There is another option. Your server generates the site for you after you upload new content. No matter if you use Dropbox, git or an email. What happens if you mistyped the layout for your post? You page will be broken for one or two minutes. What if your static site generator crashes? No log file, no way to recover the site without shell access. Even if this would be the last thing I am worried about. Even moving the generation to the server does not solve all the problems but introduces new ones.

And sometimes it is just annoying to generate your site. You post an article, submit it to Reddit and want to link to it? Generate your site. Found a spelling mistake? Generate your site. Want to add a short update to point our a particular interesting comment on Twitter? Regenerate the site. Found another spelling mistake… I think you got the point.

### Clients love fancy stuff like contact forms and outdated browsers
If you do not do any client work let me tell you a tale of small business owners and how much they love Internet Explorer. If you have kids reading this you should probably send them out of the room so they will not crawl under your blanket in the middle of the night, shaking and telling you about their nightmare.

Clients love contact forms. They do not know why. Maybe they do not trust their customers to be able to copy a email address or just click on it. Maybe they think it is fancy. Maybe they think it looks enterprise-y. I am not sure. But it does not matter how or what arguments you bring in. Some of them would even be willing to pay 100% more hosting costs a month and the development of a custom CMS just to have a contact form. Stop shaking your head, I also could not believe it when I heard it.

Than there is Internet Explorer. I have a clause in my standard contract that IE is supported starting from version 9. Backward compatibility is given as long as reasonable but if any additional development time would be needed to support older browsers it will be added to the invoice. I explain this part. Clearly and in easy words. And after one or two weeks, at least in two out of ten cases, I get a call explaining that one customer called because the homepage does not look right or work as expected. And at exactly this point it is essential that the site works with Internet Explorer 2.

Now combine Internet Explorer and contact forms. I have a small service which accepts a form, stores it and sends a mail to the customer. Currently it servers as backend for ~20 domains. But thanks to the fact that it requires CORS it does not work with IE6 or 7. There is a redirect fallback but it is quite messy. And this is only a simple contact form. Imagine the pain of supporting something more complex.

The fact that you are reading this likely means you are not using Internet Explorer prior version to version 9 and can tell if something happens if you click a button. What if you build your site using a static site generator and an AJAX contact form and a potential client thinks he send you an email, offering the opportunity to work on a big project and you never receive the mail? Your client could be forced to use Windows XP and Internet Explorer in his office. Too bad, opportunity gone. I have seen a lot big projects migrating to static sites and JS on top of it. But sadly some people are left out.

And this is just the tip of the iceberg. Do not get me started on analytics. You either use a JavaScript based solution more than 60% of your readership blocks using noScript if you are blogging about technical things or you are back to logs provided by your httpd. No matter which solutions you choose, you will always miss something. The real fun starts when you have to conform EU regulations about cookies and exporting data.

Static sites, without an easy to use frontend, are most of the time, not suitable for client work. Even if they never do it, they want to option to edit content by themselves. Easily. Without the command line. Even if they have a contract so you are in charge of managing the site.

## We need a solution - but which one?
Let us clear up some of the misconceptions about static site generators before we look at possible solutions. Even if the arguments why they rock are all valid - even I used them - we are now living in 2013. Things changed.

While it is true that most people gained a significant performance gain moving to an entirely static site it was more the inability to configure their old solution or add the most primitive type of caching to their custom tailored app. Even a Raspberry Pi can host a Wordpress blog and work just fine with [a post][6] on the frontpage of HackerNews.

If you argue for using a static site generator I give you the security part. Anything accepting user input or running a different process than a httpd is more likely to be vulnerable than a static site. No point discussing about this one.

Before we talk about features we should make sure we talk about the same thing. I do not talk about a full featured CMS. A blog consists of - beware, Captain Obvious, again - blog posts and maybe one or two additional pages containing informations about the author and maybe showing some links and a short description about projects. I am looking for a different solution but I do not regret the last two years using a static site generator. I learned a lot about the workflow, the advantages, disadvantages and possibilities. The ease of mind using a statically generated site is great. Just write and publish. In my opinion this is how a blogging platform is supposed to look like. This is the reason why so many people enjoy publishing on Medium, Tumblr and founded [Ghost][7].

This also brings me to a different point: The technical stuff should be hidden. I do not want to go to the command line and look how git is pushing a repository. I do not want to feel forced to have a quick look at my page, checking if the publishing process really worked as expected and if everything is alright. It should be about publishing your ideas, sharing your experiences and telling the world why your puppy is the most awesome thing since sliced bread.

It should not be a hosted service. But it should enable everyone to start a blog. There are many different cloud providers. A DigitalOcean VPS costs $5 a month. Heroku offers a free tier which is sufficient for a small blog. There has to be a "one click gives me a blog" option. If your father and mother who never used a computer but want to start a blog and if someone who just wrote his own operating system and wants to blog about it are equally satisfied with the solution we reached blog-nirvana. I am aware that this will likely not happen but you get the general direction.

There are many different ways how to produce content and the most important ones should be supported. Post by mail? Sure. Add a text file to your Dropbox account? Why not. A native application for your smartphone and tablet? Of course. But it should be equally simple to export all your content in formats which you can easily import in other solutions. Not being tied to a platform after you start using it is a real win.

Multi user support is great, but not necessary for a personal blog. I let my partner read most of my articles before I publish them. The workflow is pretty simple: Write, ask nicely, ask again, hand over your tablet, laptop or upload it to Dropbox. She does not need advanced editing rights, I do not need different versions to compare them after editing. Those features are great, sometimes even essential for a CMS but not for a blog.

Statistics should be build in, not added at second thought. Most of the time there are simple questions you want to answer. How many people view my blog daily or monthly? How many people read this post? At how many sites looked one visitor? Where do they all come from? There is, for your personal blog, no need for advanced geo-location tracking, saving everything starting with the IP address and outsourcing it to a company telling you that you are an idiot for believing in privacy.

Beauty and usability are either a core principle or do not exist. If you start making compromises you will end up with something that will remind you of Wordpress. Powerful features, posting something is simple but beware if you look beyond the edit box.

## The most interesting and entertaining part: Technical challenges
How would you layout this project? What would be your design decisions? There are two basic concepts I have in my mind, one for a hosted service and one as a Wordpress kind of solution. From a technical point of view the hosted solution is a lot more exciting but I believe a lot less interesting for the general public.

### Hosted platform aka the more exciting solution
This is just a quick thought how it could look. So it could be possible that I just did not think of some of the possible challenges or would run into problems implementing them.

In front of everything would be nginx doing exactly one thing: routing requests to a proxy written in golang, serving the right file depending on the domain and path, and the administrative interface written in Flask. Why Flask? Because the sites would just be checked out git repositories and drupan would handle the generation of static sites. I would try to keep the number of used languages down to a minimum.

The go proxy would push informations about every request to a temporary queue which synchronizes with a database for permanent storage after some small things like generating the md5 hash of an IP address - unique enough for analytics but some additional anonymity for visitors. The second task would be caching. No need to hit the HD or SSD with every request and cache invalidation can be handled with a drupan plugin.

An additional service could act as endpoint for AJAX post requests to provide some kind of contact form functionality. I have an SSH/git server written in Python, I was bored, somewhere in my backup which is able to fetch keys / associated repositories form a central backend and would enable a git based workflow. The administrative interface would act as central point to view and edit everything.

As I said - it is just a rough outline without going into details but I think you are able to see where this would be going. I like the basic idea but this also adds a lot of work besides writing the services. Making sure everything works nicely together and stays online is a burden I am currently not willing to carry. I already wrote about keeping pages of users online when I first [talked about a hosted drupan][8] - at this time it was still called Zenbo - service. I am also not sure if we need yet another hosted blogging service. There are already enough out there doing a pretty good job, even if all of them lack one or two features.

### Something resembling what Wordpress used to be
A simple application written in Flask or Sinatra, no need going for something big as Django or Ruby on Rails. Please remember that we are talking about a platform for blogging not a fully featured CMS. The solution should be simple, portable, easy to use and extend so developers also have a good time using it.

Writing it in Go would be exciting and likely - even if I would not use this as basis for my decision - score some trendy-points. But what about a solid ORM for SQL? What about a markdown converter and syntax highlighting? There are libraries but currently nothing as solid  and production proved as pygments or markdown2. A templating engine which does not suck and is well documented? Good luck. As much as I would love to use Go for some bigger projects the current lack or state of libraries is reason enough to stay with Python and Ruby. Implementing everything by myself is also out of question.

The most challenging part would be the storage backend. Supporting a $5 DigitalOcean VPS is pretty easy. An automated setup of nginx and, if used, a datastore, add virtualenv and you would be done. Nginx can serve the assets and uploads, since most of it is in cache the actual content could be saved in text files or SQLite but analytics is - in the first place - write heavy. Since I never looked into SQLite for parallel writes from multiple processes I'm not sure if it would be a good fit. Another options would be MongoDB. I heard people claim it works pretty well for document based content and logs or analytics.

Caching would be pretty trivial if we would only talk about one process of the app. But since it is likely that more than one is running using a dictionary will not work since invalidation would be a mess at best, more likely a disaster. So caching would require another service, likely Redis - just a personal preference over memcached - but this should be optional. Maybe a file based cache would work for small setups.

I am aware that SQLite and not using Redis or memcached is not what you would call best practice. But I want to see how far it is possible to go with the most trivial setup.

### The backend does not really matter
If a new blogging platform is adopted by people it is - most of the time - not related to the backend but how much it gets out of the way of the user. Is it easy to setup? Does it require daily care and updates? How pleasant is the user interface? Are 3rd party services like Twitter or email easy to integrate?

There are many usability questions and many more arise if you add all the possible features. At some point you have to say goodbye to a feature for simplicity and usability or else you will not build something which resembles what Wordpress used to be but what Wordpress currently is. And let us be honest: no one needs a second Wordpress.

## Are static site generators a bad thing?
No. They are still as great as they were from the beginning. I will also not stop developing drupan, even if I am currently far behind [the schedule][9]. There are use cases, projects and clients where it will shine. But what using drupan for over two years taught me is that I expect something else from my blogging platform.

I would like to hear your thoughts about how a blogging platform should look like, what features it should provide and which it should not have. Feel free to [mail me][10] or join the discussion on [HackerNews][11].

If you like this article and the idea [share it on Twitter][12] or whatever social network you prefer, I would appreciate your help to get some exposure of this idea and more input.

[1]: http://screamingatmyscreen.com/2011/12/and-here-comes-zenbo/
[2]: https://github.com/fallenhitokiri/drupan
[3]: http://tom.preston-werner.com/2008/11/17/blogging-like-a-hacker.html
[4]: http://paulstamatiou.com/how-to-wordpress-to-jekyll
[5]: https://github.com/mojombo/jekyll
[6]: https://news.ycombinator.com/item?id=4853912
[7]: http://tryghost.org
[8]: http://screamingatmyscreen.com/2012/10/zenbo-zenbo-as-a-service-and-pricing/
[9]: https://github.com/fallenhitokiri/drupan/issues/14
[10]: mailto:timo@screamingatmyscreen.com
[11]: https://news.ycombinator.com/item?id=6233059
[12]: http://twitter.com/intent/tweet?url=http://screamingatmyscreen.com/2013/8/the-joy-and-pain-of-using-a-static-site-generator-for-private-and-client-work/&text=The joy and pain of using a static site generator&via=fallenhitokiri