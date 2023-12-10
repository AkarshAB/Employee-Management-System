import React, { useState } from 'react'
import { MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Add() {

  const [id, setId] = useState()
  const [name, setName] = useState('')
  const [age, setAge] = useState()
  const [designation, setDesignation] = useState('')
  const [salary, setSalary] = useState('')
  // console.log(id);

  const handleAdd = async (e) => {
    const body = { id, name, age, designation, salary }
    await axios.post('http://localhost:8000/addEmployee', body).then((response) => {
      alert(response.message)
      Navigate('/') //reirect to home page
      console.log(id, name, age, designation, salary)
    })
      .catch((error) => {
        alert('enter unique employee id')
      })
  }

  return (
    <>
      <div className="container">
        <h3 className='text-center m-3 '>Add Employee</h3>
        <div className="form d-flex justify-content-center">
          <div className="w-50">
            <MDBInput className='mb-3' onChange={(e) => setId(e.target.value)} label='Id' id='form1' type='text' />
            <MDBInput className='mb-3' onChange={(e) => setName(e.target.value)} label='Name' id='form1' type='text' />
            <MDBInput className='mb-3' onChange={(e) => setAge(e.target.value)} label='Age' id='form1' type='text' />
            <MDBInput className='mb-3' onChange={(e) => setDesignation(e.target.value)} label='Designation' id='form1' type='text' />
            <MDBInput className='mb-3' onChange={(e) => setSalary(e.target.value)} label='Salary' id='form1' type='text' />

            <div className="btn-div text-center d-flex justify-content-around mt-3 mb-2">
              <Link to={'/'}>
                <MDBBtn>Back to Home</MDBBtn>
              </Link>
              <MDBBtn onClick={(e) => handleAdd(e)}>Add Employee</MDBBtn>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default Add