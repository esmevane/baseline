# Baseline

### A static web-based prototyping toolbelt.

This is something I've found myself putting together maybe 3-4 times a month since I've started development.  Over time it's grown into quite a lot of different go-to libraries and tools that I use to get straight to building something.  It contains:

  * [Bootstrap](http://twitter.github.com/bootstrap/) and [Chosen](http://harvesthq.github.com/chosen/) to cure myself of design dependencies.  Now I can prototype applications with fancy buttons and bearable formatting and typesetting.  It's extremely low overhead.

  * Tangle (which depends on MooTools, BVTouchable, and SprintF js) for reactive document building.  You may want to check out [the Tangle page](http://worrydream.com/Tangle/) and let it argue for itself - the ideas are profound, but the setup can be a hassle; I'd rather have it than not.

  * [Backbone](http://documentcloud.github.com/backbone/) and [Backbone LocalStorage](http://documentcloud.github.com/backbone/docs/backbone-localstorage.html) to give myself a framework to operate in.  These depend on or are enhanced by [Underscore](http://underscorejs.org) and [jQuery](http://jquery.com).  The LocalStorage is there to get you a nice place to store information while you build.

Here's the thing:  Most of the time including a framework or server reliance of any sort is a pain in the ass.  Also, if you want to compose a static site, why not genuinely make it static?  With these things in mind, I decided to start doing most of my thought-to-action web work in raw html/css/js.

It works out remarkably well for me, and unless there is any apparent need to allow for data-driven functionality, I can put this stuff up on a server as-is once I've drafted a prototype of it.

Mainly this is here for myself, so that when I have a concept I'd like to prove I can yank this repo into a new directory and play around with it.  In fact, this is an adjusted reduction of my latest iteration of a proof of concept.