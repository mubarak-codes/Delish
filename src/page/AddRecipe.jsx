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
   <section className="my6 px4 px20-sm">
    <h3 className="fs7 mb5 ff-rubik text-center">Add Recipe</h3>
    <form onSubmit={submitForm}>
    <label htmlFor="full-name" className="fw-bolder fs2 mb3">Full Name</label>
    <input type="text" id="full-name" placeholder="Enter Full Name" className={`focus-opacity75 b focus-b-orange focus-fs1 bg-trans text-gray rounded-pill fs2 mb5 transit`} required/>
    <label htmlFor="image" className="fw-bolder fs2 mb3">Add Image</label>
    <input type="file" id="image" accept="image/*" className={`focus-b-orange form-control focus-opacity75 b transit bg-trans text-inherit rounded-pill  fs2 mb5`} />
    <label htmlFor="title" className="fw-bolder fs2 mb3">Title</label>
    <input type="text" id="title" placeholder="Enter post title" className={`focus-opacity75 focus-b-orange focus-fs1 transit bg-trans text-inherit rounded-pill fs2 mb5 b`} required/>
    <label htmlFor="body" className="fw-bolder fs2 mb3">Body</label>
    <textarea id="body" rows="8" placeholder="Enter post body" className={`focus-fs1 focus-b-orange focus-opacity75 bg-trans text-inherit rounded-4 b transit fs2 mb5`} required></textarea>
     <div className="flex content-center"><button type="submit" className="bg-orange text-snow hover-bg-red rounded-pill text-center fs2 p2 px4" >Submit</button></div>
    </form>

   </section>
  </>
 )
};

export default AddRecipe;
