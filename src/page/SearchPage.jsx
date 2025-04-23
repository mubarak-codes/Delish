


const SearchPage = ()=>{

 return(
  <>
   <section className="my7 px4 px5-sm">
    <div className="flex items-center gap-2 mb6">
     <input placeholder="Search for recipes" type="text" className="form-control bg-trans input focus-input rounded-3 d-inline fs2 text-gray py3" />
     <div className="d-inline bg-orange hover-bg-red p3 px4 fs2 rounded-3 text-snow cursor-pointer transit">Search</div>
    </div>

    <div className="flex gap-3 mb6 fs2">
     <select className="form-select fs2 bg-trans text-gray py3">
      <option value="Breakfast">Breakfast</option>
      <option value="Lunch">Lunch</option>
      <option value="Dinner">Dinner</option>
     </select>

     <select className="form-select fs2 bg-trans text-gray py3">
      <option value="Vegetarian">Vegetarian</option>
      <option value="Vegan">Vegan</option>
      <option value="Halal">Halal</option>
      <option value="Gluten free">Gluten free</option>
     </select>
    </div>
   
    <div className="flex content-center">
     <select className="form-select fs2 bg-trans text-gray py3 w60">
      <option value="Snacks">Snacks</option>
      <option value="Desserts">Desserts</option>
      <option value="Appetizers">Appetizers</option>
      <option value="Side Dishes">Side Dishes</option>
     </select>
    </div>

   </section>
  </>
 )
};


export default SearchPage
