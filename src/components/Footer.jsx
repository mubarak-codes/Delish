


const Footer = ()=>{

 return(
  <>
   <section className="mt13 border-top border-2 py4 px4 px5-sm">
    <div className="">
     <div className="fs4 d-flex justify-content-center gap-3 gap-lg-4 my3 mb6">
      <i className="fa-brands fa-youtube hover-text-orange transit"></i> 
      <i className="fa-brands fa-facebook hover-text-orange transit"></i>
      <i className="fa-brands fa-instagram hover-text-orange transit"></i>
      <i className="fa-brands fa-tiktok hover-text-orange transit"></i>
      <i className="fa-solid fa-phone hover-text-orange transit"></i>
      <i className="fa-solid fa-envelope hover-text-orange transit"></i>
     </div>
     <div className="fs2 text-nowrap flex gap-3">
      <a href="/favorite" className="">Favorite</a>
      <a href="/add-recipe" className="">Add Recipe</a>
      <a href="/about" className="">About</a>
      <a href="/help" className="">Help & Support</a>
     </div>  

     <div className="fs1 text-center mt6 opacity75">© Delish 2025</div>
    </div>
   </section>
  </>
 )
}


export default Footer;
