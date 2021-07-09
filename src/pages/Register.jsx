import React from 'react'
import { useForm } from 'react-hook-form'

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm({
    defaultValues: {
      email: 'ngoducthinh586@gmail.com',
      name: 'Ducthinh',
      nation: 'vietnam',
      hobby: null,
      sex: '',
      password: '',
      confirmPassword: ''
    }
  })

  const onSubmit = data => console.log(data)
  console.log(errors)

  const handleClass = (name, baseClass = 'form-control') => `${baseClass} ${errors[name] ? 'is-invalid' : ''}`

  const ErrorMessage = ({ name }) => {
    if (errors[name]) {
      return <div className="invalid-feedback">{errors[name].message}</div>
    }
    return null
  }
  return (
    <div className="container">
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className="form-floating mb-3">
          <input
            type="email"
            id="email"
            name="email"
            className={handleClass('email')}
            placeholder="name@gmail.com"
            {...register('email', {
              required: {
                value: true,
                message: 'Email là bắt buộc'
              },
              validate: {
                email: v =>
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(v) ||
                  'email không đúng định dạng'
              }
            })}
          />
          <label htmlFor="email">email address</label>
          <ErrorMessage name="email" />
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            id="name"
            name="name"
            className={handleClass('name')}
            placeholder="ngoducthinh"
            {...register('name', {
              required: {
                value: true,
                message: 'Tên là bắt buộc'
              },
              minLength: {
                value: 1,
                message: 'Tên từ 1-160 ký tự'
              },
              maxLength: {
                value: 160,
                message: 'Tên từ 1-160 ký tự'
              }
            })}
          />
          <label htmlFor="name">Name</label>
          <ErrorMessage name="name" />
        </div>

        <div className="mb-3">
          <div className="form-check">
            <input
              type="radio"
              className={handleClass('nation', 'form-check-input')}
              name="nation"
              id="vietnam"
              value="vietnam"
              {...register('nation', {
                required: {
                  value: true,
                  message: 'Trường này là bắt buộc'
                }
              })}
            />
            <label htmlFor="vietnam" className="form-check-label">
              Việt Nam
            </label>
          </div>

          <div className="form-check">
            <input
              type="radio"
              className={handleClass('nation', 'form-check-input')}
              name="nation"
              id="aboard"
              value="aboard"
              {...register('nation', {
                required: {
                  value: true,
                  message: 'Trường này là bắt buộc'
                }
              })}
            />
            <label htmlFor="aboard" className="form-check-label">
              Aboard
            </label>
            <ErrorMessage name="nation" />
          </div>
        </div>

        <div className="mb-3">
          <div className="form-check">
            <input
              type="checkbox"
              className={handleClass('hobby', 'form-check-input')}
              id="gym"
              name="hobby"
              value="gym"
              {...register('hobby', {
                required: {
                  value: true,
                  message: 'Trường này là bắt buộc'
                }
              })}
            />
            <label htmlFor="gym" className="form-check-label">
              Gym
            </label>
          </div>

          <div className="form-check">
            <input
              type="checkbox"
              className={handleClass('hobby', 'form-check-input')}
              id="other"
              name="hobby"
              value="other"
              {...register('hobby', {
                required: {
                  value: true,
                  message: 'Trường này là bắt buộc'
                }
              })}
            />
            <label htmlFor="other" className="form-check-label">
              Other
            </label>
            <ErrorMessage name="hobby" />
          </div>
        </div>

        <div className="mb-3">
          <select
            name="sex"
            className={handleClass('sex', 'form-select')}
            {...register('sex', {
              required: {
                value: true,
                message: 'Trường này là bắt buộc'
              }
            })}
          >
            <option value="">Sex</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">Other</option>
          </select>
          <ErrorMessage name="sex" />
        </div>

        <div className="form-floating mb-3">
          <input
            type="password"
            id="password"
            name="password"
            className={handleClass('password')}
            placeholder="***"
            {...register('password', {
              required: {
                value: true,
                message: 'Mật khẩu là bắt buộc'
              },
              minLength: {
                value: 6,
                message: 'Tối thiểu 6 ký tự'
              },
              maxLength: {
                value: 160,
                message: 'Tối đa 160 ký tự'
              }
            })}
          />
          <label htmlFor="password">Password</label>
          <ErrorMessage name="Password" />
        </div>

        <div className="form-floating mb-3">
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword "
            className={handleClass('confirmPassword')}
            placeholder="***"
            {...register('confirmPassword', {
              required: {
                value: true,
                message: 'Mật khẩu là bắt buộc'
              },
              minLength: {
                value: 2,
                message: 'Tên từ 2-160 ký tự'
              },
              maxLength: {
                value: 160,
                message: 'Tên từ 2-160 ký tự'
              },
              validate: {
                samePassword: v => v === getValues('password') || 'Mật khẩu không trung khớp'
              }
            })}
          />
          <label htmlFor="confirmPassword">confirmPassword</label>
          <ErrorMessage name="confirmPassword" />
        </div>

        <button className="btn btn-primary" type="submit">
          Register
        </button>
      </form>
    </div>
  )
}
