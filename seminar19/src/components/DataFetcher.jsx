import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

function DataFetcher() {
  const [data, setData] = useState([]);
  const [counter, setCounter] = useState(0);
  const [postId, setPostId] = useState("1");

  
  const fetchData = useCallback(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((res) => {
        console.log("res", res);
        console.log("data", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [postId, counter]);

  useEffect(() => {    
    fetchData()
  }, [fetchData])

  return (
    <div className="column">
      <input value={postId} type="number" onChange={(e) => setPostId(e.target.value)} />
      <button onClick={fetchData}>FetchData</button>
      <ul>{data && data.map((post) => <li key={post.id}>{post.name}</li>)}</ul>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      {counter}
    </div>
  );
}

export default DataFetcher;
