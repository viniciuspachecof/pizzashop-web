import { Outlet } from 'react-router';

export function AppLayout() {
  return (
    <>
      <h1>Cabeçalho</h1>
      <div>
        <Outlet />
      </div>
    </>
  );
}
