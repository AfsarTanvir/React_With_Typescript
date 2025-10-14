import { Outlet } from 'react-router'

function Layout() {
  return (
    <>
      <div>
        <h1>I am Layout</h1>
      </div>
      <Outlet />
    </>
  );
}

export default Layout;