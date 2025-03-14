import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/scss/style.scss';


//const root = ReactDOM.createRoot(document.getElementById('root'))
// 는 HTML에서 id="root"인 요소를 찾아 React의 루트 컨테이너를 
// 생성하고, 이 컨테이너를 통해 React 애플리케이션을 렌더링할 
// 준비를 하는 코드입니다.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

