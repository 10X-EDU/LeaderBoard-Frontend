import { createBrowserRouter, RouterProvider } from "react-router"
import SignInPage from "./pages/auth/signin/SignInPage"
import SignUpPage from "./pages/auth/signup/SignUpPage"
import MainLayout from "./layouts/MainLayout"

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/",
        Component: SignInPage
      },
      {
        path: "/signup",
        Component: SignUpPage
      }
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App