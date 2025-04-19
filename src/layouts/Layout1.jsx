import {Outlet} from 'react-router-dom';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import {usePersistState} from '../../external-library/mkHooks/LocalStorage.js'




const Layout1 = ()=>{
 let [bg, setBg] = usePersistState('themeBg', 'bg-snow')
 let [text, setText] = usePersistState('themeText', 'text-ebony')

 document.body.className = `${bg} ${text} transit`

 return(
  <>
   <section>
    <Navbar bg={bg} text={text} setText={setText} setBg={setBg} />
    <Outlet bg={bg} text={bg}  />
    <Footer />
   </section>
  </>
 )
};

export default Layout1;
