import './Grades.css'

interface IGradesProps {
    gradesArr: number[]
}

export default function Grades(props: IGradesProps) {
    
    const coloredByGrade = (grade: number)=> {
        if (grade >= 90) return 'good'
        if (grade <= 80) return 'notGood'
    }


    return (
        <>
            {
                props.gradesArr.map((grade, id) =>
                    <span key={id} className={coloredByGrade(grade)}>
                        {grade} &nbsp;
                    </span>
                )
            }
        </>
    )
}
