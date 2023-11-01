import React, { useEffect, useState } from "react";
import SumReq from "./SumReq";
import Table from "./Table";
import { Title } from "../Style";

function Assessment() {
  const [info, setInfo] = useState({ session_number: null, data: null });
  const [sumValues, setSumValues] = useState(0);
  const [result, setResult] = useState("");//?

  //fetching data for displaying in table
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
      .catch((e) => {
        console.error(e);
        alert(e); //try using a more user-friendly alert
      });
  }, []);

  //function for doing the POST request.
  const sendValues = async () => {
    try {
      const res = await fetch(
        `https://vpn-marketing66.herokuapp.com/interview-test-result`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            session_number: info.session_number,
            result: sumValues,
          }),
        }
      );
      const text = await res.text();
      setResult(text);
    } catch (e) {
      alert(e);//try using a more user-friendly alert
      console.error(e);
    }
  };

  return (
    <>
      <Title>Home Assessment</Title>
      <SumReq sendValues={sendValues} sumValues={sumValues} result={result}></SumReq>
      <Table info={info}></Table>
    </>
  );
}

export default Assessment;
