import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from './EmployeeService';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = () => {
    EmployeeService.getEmployees().then(res => setEmployees(res.data));
  };

  const handleDelete = (id) => {
    EmployeeService.deleteEmployee(id).then(() => fetchEmployees());
  };

  const navigate = useNavigate();
  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map(emp => (
          <li key={emp.id}>
            {emp.name} - {emp.designation} - {emp.email}
            <td>
                <button onClick={() => handleEdit(emp.id)}>Edit</button> 
                <button onClick={() => handleDelete(emp.id)}>Delete</button>
            </td>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;

