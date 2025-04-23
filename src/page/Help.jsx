


const Help = ()=>{

 return(
  <>
   <section className="my6 px4 px5-sm">
    <h3 className="ff-rubik mb5 text-center fs7">FAQs</h3>
    <div className="gap-3 d-grid">
     <div className="b rounded-3 p3">
      <div data-bs-toggle="collapse" data-bs-target="#faq1" className="flex items-center">
       <div className="fw-semibold">How do I search for recipes?</div>
       <i className="fa-solid fa-angle-down ms-auto"></i>
      </div>
      <div className="collapse border-top mt2 pt3 fs2 opacity75" id="faq1">
       You can search for recipes using the search bar at the top of the page. Simply type in the recipe name, ingredient, or cuisine you're looking for.
      </div>
     </div>

     <div className="b rounded-3 p3">
      <div data-bs-toggle="collapse" data-bs-target="#faq2" className="flex items-center">
       <div className="fw-semibold">Can I submit my own recipes?</div>
       <i className="fa-solid fa-angle-down ms-auto"></i>
      </div>
      <div className="collapse border-top mt2 pt3 fs2 opacity75" id="faq2">
       Yes, you can! To submit a recipe, simply click the "Add Recipe" button in the navigation menu and follow the instructions. We look forward to reviewing your submission!
      </div>
     </div>
     <div className="b rounded-3 p3">
      <div data-bs-toggle="collapse" data-bs-target="#faq3" className="flex items-center">
       <div className="fw-semibold">Can I save recipes for later?</div>
       <i className="fa-solid fa-angle-down ms-auto"></i>
      </div>
      <div className="collapse border-top mt2 pt3 fs2 opacity75" id="faq3">
       You can save recipes to your favorites by clicking the star icon on the recipe post. This allows you to easily access your favorite recipes later.
      </div>
     </div>
    </div>

    <h3 className="ff-rubik text-center fs7 mb5 mt8">Contact Us</h3>

    <div className="fs6 d-flex justify-content-center gap-3 gap-lg-4">
       <i className="fa-solid fa-phone hover-text-orange transit"></i> 
       <i className="fa-brands fa-facebook hover-text-orange transit"></i>
       <i className="fa-brands fa-instagram hover-text-orange transit"></i>
       <i className="fa-solid fa-envelope hover-text-orange transit"></i>
    </div>
   </section>
  </>
 )
};


export default Help;
