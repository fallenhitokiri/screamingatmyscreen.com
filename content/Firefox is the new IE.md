title: Firefox Is The New Enemy
date: 2012-02-27 12:00:00
layout: post
---
When I first started designing websites there was one enemy. Internet
Explorer. No matter what you did it did not work. Sites were designed
for "Firefox 0.7 ++" or just did look horrible. Well they did work but only
as plain/text document. Internet Explorer lost a serious amount of
market share, the new versions became more and more standard compliant 
and you had less work creating stunning sites that work on all browsers.
<!--MORE-->

Most people learned to use Firefox or another alternative the last few
years. Even if it is not as necessary as it was. But today I ran into
something only Firefox screws up. Cross-Origin Resource Sharing.

##Explaining The Setup
Sounds complicated, doesn't it? Well let me give you an easy example
why I ran into this problem. I deployed some Django sites today and
they share the same static files. Let us assume we have three domains.

 * domain1.tld
 * domain2.tld
 * domain3.tld

They all represent one Django project and are all hosted on the same
server. Since I do not care about the flavor of the month I used
lighttpd as webserver. Do not start giving me all the reasons to
use nginx. I know them and I still decided to stay with lighttpd. All
Django projects run as wgsi on a different port using gunicorn.

So what you basically do is set the document root of your webserver to
the static directory that contains all the files and create three
conditions, for every domain, to tell lighttpd to proxy requests to the
corresponding project. I will talk about this setup in another post.

##Accessing Your Static Files
Now you tell your Django projects that they should access the static
files through ```http://$ip/```. Everything looked fine till I did the
last check on my Windows box with Firefox and Internet Explorer.

I have some fonts embedded in my stylesheets. font-face works fine if
you remember to convert your fonts in a format Internet Explorer
understands. But Firefox showed the fallback font. What happend?

Firefox refuses to load files that are not on the same domain as your
website. Loading something form ```$ip``` when you opened ```domain3.tld```
does not work. I am currently not sure what they try to achieve with
this behaviour but I am sure that there are some good reasons.

###Good Reasons For Everything
When I talk about good reasons and Firefox in one sentence you should
read it in the most sarcastic voice you can imagine. There is a reason
why I call Firefox useless these days. Of course it did something
great in the past. Thanks to Firefox we had a tiny, fast browser that 
was a perfectly fine alternative to Internet Explorer and Mozilla.

After the 1.0 release everything went downhill. Firefox became bigger
and slower. At some point they decided that releasing one major release
every week is the best idea since sliced bread and that those stupid 
users are the best beta testers you can get.

It could be possible that I am a bit exaggerating but you get the idea
and I think you can understand why I declare Firefox the new Internet
Explorer.

##Solving This Problem
There is an easy way to solve it. You just have to tell Firefox that
it is okay to access those files. Add ```Access-Control-Allow-Origin```
to your response header and everything is fine.

The worst solution I know is patching this with your application. There
are better options. Use your webserver.

###Lighttpd
Load ```mod_setenv``` and add the following line to your configuration.

  setenv.add-response-header = ( "Access-Control-Allow-Origin" => "*" )

This allows every domain to load stuff from your server. You could replace
the wildcard with domain names to restrict access.

If you are on another server just search in your documentation how to 
add a response header and you are fine. Quick examples, without modules
or anything else.

###Apache
  
  Header set Access-Control-Allow-Origin "*"

###IIS

  add name="Access-Control-Allow-Origin" value="*"

###NginX

  add_header Access-Control-Allow-Origin *

###Restricting Access
I strongly suggest you do not use the wildcard. Every domain can load your
files. If you are planning to run a CDN this could be viable, for everything
else think about what you are doing.

If you are not using subdomains in your Django installation you can also
create a subdomain. But this would not work for my current setup since
all subdomains have to be processed by Django.

I do not know another browser beside Firefox that implements CORS. But it
could become a standard. There could be some reasons why they implemented
this "feature". Being prepared when something from another domain does not
load one day, after a browser update, is a good idea.
