import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "productDetails/:id",
    element: <ProductDetails />
  }
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
