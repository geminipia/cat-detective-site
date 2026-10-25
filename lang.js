(function () {
  var KEY = 'site-lang';
  var lang = null;
  try { lang = localStorage.getItem(KEY); } catch (e) {}
  if (lang !== 'ko' && lang !== 'en') lang = (navigator.language || '').toLowerCase().indexOf('ko') === 0 ? 'ko' : 'en';
  function apply(l) {
    document.documentElement.lang = l;
    document.querySelectorAll('.langs button').forEach(function (b) { b.classList.toggle('on', b.dataset.lang === l); });
    var t = document.querySelector('title[data-ko]');
    if (t) document.title = t.getAttribute('data-' + l);
    try { localStorage.setItem(KEY, l); } catch (e) {}
  }
  document.querySelectorAll('.langs button').forEach(function (b) { b.addEventListener('click', function () { apply(b.dataset.lang); }); });
  apply(lang);
})();
