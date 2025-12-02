import { createBrowserRouter } from "react-router";
import { LandingPage } from "../pages/LandingPage";
import { UserTypeSelect } from "../pages/UserTypeSelect";
import { TravelerForm } from "../pages/TravelerForm";
import { LocalForm } from "../pages/LocalForm";
import { SuccessPage } from "../pages/SuccessPage";
import { AdminPage } from "../pages/AdminPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/select-type",
    Component: UserTypeSelect,
  },
  {
    path: "/traveler-form",
    Component: TravelerForm,
  },
  {
    path: "/local-form",
    Component: LocalForm,
  },
  {
    path: "/success",
    Component: SuccessPage,
  },
  {
    path: "/admin",
    Component: AdminPage,
  },
]);
