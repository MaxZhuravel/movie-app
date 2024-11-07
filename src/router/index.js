import {createBrowserRouter, RouterProvider} from "react-router-dom";

import { router } from "./router";

export const MyRouter = () => (
    <RouterProvider router={createBrowserRouter(router)} />
)