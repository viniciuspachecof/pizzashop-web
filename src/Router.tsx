import { createBrowserRouter } from 'react-router';
import { SignIn } from './pages/auth/sign-in';
import { AuthLayout } from './pages/_layouts/auth';
import { AppLayout } from './pages/_layouts/app';
import { SignUp } from './pages/auth/sign-up';
import { Orders } from './pages/app/orders/orders';
import { Dashboard } from './pages/app/dashboard/dashboard';
import { NotFound } from './pages/404';
import { Error } from './pages/error';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/orders', element: <Orders /> },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '/sign-in', element: <SignIn /> },
      { path: '/sign-up', element: <SignUp /> },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
