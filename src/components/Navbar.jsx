import {useState, useRef, useEffect} from 'react';
import {usePersistState} from '../../external-library/mkHooks/LocalStorage.js'


const Navbar = ({bg, text, setBg, setText})=>{
 let [themeIcon, setThemeIcon] = usePersistState('themeIcon', 'bi-sun-fill');
 let [drop, setDrop] = useState('d-none');
 let dropRef = useRef(null);


 const changeTheme = ()=>{
  setThemeIcon((prev)=> prev === 'bi-sun-fill'? 'bi-moon-fill': 'bi-sun-fill')
   setBg((prev)=> prev === 'bg-snow'? 'bg-night': 'bg-snow')
   setText((prev)=> prev === 'text-snow'? 'text-ebony': 'text-snow')
 }


 const dropdown = ()=>{
  setDrop((prev)=> prev === 'd-none'? 'd-inline': 'd-none') 

 }



 return(
  <>
   <section className="">
    <nav className={`navbar navbar-expand ${bg} ${text} bb2 b-red fixed-top py3 py4-sm `}>
     <div className="navbar-brand w20 w10-sm ps2">
      <a href="/"><img src="img/Logo.png" className="w100" /></a>
     </div>

     <form className=" w40-sm w50 ms-auto relative me3">
      <input className={`rounded-pill w100 bg-trans input ${text}  py3-sm fs2 fs3-sm p2 ps3 transit focus-fs1 b focus-b-orange focus-opacity75`} placeholder="Search for recipe..." />
      <i className="fa-solid fa-search absolute top-0 bottom-0  end-0 me-1 my1 cursor-pointer bg-orange text-snow px5 px7-sm py2 py2-sm  rounded-pill hover-bg-orange50 active-bg-red fs1 fs2-sm transit"></i>
     </form>

     <div className="navbar-nav ms-auto d-flex align-items-center gap-3 me3">

      <i className={`bi ${themeIcon} nav-item fs5`} onClick={()=>changeTheme()}></i>
      <i className="fa-solid fa-bars nav-item fs5 " onClick={()=>dropdown()}></i>
     </div>

     <div className={`fixed-top my14 my15-sm my17-md my18-lg shadow-sm d-grid ${bg} ${drop} border border-2 border-secondary border-opacity-10 w60 w30-md w30-sm rounded-3 py4 px1 ms-auto fs2 gap-2 `} ref={dropRef}>
      <a href="/favorite" className="hover-fade active-bg-orange p2 active-text-snow rounded-3 transit link-inherit"><i className="bi bi-star me2"></i>Favorite</a>
      <a href="/search" className="hover-fade active-bg-orange p2 active-text-snow rounded-3 transit link-inherit"><i className="bi bi-search me2"></i>Browse Recipe</a>

      <a href="/add-recipe" className="hover-fade active-text-snow active-bg-orange p2 rounded-3 transit link-inherit"><i className="bi bi-plus-circle me2" ></i>Add recipe</a>

      <a href="/about" className="hover-fade active-text-snow active-bg-orange p2 rounded-3 transit link-inherit"><i className="fa-regular fa-address-card fs1 me2"></i>About us </a>
      <a href="/help" className="hover-fade active-bg-orange active-text-snow p2 rounded-3 transit link-inherit"> <i className="bi bi-question-circle me2"></i>Help & Support</a>

      <div className="fs4 p2 d-flex justify-content-center gap-4 gap-lg-5 mt2 border-top border-1 pt5">
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
