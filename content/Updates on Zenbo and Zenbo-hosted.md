title: Updates On Zenbo And Zenbo-hosted
date: 2012-09-23 12:00:00
layout: post
tags: ['drupan', 'project']
---
After a week of doing nearly nothing, thanks to a really bad cold, I managed to get some testing and coding done. I thought I give you some updates how your favorite project is doing and how soon you will see the release of the last blogging platform you will ever need.
<!--MORE-->

This is one of the names and slogans that were suggested for Zenbo-hosted. While I liked this one, even if it maybe not 100% accurate, here are some more.

- yet another blogging platform
- static blogging
- scaled blogging
- blogging with fun again

I also thought about just using Zenbo. Name the service after the core software that is used. I had far worser ideas, believe me. The final decisions will be made in some weeks, so I am not really stressed making my mind up.

### Zenbo
Today Zenbo learned what tags are and how they work. The documentation is not really finished but I did not find any bugs in the implementation so I just pushed it to the [repository on GitHub][zenbo].

One of the main things I have to fix before the first release will be the way Zenbo reads and uses the configuration. A plugin should ship with sane defaults. Currently you have to add all configuration options to ```config.yaml``` which is not really comfortable, fast or clean.

Also it will be a lot easier to integrate Zenbo in zenbo-hosted if the configuration is internally represented as an object.

I think we will see the last beta version next week. After adding some more tests and finished the crawler everything should be ready for 1.0.0, except the documentation which is a different topic.

### Zenbo-hosted
I have a basic implementation of the backend. Currently only working if the backend and web server are running on the same server. Separating the backend from the fronted needs some time. I am not sure if I will just use [Fabric][fabric] or integrate SSH to run commands on a remote system. Fabric seems to be the better way.

Adding multiple fronted servers on the other hand is already integrated. To be honest I am just to lazy to change the database scheme, even if it is quiet easy thanks to [South][south].

I am also not happy with the way I create git repositories. I subprocess too much for my taste but finding a python git library that does not suck is not as easy as it sounds.

Pricing is also nearly set. Free for non-commercial use. I am not sure how to price companies but I thought about something like 10k requests / $x. Not sure what x needs to be to make this service sustainable.

I have some work to do the next two weeks but I think I will be able to release an early beta in October.

[zenbo]: https://github.com/fallenhitokiri/Zenbo
[fabric]: http://docs.fabfile.org/en/1.4.3/index.html
[south]: http://south.aeracode.org