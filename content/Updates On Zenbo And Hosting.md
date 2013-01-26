title: Zenbo, Zenbo As A Service And Pricing
date: 2012-10-12 12:00:00
layout: post
tags: ['drupan', 'project']
---
After a week of working on Zenbo (and desperately searching for a new name, as this one is already protected by someone else) there are some news I want to share with you. Sadly not everything worked as expected and there were some private issues I had to take care of. But the good news are that I am on a good track for a release. Let me give you an overview what happened and what you can expect.
<!--MORE-->

First of all there were some major commits and pushes to the [GitHub repository][1]. Some changes that look small but make a lot of sense if you take the greater picture into consideration.

### Configuration
Each plugin will now ship with a default configuration. This means that you can, if you are happy with the defaults, run with a configuration file that only consists of three lines. A major step for people starting to use Zenbo.

On the other hand there are some things left to do. There will be a way to run Zenbo with defaults and command line arguments. This is needed for the hosting.

### Plugins
There are no categories for plugins anymore. There is just a plugin with a ```run``` method in a class called ```Feature```. The order in which plugins are executed is determinate by the order in which they are listed in the configuration file.

This makes it easy to add a base class for common features which will happen at one point. This way configuration handling will be provided by Zenbo and not be the job of every plugin and plugin author.

### Usability
Today I started working on a way to setup a new site with ```zenbo --init```. It is still a bit rough around the edges but I think it will be done tomorrow. The goal is making it easy for people without prior Zenbo experience getting a site up and running with one command. Deployment excluded.

## Zenbo As A Service
I talked about [zenbo-hosted][2]. Some people asked why we need another hosting and blogging service. The answer is pretty easy. I want it for my own and my companies projects.

Most of the time there is no reason for full featured content management systems and there is also no reason to waste money of clients for server resources and hosting they do not really need. With Zenbo as a service there is a way to edit sites in the browser and still benefit from the advantages of a static generated site.

Everyone who prefers a fast and easy to use hosting service, who wants to edit files locally and test a site before it goes live, designers who love the freedom doing what they want, not being tied to the annoyances and limitations of a CMS, everyone who loves git and vim will hopefully enjoy it.

### Architecture
There will be a longer post how everything will work but a quick overview.

The backend will be hosted on a dedicated server. Adding content, no matter if you push with git or add it through the web interface will cause a commit in the git repository which will trigger a hook that starts generating your site.

Between the generation and the repository will be Celery which will make sure the same site is not generated multiple times parallel, that there are not 500 processes fighting over system resources and finally notify the front end if everything is fine or if problems occurred. My last tests indicate that generating 100 sites parallel should be fine on a small box. And thanks to some revised design decisions it will be easy to just add more or bigger boxes.

The final site will be hosted on S3. This will add a hughe performance boost over one or two server and cut down costs. If a customer still wants more performance I will offer a CloudFront add-on. This is, at least for my current knowledge, the fastest possible site you can have. No backend wasting time on generating content, servers near every customer visiting your site, in one word: performance.

### Pricing
Now that I had some time evaluating my options I decided what the pricing will look like. Thanks to an Amazon Web Services event in Leipzig I had the opportunity to talk to some people and answer some open questions.

Zenbo-hosted will be free for everything which is non-commercial. There will be some strings attached to it. Those are still a topic that has to be discussed.

- private sites will always be free
- no advertisement, or anything else
- no file hosting
- non-profit organizations have special rules

### File Hosting
This is just a matter of costs. I want to keep the service free with no strings attached for private usage. Putting up a 2MB PDF with your résumé is fine. Images and image galleries are fine. Uploading the last season of Buffy you just ripped for your friends is not cool. Not only because of the costs but also because of all the DMCA stuff I would have to answer.

### Non-profit Organizations
Most of the time they cause some decent traffic and have some money at their hands for organizational costs. The only thing that changes is that they are halt to put "powered by Zenbo-hosted" in the footer of the site.

If a non-profit organization decides to use Zenbo I hope they will get in touch with me. I would be happy to support them and provide add-on packages as a donation.

### Companies
Basically pretty easy. $5 / month as basic plan and you pay what you use. That is it. Without any add-ons this is everything you have to pay for.

### Add-Ons
There will be several add-on packages you can order which will be a paid service. I am not sure if they will be all available at the beginning but they should appear in the course of this year.

- Post by mail
- Hosting files
- Dedicated backend
- Mail service
- API to submit any form you put on your site
- Custom plugins
- Domain service / DNS
- AWS CloudFront support

Beside the file hosting all features will be around $1 to $3 a month. I think this is reasonable and affordable.

## Why Am I Building This?
Because I believe people will enjoy using it. Because I want to offer a different approach to classic hosting services. Because it is fun. Because it will be beneficial for my company. Because I hope some people who did amazing stuff that helped me do my job and run my business will notice it and use it - my way of saying "thank you".

There are many reasons. For me, the most important ones are fun, saying "thank you" and providing a solid base for future projects I and my company will be working on.

[1]: https://github.com/fallenhitokiri/Zenbo
[2]: http://www.screamingatmyscreen.com/2012/9/23/updates_on_zenbo_and_zenbo-hosted.html