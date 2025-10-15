import { Button } from '@/components/ui/button';
import { Link, Outlet } from 'react-router'

function Index() {
  return (
    <>
      <div className="m-1 p-1 bg-stone-700 flex justify-between">
        <h1>Validation Pattern</h1>
        <Button asChild>
          <Link to="basic01">Login Form Basic Validation</Link>
        </Button>
        <Button asChild>
          <Link to="reactHookForm01">React Hook Form</Link>
        </Button>
        <Button asChild>
          <Link to="reactHookForm02_withZod">React Hook Form with Zod</Link>
        </Button>
      </div>
      <br />
      <Outlet />
    </>
  );
}

export default Index;