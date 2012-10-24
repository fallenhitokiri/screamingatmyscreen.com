title: "The Holy Grail: A Programmer's Editor"
date: 2011-12-18 12:00:00
layout: post
---
I think everyone who has something to do with programming, system administration
or is reading IT related message boards at least encountered one flamewar about
editors. Most people who do not belong in this category do not understand why
everyone is going crazy about an editor. But they also do not spend many hours a
week using one and trying to be productive.
<!--MORE-->
While developing [Zenbo][1] I was using [vim][2]. As I did the last 12 years. I currently
use [TextWrangler][3] to write my blog posts. In an [earlier post][4] I mentioned that I
will try to replace vim with TextWrangler. What do I expect from an editor I use for 
development and writing?

 * syntax highlighting
 * file system explorer or "Command-T"
 * using the spelling correction build into OSX
 * tab-to-space
 * free (as in beer)
 * usability

Nice to have would be

 * snippets
 * Tag navigation
 * auto completion
 * split windows

I do not believe this is too much I ask for but I did not find one editor that really fits
my needs. Writing one by myself is also no option. This would take time and resources
I currently do not have and I am not willing to reinvent the wheel.

##Vim
I currently use [MacVim][5] and at least it does not look as bad as vim or gvim. But the
limitations are the same. I never was a friend of modal editing. I know some of you
may now hate me but it is just a fact that it feels unusual. And beside that I am a
mouse user. I use this little grey thing for years now and I like it. It works. It feels
more natural for me than remembering letters to do basic stuff.

Beside modal editing that really is against my usability wishes, I also do not like the 
fact that even MacVim is just another port of an *nix application. Text file
configuration, long manpages,... not my world anymore.

###Command-T
If you know [TextMate][6] you should know what I am talking about. Hitting
Command-T and you can just start typing a file name or even regex based
strings and select the file you want from a menu.

If you use vim you can use [FuzzyFinder][7] to accomplish the same thing. Using FuF made
me disable NERDTree. If I have to use my keyboard to navigate I can use something
better than a filesystem explorer.

After I got used to it it really helps my workflow and makes opening files a lot easier.
It looks like [PeepOpen][8] could help but I would prefer a free solution.

###Snippets
I do not care if they are build in or if I have to use a third party application. There
are plenty of them offering enough features that I do not think this will be a big
problem. Of course, build in support is always nice but not mandatory.

###Split Windows
Having two source files open side by side without starting a second editor, perfectly
arranged is nice to have sometimes. Of course it takes away your focus from one
file and that is also the reason why I do not always use it but it is, as I said, handy
sometimes. Most current editors do not seem to support this.

##non free editors
TextMate, [Sublime Text][9], [BBEdit][10],.. they would all work to some point. Some
of them have a great feature set, some have some features that could be handy but
sadly they are all priced above $40. I do not make my living editing code and the
update policies to new versions are just ridiculous sometimes. Paying a one time
fee would be fine but paying for every upgrade with new features and sometimes
needed improvements is just a joke.

Beside that some of them are not really developed at a speed that you get new and
needed features in time. Looking at TextMate and how many people stopped using 
it because Version 2 was promised for years and not developed,... just a bad joke.
Also nothing that would justify a fee for updates.

##Emacs
If you used vim for years it is likely that you tried [Emacs][11]. Sadly even with plugins
I do not get what I want and there are some usability and design decisions that 
make Emacs even more unattractive than vim.

##IDEs (Eclipse)
The most used and suggested IDE for everything is [Eclipse][12]. Now I do not need
a full development environment. I already have tools that work and I do not need
some graphical tool compilation trying to hold them together. Beside that I prefer a
true native look & feel and fast startup times.

##TextWrangler
Currently it looks like TextWrangler will be my best option. Nice look and feel,
at least a document drawer, a great OSX integration and some basic tag managing.
But it is just an editor. Nothing spectacular. I still need some time to evaluate if
syntax highlighting will be okay. But at least, compared to vim, it is stupid easy to
change some colors. Looking forward to the next coding session.

[1]: https://github.com/fallenhitokiri/Zenbo
[2]: http://www.vim.org/
[3]: http://www.barebones.com/products/textwrangler/
[4]: http://www.hopelesscom.de/2011/12/12/first_day_with_zenbo.html
[5]: http://code.google.com/p/macvim/
[6]: http://macromates.com/
[7]: http://www.vim.org/scripts/script.php?script_id=1984
[8]: http://peepcode.com/products/peepopen
[9]: http://www.sublimetext.com/
[10]: http://www.barebones.com/products/bbedit/
[11]: http://aquamacs.org/
[12]: http://www.eclipse.org/
