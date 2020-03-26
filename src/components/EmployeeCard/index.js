import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      
      <div className="content">
        <ul>
        <li>
            <strong>Id:</strong> {props.id}
          </li>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Salary:</strong> {props.salary}
          </li>
          <li>
            <strong>Age:</strong> {props.age}
          </li>
        </ul>
      </div>
      
      </div>
      <span onClick={() => props.removeEmployee(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default EmployeeCard;
