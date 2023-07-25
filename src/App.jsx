import { useState } from "react";
import "../links/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0);

  function Increment() {
    setCount(count + 1);
  }

  function Decrement() {
    setCount(count - 1);
  }

  function Reset() {
    const count = 0;
    setCount(count);
  }

  return (
    <>
      <div className="app container my-5 p-5">
        <div className="card text-lg-center my-5 bg-dark text-light">
          <div className="card-body">
            <div className="my-5">
              <h2 className="my-5">Count : {count}</h2>
              <button className="btn btn-success mx-3" onClick={Increment}>
                Increment
              </button>
              <button className="btn btn-danger mx-3" onClick={Decrement}>
                Decrement
              </button>
              <button className="btn btn-info mx-3 " onClick={Reset}>
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
