


const Help = ()=>{

 return(
  <>
   <section className="my6 px4 px5-sm">
    <h3 className="ff-rubik mb5 text-center fs7">FAQs</h3>
    <div>
     <div className="b rounded-3 p3">
      <div data-bs-toggle="collapse" data-bs-target="#faq" className="flex items-center">
       <div className="fw-semibold">How do I search for recipes?</div>
       <i className="fa-solid fa-angle-down ms-auto"></i>
      </div>
      <div className="collapse border-top mt2 pt3 fs2 opacity75" id="faq">
       You can search for recipes using the search bar at the top of the page. Simply type in the recipe name, ingredient, or cuisine you're looking for.
      </div>
     </div>
    </div>
   </section>
  </>
 )
};


export default Help;
