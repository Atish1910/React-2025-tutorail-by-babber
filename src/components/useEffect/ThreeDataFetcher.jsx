import { useEffect, useState } from "react"

function DataFetcher(){
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    // debugger
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(responce => responce.json())
    .then(data =>{
      setData(data);
      setLoading(false);
    });
  }, []);

  return(
    <>
      <p>Data faecthing from api </p>
      {
        loading ?(
          <h1>Loading data...</h1>
        ) : (
          <ul>
            {
              data.map(post =>(
                <li key={post.id}>{post.name}</li>
              ))
            }
          </ul>
        )
      }

    </>
  )
}
export default DataFetcher;

// jsonplaceholder.typicode.com/posts