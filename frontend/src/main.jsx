import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { ApolloProvider } from '@apollo/client';
// import client from './utils/client';
import HomePage from './pages/homepage';
import SignInPage from './pages/signinpage';
import SignUpPage from './pages/signuppage';
import ErrorPage from './pages/errorpage'
import HistoryPage from './pages/historypage';
import App from './app';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/signup*',
        element: <SignUpPage />
      },
      {
        path: '/signin',
        element: <SignInPage />
      },
      {
        path: '/history',
        element: <HistoryPage />
      },
  
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ApolloProvider client={client}> */}
      <RouterProvider router={router} />
    {/* </ApolloProvider> */}
  </React.StrictMode>,
);