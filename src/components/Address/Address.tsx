import './Address.css'

interface IAddressProps {
    address: IAddress,
}
export default function Address(props: IAddressProps ) {
    return (
        <div className='Address'>
            <span>{props.address.street} </span>
            <span>{props.address.houseNumber}, </span>
            <span className='city'>{props.address.city}</span>
        </div>
    )
}
