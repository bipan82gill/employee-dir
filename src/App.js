import React, { Component } from "react";
// import EmployeeCard from "./components/EmployeeCard";
// import Row from './components/Row';
// import EmployeeHeader from "./components/EmployeeHeader";
// import employees from "./employees.json";
// import Container from './components/Container';
import ReactTable from "react-table";
// import "react-table/react-table.css";


class App extends Component {
  
 constructor(props){
   super(props);

   this.state={
    users:[]
   }
 }
  componentDidMount(){
  const url ="https://jsonplaceholder.typicode.com/users" ;
  fetch(url,
            {method:"GET"})
            .then(response => response.json()).then(users => {
              console.log("users", users);
            this.setState({users:users});
   });
  }
  render(){
    const columns = [
      {
        Header:"ID",
        accessor:"id"
      },
      {
        Header:"Name",
        accessor:"name"
      },
      {
        Header:"UserName",
        accessor:"username"
      },
      {
        Header:"Phone",
        accessor:"phone",
        filterable:false,
        sortable:false
      },
      {
        Header:"Website",
        accessor:"website",
        filterable:false,
        sortable:false
      }
      
    ]
    return(
    <ReactTable
     columns ={columns}
     data={this.state.users}
     
     >
      </ReactTable>
  
  )
}
}

export default App;
