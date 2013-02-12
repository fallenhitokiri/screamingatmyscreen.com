title: Digital Ocean - good intensions, bad execution
date: 2013-02-12 19:14:00
layout: post
tags: ["business", "hosting"]
---
Digital Ocean offers cloud servers with SSD storage. Sounds great, right? They also try to be active on many social media channels and sites like Hacker News. They answer support tickets pretty quickly. But I am still not sure if I really want to give them my credit card number. Let me explain what happened.
<!--MORE-->

If you use the Internet for more than two months you have likely seen many complains about anything. You learn to filter most of them. Sometimes you only get one side of the story, sometimes critical parts are missing, sometimes something just went wrong and people expect companies to never ever make a mistake. But what if a company admits and tries to solve a problem and just makes things worse?

Some time ago [Digital Ocean][do] wrote a post which made it to the front page of HN that they now offer servers with SSDs. SSDs always sound good, right? But I never heard of them so I browsed around the site.

One thing I noticed was the offering of "unlimited bandwidth". This is a nice thought but I think we all know this cannot work. Either there are strings attached or they go out of service or cancel your account. After browsing the site I read the comments thread on HN and I was not the only one who thought there is something wrong with this statement.

They were offering a free test node and I thought about a UK and US based vServer so I wanted to give them a try. Maybe AWS micro, Linode and others are not the only option. The small server are potent enough for my needs. I registered and account but before I could spin up an instance I had to attend a client meeting.

In the evening I logged in and wanted to start a server.

> Your account hast been suspended.

Why?! I did *nothing*. Maybe the initial offering with test servers and the fact that it was on HN was too much for them. First thing: Back to the HN thread. I found the limitation of the trial account on HN, not on their site. Three hours after you signed up. Seriously? You are kidding, right? A three hour trial after someone hits "Sign up" is nearly as worthless as no trial period, if not worse, if there is no hint how the trial works.

I wrote a support ticket and got a response that the three hours are common and that I will receive a credit for $1.25. But I would first have to give them my credit card number to get the credit. And they would authorize $1.23. On HN they commented this would be a limitation of the accounting software. 

Looking at the site today they changed the bandwidth part. So they really try to learn from mistakes and improve. This is the good part. But do I want to give my credit card to a company trying to sell me a cloud product which cannot get an accounting software to work the way they want and are obviously not really good in communicating essential parts of their product? Especially a test period which is unbelievable stupid? "Create a free account" equals "your test period starts now, no matter what you do".

They are really communicative, especially with automatically generated mails. Sadly they all went to the spam folder - which I, and this is something which is 100% my fault, do not check regularly. I was also not used to have one. But Outlook.com is another story.

![Spam folder, full of Digital Ocean mails][doimg]

Etel from their support team reacted fast, delivered a solution and was really friendly. But this will not change the fact that everything else just smells bad for me. I now have around $22 promo code credits in my account and *still* cannot test a droplet because I did not give them my credit card to test a service which currently should cost me nothing. And I cannot see how much credits I really have. After adding the promo code I only have seen a "added!" message. No way to check my current credits or see if they were really added to my account.

From what I can tell the product is great, the company fast in working through support tickets, friendly, solution oriented, but they cannot work around internal limitations. They are in a market which has some serious competition. AWS does not get more expensive, Hetzner and Linode are already cheap. They have a solid product but I still have a bad feeling about giving away informations which they could use to take money from me.

If you do not mind giving away credit card informations, are looking for a cheap host which seems to perform really good, get one of the promo codes they toss around and give them a try. I had the chance to see a friend doing a load test and the instance performed really good. Maybe I am just a bit too quirky when it comes to credit card informations, maybe I am just spoiled from Hetzner. But even if I am currently not their biggest fan they seem to deliver and treat customers well.

[do]: https://www.digitalocean.com
[doimg]: digital-ocean.png
