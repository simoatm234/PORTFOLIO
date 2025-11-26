import { RouterProvider } from "react-router-dom";
import { route } from "./servess/router/route.jsx";

export default function App() {
  return (
    <>
   <RouterProvider router={route} />
    </>
  );
}
