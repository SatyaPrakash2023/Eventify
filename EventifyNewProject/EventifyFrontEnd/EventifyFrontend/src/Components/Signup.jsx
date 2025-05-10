import React, { useRef, useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import '../StyleFile/style.css';
import logo from '../EventifyImages/Logo.png';


const Signup = () => {
  const fnameRef = useRef();
  const lnameRef = useRef();
  const emailRef = useRef();
  const userNameRef = useRef();
  const dobRef = useRef();
  const mobileRef = useRef();

  const [phone, setPhone] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const validate = (val) => {
    const v1 = fnameRef.current;
    const v2 = lnameRef.current;
    const v3 = mobileRef.current;
    const v4 = emailRef.current;
    const v5 = userNameRef.current;
    const v6 = dobRef.current;

    let valid = true;

    if (val >= 1 || val === 0) {
      v1.style.borderColor = v1.value === '' ? 'red' : 'green';
      valid = valid && v1.value !== '';
    }
    if (val >= 2 || val === 0) {
      v2.style.borderColor = v2.value === '' ? 'red' : 'green';
      valid = valid && v2.value !== '';
    }
    if (val >= 3 || val === 0) {
      v3.style.borderColor = v3.value === '' ? 'red' : 'green';
      valid = valid && v3.value !== '';
    }
    if (val >= 4 || val === 0) {
      v4.style.borderColor = v4.value === '' ? 'red' : 'green';
      valid = valid && v4.value !== '';
    }
    if (val >= 5 || val === 0) {
      v5.style.borderColor = v5.value === '' ? 'red' : 'green';
      valid = valid && v5.value !== '';
    }
    if (val >= 6 || val === 0) {
      v6.style.borderColor = v6.value === '' ? 'red' : 'green';
      valid = valid && v6.value !== '';
    }

    return valid;
  };

  return (
    <>
     <nav className="navbar navbar-light bg-dark">
      <div className="container-fluid">
       <a className="navbar-brand" href="http://localhost:3000" style={{ color: '#fff', marginLeft: '0.1cm' }}>
        <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top"/>
        Eventify
      </a>
      </div>
    </nav>
    <div className="container-fluid px-1 py-5 mx-auto">
      <div className="row d-flex justify-content-center">
        <div className="col-xl-12 col-lg-10 col-md-9 col-11 text-center">
          <h3>Register here</h3>
          <div className="card">
            <h5 className="text-center mb-4">Where Every Moment Becomes an Experience.</h5>
            <form className="form-card">

              {/* Profile picture section */}
              <div className="row justify-content-center mb-4">
                <div className="form-group text-center">
                  {profileImage ? (
                    <img
                      src={profileImage}
                      alt="Profile Preview"
                      className="rounded-circle"
                      style={{ width: '120px', height: '120px', objectFit: 'cover', border: '2px solid #ccc' }}
                    />
                  ) : (
                    <div
                      className="rounded-circle bg-light"
                      style={{
                        width: '120px',
                        height: '120px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '2px dashed #ccc',
                        color: '#aaa',
                      }}
                    >
                      No Image
                    </div>
                  )}
                  <div className="mt-2">
                    <input className="form-control" type="file" id="formFile" accept="image/*" onChange={handleImageChange} />
                  </div>
                </div>
              </div>

              {/* Name section */}
              <div className="row justify-content-between text-left">
                <div className="form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label px-3">
                    First name<span className="text-danger"> *</span>
                  </label>
                  <input
                    ref={fnameRef}
                    type="text"
                    name="fname"
                    placeholder="Enter your first name"
                    onBlur={() => validate(1)}
                  />
                </div>
                <div className="form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label px-3">
                    Last name<span className="text-danger"> *</span>
                  </label>
                  <input
                    ref={lnameRef}
                    type="text"
                    name="lname"
                    placeholder="Enter your last name"
                    onBlur={() => validate(2)}
                  />
                </div>
              </div>

              {/* Mobile and email */}
              <div className="row justify-content-between text-left">
                <div className="form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label px-3">
                    Mobile Number<span className="text-danger"> *</span>
                  </label>
                  <PhoneInput
                    country={'in'}
                    value={phone}
                    onChange={(value) => {
                      setPhone(value);
                      mobileRef.current.value = value;
                    }}
                    inputClass="w-100"
                    inputStyle={{ height: '38px' }}
                    enableSearch={true}
                    containerStyle={{ width: '100%' }}
                    placeholder='Enter your phone number'
                  />
                  <input ref={mobileRef} type="hidden" />
                </div>

                <div className="form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label px-3">
                    Email<span className="text-danger"> *</span>
                  </label>
                  <input
                    ref={emailRef}
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    onBlur={() => validate(4)}
                  />
                </div>
              </div>

              {/* Username and DOB */}
              <div className="row justify-content-between text-left">
                <div className="form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label px-3">
                    Username<span className="text-danger"> *</span>
                  </label>
                  <input
                    ref={userNameRef}
                    type="text"
                    name="username"
                    placeholder="Enter your username"
                    onBlur={() => validate(5)}
                  />
                </div>

                <div className="form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label px-3">
                    Date of Birth<span className="text-danger"> *</span>
                  </label>
                  <input
                    ref={dobRef}
                    type="date"
                    name="dob"
                    onBlur={() => validate(6)}
                  />
                </div>
              </div>

              {/* Gender radio buttons */}
              <div className="row justify-content-between text-left">
                <div className="form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label px-3">
                    Gender<span className="text-danger"> *</span>
                  </label>
                  <div>
                    <label className="mr-3">
                      <input type="radio" name="gender" value="male" className="mr-1" /> Male
                    </label>
                    <label className="mr-3">
                      <input type="radio" name="gender" value="female" className="mr-1" /> Female
                    </label>
                    <label>
                      <input type="radio" name="gender" value="other" className="mr-1" /> Other
                    </label>
                  </div>
                </div>
              </div>
              {/* Submit */}
              <div className="row justify-content-end">
                <div className="form-group col-sm-12">
                  <button type="submit" className="btn btn-block btn-primary" href='http://localhost:3000/Login'>
                    Signup
                  </button> 
                </div>
                </div>
              <a href='http://localhost:3000/Login'>Already have an account ?</a>&nbsp;&nbsp;
              <a href='http://localhost:3000/Home' style={{textDecorationLine:'none',marginLeft: '2px' }}>Login as a guest ?</a>
            </form>
          </div>
        </div>
      </div>
      </div>
    </> 
  );
};

export default Signup;
