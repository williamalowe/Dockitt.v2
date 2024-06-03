import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "../../views/App/App"
import Tasks from "../../views/Tasks/Tasks"

const Router = () => {
  const Router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <>Error</>,
      children: [
        {
          index: true,
          element: <>Page</>
        },
        {
          path: '/tasks',
          element: <Tasks />
        },
        {
          path: '/dashboard',
          element: <>Dashboard</>
        }
      ] 
    }
  ])
  return <RouterProvider router={Router} />
}

export default Router
