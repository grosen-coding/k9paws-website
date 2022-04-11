import React from 'react'
import {useState} from 'react'
import {useSelector} from 'react-redux'


function NewReport() {
const {client} = useSelector((state) => state.auth)
const [name] = useState(client.name) 
const [email] = useState(client.email) 
const [category, setCategory] = useState('') 
const [description, setDescription] = useState('') 

const onSubmit = 
(e) => {
    e.preventDefault()
}

  return (
    <>
       <section className="heading">
           <h1>Create New Report</h1>
           <p>Please fill out the form below</p>
       </section>

       <section className="form">
           <div className="form-group">
               <label htmlFor="name">Client Name</label>
               <input type="text" className="form-control" value={name} disabled />
           </div>
           <div className="form-group">
               <label htmlFor="email">Client Email</label>
               <input type="text" className="form-control" value={email} disabled />
           </div>
           <form onSubmit={onSubmit}>
               <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <select name="category" id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="Update">Update</option>
                        <option value="Question">Question</option>
                        <option value="Positive Experience">Positive Experience</option>
                        <option value="Negative Incident">Negative Incident</option>
                    </select>
               </div>
               <div className="form-group">
                   <label htmlFor="description">Brief Description</label>
                   <textarea name="description" id="description" className='form-control' placeholder='Please write a brief description...' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
               </div>
               <div className="form-group">
                   <button className="btn btn-block">
                       Submit
                   </button>
               </div>
            
           </form>
       </section>
    </>
  )
}

export default NewReport