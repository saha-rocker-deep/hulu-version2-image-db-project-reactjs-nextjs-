import request from "../../utills/request";
import { useRouter } from "next/router";
export default function Nav(){
const router=useRouter();
console.log(router);
    return(
<nav>
<div className="flex sm:px-20 sm:space-x-20  whitespace-nowrap  space-x-10 overflow-x-scroll   scrollbar-hide  ">
{Object.entries(request).map(([key,{title,url}])=>(


<h1 key={key}   onClick={()=>router.push(`/?genre=${key}`)}      className="cursor-pointer text-2xl  2xl:no-underline  hover:scale-125 hover:brightness-200 hover:text-white  active:text-red-500">
{title}

</h1>
))}
</div>
</nav>
    )
}