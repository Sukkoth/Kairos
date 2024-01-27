import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import TaskDetails from "./pages/TaskDetails";
import AddTask from "./pages/AddTask";
import Register from "./pages/Register";
import AuthOutlet from "./ui/AuthOutlet";

function App() {
  return (
    <main className='text-gray-300 font-semibold scrollbar-hide pb-10'>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route element={<AuthOutlet />}>
          <Route path='/' element={<Dashboard />} />
          <Route path='/tasks' element={<Tasks />} />
          <Route path='/tasks/:taskId' element={<TaskDetails />} />
          <Route path='/add' element={<AddTask />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
