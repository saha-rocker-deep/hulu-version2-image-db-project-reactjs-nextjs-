 

 
 function HeadeItem({title,Icon}){
      //console.log(title,Icon);
 
return(



<div  className=" flex group sm:w-20 cursor-pointer flex-col justify-center items-center w-12">
<Icon
className="h-10 group-hover:animate-bounce "/>
<p className=" no-underline text-2xl opacity-0 group-hover:opacity-100 -tracking-widest">
{title}
</p>

</div>



)

}

export default HeadeItem;