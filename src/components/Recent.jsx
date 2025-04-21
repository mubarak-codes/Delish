import {useState} from 'react';
import {useQuery} from '@tanstack/react-query'


const Recent = ()=>{
 let [addFavorite, setAddFavorite] = useState('bi-star');
 let {data: recipes, isLoading} = useQuery({
  queryFn: fetchRecipe,
  queryKey: ['recipe']
 });


 let addToFavorite = ()=>{
  console.log(223)
 }

 return(
  <>
   <section className="w100 mt5 px4 px5-sm py4">
    <h3 className="ff-rubik text-center fs7 mb6 ">Recent Recipes</h3>
    {isLoading? <div className="text-center">Loading...</div>:
    <div className="d-grid gr2-sm gr3-md gap-3">
     {recipes?.map((recipe)=>(
     <div className="text-break relative bb2 pb3 mb3" key={recipe.id}>
      <i className="bi bi-star absolute top-0 end-0 m3 fs4 bg-gray75 rounded-circle px1 text-snow" onClick={addToFavorite}></i> 
      <img src="img/HeroBackground.jpg" className="w100 rounded-3 mb6 h200px" />
      <h5 className="fw-bolder fs2">{recipe.title}</h5>
      <div className="fs1 opacity-75 mb2">{recipe.body.substring(0, 70)} . . .</div>
      <div className="fs1 opacity-75">{recipe.date}</div>
     </div>
     ))}
    </div>
    }
   </section>
  </>
 )
};

const fetchRecipe = ()=>{
 return fetch('https://gist.githubusercontent.com/mubarak-codes/8ecb0cbe679ccc14a84c190ca56ad6ef/raw/c55bad42387c173d499d0eab69d22e26eadefc57/recipe.json')
  .then(res=> res.json())
}

export default Recent;
