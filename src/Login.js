import React from 'react'
import './Login.css'
import './asset/login.jpeg'

function Login() {
  return (
    <>
    <img src='./asset/login.jpeg'></img>
    <div className="login-page">
        <div className="side">
        <h1>
          LEARN &amp;
          <br />
          <span>DISCOVER.</span>
        </h1>
      </div>
      <div className="form-box">
        <form>
          <h2>Online Admission Enquiry - 2026</h2>

          <div className="field">
            <label>Name</label>
            <input type="text" placeholder="Name" />
          </div>

          <div className="field">
            <label>Father Name</label>
            <input type="text" placeholder="Father Name" />
          </div>

          <div className="field">
            <label>Date of Birth</label>
            <input type="date" />
          </div>

          <div className="field">
            <label>Gender</label>
            <select>
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="field">
            <label>Register Number [+2 / Diploma / UG]</label>
            <input type="text" placeholder="Register Number" />
          </div>

          <div className="field">
            <label>Email</label>
            <input type="email" placeholder="Email Id" />
          </div>

          <div className="field">
            <label>Mobile Number</label>
            <input type="tel" placeholder="Mobile Number" />
          </div>

          <div className="field">
            <label>Parent Mobile Number</label>
            <input type="tel" placeholder="Parent Mobile Number" />
          </div>

          <div className="field">
            <label>Community</label>
            <select>
              <option value="">Select</option>
              <option value="OC">OC</option>
              <option value="BC">BC</option>
              <option value="MBC">MBC</option>
              <option value="OBC">OBC</option>
              <option value="BCM">BCM</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <div className="field">
            <label>First Graduate</label>
            <select>
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className="field">
            <label>Address</label>
            <input type="text" placeholder="Address" />
          </div>

          <div className="field">
            <label>City / Town</label>
            <input type="text" placeholder="City / Town" />
          </div>

          <div className="field">
            <label>District</label>
            <input type="text" placeholder="District" />
          </div>

          <div className="field">
            <label>State</label>
            <input type="text" placeholder="State" />
          </div>

          <div className="field">
            <label>Course</label>
            <select>
              <option value="">Select</option>
              <option value="CSE">CSE</option>
              <option value="EEE">EEE</option>
              <option value="AIML">AIML</option>
              <option value="AIDS">AIDS</option>
            </select>
          </div>

          <div className="field">
            <label>Referred By</label>
            <input type="text" placeholder="Name & Mobile No" />
          </div>

          <div className="btn-row">
            <button type="submit">Apply</button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Login