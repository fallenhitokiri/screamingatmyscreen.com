title: "OOP: Lesson 2 - Vocabulary"
date: 2012-01-24 12:00:00
layout: post
---
Hello and welcome to a new part of the famous, loved and anticipated
series about object-oriented programming. Today we will be talking about
objects, methods, functions and get a basic understanding what happens
when we use them.
<!--MORE-->

I was not sure if I should start with this because we still lack
some basic understanding what variables are, but I think we will
be doing fine. Let us take a look at the code we use today.

<script src="https://gist.github.com/1668731.js?file=lesson2.java"></script>

  *EDIT: I just see that GitHub does not include line numbers 
  I will have to add a way to highlight code by myself for
  hopelesscom. Just click on the link to GitHub to see line numbers*

Looks pretty simple, doesn't it? What do we have in this code?

  * a class *IchObjekt* with two *variables* and three *methods*
  * our *main* program with two *methods*

We could also create two files, one for each class. When we are writing
larger programs and classes this would be the preferred way to do it.
But since we only got some lines of code this works fine.

<h2>What is a class and an object</h2>
You can think of a *class* as a template for a number of things. Let
us look at a human, for example. A human has hair, well most of them,
and a hair color. The fact that humans have hair is a fact, the hair 
color varies from being to being.

Those "things" are called *objects* (humans). When you create an object 
from a class you can also say *instance* (please remember that we are 
currently not 100% accurate with this). 

We create an object from the class in line 28. Each object created from
one class has the same variables and methods but they can contain
different values.

<h3>class and instance variables</h3>
We will be talking about variables in another post. But to understand
the concept of classes and objects I will give you a basic idea about
the different types. This is not the final explanation and will sound
a lot different later on but for now it is okay.

In line 2 and 3 we declare class variables. When you create an object
and set a variable the variable is different from the class variable.
From this point you call it object or instance variable.

Back to humans: That they ``have_hair`` (because
they all do) would be an class variable, the hair color an object
variable since it is different for each object. In a later post we
will clarify how to call it and what the real difference is. For now
we will stick to this explanation.

<h3>methods and functions</h3>
They are basically the same thing. A piece of code, if coded well, doing
one thing that can be called multiple times. So you write your code one
time and execute it - maybe - many times.

In Java everything is part of an object. Every function is called
method. Why? When a function is part of an object it is called method.
This is the basic difference. That was the hard part,... ;)

To execute a block of code aka method you have to *call* the method. We 
do this in line 30 for example. The way you do it is always the same:
``object.method(arguments)``. If the method should return something
you have to tell Java where the return value should be stored. You need
a variable of the type matching the return value. The variable that should
hold the return value stand on the left side of the *=* and the
call on the right side. Look at the lines 20 to 26.

<h3>public and private</h3>
A method is either public or private. If it is public you can always
call it from everywhere.

If it is private you can only call it from the object itself. If we
would have a private method in the class *IchObjekt* you could only
call it from one of the methods in *IchObjekt* not from *lesson2*.

<h3>return values</h3>
If a method is returning nothing it is *void*. All methods in our
*IchObjekt* class return nothing so they are all of the type void.

In line 20 we have ``brauchEineZahl`` which is supposed to return a
number - an integer - so the method needs to know that it should return 
something from the type *int*. If you tell a method it should return
something you absolutely have to do it.

<h3>static</h3>
Sometimes you want to call methods without creating an object from a
class. If you have a class that is doing basic math stuff there is
no need to have objects of this class. You just created them to put
some of your code in another files so it is reusable and looks better.

For those methods you use the modifier static. Our main method is
always static because we do not create an object before calling it.
The same goes for the ``brauchEineZahl``. There is no object so the
method has to be static.

<h3>Constructor</h3>
When you create a new object there is always a method called *constructor*
executed. No matter if you wrote one or not. In our example our constructor
starts at line 5. It always has the same name as the class.

<h3>Arguments</h3>
In line 5 we tell our constructor that it will get an argument when it is
called. If you would create and object without giving the constructor
an argument - see line 28 - Java would complain like a little child that
"it wants it so badly and refuses to do anything before it gets one".

You can specify any number of arguments and they can be from any type
you want. Just make sure you follow the argument order when calling the
function. If the function expects an integer and a string and you call
it supplying a string and an integer it will start complaining again.

As you can see in line 28 and 32 it does not matter if you pass the 
content from a variable or just add the value directly, which is kind
of pointless in a real program, the only thing that matters is that
the type is right. The variables also do not need to have the same name.

<h2>How to build a method</h2>
First we should think about our method and what it is supposed to do.

  * is it bound to an object
  * what should it return
  * is it public or private
  * what arguments do I need

When we know all these things we can use what we just learned. You always
build a method the same way.

  keywords  name  (  arguments  )

Keywords are *public*/*private*, *static*, *return type*. Always follow
this order. Do not change it. Seriously, I mean it - changing the order
is like typing Google into Google - you will break the internet. (Cookies
for everyone who knows that this is a quote from IT Crowd)

You need a name for your method - you and Java should both know how to
call this block of code.

Arguments are sometimes needed. Check the types and the order.

Remember to always put your code in *{ }* and remember that you need a
return statement when you used something else than void.

<h2>Quick summary</h2>
Classes describe a number of variables and functions for objects you
build of them.

You can use methods to run the same code again and again or to change
or extend objects beyond variables. Methods need keywords to know what
they are actually supposed to do.

Java has many things in common with little, spoiled kids.

<h3>German</h3>
As usual a short translation of everything that is important.

  * method + function = frei Übersetzt: Unterprogramm
  * argument = Argument
  * keyword = Schlüsselworte / Bezeichner
  * constructor = Konstruktor
  