(function () {
  'use strict';

  /* ---- Brand Switcher ---- */
  var isFeisty = document.body.classList.contains('feisty');
  var adviceEl = document.getElementById('bs-advice');
  var feistyEl = document.getElementById('bs-feisty');

  if (adviceEl && feistyEl) {
    adviceEl.href = isFeisty ? '../index.html' : 'index.html';
    feistyEl.href = isFeisty ? 'index.html' : 'feisty/index.html';

    if (isFeisty) {
      feistyEl.classList.add('active');
      feistyEl.setAttribute('aria-current', 'site');
    } else {
      adviceEl.classList.add('active');
      adviceEl.setAttribute('aria-current', 'site');
    }
  }

  /* ---- WhatsApp Widget ---- */
  var btn = document.getElementById('waBtn');
  var panel = document.getElementById('waPanel');

  if (btn && panel) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = btn.getAttribute('aria-expanded') === 'true';
      panel.hidden = open;
      btn.setAttribute('aria-expanded', String(!open));
    });

    document.addEventListener('click', function (e) {
      if (!e.target.closest('#waWidget')) {
        panel.hidden = true;
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }
})();
