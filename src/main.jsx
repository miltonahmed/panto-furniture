import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import App from './App';
import './index.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Shope from './pages/Shope';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about-us',
        element: <About />,
      },
      {
        path: '/contact-us',
        element: <Contact/>,
      },
      {
        path: '/shope',
        element: <Shope/>,
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
