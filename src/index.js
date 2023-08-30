import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { persistor, store } from 'redux/store';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/your-pet-project-group1">
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <App />
        </PersistGate>
        </Provider>
    </BrowserRouter>
    
  </React.StrictMode>
);
