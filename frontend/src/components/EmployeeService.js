import axios from 'axios';

const BASE_URL = 'http://localhost:8081/api/employees';

class EmployeeService {
  getEmployees() {
    return axios.get(BASE_URL);
  }

  addEmployee(employee) {
    return axios.post(BASE_URL, employee);
  }

  deleteEmployee(id) {
    return axios.delete(`${BASE_URL}/${id}`);
  }
}

export default new EmployeeService();

