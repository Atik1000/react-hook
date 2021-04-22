import axios from "axios";
import React, { useEffect, useState } from "react";

const DataFeching = () => {
  const [post, setPosts] = useState({});
  const [id, setId] = useState(1);
  const [idButtonClick,setIdButtonClick]=useState(1)
  const handleButtonClick=()=>{
      setIdButtonClick(id)
  }
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idButtonClick}`)
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idButtonClick]);
  return (
    <div>
      <input type="text" value={id} onChange={e=>setId(e.target.value)}/>
      <button onClick={handleButtonClick}>Fech Data</button>
      <p>{post.title}</p>
      {/* {post.map((p) => (
        <li key={p.id}>{p.title}</li>
      ))} */}
    </div>
  );
};

export default DataFeching;
