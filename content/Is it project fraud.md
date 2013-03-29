title: Is it project fraud or saving the client?
date: 2013-03-29 19:31:00
layout: post
tags: ["business", "ruby on rails", "sinatra"]
---
Imagine the following situation. You are hired to develop an application using Ruby on Rails. But from your experience you decide that Sinatra would be better suited for the job. You just develop the application in Sinatra, deliver, no one notices it and everyone seems to be happy. Do you believe this is okay?
<!--MORE-->

Just from the short introduction I would say no. But let me tell you the whole story.

I was called by a potential client and asked to write tests for a Ruby on Rails project. 75 controllers and 25 models (the number was specified by the developer on his final report) which never have seen one line of testing. The last time I talked to him about the project I should now add tests to I suggested giving the job to someone I know. But since I had two meetings with the client, let us call him Bob to make it a bit more personal, I knew a bit about him.

Bob has no idea about anything digital. But he loves to listen to buzzword bullshit bingo. And most of the time he believes he needs what he hears. He already has an intranet for his company and wanted to extend it with said project. And because every cool start-up uses it the project had to be done using Ruby on Rails. Without going into too much details it was "only" an API. Fetching information from various sources, merging them into one output stream to be included in the existing intranet.

Bob was not satisfied with the one who developed the solution, we call him Jack, so he called me. He heard that it is important to test software and his system administrator told him that there are no tests for the API-project. They plan to extend the project and add functionality. To do it "right" they insist on a full test coverage of the code base.

After checking out the source code I was a bit surprised. It is based on Sinatra. I called Bob and he did not understand why it was not written in Ruby on Rails. He made it clear that he wants a Ruby on Rails application. I called Jack and he told me that he believed Sinatra was the better choice and that the contract did not specify the framework, even if the client explicitly talked about it the whole time.

Now back to the main question: Is this fraud?

From what I can tell Sinatra was an acceptable choice. I do not believe that it is true that a Ruby on Rails application would have taken significantly more time to develop and as a result be more expensive. We talk about "hammer API endpoints, fetch data, save to database, generate stuff from database, safe to database, provide an API to fetch generated stuff". Rails should be fine, too.

The main problem we are talking about is pretty easy. Bob orders A and Jack believes B is the better choice. Since the contract does not specify A he choses B, knowing that Bob wants A.

Is it fraud? Maybe not from a legal point of view. (Disclaimer: I am not a lawyer. It is possible that spoken arrangements can be legally binding in some countries.) But in my opinion it is highly unprofessional and unethical.

## How to handle such a situation?
If I am sure solution B is better for Bob it is my job to explain it to him in a way he can understand. If he still insists on Ruby on Rails it is either because there are reasons he did not and maybe does not want to mention or because I suck at explaining.

This is an important lesson anyone planing a project with a client has to learn. If you are not able to convince the client you have the best solution for the given problem it is your fault, no the clients. Do not start with "the client is to stupid to understand that…". You are the one who is selling. It is your job to make sure he understands why he should trust you. If you are not able to do this because "selling is only for those who {have shitty products, do not know what they are doing, those people I hate,…} or you are too elitist to explain something in an understandable way it is not your clients fault.

If you cannot sell and do not want to learn how to sell properly there is only one way to go. Deliver what the client asked for. Maybe Sinatra is the better choice. But the client believes he gets a Ruby on Rails application, which he ordered, and this is what he should get. There is no reasoning to justify anything else.

If you want to help your client making the right decisions, which is in my opinion a good thing, it is your job to be good enough at selling your ideas.

If you do not want to become good enough but still believe customers should get what they need not what they want you have to options. Hire someone for the job or stop working directly with clients. But do not deliver something they did not ask for.

What do you want your client to tell people asking about you? "He suggested a different technology, saved me money and delivered a great project" or "He delivered something I did not ask for."

I would love to hear your opinion. Do you believe this was fraud? Do you believe you have to save a client from making the wrong decisions? How far can you go to save a client?