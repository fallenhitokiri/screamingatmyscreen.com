title: iMessage is secure enough
date: 2014-03-06 19:56:00
layout: post
tags: ["apple", "security"]
---
Apple published a [iOS security whitepaper](http://images.apple.com/iphone/business/docs/iOS_Security_Feb14.pdf). One thing that was discussed a lot is iMessage. Since mainstream media thought it would be a good idea to report about it some people became insecure if it is a good idea to use iMessage or if it should be considered insecure. Let us try to figure out if you should be worried while using iMessage or not.
<!--MORE-->

I will start with the conclusion and try to explain the thought process how I came to it: iMessage is not secure. But it is likely one of the most secure systems people are willing to use and it is, most of the time, good enough.

## Possible attacks
Your device requests the public keys for the recipient and all of your devices from Apples servers. It uses the public keys to encrypt the messages you send. You can not verify which keys are used, you cannot pin them and you cannot check how many are returned for a request. So it would be possible that they just send you one additional key for a private key they use to encrypt the messages.

Another point to criticize is that Apple is securing the connection using TLS, but they are not using certificate pinning. So a possible attack is as "easy" as getting a certificate from a trusted CA. If you believe this is an unlikely scenario - ask the [French cyberdefense agency  and Google](http://arstechnica.com/security/2013/12/french-agency-caught-minting-ssl-certificates-impersonating-google/).

One thing to remember is that if you use iCloud to backup your devices, Apple can likely read your messages.

And last but not least: iOS, OSX and iMessage are not Open Source. So it is not possible that a 3rd party verifies the security of the implementation. While you never know what a review would uncover, if anything, reviews never hurt and likely increase the quality of the implementation.

### Resources
There are some resources to read if you are interested in the topic and want to read about the possible attacks in detail.

- [Apples iOS security whitepaper](http://images.apple.com/iphone/business/docs/iOS_Security_Feb14.pdf)
- [Matthwe Greens - Can Apple read your iMessage](http://blog.cryptographyengineering.com/2013/06/can-apple-read-your-imessages.html)
- [Hacker News thread](https://news.ycombinator.com/item?id=7315964) about the whitepaper

This will cover all points and provide links to additional material.

## How concerned should you be?
That is the big question. All attacks outlined require skill, time, money and a lot of effort. iMessage will not prevent a government agency eavesdropping. But it also does not have to. If one of the agencies wants to know your secrets they will find a way - depending on how badly they want to know there is always [the wrench](http://xkcd.com/538/). So if you are trying to oppose a dictatorship or want to plan highly illegal things, I would not rely on iMessage.

Do you want to tell a non-technical, even if tech-savvy but not into encryption, coworker a password but you have to do it over the Internet? Want to tell your parents how your illness is developing? Chatting about how super awesome your little kitten is? iMessage is fine. The effort required to eavesdrop is just too much to just do it for random surveillance, even for big government agencies. And do not worry about other companies trying to gain insight on business critical things - bribing an unsatisfied, underpaid secretary is easier and cheaper.

Apple set the bar pretty high. I would not send nuclear launch codes over it, especially the really [secure ones](http://arstechnica.com/tech-policy/2013/12/launch-code-for-us-nukes-was-00000000-for-20-years/). But basically everything else. I care about people and computers intercepting my communication, creating profiles and selling it to marketing agencies. I care about potential profiles created by organizations for whatever purpose. I care about companies trying to get business critical information. And this are things highly unlikely to happen using iMessage.

iMessage is the easiest, while still secure, way to communicate right now. It does not require people to learn about encryption. It is [not hard](http://screamingatmyscreen.com/2013/11/gnupg-is-still-too-hard-to-use/) to use. It protects the messages good enough from all risks ordinary, private people and most companies should worry about. And again: it does not require people to learn *anything*. This is by far the most important point. No lazy passwords. No explanation about private and public keys. It just works(tm).

You can discuss this on article [HackerNews](https://news.ycombinator.com/item?id=7355798).