import React, { useEffect, useState } from 'react';
import EmployeeTable from './components/EmployeeTable';
import FilterEmployees from './components/FilterEmployees';
import Footer from './components/Footer';
import Header from './components/Header';
//import Navbar from './components/Navbar';
import { getEmployees } from "./utils/API";

function App() {
  const [initialEmployees, updateAvailableEmployees] = useState([]);
  const [employeesToRender, updateEmployeesToRender] = useState([]);

  useEffect(() => {
    getEmployees().then(({ data: { results } }) => updateAvailableEmployees(results));
  }, []);

  return (
    <div className="App">
      <Header />
      <FilterEmployees employees = { initialEmployees } updateEmployees = { updateEmployeesToRender } />
      <EmployeeTable employees = {employeesToRender} />
      <Footer />
    </div>
  );
}

export default App;
