title: The Road To Zenbo 1.0
date: 2012-08-14 12:00:00
layout: post
tags: ['drupan', 'project']
---
Last weekend I pushed an early alpha of [Zenbo 1.0][zenbo] to GitHub. I received some feedback and questions. I want to address some of them and give you a short estimate what I will add till the first release and how development will look in general.
<!--MORE-->

Master is the current development tree. You can build a site using it. I did not find any bugs if the input files are valid and the configuration file is not missing anything. I used hopelesscom as test source. I still run 0.1 since I did not finish migration scripts. That is everything about the general state of Zenbo.

## Do Not Fear Updating Your Site And Add Content
One of the scary things about automating updates is that something could go wrong. Especially if you push the site and notice that something went wrong - you are offline. Sucks, doesn't it?

There are currently three things to do before you will see 1.0.

1. testing if the configuration file is complete
2. crawling the generated site to make sure all pages exist
3. optional crawling of the live site

The basic idea is that if Zenbo can find all files and open all URLs the chance that your update worked without trouble is really high. Of course this is not perfect but it should be more than enough to cover most common problems. All bug reports I received were not directly Zenbos fault but a misconfigured git repo, pushing to the currently checked out branch, dying disks while checkout is running,… I still agree that you should be notified if you update your site and something goes wrong.

## Features To Add
Most of the features I want to include in the first release are already implemented. I will add some more options to the ContentObject to make template authoring easier and a bit more flexible. The only real feature I am likely to add are tags or categories. Not sure how I will call them but it will represent what most people understand as a tagging system.

Everything else will be added in a future release. Out of the need for easier testing I had to shift feature priorities around. I did not want to implement the internal server e.x.

## Development And Contribution
If you want to contribute to Zenbo head over to [GitHub][zenbo]. I will only accept bug fixes and new features if you send me a pull request. Do not spam my mail account with diffs and patches. I know that some people love them and refuse to use pull requests - I am not one of them.

Master will always be the current development branch. All releases will become their own. So bug fix against the latest release not against development. In development things brake and bad things happen. Only develop against master if you want to contribute to the next major release.

I do not expect to see many major releases. Thanks to the plugin structure Zenbo can be easily extended making major releases nearly unnecessary.

### Plugins
Just take a look at the existing plugins if you want to contribute one. The basic idea is that we have a header with a short explanation what the plugin does and how to configure it. 

Only add one key in the configuration dictionary for your plugin and add all options as value of this one key. Stay away from ContentObject.meta - feel free to add additional instance variables, as much as you need.

If you think a test would be useful write one. But please stick to ```unittest``` and do not require additional dependencies just to run tests.

I currently plan to add an input plugin for MongoDB. There are no plans for additional add ons. I will first work on another part of Zenbo before I implement features I do not need or want. Maybe I will add some converters (reStructured and Textile come to my mind).

## Add Some Awesomeness
After 1.0 I will work on a web interface for Zenbo. I do not have any idea how I will do it but it should be possible to use it as easy as Wordpress or other known content management systems. This is a result of the idea to use Zenbo for more clients than I currently can.

The idea is to write a little application, maybe Flask or Django and expose the git repository to it. You can run the backend on whatever server you want and still only have a web server and cache on your "production" server, taking full advantage of static site awesomeness.

Great thing about it? Imagine a multi-user environment writing articles, editing your site whatever. Someone makes a "buh buh". Hit restore and start smiling. If you are an Apple fanboy: Time Machine for your homepage.

I will also look in the possibilities of extending Zenbo with some JavaScript magic to hide the fact that we are using static sites. I will start with basic stuff most sites need like sending messages from your contact page.

It is even possible, time and requests will show how likely and useful this could be, that I will provide the backend as hosted service thru my company. But it will be a long way till I have to make this decision.

## Current Shape
I believe Zenbo is in a good shape and on the right way. After figuring out how to write useful tests, forcing myself to write some more documentation and adding the last few features we will see a release.

The plugin system will stay like it is. I do not expect any changes and I will do anything I can to prevent them. So if you want to start adding features go ahead. They could be included in the first release if you work fast ;)

Looking back at the last week of working on Zenbo it was fun to work outside a framework again. Of course you have to make your own design decisions. And they have to be good. You do not want an overly complex plugin system, objects you only understand after studying the documentation for days or some piece of code that is impossible to maintain without screaming.

I will migrate hopelesscom to Zenbo 1.0 after it is released. There is a new theme and a new domain name. Do not worry, I know that 301 exists and I will also use it.

[zenbo]: https://github.com/fallenhitokiri/Zenbo
