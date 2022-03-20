import React, { useState, useEffect, useCallback } from 'react'
import Select from 'react-select'
import { v4 as uuidv4 } from 'uuid'
import './createProject.css'
import MilestoneItem from './MilestoneItem'
import Modal from './Modal'

const availableUsers = [
  { id: '1', name: 'Millie', email: 'millie@test.dev' },
  { id: '2', name: 'Jess', email: 'jess@test.dev' },
  { id: '3', name: 'Rachel', email: 'rachel@test.dev' },
]

const CreateProject = () => {
  const [users, setUsers] = useState([])
  const [showModal, setShowModal] = useState(false)
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

  useEffect(() => {
    const options = availableUsers.map((user) => {
      return { value: user, label: user.name }
    })
    setUsers(options)
  }, [])

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
  const handleClick = (e) => {
    e.preventDefault()
    console.log('Adding project milestone')
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
            <div className='row'>
              <div className='input-group'>
                <label htmlFor='projectTeam'>Add Team Member:</label>
                <Select
                  className='select'
                  id='projectTeam'
                  name='projectTeam'
                  onChange={(option) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      projectTeam: option.value,
                    }))
                  }
                  options={users}
                  isMulti
                />
              </div>
            </div>
            <div className='row'>
              <div className='input-group'>
                <label htmlFor='projectMileStones'>Project Milestones:</label>
                <button onClick={handleClick}>Add Milestone</button>
                {formData.projectMileStones.length === 0 && <MilestoneItem />}
              </div>
            </div>
          </div>
        </form>
        {showModal && <Modal />}
      </section>
    </>
  )
}

export default CreateProject
