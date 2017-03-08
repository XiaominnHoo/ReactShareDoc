// More info https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
  controls: true,
  progress: true,
  history: true,
  center: true,
  backgroundTransition: 'zoom',
  transition: 'slide', // none/fade/slide/convex/concave/zoom

  // More info https://github.com/hakimel/reveal.js#dependencies
  dependencies: [
    { src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
    { src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
    { src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
    { src: 'plugin/highlight/highlight.js', callback: function() { hljs.initHighlightingOnLoad(); } },
    { src: 'plugin/zoom-js/zoom.js' },
    { src: 'plugin/notes/notes.js' }
  ]
});

var iconExchange = document.querySelector('.icon-exchange');

Reveal.addEventListener('fragmentshown', function(e) {
  console.log(e.fragment);

  if (e.fragment.id === 'ordinaryEnd') {
    iconExchange.classList.add('animated')
  }
});

Reveal.addEventListener('fragmenthidden', function(e) {
  if (e.fragment.id === 'ordinaryEnd') {
    iconExchange.classList.remove('animated')
  }
});
