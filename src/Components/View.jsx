import React, { useEffect, useState } from 'react'
import { MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function View() {
  const { id } = useParams()

  const [anEmployee, setAnEmployee] = useState()
  //create a state for all items in employee object
  const [empid, setEmpid] = useState('')
  const [empName, setEmpName] = useState('')
  const [empAge, setEmpAge] = useState('')
  const [empDesignation, setEmpDesignation] = useState('')
  const [empSalary, setEmpSalary] = useState('')
  
  //api call to fetch particular employee details
  const fetchEmployee = async () => {
    const response = await axios.get('http://localhost:8000/getAnEmployee/' + id)
    console.log(response.data.employee);
    setAnEmployee(response.data.employee)
    setEmpid(response.data.employee.id)
    setEmpName(response.data.employee.name)
    setEmpAge(response.data.employee.age)
    setEmpDesignation(response.data.employee.designation)
    setEmpSalary(response.data.employee.salary)
  }
  console.log(anEmployee);

  useEffect(() => {
    fetchEmployee()
  }, [])
  return (
    <>
    <div className="container">
        <h3 className='text-center m-3'>Edit Employee</h3>
        <div className="form d-flex justify-content-center">
          <div className="w-50">
            <MDBInput className='mb-3' value={empid} disabled label='Id' id='form1' type='text' />
            <MDBInput className='mb-3' value={empName} disabled  label='Name' id='form1' type='text' />
            <MDBInput className='mb-3'value={empAge} disabled  label='Age' id='form1' type='text' />
            <MDBInput className='mb-3' value={empDesignation} disabled   label='Designation' id='form1' type='text' />
            <MDBInput className='mb-3'value={empSalary} disabled label='Salary' id='form1' type='text' />

            <div className="btn-div text-center d-flex justify-content-around mt-3 mb-2">
              <Link to={'/'}>
                <MDBBtn>Back to Home</MDBBtn>
              </Link>
            </div>
          </div>

        </div>

      </div></>
  )
}

export default View