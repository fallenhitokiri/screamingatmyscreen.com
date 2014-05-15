title: Why are so many people writing static site generators?
date: 2014-05-15 21:28:00
layout: post
tags: ["drupan", "content management", "development", "project"]
---
Yesterday I was asked this question by [Simon Wood](https://twitter.com/hpoom/status/465926128935661568). While trying to give some reasons in four tweets I think it is a topic I should elaborate. Especially since I am some hours of coding away from releasing the second major release of [Drupan](http://github.com/fallenhitokiri/drupan).
<!--MORE-->

I believe that writing a static site generator is the new "Hello World", at least for people who wrote their first "Hello World" a decade or so ago. It is stupidly trivial to write a basic one. The basic steps are:

1. read files
2. run library-A
3. run library-B
4. write output
5. deploy

Reading and writing files is most likely a part of the standard library of the current hotness of the programming language world. Library-A is something that converts markdown, textile or whatever obscure text formatting language was discussed last on HackerNews to HTML and library-B is a template engine. Those five steps do not require more than a few lines of code, at least if you do not have to write any functionality yourself, and you have successfully written a static site generator.

But the real fun starts after that. How about a real plugin system? Different URL schemes? Deployment beyond git or rsync? Those are features most of those projects never see. And that is perfectly fine.

I started writing drupan because I wanted to see @sternenkind drawing a drunken panda and because I was not satisfied with the existing generators. I started drupan over 3 years ago, jekyll was, as today still is, I believe, the most known static site generator out there, two or three other projects found their first users and people, back then as today, argued how superior / or how stupid this whole static site thing is. I was not able to find one written in Python with the features I wanted. So I wrote one. When it generated and deployed screamingatmyscreen.com the first time it was merely what I described above. Some months and some work later and it matured and became feature rich and also was used to built more sites than my blog. Some people asked for special version, some asked for help with the project they are working on and want to use drupan. Today it is still an unknown static site generator with a really small user base and it is still in development, adapting to new workflows and requirements.

If a static site generator is developed after it can successfully do the 5 basic steps does not matter as long as it is fun for the person who wrote it. It does not matter if it is ever used to actually bring one site to life. A static site generator is a simple piece of software, but you can learn many things about a language if you write one, especially if you go slightly behind the five initial steps.

## Choice
One question was: "Do we need so many different static site generators?" No, we do not need them. But it also does no harm that they exist and that people put them out there. And you never who can learn something from reading the code or if there is one that evolves beyond what we already have and delivers a cool, new feature. Variety is never the problem - choosing which one to use is one.

Deciding which one to use can be quite tricky, especially if you just go to [staticsitegenerators.net](http://staticsitegenerators.net) and look at the list. The biggest problem: you have no idea which one provides the features you want and need. It is only a list, not even a good one, it lists [jinja](http://jinja.pocoo.org) as a static site generator. Depending on how you define the term it could be possible, but far from what I would expect if I look for one. On the other hand, a task runner like [Grunt](http://gruntjs.com) can become a perfectly fine generator if you only want the initially mentioned five steps. Choosing the right one is hard. If I would not be biased I would likely do the following steps:

- look for generators written in the language I prefer
- look at those that are kind of actively maintained
- look at the features
- take the first one that looks good
- if it works: profit, if not: rinse and repeat

That is likely not the most pleasant process but on the other hand: everything has its price. If you look for a full feature content management system you would have to go through the exact same process. At least if you do not settle with the "most known player" in the game. If that approach is fine for you: just use Jekyll.

## Why are so many people writing static site generators?
I think this would be a good "Ask HN" topic - there are likely many different reasons why people wrote a static site generator. If someone is just learning a new language writing a static site generator is something to consider. There are far worse things to write while learning a new language.