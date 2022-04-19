import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getReports, reset} from '../features/reports/reportSlice'
import Loading from '../components/Loading'
import BackButton from '../components/BackButton'
import ReportItem from '../components/ReportItem'

function Reports() {

    const {reports, isLoading, isSuccess} = useSelector((state) => state.reports)
    const [correctedReports, setCorrectedReports] = useState([]);

    const dispatch = useDispatch()

    useEffect(() => {
        return ()=> {
            if(isSuccess) {
                dispatch(reset())
            }
        }
    }, [dispatch, isSuccess])

    useEffect(() => {
        dispatch(getReports())
    }, [dispatch])

    useEffect(()=>{
        const newReport = [...reports]
        setCorrectedReports(newReport.reverse())
    },[reports])

    if(isLoading) {
        return <Loading />
    }

  return (
    <section className='wrapper'>
        <BackButton url="/" />
        <h1>Reports</h1>
        <div className="reports">
            <div className="report-headings">
                <div>Date</div>
                <div>Category</div>
                <div>Status</div>
                <div></div>
            </div>
            {correctedReports?.map((report) => 
                <ReportItem key={report._id} report={report}/>
            )}
        </div>

    </section>
  )
}

export default Reports