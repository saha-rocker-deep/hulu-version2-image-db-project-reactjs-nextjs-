
import Image  from "next/image";
import LINK  from "next/link";
import HeadeItem from "./HeadeItem";

import {BiHomeAlt} from "react-icons/bs";
import {AiFillCheckCircle,AiOutlineHome ,AiOutlineUser} from "react-icons/ai";
import { BsFillLightningFill,BsCollectionFill,BsSearch } from "react-icons/bs";

function Header(props){

      return (

<header  className=" flex flex-col sm:flex-row relative justify-between items-center h-auto">

<div className=" flex flex-grow   justify-between ">
<LINK href="./Hello">
<a><HeadeItem title="Home"  Icon={AiOutlineHome} /></a>
</LINK>
<HeadeItem title="TRENDING" Icon={BsFillLightningFill} />
<HeadeItem title="VERIFIED" Icon={AiFillCheckCircle} />
<HeadeItem title="COLLECTION" Icon={BsCollectionFill} />
<HeadeItem title="SEARCH"Icon={BsSearch} />
<HeadeItem title="USER" Icon={AiOutlineUser} />


</div>
<Image
className="object-contain"

src="https://links.papareact.com/ua6"  width={"200"} height={"100"} />
</header>






      )
}

export default Header