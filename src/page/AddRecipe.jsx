import {toast} from 'react-toastify';
import {useNavigate} from 'react-router-dom'


const AddRecipe = ({bg, text})=>{
 let navigate = useNavigate()

 const submitForm = ()=>{
  toast.success("Recipe added successfully")
  navigate("/")
 }

 return(
  <>
   <section className="my6 px4 px5-sm">
    <h3 className="fs7 mb5 ff-rubik text-center">Add Recipe</h3>
    <form onSubmit={submitForm}>
    <label htmlFor="full-name" className="fw-bolder fs2 mb3">Full Name</label>
    <input type="text" id="full-name" placeholder="Enter Full Name" className={`form-control bg-trans text-gray rounded-pill input fs2 mb5 focus-input`} required/>
    <label htmlFor="full-name" className="fw-bolder fs2 mb3">Add Image</label>
    <input type="file" id="image" accept="image/*" className={`form-control bg-trans text-gray focus-input rounded-pill input fs2 mb5`} />
    <label htmlFor="full-name" className="fw-bolder fs2 mb3">Title</label>
    <input type="text" id="full-name" placeholder="Enter post title" className={`form-control bg-trans text-gray rounded-pill input fs2 mb5 focus-input`} required/>
    <label htmlFor="full-name" className="fw-bolder fs2 mb3">Body</label>
    <textarea id="full-name" rows="8" placeholder="Enter post body" className={`form-control bg-trans text-gray rounded-4 input fs2 mb5 focus-input`} required></textarea>
     <div className="flex content-center"><button type="submit" className="bg-orange text-snow hover-bg-red rounded-4 text-center fs2 p2 px4" >Submit</button></div>
    </form>

   </section>
  </>
 )
};

export default AddRecipe;
