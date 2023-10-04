import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { UserProvider } from './context/user.context';
import { AuthContextProvider } from './context/ChatAuthContext';
import { ChatContextProvider } from './context/ChatContext';
import { BrowserRouter } from 'react-router-dom' //Imports the router

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <UserProvider>
      <AuthContextProvider>
        <ChatContextProvider>
          <App />
        </ChatContextProvider>
      </AuthContextProvider>
    </UserProvider>
  </BrowserRouter>
);

