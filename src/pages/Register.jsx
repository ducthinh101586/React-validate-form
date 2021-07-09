import React from 'react'

export default function Register() {
  return (
    <div className="container">
      <form noValidate>
        <div className="form-floating mb-3">
          <input type="email" id="email" name="email" className="form-control" placeholder="name@gmail.com" />
          <label htmlFor="email">email address</label>
        </div>

        <div className="form-floating mb-3">
          <input type="text" id="name" name="name" className="form-control" placeholder="ngoducthinh" />
          <label htmlFor="name">Name</label>
        </div>

        <div className="mb-3">
          <div className="form-check">
            <input type="radio" className="form-check-input" name="nation" id="vietnam" />
            <label htmlFor="vietnam" className="form-check-label">
              Việt Nam
            </label>
          </div>

          <div className="form-check">
            <input type="radio" className="form-check-input" name="nation" id="aboard" />
            <label htmlFor="aboard" className="form-check-label">
              Aboard
            </label>
          </div>
        </div>

        <div className="mb-3">
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="gym" name="hobby" value="gym" />
            <label htmlFor="gym" className="form-check-label">
              Gym
            </label>
          </div>

          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="other" name="hobby" value="other" />
            <label htmlFor="other" className="form-check-label">
              Other
            </label>
          </div>
        </div>

        <div className="mb-3">
          <select name="sex" className="form-select">
            <option value="">Sex</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">Other</option>
          </select>
        </div>

        <div className="form-floating mb-3">
          <input type="password" id="password" name="password " className="form-control" placeholder="***" />
          <label htmlFor="password">Password</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword "
            className="form-control"
            placeholder="***"
          />
          <label htmlFor="confirmPassword">confirmPassword</label>
        </div>

        <button className="btn btn-primary" type="submit">
          Register
        </button>
      </form>
    </div>
  )
}
