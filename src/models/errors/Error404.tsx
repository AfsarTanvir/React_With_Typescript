import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Error404({title}: {title:string}) {
  return (
    <>
      <h1> Page Not Found - {title}</h1>
      <div>
        <Button className="m-2" asChild>
          <Link to="/">Home Page</Link>
        </Button>
        <img className="w-full" src="src/images/image.jpg" />
      </div>
    </>
  );
}

export default Error404;