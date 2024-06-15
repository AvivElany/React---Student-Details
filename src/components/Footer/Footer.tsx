import './Footer.css'

interface Footer {

}
export default function Footer() {
    return (
        <div className='Footer'>
            <p>&copy; {new Date().getFullYear()} Aviv Elany FullStack Developer</p> 
        </div>
    )
}
