import { PrincipalContainer } from "./components/common/Containers"
import UserDashboard from "./pages/UserDashboard"
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom/dist"


function App() {

  return (
    <PrincipalContainer>
      <Router>
        <Routes>
{/*       <Route path="/search" element={<UserSearchDashboard/>}/> */}
          <Route path="/search" element={<UserDashboard/>}/>
          <Route path="/" element={<UserDashboard/>}/>
        </Routes>
      </Router>
    </PrincipalContainer>
  )
}


export default App
