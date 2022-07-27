// https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia
// https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList

export const setupBodyColorScheme = () => {
  var mql = window.matchMedia('(prefers-color-scheme: dark)');

  mql.addEventListener('change', evt => {
    if (evt.matches) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  });
};
