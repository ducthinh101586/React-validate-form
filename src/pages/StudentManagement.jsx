import React, { useState, Fragment } from 'react'
import Student from '../components/Student'
import Input from '../components/Input'

export default function StudentManagement() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [students, setStudents] = useState([])
  const [currenntStudent, setCurrentStudent] = useState(null)

  const handleStartUpdate = id => {
    const student = students.find(student => student.id === id)
    setCurrentStudent(student)
    setName(student.name)
    setAge(student.age)
  }
  const handleUpdate = () => {
    if (name !== '' && age !== '') {
      const _students = students.map(student => {
        if (student.id === currenntStudent.id) {
          return {
            name,
            age,
            id: student.id
          }
        }
        return student
      })
      setStudents(_students)
      handleBack()
    }
  }

  const handleBack = () => {
    setName('')
    setAge('')
    setCurrentStudent(null)
  }

  const handleDelete = id => {
    const index = students.findIndex(student => student.id === id)
    const _students = [...students]
    _students.splice(index, 1)
    setStudents(_students)
  }

  const handleChange = setFunc => value => setFunc(value)

  const handleAdd = () => {
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
      <form className="mb-3">
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
          {currenntStudent && (
            <Fragment>
              <button className="btn btn-primary" type="button" onClick={handleUpdate}>
                sửa
              </button>

              <button className="btn btn-dark" type="button" onClick={handleBack}>
                back
              </button>
            </Fragment>
          )}

          {!currenntStudent && (
            <button className="btn btn-primary" type="button" onClick={handleAdd}>
              Thêm
            </button>
          )}
        </div>
      </form>
      <ul className="list-group">
        {students.map(student => (
          <Student
            key={student.id}
            student={student}
            handleDelete={handleDelete}
            handleStartUpdate={handleStartUpdate}
          />
        ))}
      </ul>
    </div>
  )
}
