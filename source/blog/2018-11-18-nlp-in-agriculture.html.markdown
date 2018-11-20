---

title: NLP in Agriculture
date: 2018-11-18
tags: agriculture, nlp
packages: nlp-utils, perceptron
author: Sanjaya
author_url: https://twitter.com/sanjayaksaxena

---
### Discovering crop disease trends using farmer queries

![Farmer query data](agri-all-data.png)

Several years ago, even before we had the idea of making Wink, our nascent NLP
code was put to the test &mdash; we got a chance to analyze the queries of Indian
farmers. These queries were in Hinglish (a mix of Hindi and English) and were in
subjects ranging from sowing, harvesting, to plant protection. Our goal was to
find distribution of various crops, discover trends and pattern of diseases in
various crops across geographies with time.


In June this year we got a chance to relive those memorable moments when we
spotted a large corpus of farmer queries on
[Open Government Data Platform](https://data.gov.in/catalog/district-wise-and-month-wise-queries-farmers-kisan-call-centre-kcc-during-2018).
It was a gold mine for us. We decided to analyze about 3 million of them using our
current tools. It was real fun! Here is a summary of the methodology:


![NLP process in agriculture](agri-nlp-process.gif)

<br>
We were able to extract hyper-local disease and virus trends from this data and
even create day-by-day timelines. Using it we created many invaluable insights.
Below is a heatmap visualization of blight occurrences in Maharashtra:

![Blight in Maharashtra (2016)](blight-2016.png)

<br>
Another unique insight was of how different diseases affected onions in
Ahmadnagar throughout the year:

![Onion Ahmednagar (2016)](onion-ahmednagar.png)

<br>
These outcomes became the primary component of our
[keynote address](https://twitter.com/winkjs_org/status/1006772816912502784)
at the
[IBM Agri Tech Challenge 2018 conference](https://www.analyticsindiamag.com/the-weather-company-an-ibm-business-hosts-agritech-challenge-2018-to-power-innovative-solutions-for-indian-farmers/)
in mid June this year. With our current wink NLP packages we could put all of
this together rapidly. It took less than a minute on a Macbook Pro to clean,
classify, extract crops, and tag diseases on the entire data set.

We will be showcasing the detailed recipe of this project on [Github](https://github.com/winkjs/)
soon. Keep
an eye out while we release the next generation tools, and be ready for more fun. 😀

<small>For speaking engagements or any other enquiries feel free to get in touch at [wink@graype.in](mailto:wink@graype.in).</small>


<meta name="twitter:card" content="summary" />
<meta name="twitter:site" content="@winkjs_org" />
<meta name="twitter:creator" content="@sanjayaksaxena" />
<meta property="og:url" content="https://winkjs.org/blog/nlp-in-agriculture.html" />
<meta property="og:title" content="NLP in Agriculture" />
<meta property="og:description" content="Discovering crop disease trends using farmer queries." />
<meta property="og:image" content="https://winkjs.org/images/agri-nlp-process.gif" />
