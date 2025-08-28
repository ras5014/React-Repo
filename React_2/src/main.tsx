import { createRoot } from 'react-dom/client'
import './index.css'
// React Router Setup
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
//....
import HomePage from './HomePage.tsx'
import ProfilesPage from './pages/ProfilesPage.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';
import ProfileDetailsPage from './pages/ProfileDetailsPage.tsx';
import Layout from './layouts/Layout.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Go to this component to understand layout (Use Outlet to achieve this)
    children: [
      {
        index: true,
        element: <HomePage />,
        /* This will be shown if n o other routes match 
            - If you want only one not found page for the entire application, 
              then you can only give errorElement in base route
        */
        errorElement: <NotFoundPage />
      },
      {
        path: "profiles",
        element: <ProfilesPage />,
        children: [{
          path: ":profileId", // This is for Dynamic routes (useParams().profileId will have this value)
          element: <ProfileDetailsPage />
        }]
      },
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
