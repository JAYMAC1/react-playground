import React, { useState, useEffect, useCallback } from 'react'

import { v4 as uuidv4 } from 'uuid'
import './createProject.css'

const CreateProject = () => {
  const [formData, setFormData] = useState({
    projectId: '',
    projectName: '',
    projectOwner: '',
    projectManager: '',
    projectEstimatedStartDate: '',
    projectEstimatedFinishDate: '',
    projectDescription: '',
    projectTeam: [],
    projectMileStones: [],
  })

  const {
    projectId,
    projectName,
    projectOwner,
    projectManager,
    projectEstimatedStartDate,
    projectEstimatedFinishDate,
    projectDescription,
    projectTeam,
    projectMileStones,
  } = formData

  const setId = useCallback(() => {
    const id = uuidv4()
    setFormData({ ...formData, projectId: id })
  }, [uuidv4])

  useEffect(() => {
    setId()
  }, [setId])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
  }

  const onMutate = (e) => {
    let boolean = null
    if (e.target.value === 'true') {
      boolean = true
    }

    if (e.target.value === 'false') {
      boolean = false
    }

    // // Files
    // if (e.target.files) {
    //   setFormData((prevState) => ({
    //     ...prevState,
    //     images: e.target.files,
    //   }))
    // }

    // Text/Booleans/Numbers
    if (!e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: boolean ?? e.target.value,
      }))
    }
  }

  console.log(formData)
  return (
    <>
      {' '}
      <section id='registration-page'>
        <form class='project-form'>
          <div class='form-header'>
            <h1>New Project</h1>
          </div>
          <div class='form-body'>
            <div class='row'>
              <div class='input-group'>
                <label for='firstName'>First Name</label>
                <input
                  type='text'
                  name='firstName'
                  placeholder='Enter your first name'
                />
              </div>
              <div class='input-group'>
                <label for='lastName'>Last Name</label>
                <input
                  type='text'
                  name='lastName'
                  placeholder='Enter your last name'
                />
              </div>
            </div>
            <div class='row'>
              <div class='input-group'>
                <label for='email'>Email</label>
                <input
                  type='email'
                  name='email'
                  placeholder='Enter your email address'
                />
              </div>
            </div>
            <div class='row'>
              <div class='input-group'>
                <label for='projectEstimatedStartDate'>
                  Estimated Start Date
                </label>
                <input
                  type='date'
                  name='projectEstimatedStartDate'
                  id='projectEstimatedStartDate'
                  placeholder='Enter your projectEstimatedStartDate'
                />
              </div>
              <div class='input-group'>
                <label for='projectEstimatedFinishDate'>
                  Estimated Finish Date
                </label>
                <input
                  type='date'
                  name='projectEstimatedFinishDate'
                  id='projectEstimatedFinishDate'
                  placeholder='Enter your projectEstimatedFinishDate'
                />
              </div>
            </div>
            <div class='row'>
              <div class='input-group'>
                <label for='gender'>Gender</label>
              </div>
              <div class='input-group'>
                <label for='hobbies'>Hobbies</label>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
    // <div className='container'>
    //   <form className='form' onSubmit={handleSubmit}>
    //     <div className='form-header'>
    //       <h1>New Project</h1>
    //     </div>
    //     <div className='form-control'>
    //       <label htmlFor='projectName'>Project Name:</label>
    //       <input
    //         type='text'
    //         name='projectName'
    //         id='projectName'
    //         onChange={onMutate}
    //         value={projectName}
    //         required
    //       />
    //     </div>

    //     <div className='form-control'>
    //       <label htmlFor='projectOwner'>Project Owner:</label>
    //       <input
    //         type='text'
    //         name='projectOwner'
    //         id='projectOwner'
    //         onChange={onMutate}
    //         value={projectOwner}
    //         required
    //       />
    //     </div>
    //     <div className='form-control'>
    //       <label htmlFor='projectManager'>Project Manager:</label>
    //       <input
    //         type='text'
    //         name='projectManager'
    //         id='projectManager'
    //         onChange={onMutate}
    //         value={projectManager}
    //         required
    //       />
    //     </div>
    //     <div className='form-control dual'>
    //       <label htmlFor='projectEstimatedStartDate'>
    //         Estimated Start Date:
    //       </label>
    //       <input
    //         type='date'
    //         name='projectEstimatedStartDate'
    //         id='projectEstimatedStartDate'
    //         onChange={onMutate}
    //         value={projectEstimatedStartDate}
    //         required
    //       />

    //       <label htmlFor='projectEstimatedFinishDate'>
    //         Estimated End Date:
    //       </label>
    //       <input
    //         type='date'
    //         name='projectEstimatedFinishDate'
    //         id='projectEstimatedFinishDate'
    //         onChange={onMutate}
    //         value={projectEstimatedFinishDate}
    //         required
    //       />
    //     </div>
    //   </form>
    // </div>
  )
}

export default CreateProject
