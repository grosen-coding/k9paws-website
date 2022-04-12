import {useEffect} from 'react'
import {toast} from 'react-toastify'
import  {useSelector, useDispatch} from 'react-redux'
import {getReport, reset, closeReport } from '../features/reports/reportSlice';
import {useParams, useNavigate} from 'react-router-dom'
import BackButton from '../components/BackButton'
import Loading from '../components/Loading' 

function Report() {
  const {report, isLoading, isSuccess, isError, message} = useSelector((state) => state.reports)

  const params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {reportId} = useParams()

  useEffect(() => {
    if(isError) {
      toast.error(message)
    }

    dispatch(getReport(reportId))
    
    // eslint-disable-next-line
  }, [isError, message, reportId])

// Close Report
const onReportClose = () =>
 {
   dispatch(closeReport(reportId))
   toast.success('Report Successfully Closed')
   navigate('/reports')
 }
  if(isLoading) {
    return <Loading />
  }

  if(isError) {
    return <h3>Something seems to have gone wrong...</h3>
  }

  return (
    <div className='report-page'>
      <header className="report-header">
        <BackButton url='/reports' />
        <h2>
          Report ID: {report._id}
          <span className={`status status-${report.status}`}>
            {report.status}
          </span>
          </h2>
          <h3>Date Submitted: {new Date(report.createdAt).toLocaleString('en-US')}</h3>
          <h3>Category: {report.category}</h3>
          <hr />
          <div className="report-desc">
            <h3>Description</h3>
            <p>{report.description}</p>
          </div>
      </header>

      {report.status !== 'closed' && (
        <button onClick={onReportClose} className="btn btn-block btn-danger">Close Report</button>
      )}
    </div>
  )
}

export default Report