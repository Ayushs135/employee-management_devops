import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';

function App() {
  const [updateTrigger, setUpdateTrigger] = React.useState(0);

  const handleEmployeeAdded = () => {
    setUpdateTrigger(prev => prev + 1);
  };

  return (
    <Router>
      <div className="container">
        <h1>Employee Management System</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddEmployee onEmployeeAdded={handleEmployeeAdded} />
                <EmployeeList key={updateTrigger} />
              </>
            }
          />
          <Route path="/edit/:id" element={<EditEmployee />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

