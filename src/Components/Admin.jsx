import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios'

function Admin() {

  const [allEmployees, setAllEmployees] = useState([])

  const fetchData = async () => {
    const response = await axios.get('http://localhost:8000/getEmployees')
    console.log(response.data.employee); //array of data
    setAllEmployees(response.data.employee)
  }
  console.log(allEmployees);

  const deleteEmp = async (id) => {
    const response = await axios.delete('http://localhost:8000/deleteEmployee/'+id)
    console.log(response);
    alert (response.data.message)
    fetchData()
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <div className="container text-center mt-3">
        <h1>Employee Management System</h1>
        <p style={{ textAlign: 'justify' }}>Employee management is a practice that helps a manager improve employee productivity and satisfaction to help an organisation reach its goals. Human resources (HR) professionals often use an employee management system (EMS), including recruitment, offboarding and performance management. Using a dedicated EMS can help an HR manager streamline the hiring process and improve workplace efficiency. In this article, we discuss what an employee management systems is, outline its benefits and types and list some examples of employee management software tools.</p>
      </div>
      <div className="container-sm button text-start mb-3">
        <Link to={'add'}>
          <button className="btn btn-success "><i className='fa-solid fa-user-plus'></i> Add</button>
        </Link>
      </div>
      <div className="container-sm table mt-3 d-flex justify-content-center  text-center ">
        <MDBTable small>
          <MDBTableHead>
            <tr>
              <th scope='col'>No</th>
              <th scope='col'>Name</th>
              <th scope='col'>Age</th>
              <th scope='col'>Designation</th>
              <th scope='col'>Salary</th>
              <th scope='col'>Actions</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {
              allEmployees.map(item => (
                <tr>
                  <th scope='row'>{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.designation}</td>
                  <td>{item.salary}</td>
                  <td>
                    <Link to={'edit/'+item.id}>
                    <button className='btn me-3'>
                      <i className='fa-solid fa-pen text-success'></i>
                    </button>
                    </Link>
                    <Link to={'view/' + item.id}>
                    <button  className='btn me-3'>
                      <i className='fa-solid fa-eye text-info'></i>
                    </button>
                    </Link>
                    <button onClick={() => deleteEmp(item.id)} className='btn'>
                      <i className='fa-solid fa-trash text-danger'></i>
                    </button>
                  </td>
                </tr>
              ))
            }



          </MDBTableBody>
        </MDBTable>
      </div>
    </>
  )
}

export default Admin