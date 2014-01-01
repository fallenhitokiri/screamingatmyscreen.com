title: Does
date: yyyy-mm-dd hh:mm:ss
layout: post
tags: [tag1, tag2]
---
I know we all love discussing how to handle thousands and thousands of requests per millisecond - come on, requests per second is too mainstream and inaccurate for the load we want to measure. I received some questions which mostly can be broken down to "is this a good language for my startup". This is my general answer.
<!--MORE-->

If you heard this sentence at any point this year please raise your hand: "We are migrating away form Ruby to $whatever because Ruby is so slow and all our problems will go away once we rewrote everything". Now that we all have our hands up in the air we can stretch a little bit before we start talking about how important the choice of your programming language is.

Let us start form the beginning. You want to build a business. You have a vague idea what your customers could want and you want to build your product as fast as possible to validate that you are moving in the right direction. This is what everyone who wrote me was doing. There was one exception though where someone already had a product but with major performance problems.

The best advice I can give you: Before you start worrying about scaling your product, you should worry about everything else you can imagine.

Let us stay with Ruby and Rails for this example and use the latest TechEmpower benchmark. We will also assume you are running on AWS and not on your own hardware. A m1.large instance can handle 35 requests per second doing 20 queries. The same setup but only one query results in 682 req/s. You will like have more than one query per request but also likely a bit less than 20. We still stay the worst measure we got and pretend we do some things that add more time and we can only handle 20 requests per second. I hope we can agree on this scenario.

Do you actually realize how much 20 requests per second is? Imagine someone using your product. "Click - looking at the screen - thinking - click" - repeat. Let us say one user produces six requests per minute.