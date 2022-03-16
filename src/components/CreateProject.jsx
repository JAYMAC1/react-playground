import React, { useState } from 'react'

import { v4 as uuidv4 } from 'uuid'
const CreateProject = () => {
  const [formData, setFormData] = useState({
    projectName: '',
    projectOwner: '',
    projectManager: '',
    projectEstimatedStartDate: '',
    projectEstimatedFinishDate: '',
    projectDescription: '',
  })

  return <div>CreateProject</div>
}

export default CreateProject
