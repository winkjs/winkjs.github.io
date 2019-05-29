---

title: On Browser Search using Wink
date: 2019-05-23
tags: search, browser
packages: bm25-text-search, nlp-utils
author: Prateek
author_twitter: prtksxna
excerpt: Wink packages’ small footprint and high performance make them a perfect candidate to use directly in the browser. In this post we’ll try to build a search functionality for our static site.
image: search-blog.png
---

Wink packages with a small footprint and high performance makes them a perfect candidate to use directly in the browser. In this post we’ll try to build a search functionality for our static site. You can view the demo [here](https://winkjs.org/showcase-bm25-text-search/) and check out the code on [Github](https://github.com/winkjs/showcase-bm25-text-search/).

<a href="https://winkjs.org/showcase-bm25-text-search/"><img src="/images/search-blog.png"></a>

We’ll be using the bm25-text-search package for the search functionality and that will be our only dependency:


<pre><code class="bash">npm install  wink-bm25-text-search --save</code></pre>

Next, we’ll setup [Browserify](http://browserify.org/) and [Grunt](https://gruntjs.com/) to bundle our JavaScript into a single file. This will also allow us to `require` modules as we normally would in Node JS.

<pre><code class="bash">npm install browserify --save-dev
npm install grunt --save-dev
npm install grunt-browserify --save-dev
npm install grunt-contrib-watch --save-dev</code></pre>


Browserify can be run independently without Grunt, but we’ll use Grunt to watch for any changes and run Browserify automatically. This is what our `Gruntfile.js` is going to look like:


<pre><code class="javascript">module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      'bundle.js': 'search.js'
    },
    watch: {
      files: ['search.js'],
      tasks: ['browserify']
    }
  });

  grunt.registerTask('default', ['watch']);
};</code></pre>


Before starting development we'll always run `grunt`. This will take `search.js`, look at all its dependencies, and put them all together to give us `bundle.js`. This is the only file we'll need to include in our HTML.

For `search.js` let's start by `require`-ing the modules we need:

<pre><code class="javascript">var bm25 = require( 'wink-bm25-text-search' );
var nlp = require( 'wink-nlp-utils' );
var docs = require( 'wink-bm25-text-search/sample-data/demo-data-for-wink-bm25.json' );
var getSpottedTerms = require('wink-bm25-text-search/runkit/get-spotted-terms.js');</code></pre>


Next, we’ll use the basic configuration as documented in the [README](https://github.com/winkjs/wink-bm25-text-search#wink-bm25-text-search) and load the documents to be searched into it. You can take a look at the JSON we’re loading [here](https://github.com/winkjs/wink-bm25-text-search/blob/master/sample-data/demo-data-for-wink-bm25.json).

<pre><code class="javascript">var engine = bm25();
var pipe = [
  nlp.string.lowerCase,
  nlp.string.tokenize0,
  nlp.tokens.removeWords,
  nlp.tokens.stem,
  nlp.tokens.propagateNegations
];
engine.defineConfig( { fldWeights: { title: 1, body: 2 } } );
engine.definePrepTasks( pipe );
docs.forEach( function ( doc, i ) {
  engine.addDoc( doc, i );
} );
engine.consolidate();</code></pre>

And that’s it! We are now ready to use the `engine` anywhere in our code to run the search. In our demo’s case we are getting an input from the user to search:

<pre><code class="javascript">var results = engine.search(el.target.value);</code></pre>

You can see the rest of the glue code in [`search.js`](https://github.com/winkjs/showcase-bm25-text-search/blob/master/search.js#L37) that just displays the UI and the results on the page.

With Wink running in the browser there are endless possibilities for tools that can run with no latency. I am excited to see what you'll build with.
