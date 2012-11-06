title: "OOP: Lesson 1 - Basics"
date: 2012-01-20 12:00:00
layout: post
---
Today we will be learning the basics of object-oriented programming.
As I mentioned in the [introduction post][1] to this series we have to
make sure that we know the basic ideas and words that describe them.

<!--MORE-->

<h3>Java, Gists and Eclipse</h3>
We will be using Java examples. You can download the examples clicking
on the "raw" link at the bottom and comment on them or add something on
my [GitHub Gist page][2]. Do not get stuck with Git, Gists or what
this is - go along with the fact that the code examples are hosted there.
If you enable JavaScript for this domain you will also see them embedded
in this post.

Before we start let me say two things. I know that many people use an
IDE like [Eclipse][3] or [NetBeans][4] for Java development. For the
sake of understanding what happens I will just use an ordinary editor
and the command line in this post. Well, I always use those - this
does not mean that you should too. If you are comfortable with Eclipse
just read the post, understand what it is doing and everything is fine.
You just have to figure out how to create a project and add the code
by yourself.

Now would be a good time, if you have not already, to visit [Oracle][5]
and get the latest *JDK*. Currently Java SE 7u2. I skip the hint that
you should also install it...

<h2>Our first code</h2>
Let us take a look at the first few lines of code we will be using for
this example. The code is not perfect. And this has a good reasons. We
will use the knowledge we are gaining to make this code better.
<script src="https://gist.github.com/1646775.js?file=lesson1.java"></script>
Really simple, isn't it?

<h3>Compile & Execute</h3>
This is Java specific, but you should now it, so you can work with all the
following examples. For everyone that is not forced to use Java:
"Sorry - I know it sucks, but stop complaining and play nicely with
the rest of us."

There are two stages. First you compile your code to byte code using

  ``javac lesson1.java``
  
This will generate a file called *lesson1.class*. We can run our
program using the JVM (Java Virtual Machine)

  ``java lesson1``

No you do not add a file extension. As I said in the first post, sometimes
stuff will be a bit vague. But this is totally fine, you do not need to
know Java internals to understand OOP and how it is working. If you
ever wanted to know what happens when you hit the green "play" button
in Eclipse - now you do.

<h3>Structure</h3>
As you can clearly see there is a *class* called lesson1. The name of this
class is what you use when you execute your program. Even if you name the
file lesson2, ``javac`` will create a lesson1.class file.

Every time you run ``java something`` the JVM is looking for a *method* called
*main* in something.class. It will start executing stuff you put in there. Always add the
keywords *public static void* and add *String args[]* as expected *argument*.

<h3>Doing stuff</h3>
We print something to the console. But how does Java now what
``System.out.println`` should do? There is an easy and a correct explanation.
I think we should go with the easy one since it is accurate enough, not
confusing and with some exceptions a common definition.

Every time you write a program a set of predefined classes and methods
are automatically added. You do not have to import them or tell the
compiler and runtime (JVM) where they are. They are just there and you can use them.

<h3>Comments</h3>
Most of the time people will tell you to comment your code. Sometimes they
are right sometimes they are just idiots. You have to think what you are
commenting.

Adding a comment that tells everyone that this is the main method is
pretty useless. Everyone looking at your code already knows this.

Adding comments to explain complex procedures, algorithms or give people a
quick idea what your method is actually doing is a good idea. 

Methods are a
complex thing when talking about comments. If you just wrote one that only
prints an argument to the screen you do not need comments. On the other hand
if you connect to a database, delete 5 rows and close the connection a short
comment would be a good idea.

The difference between those two comment styles is simply explained. If you
use ``//`` everything till the end of the line is a comment. If you use ``/*``
everything till ``*/`` is a comment. No matter how many lines are included.

<h2>Quick summary</h2>
There are classes, methods, some of them that are magically available, no
matter if you do something or not and there are comments that tend to be
problematic when two programmers discuss how important and verbose you should
be.

In the next post we will learn how to place *{}*, why there is *public*,
*static*, *void*, what it means and why methods are no functions.

<h3>German</h3>
As usual a short translation of everything that is important.

  * class = Klasse
  * method = Methode (Unterprogramm)
  * argument = Argument(e)
  * comment = Kommentare
  
  

[1]: http://www.hopelesscom.de/2012/1/18/object-oriented_programming.html
[2]: https://gist.github.com/fallenhitokiri
[3]: http://www.eclipse.org/
[4]: http://netbeans.org/
[5]: http://www.oracle.com/technetwork/java/index.html