title: Feature Flood
date: 2012-01-07 12:00:00
layout: post
tags: ['drupan']
---
Yesterday I took some time to compile a short list of features I
am implementing in [Zenbo][1] the next few days. I have a big list what
Zenbo should be able to do when I release version one and even a
list for version two. Zenbo will be used for two new projects so 
the features needed for those have priority.
<!--MORE-->

<h3>Syntax Highlighting</h3>
This is one of the features I really want for Hopelesscom. Writing
posts about python, coding and sometimes stuff that involves the
command line without syntax highlighting just sucks.

Currently I have some problems filtering the 'code' tags but that
is just because I have not used regex for some time.

I believe that pygments 'guess_lexer' should be fine but there is
a chance that it will sometimes fail. Adding a mark what language
should be used is not the worst idea I had while implementing
everything.

<h3>Crawler</h3>
After generating a page there should be three things happening.

 * checking every link if there is a file in the right folder
 * deploying the page
 * checking every link if it works

I see some performance issues with this one. Crawling a large page
two times could take some time. I am not sure if I will just check
the links before deploying since I do not believe that there can or
will be issues with broken links or files after uploading the site.

Okay I know that this sentences sounds really stupid and that I
will now run in some deployment issues the next few days,...

<h3>Wordpress Importer</h3>
I really want to migrate my [business blog][2] (german only) to 
Zenbo. There is currently no archive on hopelesscom since I want
to merge the past three ones together. But on my other blog I want
to continue writing without anyone noticing - beside the new layout.

Exporting to an XML file is no problem but sadly there are some
characters that would need a definition. minidom and pyxml throw
an exception while loading the file.

I am not sure if I should write a definition, just replace the parts
that do not work or look for another option to parse the file. I
fear that this will take some time.

<h3>Tags</h3>
Before migration my other blog I want a plugin for tags and / or
categories. And I want a beautiful one not just one file for
every tag.

The idea is one file with a page name, url, all tags and some
JavaScript magic.

If you are using and working with the web for more than 6 or 7
years you could remember the time when JavaScript just plainly sucked.
Every browser implemented it another way, most of the time it did
nothing useful that improved the usability experience and it just 
did not work. Times luckily changed.

<h2>Git Flow</h2>
I am looking into the option to change my workflow a little bit.
[Git Flow][3] implementing an easy way for [Vincent Driessen's 
branching model][4]. If you do not know what I am talking about take
a look at [Jeff Kreeftmeijer's post][5].

I had some problems with branching and merging and I do not know
why I ran into them. But the main point is that git flow would force
and assist me to have a clean repository structure. There are far 
worser things.

<h2>Vim vs. TextWrangler</h2>
I have to admit: I switched [back to vim][6]. I still like TextWrangler
for writing posts but I just cannot stand coding with it. I do not
know if I just miss modal editing, if I miss the customization or
if I am just used to FuF and other stuff I used for years now.

But coming home to vim just felt natural again. I still do not believe
that modal editing is the best thing since sliced bread but I can stand
it.

[1]: https://github.com/fallenhitokiri/Zenbo
[2]: http://www.timo-zimmermann.de
[3]: https://github.com/nvie/gitflow
[4]: http://nvie.com/posts/a-successful-git-branching-model/
[5]: http://jeffkreeftmeijer.com/2010/why-arent-you-using-git-flow/
[6]: http://www.hopelesscom.de/2011/12/18/the_holy_grail__a_programmer_s_editor.html