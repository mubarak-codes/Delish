import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import Layout1 from './layouts/Layout1.jsx';
import HomePage from './page/HomePage.jsx'
import SearchPage from './page/SearchPage.jsx'
import {usePersistState} from '../external-library/mkHooks/LocalStorage.js'
import NotFoundPage from './page/NotFoundPage'
import Favorite from './page/Favorite'
import AddRecipe from './page/AddRecipe'
import About from './page/About'
import Help from './page/Help'



function App() {
 let [bg, setBg] = usePersistState('themeBg', 'bg-snow')
 let [text, setText] = usePersistState('themeText', 'text-ebony')

 document.body.className = `${bg} ${text}`



 const router = createBrowserRouter(
  createRoutesFromElements(
   <Route path='/' element={<Layout1 bg={bg} text={text} setText={setText} setBg={setBg} />} >
    <Route index element={<HomePage  />} />
    <Route path='/search' element={<SearchPage />} />
    <Route path='*' element={<NotFoundPage />} />
    <Route path='/favorite' element={<Favorite />} />
    <Route path='/add-recipe' element={<AddRecipe />} />
    <Route path='/about' element={<About />} />
    <Route path='/help' element={<Help />} />
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
