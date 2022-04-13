import {useEffect} from 'react'
import {toast} from 'react-toastify'
import  {useSelector, useDispatch} from 'react-redux'
import {getReport, closeReport } from '../features/reports/reportSlice';
import {getNotes, reset as notesReset} from '../features/notes/noteSlice'
import {useParams, useNavigate} from 'react-router-dom'
import BackButton from '../components/BackButton'
import Loading from '../components/Loading' 
import NoteItem from '../components/NoteItem' 

function Report() {
  const {report, isLoading, isSuccess, isError, message} = useSelector((state) => state.reports)

  const {notes, isLoading: notesIsLoading} = useSelector((state) => state.notes)

  const params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {reportId} = useParams()

  useEffect(() => {
    if(isError) {
      toast.error(message)
    }

    dispatch(getReport(reportId))
    dispatch(getNotes(reportId))
    
    // eslint-disable-next-line
  }, [isError, message, reportId])

// Close Report
const onReportClose = () =>
 {
   dispatch(closeReport(reportId))
   toast.success('Report Successfully Closed')
   navigate('/reports')
 }
  if(isLoading || notesIsLoading) {
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
          <h2>Notes</h2>
      </header>

      {notes.map((note) => (
        <NoteItem key={note._id} note={note} />
      ))}

      {report.status !== 'closed' && (
        <button onClick={onReportClose} className="btn btn-block btn-danger">Close Report</button>
      )}
    </div>
  )
}

export default Report