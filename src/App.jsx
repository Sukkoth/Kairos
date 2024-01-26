import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import TaskDetails from "./pages/TaskDetails";
import AddTask from "./pages/AddTask";
import Register from "./pages/Register";

function App() {
  return (
    <main className='text-gray-300 font-semibold scrollbar-hide pb-10'>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Dashboard />} />
        <Route path='/tasks' element={<Tasks />} />
        <Route path='/tasks/:taskId' element={<TaskDetails />} />
        <Route path='/add' element={<AddTask />} />
      </Routes>
    </main>
  );
}

export default App;
