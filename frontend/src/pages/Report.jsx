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

  return (
    <div>Report</div>
  )
}

export default Report