import React from "react";
import { dateFormat, slice_name } from "../Utils"; 
import { Tr,Td,TableC,Th } from "../Style";

function Table(props){
    return(
        <TableC>
        <Tr>
          <Th>Number</Th>
          <Th>First Name</Th>
          <Th>Last Name</Th>
          <Th>Value</Th>
          <Th>Day</Th>
        </Tr>
        {props.info.data
          ? props.info.data.map((item, i) => {
              return (
                <Tr key={i}>
                  <Td>{i + 1}</Td>
                  <Td>
                    {slice_name(item.first_name,'first')}
                  </Td>
                  <Td>
                    {slice_name(item.last_name,'last')}
                  </Td>
                  <Td>{item.value}</Td>
                  <Td>{dateFormat(item.date)}</Td>
                </Tr>
              );
            })
          : null}
      </TableC>
    )
}

export default Table;