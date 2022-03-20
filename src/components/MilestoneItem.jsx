import React from 'react'
import './milestoneItem.css'

const MilestoneItem = () => {
  return (
    <div className='milestone-container'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Summary</th>
            <th>Start Date</th>
            <th>Due Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>List All Sites</td>
            <td>Prioritise sites.....</td>
            <td>18/03/2022</td>
            <td>28/03/2022</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default MilestoneItem
