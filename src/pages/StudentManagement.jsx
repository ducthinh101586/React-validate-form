import React, { useState } from 'react'
import Student from '../components/Student'
import Input from '../components/Input'

export default function StudentManagement() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [students, setStudents] = useState([])

  const handleChange = setFunc => value => setFunc(value)

  const handleSubmit = event => {
    event.preventDefault()
    if (name !== '' && age !== '') {
      setStudents(prevStudents => [
        ...prevStudents,
        {
          id: new Date().toISOString(),
          name,
          age
        }
      ])
      setName('')
      setAge('')
    }
  }

  return (
    <div>
      <h1>Quản lý sinh viên</h1>
      <form className="mb-3" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Tên:
          </label>
          <Input
            type="text"
            className="form-control"
            id="name"
            placeholder="Nhập tên"
            value={name}
            onChange={handleChange(setName)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Tuổi:
          </label>
          <Input
            type="number"
            className="form-control"
            id="age"
            placeholder="Nhập tuổi"
            value={age}
            onChange={handleChange(setAge)}
          />
        </div>

        <div>
          <button className="btn btn-primary" type="submit">
            Thêm
          </button>
        </div>
      </form>
      <ul className="list-group">
        {students.map(student => (
          <Student key={student.id} student={student} />
        ))}
      </ul>
    </div>
  )
}
