import React, { useState } from "react";

function SumReq(props){
    
    return(
       <div>
        <p>sum of values:{props.sumValues}</p>
        <button onClick={props.sendValues}>send POST request</button>
        <input type="text" value={props.result}></input>
       </div>
    )

}

export default SumReq;