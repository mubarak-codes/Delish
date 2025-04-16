import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import Layout1 from './layouts/Layout1';
import HomePage from './pages/HomePage'
import SearchPage from './pages/SearchPage'


function App() {

 const router = createBrowserRouter(
  createRoutesFromElements(
   <Route path="/" element={<Layout1 />} >
    <Route index element={<HomePage />} />
    <Route path="/search" element={<SearchPage />} />

   </Route>
  )
 )


  return (
    <>
      <RouterProvider router={router} />
       
    </>
  )
}

export default App
