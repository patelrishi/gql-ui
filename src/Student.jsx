import React from 'react'
import { useQuery} from "@apollo/client";
import { GET_STUDENTS } from './graphql/query/GET_STUDENT';


 const Student = () => {
  const {loading,data,error}=useQuery(GET_STUDENTS)
  
  if(loading) return<div>loading...</div>
  if(error) return<div>{error.message}</div>
  
  return<table border="2px">
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
}
export default Student;