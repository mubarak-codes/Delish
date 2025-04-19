import {useNavigate, Link} from 'react-router-dom'


const Hero = ({bg, text})=>{
 const navigate = useNavigate();


 return(
  <>
   <section className={`${bg} ${text} px3 px4-sm mt17  hover-bg-red50`}>
    Hero
    <Link to="#">hi</Link>
   </section>
  </>
 )
};

export default Hero;
