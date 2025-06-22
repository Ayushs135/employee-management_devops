import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    designation: ''
  });

  useEffect(() => {
    fetch(`http://localhost:8081/api/employees/${id}`)
      .then(res => res.json())
      .then(data => setEmployee(data));
  }, [id]);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8081/api/employees/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(employee),
    })
      .then(() => navigate("/"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={employee.name} onChange={handleChange} placeholder="Name" required />
      <input name="email" value={employee.email} onChange={handleChange} placeholder="Email" required />
      <input name="designation" value={employee.designation} onChange={handleChange} placeholder="Designation" required />
      <button type="submit">Update</button>
    </form>
  );
};

export default EditEmployee;

