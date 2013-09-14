title: Sublime Text as Python IDE - jedi
date: 2013-09-14 18:34:00
layout: post
tags: ["Python", "development", "editor"]
---
I used Sublime Text exclusively for the last two weeks. The major drawback, beside the not really native user interface, was the way jedi works. After tweeting that the integration in vim using YouCompleteMe is way better I received the question how to properly configure Sublime Text to use jedi multiple times, so let me give you a short walkthrough.
<!--MORE-->

As a side note: Surprisingly I was only asked once via Twitter but three times via email. I respond on Twitter and email. Mailing me, hoping to increase your chance to receive an answer doesn't work. I react on both channels when I have time.

If you are not sure why you want [jedi][jedi] - believe me, you do - let me show you two screenshots with and without jedi. Without jedi editing a file looks like this

![nojedi1][nojedi1]
![nojedi2][nojedi2]

Now if we configure jedi properly and it looks like this

![jedi1][jedi1]
![jedi2][jedi2]

I don't know how you work and what your preferences are, but I prefer a working autocompletion and not one who only completes words in the same file or open files - I'm looking at you TextMate. Makes it a lot easier working on larger codebases if you do not have to remember every single class attribute, method and argument.

First have to install [SublimeJedi][sj]. It looks like the people who asked why it isn't working for them are either using virtualenv or never used the projects functionality and don't know how to configure a project in Sublime Text. This are basically the only two options I can think of.

Open Sublime Text and the project you are working on and save it as a project using `Project -> Save Project as…`. The only thing left to do is editing your project file using `Project -> Edit Project`. The most basic configuration looks like this

    {
        "folders":
        [
		        {
			          "follow_symlinks": true,
			          "path": "my-project"
		        }
	      ],
        "settings": {
            "python_interpreter_path": "/Users/tizi/my-project/venv/bin/python"
        }
    }

Now jedi will use the Python interpreter from the virtual environment I created in `my-project/venv`. It will also index and complete all packages you install in your virtual environment. For more configuration options I suggest reading the documentation of SublimeJedi. Now that you have understood the configuration is should be fairly easy to add the additional options if needed.

[jedi]: https://github.com/davidhalter/jedi
[nojedi1]: nojedi1.gif
[nojedi2]: nojedi2.gif
[jedi1]: jedi1.gif
[jedi2]: jedi2.gif
[sj]: https://github.com/srusskih/SublimeJEDI
