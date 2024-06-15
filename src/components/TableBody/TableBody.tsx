import './TableBody.css'
import Gender from '../Gender/Gender'
import Grades from '../Grades/Grades'
import Address from '../Address/Address';
import NoData from '../NoData/NoData';
import { IStudent, students } from '../../Interfaces/StudentArrey'
import AverageGrades from '../AverageGrades/AverageGrades';

interface ITable {
  students: IStudent[];
}

function parentsDisplay (student: IStudent, relation: string):(string) {
  return student.parents.filter( oneParent => oneParent.relation === relation )[0]?.fullName ?? <NoData />;
}


export default function ITable(props: ITable) {


  return (
    <div className='TableBody'>
      <table>
        <thead>
        <th>Last Name</th>
        <th>First Name</th>
        <th>Age</th>
        <th>Gender</th>
        <th>Major</th>
        <th>Grades</th>
        <th>Avarege</th>
        <th>Address</th>
        <th>Father</th>
        <th>Mother</th>
        <th>Image</th>
        </thead>
        
				{students.map((students) => {
          return (
            (students.gender === 'Female' && ((students.grades.reduce((partialSum, a) => partialSum + a, 0) / students.grades.length))>=85 ) ?
              <tr key={students.id}>
                <td>{students.lastName}</td>
                <td>{students.firstName}</td>
                <td>{students.age}</td>
                <td><Gender gender={students.gender} /></td>
                <td>{students.major}</td>
                <td><Grades gradesArr={students.grades}/> </td>
                <td><AverageGrades gradesArr={students.grades} /> </td>
                <td><Address address={students.address} /> </td>
                <td>{parentsDisplay(students, "Father")}</td>
                <td>{parentsDisplay(students, "Mother")}</td>
                <td><img className='profilImage' src={students.imageUrl} /></td>
              </tr>
              :
              ''
            )
        }
  )
}
			</table>
			
		</div>
    )
}
