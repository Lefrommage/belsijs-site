import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/HomePage";
import AanbodPage from "../pages/AanbodPage";
import FoodtruckInfoPage from "../pages/FoodtruckInfoPage";
import LammetjespretPage from "../pages/LammetjespretPage";
import OntdekPage from "../pages/OntdekPage";
import ContactPage from "../pages/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "aanbod", element: <AanbodPage /> },
      { path: "foodtruck", element: <FoodtruckInfoPage /> },
      { path: "lammetjespret", element: <LammetjespretPage /> },
      { path: "ontdek", element: <OntdekPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
]);
