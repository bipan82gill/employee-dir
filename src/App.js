import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Row from './components/Row';
import EmployeeHeader from "./components/EmployeeHeader";
import employees from "./employees.json";
import Container from './components/Container';



class App extends Component {
  // Setting this.state.employees to the employees json array
  state = {
    employees
  };

  removeEmployee = id => {
    // Filter this.state.employees for employees with an id not equal to the id being removed
    const employees= this.state.employees.filter(employee => employee.id !== id);
    // Set this.state.employees equal to the new employees array
    this.setState({ employees});
  };

  // Map over this.state.employees and render a EmployeeCard component for each employee object
  render() {
    return (
      <Container>
        <EmployeeHeader> Employees List</EmployeeHeader>
        <Row className="row"/>
        
        {this.state.employees.map(employee => (
          <EmployeeCard
            removeEmployee={this.removeEmployee}
            id={employee.id}
            key={employee.id}
            name={employee.employee_name}
            image={employee.profile_image}
            age={employee.employee_age}
            salary={employee.employee_salary}
          />
        ))}
      
       
     </Container>
    );
  }
}

export default App;
