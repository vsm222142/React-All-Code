import "./App.css";
import TaskList from "./components/TaskList";

function App() {
  return (
    <>
      <div>
          <h1 style={{ textAlign: "center" }}>
        Employee Task Management
      </h1>
        <TaskList />
      </div>
    </>
  );
}

export default App;
