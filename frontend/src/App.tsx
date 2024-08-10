import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';
import { Auth, Home } from './pages';

export const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={null} />
        <Route path="auth" element={<Auth />} />
        <Route path="home" element={<Home />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};
