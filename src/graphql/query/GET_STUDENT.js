import {gql} from'@apollo/client'

export const GET_STUDENTS = gql`
query GetStudents {
  getStudents {
    name
    id
    rno
    rank
    course
  }
}
`;