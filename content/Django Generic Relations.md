title: Django And Generic Relations 
date: 2012-06-08 12:00:00
layout: post
tags: ['Django', 'Python', 'code']
---
The last few days more and more questions about generic relations appeared in #django.
Most of the time people do not understand the limitations or how to work around them.
Let me give you a short example and a bit longer explanation how the [contenttypes][1]
framework works and what you can do with it.
<!--MORE-->

This post is for people who worked with Django, know the basics but never used the
contenttypes framework. I assume you have a basic understanding how everything works.

An easy example when you want to use generic relations is [Tumblr][2]. Imagine you want a
tumblelog for yourself and, of course, you want to write it in Django. You start designing
database models for posts, conversations, images, links and everything that comes to your
mind. I will use shortened examples in this post - it does not really matter if you have
4 or 40 fields in your models. Let us create one for posts and one for URLs.

<script src="https://gist.github.com/2895098.js"> </script>

But we just do not want to create models and add content we want to show it to the whole
world. So we create a view. You want everything in a nice timeline. But how do you do it?
Query both models and combine the query? Thanks to sort and lambda this would be no
problem, they both have pub_date, a field that would work fine as key for sort. We are
using Django, so there has to be a better way, right?

How about a third model that holds enough meta data for us to just use a simple
```Entry.objects.all()``` returning all posts and URLs, sorted and ready for displaying?
You could get your hands dirty with ForeignKeys but there is a more elegant solutions.
We create a model with a generic relation. This model can point to every other model. No
hard coded relation or 20 fields and if-checks to get the right content.

<script src="https://gist.github.com/2895131.js"> </script>

content\_type represents the name of the model, object\_id stores the id and content\_object
acts like you would expect it from a ForeignKey, with one little but important difference.
But first let us finish our models.py.

We want to query Entry and get our objects sorted by date. So we should add a
DateTimeField. And we still need a way to populate those. We could either write a custom
save method, use a abstract model as base or just act sophisticated and take advantage of
Djangos signal framework.

<script src="https://gist.github.com/2895159.js"> </script>

What did we achieve so far? We made our life easier. We just use ```Entry.objects.all()```
to get everything we posted in a chronological order. We can easily extend our tumblelog
and add new models. The only thing we have to remember is to connect it to our
```create_entry()``` function.

In your view or template you can now access your object as every other. 
```{{ entry.content_object.title }}``` for example to get the title of a post. But this is
ugly. Really ugly. I prefer ```{{ entry.title }}```. And we can easily make this possible.
We also want tags for our posts. So we will add a model for those, too.

<script src="https://gist.github.com/2895221.js"> </script>

Great, isn't it? Now that we have tags we want to be able to show users everything related
to a specific tag. How would you do this? Remember that I said there is a little 
difference between ForeignKey and GenericForeignKeys. You cannot use them in your queries.
```Entry.objects.filter(content_object...)``` is not possible. You can use everything
else but not content\_object.

You can, of course, use a manager and raw sql. I imagine that this would be a performance
boost over the solution I will present you. Maybe you even consider it more elegant. This
is up to you to decide which one you like more and if your site will be under heavy load
and needs to be optimized to the last query. You could, of course, filter every model,
sort,... you know what I mean. Problematic if your Entry model is in charge of returning
URLs for your entries or provides other things you need in your template. Let us jump in
your ```views.py``` and take a look at a possible solution.

<script src="https://gist.github.com/2895254.js"> </script>

We will not talk about elegance. I am still looking for a better solution but this will
work. If I find one I will make sure you know it.

I think you get the benefits from using generic relations, at least when you thought about
using sort or creating ForeignKeys to all models. Far more sophisticated.

[1]: https://docs.djangoproject.com/en/dev/ref/contrib/contenttypes/
[2]: http://www.tumblr.com/