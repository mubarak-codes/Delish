import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import Layout1 from './layouts/Layout1.jsx';
import HomePage from './page/HomePage.jsx'
import SearchPage from './page/SearchPage.jsx'
import {usePersistState} from '../external-library/mkHooks/LocalStorage.js'
import NotFoundPage from './page/NotFoundPage'


function App() {


 const router = createBrowserRouter(
  createRoutesFromElements(
   <Route path='/' element={<Layout1 />} >
    <Route index element={<HomePage  />} />
    <Route path='/search' element={<SearchPage />} />
    <Route path='*' element={<NotFoundPage />} />

   </Route>
  )
 )


  return (
    <>
      <RouterProvider router={router} />
       
    </>
  )
}

export default App;
