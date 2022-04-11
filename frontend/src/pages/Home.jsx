import { Link } from 'react-router-dom'
import { FaQuestionCircle, FaTicketAlt} from 'react-icons/fa'

function Home() {
    return (

        <>
            <section className="heading">
                <h1>What do you need help with</h1>
                <p>Please choose from an option below</p>
            </section>

            <Link to="/new-report" className='btn btn-reverse btn-block'>
                <FaQuestionCircle /> Create New Incident Report
            </Link>

            <Link to="/reports" className='btn btn-block'>
                <FaTicketAlt /> View My Current Reports
            </Link>
            
        </>
    )
}

export default Home