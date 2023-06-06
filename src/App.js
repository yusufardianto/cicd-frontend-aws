import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import Home from "./components/Hello";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/hello" element={<Home />} />
        <Route path="add" element={<AddUser />} />
        <Route path="edit/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
