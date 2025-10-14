import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router";
import Layout from "./models/Layout";
import Home from "./models/Home";
import Error404 from "./models/errors/Error404";
import LoginFormBasicValidation from "./models/validationPattern/BasicValidation01";
import ReactHookForm01 from "./models/validationPattern/ReactHookForm01";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="validationPattern">
          <Route path="basic01" element={<LoginFormBasicValidation />} />
          <Route path="reactHookForm01" element={<ReactHookForm01 />} />
        </Route>
        <Route path="*" element={<Error404 title={"Could Not Find Page."} />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
