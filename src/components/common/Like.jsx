import React from 'react'
 function Like(props) {
  console.log("this props ",props.like)
  let classes = "fa-regular fa-heart";
   if(props.like) classes = "fa-solid fa-heart";
return (<i onClick={props.onClick}  style= {{cursor: "pointer"}}className={classes} />)
   
{/* <i class="fa-regular fa-heart"></i> */}
}
export default Like