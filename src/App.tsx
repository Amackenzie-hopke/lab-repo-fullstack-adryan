import { Route, Routes } from "react-router";
import { Layout } from "./components/Layout/Layout";
import { EmployeePage } from "./components/Pages/Employees/Employees";
import { OrganizationPage } from "./components/Pages/Organizations/Organization";
import './App.css'

function App() {

  return (
  <Routes>
    // layout parent route
    <Route path="/" element={<Layout/>}>
      // employee routes
      <Route path="employees">
        <Route index element={<EmployeePage />}/>
      </Route>
      // organization routes
      <Route path="organization">
        <Route index element={<OrganizationPage />}/>
      </Route>
    </Route>
  </Routes>
  )
}
OrganizationPage

export default App
