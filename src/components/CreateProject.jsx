import React, { useState, useEffect, useCallback } from 'react'

import { v4 as uuidv4 } from 'uuid'
import './createProject.css'

const CreateProject = () => {
  const [formData, setFormData] = useState({
    projectId: uuidv4(),
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
    projectName,
    projectOwner,
    projectManager,
    projectEstimatedStartDate,
    projectEstimatedFinishDate,
    projectDescription,
    projectTeam,
    projectMileStones,
  } = formData

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
        <form className='project-form'>
          <div className='form-header'>
            <h1>New Project</h1>
          </div>
          <div className='form-body'>
            <div className='row'>
              <div className='input-group'>
                <label htmlFor='projectName'>Project Name:</label>
                <input
                  type='text'
                  name='projectName'
                  id='projectName'
                  placeholder='Enter the name of the project'
                  onChange={onMutate}
                  value={projectName}
                />
              </div>
            </div>
            <div className='row'>
              <div className='input-group'>
                <label htmlFor='projectOwner'>Project Owner:</label>
                <input
                  type='text'
                  name='projectOwner'
                  id='projectOwner'
                  onChange={onMutate}
                  value={projectOwner}
                  placeholder='Enter the name of the project owner'
                />
              </div>
              <div className='input-group'>
                <label htmlFor='projectManager'>Project Manager:</label>
                <input
                  type='text'
                  name='projectManager'
                  id='projectManager'
                  onChange={onMutate}
                  value={projectManager}
                  placeholder='Enter the name of the project manager'
                />
              </div>
            </div>
            <div className='row'>
              <div className='input-group'>
                <label htmlFor='projectEstimatedStartDate'>
                  Estimated Start Date
                </label>
                <input
                  type='date'
                  name='projectEstimatedStartDate'
                  id='projectEstimatedStartDate'
                  placeholder='Enter your projectEstimatedStartDate'
                  onChange={onMutate}
                  value={projectEstimatedStartDate}
                />
              </div>
              <div className='input-group'>
                <label htmlFor='projectEstimatedFinishDate'>
                  Estimated Finish Date
                </label>
                <input
                  type='date'
                  name='projectEstimatedFinishDate'
                  id='projectEstimatedFinishDate'
                  placeholder='Enter your projectEstimatedFinishDate'
                  onChange={onMutate}
                  value={projectEstimatedFinishDate}
                />
              </div>
            </div>
            <hr />
            <div className='row'>
              <div className='input-group'>
                <label htmlFor='projectDescription'>Project Summary</label>
                <textarea
                  placeholder='Project Summary'
                  rows={10}
                  name='projectDescription'
                  id='projectDescription'
                  onChange={onMutate}
                  value={projectDescription}></textarea>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
    // <div classNameName='container'>
    //   <form classNameName='form' onSubmit={handleSubmit}>
    //     <div classNameName='form-header'>
    //       <h1>New Project</h1>
    //     </div>
    //     <div classNameName='form-control'>
    //       <label htmlhtmlFor='projectName'>Project Name:</label>
    //       <input
    //         type='text'
    //         name='projectName'
    //         id='projectName'
    //         onChange={onMutate}
    //         value={projectName}
    //         required
    //       />
    //     </div>

    //     <div classNameName='form-control'>
    //       <label htmlhtmlFor='projectOwner'>Project Owner:</label>
    //       <input
    //         type='text'
    //         name='projectOwner'
    //         id='projectOwner'
    //         onChange={onMutate}
    //         value={projectOwner}
    //         required
    //       />
    //     </div>
    //     <div classNameName='form-control'>
    //       <label htmlhtmlFor='projectManager'>Project Manager:</label>
    //       <input
    //         type='text'
    //         name='projectManager'
    //         id='projectManager'
    //         onChange={onMutate}
    //         value={projectManager}
    //         required
    //       />
    //     </div>
    //     <div classNameName='form-control dual'>
    //       <label htmlhtmlFor='projectEstimatedStartDate'>
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

    //       <label htmlhtmlFor='projectEstimatedFinishDate'>
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
