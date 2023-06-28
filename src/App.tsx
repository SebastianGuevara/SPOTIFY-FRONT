import { PrincipalContainer } from "./components/common/Containers"
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import UserDashboard from "./pages/UserDashboard"
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom/dist"


function App() {

  return (
    <PrincipalContainer>
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/playlist/:id" element={<UserDashboard/>}/>
          <Route path="/album/:id" element={<UserDashboard/>}/>
          <Route path="/artist/:id" element={<UserDashboard/>}/>
          <Route path="/search" element={<UserDashboard/>}/>
          <Route path="/" element={<UserDashboard/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>
    </PrincipalContainer>
  )
}


export default App
