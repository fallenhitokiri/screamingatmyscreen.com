title: Learning Scala - Four Weeks Later
date: 2013-11-03 17:16:00
layout: post
tags: ["Scala", "development"]
---
It was over four weeks ago that I put a small service written in Scala into production. Some people wanted to know how the service is performing and if I would consider using Scala again. Let me give you a short summary.
<!--MORE-->

The service I wrote is a reimplementation of an analytics server. It receives some data via JSON, stores it and on request processes all data. The actual service was written in Python and Flask and later rewritten in Golang. It is fairly trivial and if you know a language half decently you should be able to do it in a matter of hours, depending how fit you are with the math behind the analytics.

Over the last year it was becoming my "hello world" for new languages. Trivial enough that it can be implemented in a short amount of time but complex enough that you see different parts of a language and its library ecosystem and tools. So for me the perfect test for what I would do with it on a daily basis. When I am confident that a rewrite works it becomes a backend for "screaming at my screen". I could hardly care less if the analytic service goes down or is broken for some time.

The Scala implementation worked flawless. I had to move it to a bigger instance since the 512MB on the virtual server I usually use were not enough and it started swapping. I do not want to blame Scala on this. My experience is still fairly limited and I am sure an experienced Scala developer would be able to optimize it to consume less memory.

I would not start a new product or service using Scala. I really do not like the tools, the language does not provide anything special I would consider a killer feature or must have and the JVM, well... I know many people love the JVM. I neither like nor dislike it but it is certainly no selling point for me to look over the other things I do not like about Scala. If a system or architecture is already using Scala I would not hesitate to continue using it though.