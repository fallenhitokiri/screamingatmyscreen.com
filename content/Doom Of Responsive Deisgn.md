title: The Doom Of Responsive Design
date: 2012-06-13 12:00:00
layout: post
tags: ['webdesign', 'responsive design']
---
The last few month you could read it in every blog. Last year most web developers used to 
focus on responsive web design, mobile first, and whatever you can imagine. The idea is 
pretty simple: Use CSS3 media queries to change the look of your site to make it "better"
 to read and use on a mobile device. Thanks to Apple this could just become a nightmare.
<!--MORE-->

With Safari 6 and the new iCloud integration you will be able to hit a button and see all
tabs that are open on your mobile iOS devices. With one click you can get the tab on your
Mac and continue browsing. I think this feature is really nice to have. But could we, 
before we praise Apple as the most innovative company ever for letting us move tabs from
one device to another, think about the consequences? 

One of the first things I have read in every book about design is that you should make 
sure your design is easy to recognize and that you should be consistent in using it. 
Responsive design is therefor a bit problematic. Tom Ewer recently [wrote][1] about this.

I do not disagree with him. He is right that most sites work just fine without 
modification. One thing I would always add is a media query if the sites makes heavy usage 
of images. Delivering scaled down version for mobile devices reduces [bandwidth needed][2] 
and makes the mobile experience just better.

Let us assume he is right and, as most books will tell you, you should not change the 
layout for mobile devices because your users will be confused.

Imagine user Bob browses your site on the iPad. He wants to fill a form and has to look 
up some things and decides he will just do it on his laptop. He clicks the little cloud 
and BÄM! totally different looking site. Bob is confused, falls to the ground and lies 
there crying till his wife comes home and closes the bad, bad tab.

Maybe I am a bit exaggerating but your users will sometimes see two different pages 
just because they changed the device they use for browsing. Having to rescan, maybe read, 
the whole text to continue where they stopped. Not the most pleasant experience.

The big question we will have to answer is if our users will use this feature and if they 
will be like Bob. If we answer this questions with 'yes' or 'maybe' there is not much we 
can do with responsive design beside the most important thing, saving bandwidth. If the 
answer is 'no' we can just continue declaring responsive design the best thing since IE6 
died a horrible, horrible death.

The best thing we can do right now is make sure our pages look unique and do not show a 
big difference between the mobile and desktop version. Slicescript has recently posted a 
[gallery][3] that is a good example, although some of them could already differ too much. 
The most important thing we should remember is that a responsive design has to be, most of 
the time, recognizable. A second version of your page, "optimized" for the mobile 
experience, with less features, less content, less everything, could be a complete 
disaster when we create for users like Bob.

[1]: http://managewp.com/5-reasons-why-responsive-design-is-not-worth-it
[2]: http://www.hopelesscom.de/2012/3/11/the_new_ipad_and_responsive_web_design.html
[3]: http://slicescript.com/10-blogs-with-excellent-responsive-web-designs/
