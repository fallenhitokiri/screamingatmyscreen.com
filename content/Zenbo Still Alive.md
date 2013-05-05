title: Working On Zenbo
date: 2012-07-27 12:00:00
layout: post
tags: ['drupan', 'project']
---
I did not announce anything the last few month nor did I push anything to the [repository][github]. But I use Zenbo nearly every day.
Currently it is in a horrible state for anyone beside me. But fear not, this will change shortly.
<!--MORE-->

Before I continue let me wish you a happy system administrator appreciation day. I hope you all have a great time, some cake (that is not a lie) and maybe a few beers. But enough formalities, back to Zenbo.

It is nearly one year since I first released it. Back then I switched hopelesscom to Zenbo and never went back. It is a joy writing everything in [iA writer][ia]. I run ```zenbo Dropbox/sites/hopelesscom``` and my updates are live. No database to worry about, no stack to maintain. Just [lighttpd][lighty] serving some files. Traffic went up the last few months and the [smallest vServer Hetzner][hetzner] has to offer still does not care. The even smaller vServer before also did not care. Scaling for free! Sorry I can tell you many things from one year with Zenbo but not how to scale,… *scnr*

People who figured out how to use it or just asked for an explanation are also satisfied. Or they just tell me that they are and still use Wordpress - I am sure they know that I am a delicate little flower who is really, really sensible to criticism. Maybe that is the reason why I only give so little,… 

There are some obvious things that will be included in the first, official, public, world changing, cancer curing, giving birth to puppies and kittens release.

- documentation - I know you want it
- stable plugin system
- there will be a package. Installation should be as easy as ```pip install zenbo```
- default template (I am generous. When I release version 1 I will also use a new theme for my site and give you the old one. For free!)
- there will be tests

I noticed that a file based backend is not the best solution for everyone. So I will try to make it as modular as possible. The final release should allow you to use whatever backend you write. Extend the "default reader" and add a MongoDB, CouchDB or MySQL backend if you need it. Manage your content the way you want.

With the custom backend I will be looking at a way to use Zenbo to generate a static backup of dynamic sites. Got a Wordpress installation and want to have some safety if your latest article explaining "why geek girls are teh sh1t!1oneEleven!" hits the front page of HN? This should be possible at some point.

The plugin system also needs a lot of love. Especially how you add configuration options for your plugins. It is possible that I will dump YAML in favor of something that sucks less and provides a stable implementation.

Basic stuff like syntax highlighting and adding images to your posts will be included. Both of them currently require additional steps which harms usability.

There is no timeline I can give you. I am reimplementing everything that is not a plugin and as soon as this is done you will see a commit in [Zenbos repository][github]. But I aim for a beta release of version 1.0 at the end of next month. There is a lot more I am planning to add but you have to wait till I released 1.0 for more informations. I am not sure when I will add which feature and I refuse to promise you anything before I am not sure I will implement it.

[github]: https://github.com/fallenhitokiri/Zenbo
[ia]: http://www.iawriter.com
[hetzner]: http://www.hetzner.de/hosting/produkte_vserver/vq7
[lighty]: http://www.lighttpd.net
