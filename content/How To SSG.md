title: How To Write A Static Site Generator
date: 2014-05-19 20:10:00
layout: post
tags: ["drupan", "development", "python", "project"]
---
After my [last post](http://screamingatmyscreen.com/2014/5/why-are-so-many-people-writing-static-site-generators/) I received a question how to actually write a static site generator. I can see that this sounds like a big project for someone who just starts writing code - but I claimed it would be a good starting project and since I prefer to put my money where my mouth is let me help you getting started.
<!--MORE-->

The goal is to write a basic static site generator using some well known libraries you will likely come across more often if you do web development using Python. We will do this in four steps

1. Read files from disk
2. Convert markdown to HTML
3. Create one page for each posted using a template engine
4. Write output to disk

We will not go into deployment. Chances are that my deployment preferences vary highly from yours. While I either deploy using git or to S3 and CloudFront after I released drupan 2 you may prefer sFTP, scp or directly uploading your files if you do not intent to update your blog very often.

You can follow the different steps by looking at `ssg.py` in [this repository](https://github.com/fallenhitokiri/how-to-ssg) which holds the whole static site generator source code, two example posts and a template - which is as simple as possible. Make sure you install [markdown2](https://pypi.python.org/pypi/markdown2) and [jinja](http://jinja.pocoo.org) using [pip](https://pypi.python.org/pypi/pip) before running it, maybe even setup a [virtualenv](https://pypi.python.org/pypi/virtualenv). If you do not know Python well enough to understand every line of code I suggest you look up all imports in the [docs](https://docs.python.org/2.7/) to fully understand what is going on.

The script is not very long and is meant to be an introduction to the different steps. We will not always stick to best practices, make code reusable or structure it perfectly. Just read it from the top to the button - ideally when having this post open side by side.

## Step 1 - Read
Listing files in a directory, reading files and writing files are most likely part of the standard library of any high level language - at least I am not aware of one that does not provide those functions, please correct me if I am wrong.

This step is actually pretty simple - read all files in an directory, read the file and add it to the `SITE` directory with the filename, which we will later use as URL, and its content as value.

Lines: 19 to 23

### Do It Yourself
Right now you have to make sure the filename is URL friendly. Add a function which takes a string as input and returns an URL friendly version of it. Replacing spaces with dashes and cut of file extensions, for example.

## Step 2 - Markup
Writing HTML is not really a pleasant thing to do. Having a markup language that can be converted to HTML helps a lot while writing posts. We use markdown in this example. There is not much to do since we use the `markdown2` library.

Lines: 27 to 28

### Do It Yourself
Instead of markdown we want to use textile. Install a package that provides textile to HTML conversion and use it instead of markdown2.

## Step 3 - Template
Now it is time to make the posts look nice. Too bad I will not write a full template for a short example, so we only go with the bare minimum.

Before we run it we add an key named "index.html" without a value. Since we always pass the whole `SITE` dictionary we can iterate over it in the template and generate a list of posts we have written. Jinja is a powerful template engine and I want to encourage you to read it. It will safe you some time if you "just" want to add basic things like sorting a list or dictionary.

Lines: 32 to 41

### Do It Yourself
Write a custom template filter that parses the filename and outputs it without the file extension and capitalized. You will find everything you need in jinjas documentation.

Add post numbers in front of the post title (filename) so your files look like this `01-foo.html`, `02-bar.html`. Sort your `SITE` directory by those numbers and only display the last five posts on your index page. This can be done in Python with `sort` and `reverse` or using ninja.

Add an archive showing all posts.

## Step 4 - Write
Now the only thing left to do is writing those posts to the output directory. This can be done as easy as reading them. Before writing them we check if the output directory already exists, delete it if this is the case and create it again, so it is empty.

Lines: 45 to 56

### Do It Yourself
Instead of putting all files in the same directory create one directory for every post and name the output file "index.html". This way we get clean URLs like `/foo/` instead of `foo.html`. This would be a good time to use a list with instances of a `Post` class you have to create. Add some properties to get the URL and the title.

Add links back to your `index.html` so your users can navigate your site without using the back button.

## Conclusion
This is, surely, a very simple static site generator but it gets the job done. You can write your posts in markdown or textile, upload the generated site to whatever $1 webhoster you can find and people can browse your site.

As I mentioned in my previous post there are many features you will be missing - but this was not the goal of this how to. You wrote a static site generator in 58 lines of code. You used the standard library and third party packages. You should have figured out where to search for additional packages and have a rough feeling when things are happening. The real work, and fun, starts from here. Enjoy.