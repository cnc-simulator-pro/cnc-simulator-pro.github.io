(function () {
  var header = document.querySelector('header.site');
  var btn = document.querySelector('.menu-btn');
  if (!header || !btn) return;
  btn.addEventListener('click', function () {
    var open = header.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();
