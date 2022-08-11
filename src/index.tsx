import { setupBodyColorScheme } from './utils/dark-mode';
import { getDOMHeight } from './utils/get-dom-height';
import { renderReactNodeAt } from './utils/react-utils/render-react-node-at';
import { asyncGetReactNodeStyle } from './utils/react-utils/async-get-react-node-style';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    console.log('App rendered...');
  }, []);
  return <div>app</div>;
};
console.log('./src/index.render');
const style = asyncGetReactNodeStyle(<App />);
// renderReactNodeAt(<App />, document.querySelector('#root') as HTMLElement);

const setup = () => {
  setupBodyColorScheme();
  window.addEventListener('beforeunload', () => {
    localStorage.setItem('beforeunload', 'success');
  });

  window.addEventListener('unload', () => {
    localStorage.setItem('unload', 'success');
  });
};

setup();
