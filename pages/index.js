
import { useContext, useEffect } from "react";
import Header from "./components/Header"
import Nav from "./components/Nav";
import Result from "./components/Result";
import { useRouter } from "next/router";
import request from "../utills/request";

export default function Home(props) {

  //  console.log(props," from home bro");

 // console.log(props);
 // const router=useRouter();

 // console.log(Ap);
// const API_KEY=Ap;
/*npm run dev

  const p=router.query.genre;
  console.log(router.query.genre);
  console.log(request[p]?.url);
  console.log(request[p]?.title);
  const b=request[p];
  */
  
  /*
  //request is request.js which is treated as  json array
  // p is regarded as  each-key-value  which is  getting through    router .query.genre
  // genre and genres values have already added  with router  by  clicking and calling a push function  in 
  //nav.js
// then it have compeleted makeing url  by geeting each array key url
 

//const url='https://api.themoviedb.org/3/discover/movie?api_key=97f66a5b26748a314342acc49d9c1e35&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate';

//const url='https://api.themoviedb.org/3/trending/all/week?api_key=97f66a5b26748a314342acc49d9c1e35&language=en-Us';

//const url=`https://api.themoviedb.org/3${request[p]?.url || request.fetchAction.url }`;


*/

return (
  <div className="text-3xl font-bold scrollbar-hide">

 
  <Header  />
  <Nav/>

<Result data={props.inform}/>


    </div>
  )

  }
  
  /*
  export async function  getServerSideProps(contex)
  {


 //const posts="PP";
return {
  props: {
    id:contex.query.genre,
  },
};

  }*/



  export async function  getServerSideProps(context)
  {  

   
    const p=context.query.genre;

    const url=`https://api.themoviedb.org/3${request[p]?.url || request.fetchTrending.url }`;
 
   //console.log(url);
  // let inform=url;
   //let l=request[p]?.url
    
   
   let data=await fetch(url);
    let inform=await data.json()
    console.log(inform,"inform");
           return{
           
           props:{inform},
           
           }
        
         
           }

    
           

           