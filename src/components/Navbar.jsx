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
    <nav className={`navbar navbar-expand ${bg} ${text} border-bottom border-2 border-danger fixed-top px-3`}>
     <div className="navbar-brand w20 w10-sm">
      <img src="img/Logo.png" className="w100" />
     </div>

     <form className=" w50-sm w60 ms-auto relative me-3">
      <input className={`form-control rounded-pill border-2 w100 bg-secondary bg-opacity-10 input ${text} py1 py3-sm fs2 fs3-sm`} placeholder="Search for recipe..." />
      <i className="fa-solid fa-search absolute top-0 bottom-0  end-0 me-1 my1 cursor-pointer bg-orange text-white px-3 px-sm-5 py-sm-3 py-2 rounded-pill hover-bg-orange50 active-bg-red fs1 fs3-sm"></i>
     </form>

     <div className="navbar-nav ms-auto d-flex align-items-center gap-3">

      <i className={`bi ${themeIcon} nav-item fs5`} onClick={()=>changeTheme()}></i>
      <i className="fa-solid fa-bars nav-item fs5"></i>
     </div>

     <div className={`fixed-top my12  my20-md my10-smd shadow-sm d-grid ${bg} border border-2 border-secondary border-opacity-10 w40 w25-sm  rounded-3 p3 ms-auto me-2 fs2 gap-2 `}>
      <div className="text-info:active">Favorite</div>
      <div>About us </div>
      <div> Help & Support</div>
     </div>
    </nav>
   </section>
  </>
 )
};

export default Navbar;
