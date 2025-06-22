import React, { useState } from 'react';
import EmployeeService from './EmployeeService';

function AddEmployee({ onEmployeeAdded }) {
  const [employee, setEmployee] = useState({ name: '', email: '', designation: '' });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    EmployeeService.addEmployee(employee).then(() => {
      onEmployeeAdded();
      setEmployee({ name: '', email: '', designation: '' });
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={employee.name} onChange={handleChange} required />
      <input name="email" placeholder="Email" value={employee.email} onChange={handleChange} required />
      <input name="designation" placeholder="Designation" value={employee.designation} onChange={handleChange} required />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddEmployee;

