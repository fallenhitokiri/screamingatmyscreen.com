title: What Is Wrong With Content Management Systems?
date: 2012-04-30 12:00:00
layout: post
---
I am currently working on some projects and two them are kind of private or semi-private. 
My private and my business domain will receive a redesign and a Django based
backend. I thought about writing a modular content management system and provide it
as hosted option for some clients. And while working on it I noticed something that is
in my opinion wrong with most existing solutions.
<!--MORE-->

The idea behind a content management system is that you can manage your content. 
Surprise, surprise. This includes categories, tags, a basic structure, defining the type 
of you content and much more. Let us call every piece of information you enter an object.
Depending on what your object represents you likely want to add different informations.

Four simple examples

  * article: title, date, slug, content
  * image: title, date, image, comment
  * dvd: name, genre, cover
  * cd: name, artist, track list, cover, genre

Now your CMS should somehow understand that you want to store three different types of 
objects with different informations. If your CMS does not know what it is storing, there 
is no way you can build a reliable search, sort or anything else based on your data.

Even something simple as creating your view or template would not be possible or just
do not look as nice as you want it to. If you want an article there should be some
spacing and other things to make it readable. If you display your CD you want the
track list beside your cover and so on.

So we need a way to let our users describe the objects and informations they want to
store. And I believe this is the point where most developers just go "meh, a general
model works somehow. It is fine".

Talking as Django developer you build your database model with specific field types.
You tell your CMS while developing it, not while entering your content, what you want to
store. Not the best idea. (I mention Django because it could be possible that there is
an framework that makes this a lot easier)

No matter how many models you build from the start there is no way you could include all
possible scenarios. So the only way to build a CMS that covers every need is to add the
possibility to create your own objects.

There would be an option to build a model that describes objects but this would be
a lot of work and trouble and usability would just go downhill. You would need to base
it on many ManyToMany relations. This is the point where it gets
ugly. Usability is likely going downhill, especially if you rely on Djangos admin
interface and do not want to build one yourself.

All systems that are capable of doing this require you to read one or two books and in the
end you will likely end paying someone who loves pain to manage everything for you. We
achieved many cool things and there is a lot of stuff possible but managing your data
still seems to be troublesome. Typo3, anyone?

I cannot promise that I will find an optimal way to solve this problem nor do I believe
that my solution will be the ultimate answer to all problems current systems have but
I think the first step is understanding the problem and at least trying to solve it.
Even if I fail to go the full way I should be some steps ahead of some of the most
popular blogging and content management systems out there.
