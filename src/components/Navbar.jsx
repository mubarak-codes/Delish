import {useState, useRef} from 'react';
import {usePersistState} from '../../external-library/mkHooks/LocalStorage.js'


const Navbar = ()=>{
 let [themeIcon, setThemeIcon] = usePersistState('themeIcon', 'bi-sun-fill');
 let [bg, setBg] = usePersistState('themeBg', 'bg-snow')
 let [text, setText] = usePersistState('themeText', 'text-ebony')


 const changeTheme = ()=>{
  setThemeIcon((prev)=> prev === 'bi-sun-fill'? 'bi-moon-fill': 'bi-sun-fill')
   setBg((prev)=> prev === 'bg-snow'? 'bg-night': 'bg-snow')
   setText((prev)=> prev === 'text-snow'? 'text-ebony': 'text-snow')
 }


 return(
  <>
   <section>
    <nav className={`navbar navbar-expand ${bg} ${text} bb2 b-red fixed-top px3 py3 py4-sm`}>
     <div className="navbar-brand w20 w10-sm">
      <img src="img/Logo.png" className="w100" />
     </div>

     <form className=" w50-sm w60 ms-auto relative me-3">
      <input className={`form-control rounded-pill border-2 w100 bg-gray10 input ${text}  py3-sm fs2 fs3-sm`} placeholder="Search for recipe..." />
      <i className="fa-solid fa-search absolute top-0 bottom-0  end-0 me-1 my1 cursor-pointer bg-orange text-snow px5 px7-sm py3-sm  rounded-pill hover-bg-orange50 active-bg-red fs1 fs3-sm transit"></i>
     </form>

     <div className="navbar-nav ms-auto d-flex align-items-center gap-3">

      <i className={`bi ${themeIcon} nav-item fs5`} onClick={()=>changeTheme()}></i>
      <i className="fa-solid fa-bars nav-item fs5"></i>
     </div>

     <div className={`fixed-top my15 my15-sm my15-md my15-lg shadow-sm d-grid ${bg} border border-2 border-secondary border-opacity-10 w50 w25-md w30-sm rounded-3 py4 px1 ms-auto me-2 fs2 gap-2 `}>
      <div className="hover-fade active-bg-orange p2 active-text-snow rounded-3 transit"><i className="bi bi-star me2"></i>Favorite</div>
      <div className="hover-fade active-text-snow active-bg-orange p2 rounded-3 transit"><i className="fa-regular fa-address-card fs1 me2"></i>About us </div>
      <div className="hover-fade active-bg-orange active-text-snow p2 rounded-3 transit "> <i className="bi bi-question-circle me2"></i>Help & Support</div>

      <div className="fs4 p2 d-flex justify-content-center gap-3 mt2 border-top pt5">
       <i className="fa-brands fa-youtube hover-text-orange transit"></i> 
       <i className="fa-brands fa-facebook hover-text-orange transit"></i>
       <i className="fa-brands fa-instagram hover-text-orange transit"></i>
       <i className="fa-brands fa-tiktok hover-text-orange transit"></i>
      </div>   
     </div>
    </nav>
   </section>
  </>
 )
};

export default Navbar;
