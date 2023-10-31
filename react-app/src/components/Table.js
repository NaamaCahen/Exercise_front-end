import React from "react";
import { dateFormat, slice_name } from "../Utils"; 

function Table(props){
    return(
        <table>
        <tr>
          <th>Number</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Value</th>
          <th>Day</th>
        </tr>
        {props.info.data
          ? props.info.data.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>
                    {slice_name(item.first_name,'first')}
                  </td>
                  <td>
                    {slice_name(item.last_name,'last')}
                  </td>
                  <td>{item.value}</td>
                  <td>{dateFormat(item.date)}</td>
                </tr>
              );
            })
          : null}
      </table>
    )
}

export default Table;