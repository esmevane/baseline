# Baseline

### A static web-based prototyping toolbelt.

This is something I've found myself putting together maybe 3-4 times a month since I've started development.  Over time it's grown into quite a lot of different go-to libraries and tools that I use to get straight to building something.  It contains:

  * [Bootstrap](http://twitter.github.com/bootstrap/) and [Chosen](http://harvesthq.github.com/chosen/) to cure myself of design dependencies.  Now I can prototype applications with fancy buttons and bearable formatting and typesetting.  It's extremely low overhead.

  * Tangle (which depends on [MooTools](http://mootools.net/), BVTouchable, and [SprintF js](https://github.com/jakobwesthoff/sprintf.js)) for reactive document building.  You may want to check out [the Tangle page](http://worrydream.com/Tangle/) and let it argue for itself - the ideas are profound, but the setup can be a hassle; I'd rather have it than not.

  * [Backbone](http://documentcloud.github.com/backbone/) and [Backbone LocalStorage](http://documentcloud.github.com/backbone/docs/backbone-localstorage.html) to give myself a framework to operate in.  These depend on or are enhanced by [Underscore](http://underscorejs.org) and [jQuery](http://jquery.com).  The LocalStorage is there to get you a nice place to store information while you build.

When I proof of concept or prototype web things, I don't like to mess around with a server-side framework.  I also don't like to mess with photoshop or wireframe tools.  I build it in actual html/css/js.

The last time I did this I got annoyed with all the repetition I go through to assemble the libraries and then make a structure out of them.  So I made a repo for myself to start prototypes / mock-ups faster.

If you ever want to play with your web browser, this might help you get started a bit faster.

## Testing

Baseline comes bundled with a preconfigured [Jasmine](http://pivotal.github.com/jasmine/) installation, as well as one passing sanity test.

To get started testing, put your specs in (Baseline Root)/spec/behaviors/application_spec.js