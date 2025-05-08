import React, { useRef } from 'react';

const Signup = () => {
    // Create refs for each input field
    const fnameRef = useRef();
    const lnameRef = useRef();
    const emailRef = useRef();
    const mobRef = useRef();
    const jobRef = useRef();
    const ansRef = useRef();
  
    const validate = (val) => {
      const v1 = fnameRef.current;
      const v2 = lnameRef.current;
      const v3 = emailRef.current;
      const v4 = mobRef.current;
      const v5 = jobRef.current;
      const v6 = ansRef.current;
  
      let flag1 = true, flag2 = true, flag3 = true;
      let flag4 = true, flag5 = true, flag6 = true;
  
      if (val >= 1 || val === 0) {
        v1.style.borderColor = v1.value === '' ? 'red' : 'green';
        flag1 = v1.value !== '';
      }
      if (val >= 2 || val === 0) {
        v2.style.borderColor = v2.value === '' ? 'red' : 'green';
        flag2 = v2.value !== '';
      }
      if (val >= 3 || val === 0) {
        v3.style.borderColor = v3.value === '' ? 'red' : 'green';
        flag3 = v3.value !== '';
      }
      if (val >= 4 || val === 0) {
        v4.style.borderColor = v4.value === '' ? 'red' : 'green';
        flag4 = v4.value !== '';
      }
      if (val >= 5 || val === 0) {
        v5.style.borderColor = v5.value === '' ? 'red' : 'green';
        flag5 = v5.value !== '';
      }
      if (val >= 6 || val === 0) {
        v6.style.borderColor = v6.value === '' ? 'red' : 'green';
        flag6 = v6.value !== '';
      }
  
      return flag1 && flag2 && flag3 && flag4 && flag5 && flag6;
    };
  
    // const handleSubmit = (e) => { onSubmit={handleSubmit}
    //   e.preventDefault();
    //   const isValid = validate(0); // Validate all fields
  
    //   if (isValid) {
    //     alert('Form submitted successfully!');
    //   } else {
    //     alert('Please fill all required fields.');
    //   }
   // };
  
    return (
      <div className="container-fluid px-1 py-5 mx-auto">
        <div className="row d-flex justify-content-center">
          <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
            <h3>Request a Demo</h3>
            <div className="card">
              <h5 className="text-center mb-4">Powering world-class companies</h5>
              <form className="form-card" >
                <div className="row justify-content-between text-left">
                  <div className="form-group col-sm-6 flex-column d-flex">
                    <label className="form-control-label px-3">
                      First name<span className="text-danger"> *</span>
                    </label>
                    <input
                      ref={fnameRef}
                      type="text"
                      id="fname"
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
                      id="lname"
                      name="lname"
                      placeholder="Enter your last name"
                      onBlur={() => validate(2)}
                    />
                  </div>
                </div>
  
                <div className="row justify-content-between text-left">
                  <div className="form-group col-sm-6 flex-column d-flex">
                    <label className="form-control-label px-3">
                      Business email<span className="text-danger"> *</span>
                    </label>
                    <input
                      ref={emailRef}
                      type="email"
                      id="email"
                      name="email"
                      placeholder=""
                      onBlur={() => validate(3)}
                    />
                  </div>
                  <div className="form-group col-sm-6 flex-column d-flex">
                    <label className="form-control-label px-3">
                      Phone number<span className="text-danger"> *</span>
                    </label>
                    <input
                      ref={mobRef}
                      type="text"
                      id="mob"
                      name="mob"
                      placeholder=""
                      onBlur={() => validate(4)}
                    />
                  </div>
                </div>
  
                <div className="row justify-content-between text-left">
                  <div className="form-group col-sm-6 flex-column d-flex">
                    <label className="form-control-label px-3">
                      Job title<span className="text-danger"> *</span>
                    </label>
                    <input
                      ref={jobRef}
                      type="text"
                      id="job"
                      name="job"
                      placeholder=""
                      onBlur={() => validate(5)}
                    />
                  </div>
                </div>
  
                <div className="row justify-content-between text-left">
                  <div className="form-group col-12 flex-column d-flex">
                    <label className="form-control-label px-3">
                      What would you be using Flinks for?<span className="text-danger"> *</span>
                    </label>
                    <input
                      ref={ansRef}
                      type="text"
                      id="ans"
                      name="ans"
                      placeholder=""
                      onBlur={() => validate(6)}
                    />
                  </div>
                </div>
  
                <div className="row justify-content-end">
                  <div className="form-group col-sm-6">
                    <button type="submit" className="btn btn-block btn-primary">
                      Request a demo
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Signup;
  