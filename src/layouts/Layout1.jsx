import {Outlet} from 'react-router-dom';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'



const Layout1 = ()=>{

 return(
  <>
   <section>
    <Navbar />
    <Outlet />
    <Footer />
   </section>
  </>
 )
};

export default Layout1;
