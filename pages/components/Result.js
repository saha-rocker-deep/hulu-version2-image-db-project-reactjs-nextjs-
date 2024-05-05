import Thumbnail from "./Thumbnail";
import {BsFillHandThumbsUpFill}  from "react-icons/bs";
export default  function Result(props){

    //console.log(props.data.results[0],"from Result.js");
    return(

   <div className="px-5  gap-10 flex flex-col my-20 sm:grid  md:grid-cols-2  lg:grid-cols-3 2xl:grid-cols-4  ">
   {props.data.results.map((result)=>(

<Thumbnail key={result.id} Icon={BsFillHandThumbsUpFill} result={result}/>


   ))}
   
   </div>

    )
}