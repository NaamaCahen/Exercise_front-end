import React from "react";
import { slice_name, dateFormat } from "./Utils";
import PostReq from "../components/PostReq";
// import { TableC,tr,th,td } from "./Style";

const ExPage = async () => {
  const res = await fetch(
    "https://vpn-marketing66.herokuapp.com/interview-test",
    { cache: "no-store" }
  );
  const info = await res.json();

  const sumValues = info.data.reduce(
    (accumulator, currentValue) => accumulator + currentValue.value,
    0
  );

  return (
    <main>
      <PostReq sessionNum={info.session_number} sumValues={sumValues}></PostReq>
      <h1>Home Assessment</h1>
      <table>
        <thead>
          <tr>
            <th>Number</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Value</th>
            <th>Day</th>
          </tr>
        </thead>

        <tbody>
          {info.data.map((item, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{slice_name(item.first_name, "first")}</td>
                <td>{slice_name(item.last_name, "last")}</td>
                <td>{item.value}</td>
                <td>{dateFormat(item.date)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};

export default ExPage;
