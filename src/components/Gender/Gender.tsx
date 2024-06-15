import './Gender.css'

interface IGenderProp {
    gender: string
}


export default function Gender(props: IGenderProp) {


    return (
        <div className='Gender'>
            {props.gender === 'Male' ?
            <img className='icon' src="./images/male.png" alt='Male' title='Male' />
            :
            <img className='icon' src="./images/female.png" alt='Female' title='Female' />
            }
        </div>
    )
}