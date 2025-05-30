import { Outlet } from 'react-router';

export function AuthLayout() {
  return (
    <>
      <h1>Autenticação</h1>
      <div>
        <Outlet />
      </div>
    </>
  );
}
