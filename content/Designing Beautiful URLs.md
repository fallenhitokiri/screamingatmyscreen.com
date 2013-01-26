title: Designing Beautiful URLs
date: 2012-07-02  12:00:00
layout: post
tags: ['content management', 'blog']
---
I thought about beautiful URLs. There are two things I expect from them and I sadly nearly never see them in production. While designing my [content management system][cms] I decided that this will be one of the things that have to be solved before the first release. Changing URLs is always a bad idea, so I want to get this right from the beginning. How should URLs look?
<!--MORE-->

There are two things I expect of a good URL. First it should be self explaining. I want to know what I will likely see when I click on it. Second it should be easy to post or even tell people over the phone. If you never had to do this you are extremely lucky. But this still happens from time to time, especially when businesses are involved.

We will use "product B" from "awesum company" as an example. Our goal is a URL structure that allows us both, sending self explaining links to people and telling others the same thing over the phone without spelling out each letter.

So we have the URL "http://www.awesum.tld/product-b/". Pretty easy if everyone knows how to spell awesum and product-b. But if your URL gets longer, maybe pointing to a screenshot section of product B the likelier it is that someone typing it in the address bar screws up. This does not meet the criteria that it should be easy to tell people over the phone.

On the other hand if you use "http://www.awesum.tld/5/" no one knows what hides behind the URL. I do not know how you act if someone sends you a mail in this format but I keep them deep down in my inbox till I sit in a dark room, alone, windows shut and connected to a proxy far, far in the east.

How can we achieve both - easy sharing and informative URLs? A combination of both approaches. [Tumblr][tumblr] and [StackExchange][so] show us a possible solution and with some minor modifications I would suggest we just use it.

"http://www.awesum.tld/5/product-b". Just add an identifier, likely your database index, to the URL and use the slug. Now you only query the identifier. What exactly are the advantages? We add minimal overhead. It does not matter if we add "product-b" or not, this means easy sharing over the phone. We can use the same slug again - if you have a blog with 10 years of history it is possible that you have the same slug twice.

It would even be possible to extend this with a second domain. How about "as.tld/5"? Looks ugly but telling someone eight characters should be okay. If he or she still manages to mess up and visit the wrong site just look for a new client or business partner.

The only thing we should take care of is that our CMS always does a redirect to "http://www.awesum.tld/5/prduct-b". I am not 100% sure since you find many different explanations for nearly everything Google did in the past, but it looks like several links from the same domain pointing to the same content are a bad idea. SEO experts will likely comment on this, so just look for it, we will have an answer ;)

I like the solution even if I do not like the fact that I have to add overhead. But it looks like a necessary evil to be slug independent and achieve both requirements.

[cms]: http://www.hopelesscom.de/2012/4/30/what_is_wrong_with_content_management_systems_.html
[so]: http://stackexchange.com/
[tumblr]: http://www.tumblr.com/