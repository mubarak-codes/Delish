


const SearchPage = ()=>{

 return(
  <>
   <section className="my7 mt12 px4 px20-md px10-sm">
    <div className="flex items-center gap-2 mb6 px20-md px10-sm">
     <input placeholder="Search for recipes" type="text" className=" bg-trans b focus-b-orange focus-input input focus-opacity75 rounded-3 d-inline fs2 focus-fs1 w100 ps3 transit text-inherit py3" />
     <div className="d-inline bg-orange hover-bg-red p2 px4 fs2 rounded-3 text-snow cursor-pointer transit">Search</div>
    </div>

    <div className="flex gap-2 my10 fs2 px20-md px10-sm">
     <select className="b select focus-b-orange rounded-3 w100 focus-fs1 focus-opacity75 fs2 bg-trans rounded-3 text-gray transit px3 ">
      <option value="Breakfast">Breakfast</option>
      <option value="Lunch">Lunch</option>
      <option value="Dinner">Dinner</option>
     </select>

     <select className="focus-opacity75 focus-fs1 focus-b-orange b transit w100 px3 fs2 bg-trans text-gray rounded-3 ">
      <option value="Vegetarian">Vegetarian</option>
      <option value="Vegan">Vegan</option>
      <option value="Halal">Halal</option>
      <option value="Gluten free">Gluten free</option>
     </select>
    </div>
   
    <div className="flex content-center px20-md px10-sm">
     <select className="focus-opacity75 focus-fs1 b focus-b-orange rounded-3 transit fs2 bg-trans text-gray px3  w60">
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
