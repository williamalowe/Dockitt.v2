import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../../views/App/App";
import Kanban from "../../views/Kanban/Kanban";
import Tasks from "../../views/Tasks/Tasks";
import Dashboard from "../../views/Dashboard/Dashboard";

const Router = () => {
  const Router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <>Error</>,
      children: [
        {
          index: true,
          element: <Tasks />
        },
        {
          path: '/kanban',
          element: <Kanban />
        },
        {
          path: '/dashboard',
          element: <Dashboard />
        }
      ] 
    }
  ])
  return <RouterProvider router={Router} />
}

export default Router
