import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { EmployeePage } from "./Pages/Employees/Employees";
import { OrganizationPage } from "./Pages/Organizations/Organization";
import './App.css'
import { Landing } from "./Pages/landing";

function App() {

  return (
  <Routes>
    <Route path="/" element={<Layout/>}>
      <Route index element={<Landing />} />
      <Route path="employees">
        <Route index element={<EmployeePage />}/>
      </Route>
      <Route path="organization">
        <Route index element={<OrganizationPage />}/>
      </Route>
    </Route>
  </Routes>
  )
}

export default App
