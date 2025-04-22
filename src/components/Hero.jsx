import {useNavigate, Link} from 'react-router-dom'


const Hero = ()=>{
 const navigate = useNavigate();


 return(
  <>
   <section className={`  py6 px4 px5-sm `}>
    <div className="row justify-content-center gap-3">
     <h1 className="text-center ff-rubik fs10">Discover Delicious Recipes</h1>
     <h5 className="text-center fw-normal fs4 opacity75">Explore our collection of easy-to-follow recipe from appetizers to desserts</h5>
     <a href="/search" className="text-white bg-orange w50 text-center py3 rounded-3 hover-bg-red transit cursor-pointer fs2">Browse Recipes</a>
    </div>
   </section>

  </>
 )
};

export default Hero;
