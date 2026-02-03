(function () {
  var descriptionEl = document.getElementById('sermons-description');
  var btnEl = document.getElementById('read-more-btn');
  var collapsedHeight = 120;

  function getCollapsedHeight() {
    if (!descriptionEl) return collapsedHeight;
    var lineHeight = parseInt(getComputedStyle(descriptionEl).lineHeight, 10) || 24;
    return lineHeight * 5;
  }

  function isExpanded() {
    return descriptionEl && descriptionEl.classList.contains('is-expanded');
  }

  function expand() {
    if (!descriptionEl || !btnEl) return;
    descriptionEl.classList.add('is-expanded');
    descriptionEl.style.maxHeight = descriptionEl.scrollHeight + 'px';
    btnEl.textContent = 'Read Less';
    btnEl.setAttribute('aria-expanded', 'true');
  }

  function collapse() {
    if (!descriptionEl || !btnEl) return;
    descriptionEl.classList.remove('is-expanded');
    descriptionEl.style.maxHeight = getCollapsedHeight() + 'px';
    btnEl.textContent = 'Read More';
    btnEl.setAttribute('aria-expanded', 'false');
  }

  function toggle() {
    if (isExpanded()) {
      collapse();
    } else {
      expand();
    }
  }

  if (btnEl) {
    btnEl.addEventListener('click', toggle);
  }

  if (descriptionEl) {
    descriptionEl.style.maxHeight = getCollapsedHeight() + 'px';
  }
})();
