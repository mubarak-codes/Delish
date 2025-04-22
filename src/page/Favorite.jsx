import {useQuery} from '@tanstack/react-query';


const Favorite = ()=>{

 let {data, isLoading} = useQuery({
  queryFn: fetchFavorite,
  queryKey: ["favorite"]
 })

 return(
  <>
   <section className="px4 px5-sm mt6">
    <h3 className="ff-rubik fs7 text-center mb5">Favorite</h3>
    {isLoading? <div className="text-center">Loading...</div>: 
    <div className="d-grid gr2-sm gap-3 gr3-md">
     {data?.map((favorite)=>(
      <div key={favorite.id} className="">
       <div className="text-break relative bb2 pb3 mb3">
        <i className="bi bi-star-fill text-snow absolute top-0 end-0 m3 fs4 bg-gray75 rounded-circle px1 "></i> 
        <img src={favorite.image} className="w100 rounded-3 mb6 h200px" />
        <h5 className="fw-bolder fs2">{favorite.title}</h5>
        <div className="fs1 opacity-75 mb2">{favorite.body.substring(0, 80)} . . .</div>
        <div className="fs1 opacity-75">{favorite.date}</div>
       </div>

      </div>
     ))}
    </div>
    }
   </section>
  </>
 )
};

const fetchFavorite = ()=>{
 return fetch('https://gist.githubusercontent.com/mubarak-codes/91ae5350812a09ad40b9ca3cb8b920f0/raw/66db9a429575548fcd635d66000a51c8a09a6de7/Favorite.json')
  .then(res=> res.json())
  .then(data=>{
   return data;
  })
}

export default Favorite;
