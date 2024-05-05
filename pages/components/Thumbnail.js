import Image from "next/image";

export default  function Thumbnail({result,Icon}){
const Base_url="https://image.tmdb.org/t/p/original/";
return(

<div className="group w-1/1  h-1/3 cursor-pointer   hover:scale-110 ">
    
<Image   className="group-hover:animate-pulse   " layout="responsive"  src={`${Base_url}${result.backdrop_path}`} width={2000}  height={1900}/>


<div  className="p-2">

<p  className="truncate max-w-md">  {result.overview}</p>
<h2 className="text-3xl transition-all duration-100 ease-in-out mt-1 text-white group-hover:font-bold">  {result.title|| result.original_name}</h2>

<p className="text-3xl  gap-2  font-bold     group-hover:opacity-100 opacity-0 flex  items-center">


{result.release_date} .{""}
<Icon/>

{result.vote_count}

</p>

</div>


    </div>
   
)



}