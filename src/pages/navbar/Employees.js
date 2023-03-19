import '../../index.css';
import Employee from '../../components/Employee';
import {useState} from "react";
import AddEmployee from "../../components/AddEmployee";
import EditEmployee from "../../components/EditEmployee";

function Employees() {
  let showEmployees = true;
  const [employees, setEmployees] = useState(
      [
        {
          id: 1,
          name: "Caleb",
          role: "Developer",
          img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          id: 2,
          name: "John",
          role: "UX/UI Designer",
          img: "https://images.pexels.com/photos/907862/pexels-photo-907862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          id: 3,
          name: "Maxine",
          role: "Project Manager",
          img: "https://images.pexels.com/photos/1890032/pexels-photo-1890032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          id: 4,
          name: "Jacob",
          role: "Front-end Engineer",
          img: "https://images.pexels.com/photos/1539670/pexels-photo-1539670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          id: 5,
          name: "David",
          role: "QA Tester",
          img: "https://images.pexels.com/photos/2380795/pexels-photo-2380795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          id: 6,
          name: "Joel",
          role: "Business Analyst",
          img: "https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          id: 7,
          name: "Pedro",
          role: "Developer",
          img: "https://images.pexels.com/photos/3785110/pexels-photo-3785110.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
      ]
  );

  function updateEmployee(id, updatedObject) {
    const updatedEmployees = employees.map((employee) => {
      if (id === employee.id) {
        return {
          ...employee,
          name: updatedObject.employeeName,
          role: updatedObject.employeeRole
        };
      }

      return employee;
    });
    setEmployees(updatedEmployees);
  }

  function addEmployee(newEmployeeObject) {
    let newEmployee = {
      id: newEmployeeObject.id,
      name: newEmployeeObject.name,
      role: newEmployeeObject.role,
      img: newEmployeeObject.img
    }
    setEmployees([...employees, newEmployee]);
  }

  return (
      <div className="">
        {showEmployees ?
            <>
              <div className={"flex flex-wrap items-center justify-center"}>
                {employees.map((employee) => {
                  const editEmployee = (<EditEmployee
                      id={employee.id}
                      name={employee.name}
                      role={employee.role}
                      updateEmployee={updateEmployee}/>);

                  return <Employee
                      key={employee.id}
                      id={employee.id}
                      name={employee.name}
                      role={employee.role}
                      img={employee.img}
                      editEmployee={editEmployee}
                  />;
                })}
              </div>
              <AddEmployee addEmployee={addEmployee}/>
            </>
            :
            <p>You cannot see the employees</p>
        }
      </div>
  );
}

export default Employees;
