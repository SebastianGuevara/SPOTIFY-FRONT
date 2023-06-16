import { PrincipalContainer } from "./components/common/Containers"
import UserDashboard from "./pages/UserDashboard"
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom/dist"
import UserSearchDashboard from "./pages/UserSearchDashboard";

function App() {

  return (
    <PrincipalContainer>
      <Router>
        <Routes>
          <Route path="/search" element={<UserSearchDashboard/>}/>
          <Route path="/" element={<UserDashboard/>}/>
        </Routes>
      </Router>
    </PrincipalContainer>
  )
}


export default App
