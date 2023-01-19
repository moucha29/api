import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Card } from "react-bootstrap";

function App() {
  const [users, setUsers] = useState([]);

  /*  const getDataUsers = async()=>{
    // fetch() ==> send requests
    await fetch('https://jsonplaceholder.typicode.com/users')
    //to handle Errors==> .then() .catch()
    .then(res=> res.json())
    .then(parsedData=> setUsers(parsedData))
    .catch(err=> console.log(err))
  } */

  /* const getDataUsers = async ()=>{
      try{
        //send Request
          const users = await fetch('https://jsonplaceholder.typicode.com/users')
          const parsedData = await users.json()
          setUsers(parsedData)
      }
      catch(err){
        console.log(err);

      }
  } */

  //axios
  const getDataUsers = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(data);
  };

  useEffect(() => {
    getDataUsers();
  }, []);
  console.log(users);
  return (
    <div className="App">
      {users.map((el) => (
        <Card key={el.id} style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{el.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {el.email}
            </Card.Subtitle>
            <Card.Text>
              {el.phone}
            </Card.Text>
            <Card.Text>
              {el.website}
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default App;
