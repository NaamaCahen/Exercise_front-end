import React, { useState } from "react";
import { Button, Div, Input, SumP } from "../Style";

function SumReq(props){
    
    return(
       <Div>
        <SumP>sum of values: {props.sumValues}</SumP>
        <Button onClick={props.sendValues}>send POST request</Button>
        <Input type="text" placeholder="result" value={props.result}></Input>
       </Div>
    )

}

export default SumReq;