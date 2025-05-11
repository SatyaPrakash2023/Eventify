import React, { useRef, useState, useEffect } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import '../StyleFile/style.css';
import logo from '../EventifyImages/Logo.png';
import { cloudinaryConfig } from '../CloudinaryConfig';
import { cretaeUser } from '../Services/UserServics';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import bgImage from '../EventifyImages/BackgroundImage.png';



const generateUserId = () => {

  // Generate a random UUID
  const uuid = uuidv4().replace(/-/g, '');
  
  // Extract the first 5 characters from the UUID and create the user ID
  const userID = "Usr" + uuid.substring(0, 5); // Ensures it's 8 characters including "Usr"
  
  return userID;
  // return `Usr-${uuidv4()}`; // Generates a unique ID with "Usr-" prefix
};


const Signup = () => {
  const fnameRef = useRef();
  const lnameRef = useRef();
  const emailRef = useRef();
  const userNameRef = useRef();
  const dobRef = useRef();
  const mobileRef = useRef();
  const passwordRef = useRef();
  const [phone, setPhone] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [createdAt,setCreatedAt] = useState(new Date().toISOString());
  const [updatedAt,setUpdatedAt] = useState(createdAt);
  const [Status, setStatus] = useState('Active');
  


  const navigate = useNavigate();

  const handleImageUpload = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', cloudinaryConfig.uploadPreset);
    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudinaryConfig.cloudName}/image/upload`, {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      setImageUrl(data.secure_url);
      console.log('Image uploaded:', data.secure_url);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  }; 

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleImageUpload(file);
      setProfileImage(URL.createObjectURL(file));
    }else {
      setFileName('No Profile Picture');
      setProfileImage(null);
    }
  };

  const validate = (val) => {
    const v1 = fnameRef.current;
    const v2 = lnameRef.current;
    const v3 = mobileRef.current;
    const v4 = emailRef.current;
    const v5 = userNameRef.current;
    const v6 = dobRef.current;
    const v7 = passwordRef.current;
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
    if (val >= 7 || val === 0) {
      v7.style.borderColor = v7.value === '' ? 'red' : 'green';
      valid = valid && v7.value !== '';
    }

    return valid;
  };
  function saveUser(e) {
    e.preventDefault();
    const newUserId = generateUserId();


    const user = {
      userId:newUserId,
      firstName: fnameRef.current.value,
      lastName: lnameRef.current.value,
      mobileNo: phone,
      email: emailRef.current.value,
      userName: userNameRef.current.value,
      dob: dobRef.current.value,
      gender: document.querySelector('input[name="gender"]:checked').value,
      status: Status,
      createdAt: createdAt,
      updatedAt: updatedAt,
      passwordFst: passwordRef.current.value,
      profilePicture: imageUrl,      
    }
    console.log('User data:', user);
    cretaeUser(user).then((response) => {
      console.log(response.data);
      navigate('/Login');
    })
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
    <div className="container-fluid px-1 py-5 mx-auto" style={{
        color: '#000',
        overflowX: 'hidden',
        height: '100%',
        backgroundImage: `url(${bgImage})`,
        backgroundColor: '#000',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
      }}>
      <div className="row d-flex justify-content-center">
        <div className="col-xl-12 col-lg-10 col-md-9 col-11 text-center">
          <h3 style={{ fontWeight: 'bold', color: '#000' }}>Register here</h3>
          <div className="card">
            <h5 className="text-center mb-4" style={{ fontFamily: 'Georgia, serif', fontWeight: 'bold', color: '#444' }}>Where Every Moment Becomes an Experience.</h5>
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
                  Password<span className="text-danger"> *</span>
                  </label>
                  <input
                    ref={passwordRef}
                    type="password"
                    name="Password"
                    placeholder="Enter your password"
                    onBlur={() => validate(7)}
                  />
                </div>


                <div className="form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label px-3">
                    Gender<span className="text-danger">*</span>
                  </label>
                  <div>
                    <label className="mr-3">
                      <input type="radio" name="gender" value="MALE" className="mr-1" /> Male
                    </label>
                    <label className="mr-3">
                      <input type="radio" name="gender" value="FEMALE" className="mr-1" /> Female
                    </label>
                    <label>
                      <input type="radio" name="gender" value="OTHER" className="mr-1" /> Other
                    </label>
                  </div>
                </div>
              </div>
              {/* Submit */}
              <div className="row justify-content-end">
                <div className="form-group col-sm-12">
                  <button type="submit" className="btn btn-block btn-primary" onClick={saveUser} >
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
