import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../CSS/Main.css'
const Careers = () => {

    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_3n2ez6p', 'template_k3ypewu', form.current, 'busLLDqzt7_enYw8d')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div className='Careers'>
      <h1 className='my-5'>Job Openings</h1>

      <div className="container mb-5">
        
        <div className="row">
          <div className="col-sm-12">
            <div class="d-flex align-items-center">
              <div className="col-sm-4">
                <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                  <button class="nav-link text-start active" id="Net-tab" data-bs-toggle="pill" data-bs-target="#Net" type="button" role="tab" aria-controls="Net" aria-selected="true">Senior .Net Developer</button>
                  <button class="nav-link text-start" id="Angular-tab" data-bs-toggle="pill" data-bs-target="#Angular" type="button" role="tab" aria-controls="Angular" aria-selected="false">Senior .Net Developer with Angular</button>
                  <button class="nav-link text-start" id="Devops-tab" data-bs-toggle="pill" data-bs-target="#Devops" type="button" role="tab" aria-controls="Devops" aria-selected="false">Azure Devops Engineer</button>
                  <button class="nav-link text-start" id="Developer-tab" data-bs-toggle="pill" data-bs-target="#Developer" type="button" role="tab" aria-controls="Developer" aria-selected="false">Sr. Database Developer</button>
                  <button class="nav-link text-start" id=" Project Manager-tab" data-bs-toggle="pill" data-bs-target="# Project Manager" type="button" role="tab" aria-controls=" Project Manager" aria-selected="false">Technical Project Manager</button>
                  <button class="nav-link text-start" id="Manager-tab" data-bs-toggle="pill" data-bs-target="#Manager" type="button" role="tab" aria-controls="Manager" aria-selected="false">Business Development Manager / Sales Manager</button>
                  <button class="nav-link text-start" id="Account-tab" data-bs-toggle="pill" data-bs-target="#Account" type="button" role="tab" aria-controls="Account" aria-selected="false">Account Manager</button>
                </div>
              </div>
              <div class="tab-content" id="v-pills-tabContent">
                <div class="tab-pane fade active show" id="Net" role="tabpanel" aria-labelledby="Net-tab" tabindex="0">
                  <div className="container">
                    <div className="row txt ">
                      <h4>Senior .Net Developer</h4>
                      <p>Location: Hyderabad</p>
                      <p>Experience : 5+ years</p>
                      <p>
                        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                          Description
                        </button>
                      </p>
                      <div class="collapse" id="collapseExample">
                        <div class="card card-body">
                          <p class="text-start"><b>Job Description</b></p>
                        </div>
                      </div>
                      <p><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Apply Now
                      </button></p>
                      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h1 class="modal-title fs-5" id="exampleModalLabel">Upload Resume`</h1>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              <form ref={form} onSubmit={sendEmail}>
                                <div class="mb-3">
                                  <label class="form-label">First Name</label>
                                  <input type="text" class="form-control"   name="first_name" ></input>
                                </div>
                                <div class="mb-3">
                                  <label class="form-label">Last Name</label>
                                  <input type="text" class="form-control"   name="last_name" ></input>
                                </div>
                                <div class="mb-3">
                                  <label class="form-label">Email address</label>
                                  <input type="email" class="form-control" name="user_email"  ></input>
                                  <div class="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div class="mb-3">
                                  <label class="form-label">Phone</label>
                                  <input type="tel" class="form-control" name="user_tel"></input>
                                </div>
                                <div class="mb-3">
                                  <label class="my-file" >Upload Resume:</label>
                                  <input type="file" class="form-check-input" ></input>
                                </div>
                                <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                              <button type="submit"  value="Send" class="btn btn-primary">Submit</button>
                            </div>
                              </form>
                            </div>
                            
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="Angular" role="tabpanel" aria-labelledby="Angular-tab" tabindex="0">

                </div>
                <div class="tab-pane fade" id="Devops" role="tabpanel" aria-labelledby="Devops-tab" tabindex="0">...</div>
                <div class="tab-pane fade" id="Developer" role="tabpanel" aria-labelledby="Developer-tab" tabindex="0">...</div>
                <div class="tab-pane fade" id=" Project Manager" role="tabpanel" aria-labelledby=" Project Manager-tab" tabindex="0">...</div>
                <div class="tab-pane fade" id="Manager" role="tabpanel" aria-labelledby="Manager-tab" tabindex="0">...</div>
                <div class="tab-pane fade" id="Account" role="tabpanel" aria-labelledby="Account-tab" tabindex="0">...</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Careers