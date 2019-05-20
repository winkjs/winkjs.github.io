---

title: Sentimental AI
date: 2018-12-27
tags: sentiment, poetry
packages: sentiment, tokenizer
author: Prateek
author_twitter: prtksxna
excerpt: Human sentiments aren’t limited to tokenized words or emojis, they have layers of meaning.
image: traffic-static.png
---

It is fun to watch Artificial Intelligence fail. Their logical innocence (stupidity?) can be hilarious. One of my first encounters with AI was with [ELIZA](https://en.wikipedia.org/wiki/ELIZA) — the 1966 NLP program — using the [doctor package](https://www.emacswiki.org/emacs/EmacsDoctor) on emacs. I would spend hours making it say stupid things, and while we’ve come a long way with NLP since Eliza, computers still haven’t lost their innocence — [just ask Siri if they know Eliza](https://twitter.com/winkjs_org/status/1078175972678094848).

The [wink-sentiment](https://github.com/winkjs/wink-sentiment) package is no exception to this. Built on top of our [tokenizer](https://github.com/winkjs/wink-tokenizer) and [AFINN](https://arxiv.org/abs/1103.2903) it is not only able to detect sentiment but is also able to handle negation:

<a href="http://winkjs.org/showcase-sentiment/index.html?text=Today was fun!"><img src="/images/today-was-fun.gif"/></a>

<a href="http://winkjs.org/showcase-sentiment/index.html?text=Today was not fun."><img src="/images/today-was-not-fun.gif"/></a>


In the examples above gray is a neutral sentiment, blue and its deeper shades are for negative sentiment, and pink and it's brighter shades are used to show positive sentiment.

<a href="http://winkjs.org/showcase-sentiment/index.html?text=Sometimes I can be so short sighted."><img src="/images/short-sighted.gif"/></a>

<a href="http://winkjs.org/showcase-sentiment/index.html?text=Not so well done my son! I am unhappy."><img src="/images/well-done.gif"/></a>

While it can handle negation and two word phrases it is no match for sarcasm, unless of course you use the right emoji: 😝

<a href="http://winkjs.org/showcase-sentiment/index.html?text=Traffic%20%20on%20my%20way%20back%20is%0Djust%20what%20I%20needed%20%0DThis%20is%20great!%20%20Terrific!"><img src="/images/traffic.gif"/></a>

<a href="http://winkjs.org/showcase-sentiment/index.html?text=Traffic%20%F0%9F%9A%AB%20on%20my%20way%20back%20is%0Djust%20what%20I%20needed%20%F0%9F%98%A9%F0%9F%98%A0%0DThis%20is%20great!%20%F0%9F%98%92%20Terrific!%20%F0%9F%98%90"><img src="/images/traffic-emoji.gif"/></a>

But human sentiments aren’t limited to tokenized words or emojis, they have layers of meaning. Testing the package with songs and poetry really reveals the depth of the problem we’re trying to solve for. It is a tall order for any sentiment analysis technique.

Here are a few lines from the poem *Figures in a Landscape by Doppler* by [Ranjit Hoskote](https://en.wikipedia.org/wiki/Ranjit_Hoskote). Notice how it only catches the positive sentiment at the end:

<video muted autoplay loop width="750">
  <source src="/images/earthquakes.mp4" type="video/mp4">
  <source src="/images/earthquakes.webm" type="video/webm">
  <p>Your browser doesn't support HTML5 video. Here is
     a <a href="/images/earthquakes.mp4">link to the video</a> instead.</p>
</video>

Next we have the song [All Blues](https://en.wikipedia.org/wiki/All_Blues) written by [Oscar Brown](https://en.wikipedia.org/wiki/Oscar_Brown). It initially captures the two meanings of "blue", and finally ends at an appropriate deep blue:

<video muted autoplay loop width="750">
  <source src="/images/blues.mp4" type="video/mp4">
  <source src="/images/blues.webm" type="video/webm">
  <p>Your browser doesn't support HTML5 video. Here is
     a <a href="/images/blues.mp4">link to the video</a> instead.</p>
</video>

Seeing AI fumble, and sometimes even fail, is the how we learn more about it. It helps us decide the direction of our work and look at new ways of solving these problems. Stay tuned for our next experiment where we compare different approaches to sentiment analysis.

The GIFs above were made using our testing tool [Sentimental](http://winkjs.org/sentimental), do give it a try.
