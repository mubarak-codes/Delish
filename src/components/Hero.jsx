import {useNavigate, Link} from 'react-router-dom'


const Hero = ()=>{
 const navigate = useNavigate();


 return(
  <>
   <section className="py6 px4 px15-md px7-sm d-grid gr2-sm gap-5">
    <div className="">
     <h1 className="text-center text-sm-start ff-rubik mb4">Discover Delicious Recipes</h1>
     <div className="text-center text-sm-start opacity75 mb5">Explore our collection of easy-to-follow recipe from all over the world from appetizers to desserts</div>
    
    <a href="/search" className="flex content-center content-start-sm text-snow link">
     <div className="bg-orange hover-bg-red p3 px4 fs2 rounded-pill">Browse recipes</div>
    </a>
    </div>

    <img src="img/Pizza.png" className="w70 w60-lg d-none d-sm-inline ms-auto" />
   </section>

  </>
 )
};

export default Hero;
