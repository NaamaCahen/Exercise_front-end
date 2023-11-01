"use client";
import React, { useState } from "react";

const PostReq = (props) => {
  const [result, setResult] = useState("");
  const sendPost = async (e) => {
    e.preventDefault();
    try {
      const post = await fetch(
        `https://vpn-marketing66.herokuapp.com/interview-test-result`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            session_number: props.sessionNum,
            result: props.sumValues,
          }),
        }
      );

      const text = await post.text();
      setResult(text);
    } catch (e) {
      alert(e);
      console.error(e);
    }
  };

  return (
    <div>
      <p>sum values: {props.sumValues}</p>
      <button onClick={sendPost}>sendPostReq</button>
      <input value={result} placeholder="result"></input>
    </div>
  );
};

export default PostReq;
