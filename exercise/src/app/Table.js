import React, { useEffect, useState } from "react";
import styled from 'styled-components';

function Table() {
  const [info, setInfo] = useState({ session_number: null, data: null });
  const [sumValues, setSumValues] = useState(0);
  const [result, setResult] = useState("");
  const Title = styled("h1")`
  font-size: 1.5em;
  color: #BF4F74;
  text-align : center;
`;


  useEffect(() => {
    fetch(`https://vpn-marketing66.herokuapp.com/interview-test`)
      .then((res) => res.json())
      .then((data) => {
        setInfo(data);
        setSumValues(
          data.data.reduce(
            (accumulator, currentValue) => accumulator + currentValue.value,
            0
          )
        );
      })
      .catch((e) => console.log(e));
  }, []);

  const sendValues = () => {
    fetch(`https://vpn-marketing66.herokuapp.com/interview-test-result`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        session_number: info.session_number,
        result: sumValues,
      }),
    })
      .then((res) => res.text())
      .then((text) => setResult(text))
      .catch((e) => console.error(e));
  };

  //possible to use alternatively date-fns package or formatting
  const dateFormat = (dateString) => {
    const date = new Date(dateString);
    const yyyy = date.getFullYear();
    let dd = date.getDate();
    let mm = date.getMonth() + 1; //months start at 0
    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    return dd + "/" + mm + "/" + yyyy;
  };

  return (
    <>
    <Title>Home Assesement</Title>
      <p>sum values:{sumValues}</p>
      <button onClick={sendValues}>click</button>
      <p>request result :{result}</p>
      <table>
        <tr>
          <th>Number</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Value</th>
          <th>Day</th>
        </tr>
        {info.data
          ? info.data.map((item, i) => {
              return (
                <tr>
                  <td>{i + 1}</td>
                  <td>
                    {item.first_name.slice(item.first_name.indexOf("-") + 1)}
                  </td>
                  <td>
                    {item.last_name.slice(0, item.last_name.indexOf("-"))}
                  </td>
                  <td>{item.value}</td>
                  <td>{dateFormat(item.date)}</td>
                </tr>
              );
            })
          : null}
      </table>
    </>
  );
}

export default Table;