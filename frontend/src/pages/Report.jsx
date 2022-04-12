import {useEffect} from 'react'
import {toast} from 'react-toastify'
import  {useSelector, useDispatch} from 'react-redux'
import {getReport, reset} from '../features/reports/reportSlice';
import {useParams} from 'react-router-dom'
import BackButton from '../components/BackButton'
import Loading from '../components/Loading' 

function Report() {
  const {report, isLoading, isSuccess, isError, message} = useSelector((state) => state.reports)

  const params = useParams()
  const dispatch = useDispatch()
  const {reportId} = useParams()

  useEffect(() => {
    if(isError) {
      toast.error(message)
    }

    dispatch(getReport(reportId))
  }, [isError, message, reportId])

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
          <hr />
          <div className="report-desc">
            <h3>Description</h3>
            <p>{report.description}</p>
          </div>
      </header>
    </div>
  )
}

export default Report