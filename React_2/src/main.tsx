import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './HomePage.tsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import ProfilesPage from './pages/ProfilesPage.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />
  },
  {
    path: "/profiles",
    element: <ProfilesPage />,
  }
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
