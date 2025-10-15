import { Button } from '@/components/ui/button';
import { Link, Outlet } from 'react-router'

function Layout() {
  return (
    <>
      <div className="bg-blue-600 p-1 flex justify-between">
        <h1>Layout</h1>
        <Button asChild>
          <Link to="home">Home</Link>
        </Button>
        <Button asChild>
          <Link to="selectComponent">SelectComponents</Link>
        </Button>
        <Button asChild>
          <Link to="validationPattern">Validation Pattern</Link>
        </Button>
      </div>
      <Outlet />
    </>
  );
}

export default Layout;