import {useState, useRef} from 'react';
import {usePersistState} from '../../external-library/mkHooks/LocalStorage.js'


const Navbar = ()=>{
 let [themeIcon, setThemeIcon] = usePersistState('themeIcon', 'bi-sun-fill');
 let [bg, setBg] = usePersistState('themeBg', 'bg-white')
 let [text, setText] = usePersistState('themeText', 'text-black')


 const changeTheme = ()=>{
  setThemeIcon((prev)=> prev === 'bi-sun-fill'? 'bi-moon-fill': 'bi-sun-fill')
   setBg((prev)=> prev === 'bg-white'? 'bg-dark': 'bg-white')
   setText((prev)=> prev === 'text-white'? 'text-black': 'text-white')
 }


 return(
  <>
   <section>
    <nav className={`navbar navbar-expand ${bg} ${text} border-b-2 border-red-600 fixed-top px-3`}>
     <div className="navbar-brand w-20 w-10-sm">
      <img src="img/Logo.png" className="w-100" />
     </div>

     <form className=" w-50-sm w-60 ms-auto relative me-3">
      <input className={`form-control rounded-pill border-2 w-100 bg-secondary bg-opacity-10 input ${text}  py-sm-3 mfs-2 mfs-3-sm`} placeholder="Search for recipe..." />
      <i className="fa-solid fa-search absolute top-0 bottom-0 my-1 end-0 me-1 cursor-pointer bg-orange text-white px-3 px-sm-5 py-sm-3 py-2 rounded-pill click-grow"></i>
     </form>

     <div className="navbar-nav ms-auto d-flex align-items-center gap-3">

      <i className={`bi ${themeIcon} nav-item mfs-6`} onClick={()=>changeTheme()}></i>
      <i className="fa-solid fa-bars nav-item mfs-6"></i>
     </div>

     <div className={`fixed-top mt-16 d-grid ${bg} border border-2 border-secondary border-opacity-10 w-40 rounded-3 p-3 ms-auto me-2 mfs-2 gap-2 `}>
      <div className="active:text-blue-500">Favorite</div>
      <div>About us </div>
      <div> Help & Support</div>
     </div>
    </nav>
   </section>
  </>
 )
};

export default Navbar;
