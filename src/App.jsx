
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './App.css'
import Body from './components/Body'
import Head from './components/Head'
import HeroSection from "./components/HeroSection"
import WatchPage from "./components/WatchPage"

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <HeroSection />
      },
      {
        path: "watch",
        element: <WatchPage />

      }

    ]
  }
])
function App() {

  return (

    <>

      <Head />
      <RouterProvider router={appRouter} />

    </>
  )
}

export default App
