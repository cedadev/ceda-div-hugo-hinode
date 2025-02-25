// Adapted from https://github.com/gohugoio/hugo/blob/master/tpl/tplimpl/embedded/templates/google_analytics.html
var doNotTrack = false;
if (false) {
  var dnt = (navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack);
  var doNotTrack = (dnt == "1" || dnt == "yes");
}
if (!doNotTrack) {
  const script = document.createElement("script");
  script.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id=G-QQ8KP42QSR");
  document.body.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-QQ8KP42QSR');
}