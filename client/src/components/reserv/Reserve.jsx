import { AiOutlineCloseCircle } from 'react-icons/ai'
import './reserve.scss'

const Reserve = ({ setOpen, hotelId }) => {
    return (
        <div className='reserve'>
            <div className="rContainer">
                <AiOutlineCloseCircle className='rClose' onClick={() => { setOpen(false) }} />
                <span>Select your rooms: </span>
            </div>
        </div>
    )
}

export default Reserve