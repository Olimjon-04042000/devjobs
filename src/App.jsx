import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import Navbar from "./components/Navbar"
import Search from "./components/Search"
import Jobs from "./components/Jobs"


const  router= createBrowserRouter([

  {
    path:"/",
    element: <Home />
  },
  {
    path:"blog/:id",
    element: <Blog />
  }
])


function App() {


  return (
    <>
        <Navbar />
        <Search />
        <Jobs />
    {/* <RouterProvider router={router} /> */}
    </>
  )
}

export default App
