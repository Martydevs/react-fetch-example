import { Suspense } from "react";
import { fetchData } from "./fetchData";
import "./App.css";

const apiData = fetchData("https://jsonplaceholder.typicode.com/users");

function App() {
  const data = apiData.read();

  return (
    <div className="container">
      <h1>React Application</h1>
      <p>Fetching an API from React</p>
      <Suspense fallback={<div>Loading...</div>}>
        <ul className="users-container">
          {data?.map((user) => (
            <li className="user-container" key={user.id}>{user.name} | { user.username }</li>
          ))}
        </ul>
      </Suspense>
    </div>
  );
}

export default App;
