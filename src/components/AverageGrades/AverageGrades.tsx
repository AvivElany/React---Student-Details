import IStudent from '../../Interfaces/StudentArrey'
import './AverageGrades.css'

interface IAverageGradesProps {
    gradesArr: number[]
    students: IStudent[]
}

export default function AverageGrades(props: IAverageGradesProps ) {
    return (
        <div className='AverageGrades'>
            {Math.round(props.gradesArr.reduce((partialSum, a) => partialSum + a, 0) / props.gradesArr.length)}
        </div>
    )
}
