import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getReports, reset} from '../features/reports/reportSlice'
import Loading from '../components/Loading'
import BackButton from '../components/BackButton'
import ReportItem from '../components/ReportItem'

function Reports() {

    const {reports, isLoading, isSuccess} = useSelector((state) => state.reports
    )

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

    if(isLoading) {
        return <Loading />
    }

  return (
    <>
        <BackButton url="/" />
        <h1>Reports</h1>
        <div className="reports">
            <div className="report-headings">
                <div>Date</div>
                <div>Category</div>
                <div>Status</div>
                <div></div>
            </div>
            {reports.map((report) => 
                <ReportItem key={report._id} report={report}/>
            )}
        </div>

    </>
  )
}

export default Reports