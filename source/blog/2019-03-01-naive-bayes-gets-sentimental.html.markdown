---

title: Naive Bayes gets Sentimental
date: 2019-03-01
tags: nlp, sentiment, experiment
packages: naive-bayes-text-classifier, sentiment, nlp-utils, perceptron
author: Rachna
author_twitter: R4CHN4
excerpt: A quick experiment with the wink-naive-bayes-text-classifier for negative/positive sentiment classification.
image: nbc-sentimental.png
---

It was fun to watch [`wink-sentiment`](https://www.npmjs.com/package/wink-sentiment)’s stupidity in our [previous post](https://winkjs.org/blog/sentimental-ai.html).  Humans express sentiments in complex ways. Therefore, mere dependence on lexical content can be misleading. Understanding rhetorical notes such as sarcasm, irony, or implications are largely driven by interplay of words. Forget machines, sometimes these expressions can even confuse human beings!

[`wink-sentiment`](https://www.npmjs.com/package/wink-sentiment) barely overcomes some of these challenges by handling negation, emoticons, contractions and common phrases. As a result,  it delivers an accuracy of **77%** when tested on the Amazon Product Review [Sentiment Labelled Sentences Data Set](https://archive.ics.uci.edu/ml/machine-learning-databases/00331/) from [UCI Machine Learning Repository](https://archive.ics.uci.edu/ml/index.php). While this is surely a quick way to get started, the only better way is to train machine on the task! The catch here is that we must have labeled data, which  usually becomes a challenge. It is in these situations, [`wink-sentiment`](https://www.npmjs.com/package/wink-sentiment) comes to our rescue!

I decided to setup a quick experiment with the [`wink-naive-bayes-text-classifier`](https://www.npmjs.com/package/wink-naive-bayes-text-classifier) for negative/positive sentiment classification. The Amazon Product Review data comes  pre-labelled as 0 and 1 for Negative and Positive sentiment respectively; here is a sample:

|Review|Sentiment|
|---|---|
|It is unusable in a moving car at freeway speed.|0|
|I bought this to use with my Kindle Fire and absolutely loved it!|1|
|The commercials are the most misleading.|0|
|good protection and does not make phone too bulky.|1|
|I bought it for my mother and she had a problem with the battery.|0|
|Great Pocket PC / phone combination.|1|

My immediate instinct was to remove stop words as they don’t have much value for a bag-of-words model, propagate negations to ensure phrases like “not good” are handled properly, and stem the words to make more general sense from them. For effective propagation of negation, expansion of contractions of form “Xn’t” to “X not” was also necessary. Here is how the preparatory tasks and configuration were set-up:

<pre><code class="javascript">nbc.definePrepTasks( [
  // Convert Xn't contractions to X not.
  nlp.string.amplifyNotElision,
  // Use simple tokenizer
  nlp.string.tokenize0,
  // Use stemmer to obtain base form of the word.
  nlp.tokens.stem,
  // Handle impact of negation
  nlp.tokens.propagateNegations,
  // Remove stop words
  nlp.tokens.removeWords
] );
// Configure behavior
nbc.defineConfig( { considerOnlyPresence: true, smoothingFactor: 0.5 } );</code></pre>

For validation, I first shuffled the data using `array.shuffle` utility from [`wink-helpers`](https://www.npmjs.com/package/wink-helpers) and subsequently partitioned it into training (80% i.e. 800 rows) and evaluation (20% i.e. 200 rows) sets. Note [`wink-naive-bayes-text-classifier`](https://www.npmjs.com/package/wink-naive-bayes-text-classifier) has a comprehensive API for evaluation but simplicity was our focus.

> It achieved an accuracy of **85%** – a solid **8%** jump from earlier 77% – as we were expecting! The question remained, is this the limit?

Exploring [wink averaged perceptron](https://www.npmjs.com/package/wink-perceptron) for sentiment analysis at this stage seemed a worthwhile idea. In order to prepare the input data, similar set-up as above was used. The tokens were converted to bag-of-words using the [`tokens.bagOfWords`](http://winkjs.org/wink-nlp-utils/tokens.html#bagOfWords) API from [`wink-nlp-utils`](https://www.npmjs.com/package/wink-nlp-utils). I used `{ shuffleData: true, maxIterations: 6 }` as the hyperparameters for perceptron and  got a marginal hike of **0.5%** over the naive bayes. But this was achieved with a small trick – the pocket perceptron approach – selected the best model from multiple runs!

My curiosity didn’t end here and I couldn’t wait to experiment with  our upcoming ***wink-nlp***. It provides an API to compute document vector using the pre-trained [word vectors](https://en.wikipedia.org/wiki/Word_embedding) that come out-of-the-box. As a result the bag-of-words model could now be easily replaced by document or sentence vectors. Word vectors provide a distinct advantage when it comes to handling out-of-vocabulary words.

> This time perceptron delivered an accuracy of **89%** – another impressive jump of **3.5%** from our earlier best of 85.5%.

A leap from 77% to 89% accuracy – exploration definitely goes a long way!


<small>We are striving to release wink-nlp’s first version in next few weeks, <a href="/blog/naive-bayes-gets-sentimental.html#signup">sign-up</a> here for an early preview of the same.</small>
