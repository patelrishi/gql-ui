import React from 'react'
import { GET_STUDENTS } from './graphql/query/GET_STUDENT';
import { useLazyQuery } from '@apollo/client';
import './Styles/Button.css'


 const Home = () => {
   const [GetStudents, { loading,data,error } ]=useLazyQuery(GET_STUDENTS)
   if(loading) return<div>Loading...</div>
   if(error) return<div>{error.message}</div>
  const HandleClick = () =>{
   
    GetStudents();
  }
  return<div>
    <button className='button' onClick={HandleClick} >Get Users</button>
  <table border="2px">
    <thead>
     <tr>
      <th>NAME</th>
      <th>ID</th>
      <th>ROLLNO</th>
      <th>RANK</th>
      <th>COURSE</th> 
     </tr>
    </thead>
    <tbody>
    {
      data?.getStudents?.map(( obj,ind)=>{
        const{name,id,rno,rank,course}=obj
        return<tr key= {ind}>
          <td>{name}</td>
          <td>{id}</td>
          <td>{rno}</td>
          <td>{rank}</td>
          <td>{course}</td>
        </tr>
      })
    }
   </tbody>
   </table>
   </div>
}

export default Home;