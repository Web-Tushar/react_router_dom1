  import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,RouterProvider
  } from "react-router-dom";
  import Home from "./pages/home/Home"; 
  import About from "./pages/about/About";
  import Layout from "./pages/layoutsPage/Layout";
  import Contact from "./pages/contact/Contact";
  import Error from "./pages/error/Error";
  import News from "./pages/News/News";

  function App() {
  
    const router = createBrowserRouter(
      createRoutesFromElements(
        <>
  
          <Route element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/News" element={<News/>}/>
  
  
          </Route>
          <Route path="*" element={<Error/>}/>
  
  
        </>
  
      )
    );
    
  
    return (
      <RouterProvider router={router}/>
    )
  }
  
  export default App
  







