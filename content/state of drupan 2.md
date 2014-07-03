title: State of drupan 2 - RAWR
date: 2014-07-03 22:24:00
layout: post
tags: ["drupan", "project"]
---
There went quite some development time in [drupan](https://github.com/fallenhitokiri/drupan) and a release is in sight. The most common question I receive about drupan is what features will make it into 2.0 - codename [RAWR](https://github.com/fallenhitokiri/drupan/tree/rawr). Let me give you a rough idea what is done and what will be done.
<!--MORE-->

From a first look RAWR will not be very spectacular. It is mostly a refactoring, rewrite and improvement of what I learned from using 1.x in production for 2 1/2 years and listening to people who decided to use it privately or for commercial projects.

The code became a bit more opinionated but more flexible for plugins. The opinionated part went into which steps are executed in which order and which part of the system is in charge of which task. This was not very clear in 1.x. Also there is now only support for [jinja](http://jinja.pocoo.org) - I am not aware of anyone using anything else.

The flexible part is something you will notice if you write a plugin or create a new template. You can now query the storage object for specific entities which allows you to use drupan to split a large single page application into small, maintainable parts or create a site that is not a blog more easily.

The other new feature I am particularly excited about is directly deploying to S3 and CloudFront. Hosting a site without any need for maintenance and having it delivered as fast as possible for anyone, no matter where the person is located, is a huge win if you ask me. Currently this happens with the invocation of [aws-cli](https://github.com/aws/aws-cli). A [boto](https://github.com/boto/boto) based implementation will follow.

All other features will ship as minor update when RAWR is released - this is also true for tag based feeds.

Unsorted list of things to know about RAWR:

- 1.x will not be supported anymore
- configuration syntax changed
- you now specify the configuration file instead of the directory when generating your site (this allows you to place templates, the output directory and content directory in different places)
- it is easier to import it in scripts or other projects
- first measures suggest that there is a vague possibility that it could be faster by a not specified quantity
- there will be new features released frequently
- it should now be as simple as building a blog to build any kind of website

I think this are the most important things you should know about RAWR. I am trying to get it done, but there is still some work to do and I still suffer from a jet lag. So no promise when the exact release will happen. You can use the RAWR branch, it should be fine, but no guarantees.