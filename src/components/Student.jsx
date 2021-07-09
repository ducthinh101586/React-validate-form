import React from 'react'
import PropTypes from 'prop-types'

export default function Student({ student, handleDelete, handleStartUpdate }) {
  return (
    <li className="list-group-item" key={student.id}>
      <span className="me-3">
        {student.name}: {student.age} tuổi
      </span>
      <div className="btn-group">
        <button type="button" className="btn btn-info" onClick={() => handleStartUpdate(student.id)}>
          sửa
        </button>
        <button type="button" className="btn btn-danger" onClick={() => handleDelete(student.id)}>
          xoá
        </button>
      </div>
    </li>
  )
}
Student.propTypes = {
  student: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleStartUpdate: PropTypes.func.isRequired
}
