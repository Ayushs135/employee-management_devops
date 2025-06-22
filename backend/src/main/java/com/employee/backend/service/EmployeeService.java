package com.employee.backend.service;

import com.employee.backend.model.Employee;
import com.employee.backend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository repo;

    public List<Employee> getAll() {
        return repo.findAll();
    }

    public Employee save(Employee employee) {
        return repo.save(employee);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }

    public Employee getById(Long id) {
        return repo.findById(id)
            .orElseThrow(() -> new RuntimeException("Employee not found with id " + id));
    }
}

