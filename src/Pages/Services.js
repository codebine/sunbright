import React from 'react'
import '../CSS/Main.css'
const Services = () => {
  return (
    <div className='Services'>
      <div className="container">
        <h1 className='my-5'>Our Services</h1>
        <div className="row">

          <div className="col-sm-12">
            <div className="row d-flex align-items-center">
              <div className="col-sm-4">
                <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                  <button className="nav-link text-start active" id="Dedicated-tab" data-bs-toggle="pill" data-bs-target="#Dedicated" type="button" role="tab" aria-controls="Dedicated" aria-selected="true">Dedicated Development Team</button>
                  <button className="nav-link text-start" id="Transformation-tab" data-bs-toggle="pill" data-bs-target="#Transformation" type="button" role="tab" aria-controls="Transformation" aria-selected="true">Digital Transformation</button>
                  <button className="nav-link text-start" id="WebDEv-tab" data-bs-toggle="pill" data-bs-target="#WebDEv" type="button" role="tab" aria-controls="WebDEv" aria-selected="true">Web Development</button>
                  <button className="nav-link text-start" id="v-MobileApp-tab" data-bs-toggle="pill" data-bs-target="#v-MobileApp" type="button" role="tab" aria-controls="v-pills-Mobile App Development" aria-selected="true">Mobile App Development</button>
                  <button className="nav-link text-start" id="v-Cloud-tab" data-bs-toggle="pill" data-bs-target="#v-Cloud" type="button" role="tab" aria-controls="v-Cloud" aria-selected="true">Cloud Services</button>
                  <button class="nav-link text-start" id="Testing-tab" data-bs-toggle="pill" data-bs-target="#Testing" type="button" role="tab" aria-controls="Testing" aria-selected="false">Testing & QA</button>
                  <button class="nav-link text-start" id="Machine-tab" data-bs-toggle="pill" data-bs-target="#Machine" type="button" role="tab" aria-controls="Machine" aria-selected="false">Artificial intelligence & Machine Learning</button>
                  <button class="nav-link text-start" id="Metaverse-tab" data-bs-toggle="pill" data-bs-target="#Metaverse" type="button" role="tab" aria-controls="Metaverse" aria-selected="false">Metaverse</button>
                  <button class="nav-link text-start" id="Analytics-tab" data-bs-toggle="pill" data-bs-target="#Analytics" type="button" role="tab" aria-controls="Analytics" aria-selected="false">Analytics</button>
                  <button class="nav-link text-start" id="Applications-tab" data-bs-toggle="pill" data-bs-target="#Applications" type="button" role="tab" aria-controls="Applications" aria-selected="false">Modern Applications</button>
                  <button class="nav-link text-start" id="ERP-tab" data-bs-toggle="pill" data-bs-target="#ERP" type="button" role="tab" aria-controls="ERP" aria-selected="false">ERP's</button>
                </div>
              </div>
              <div className="col-sm-8">
                <div className="tab-content" id="v-pills-tabContent">
                  <div className="tab-pane fade active show" id="Dedicated" role="tabpanel" aria-labelledby="Dedicated-tab" tabindex="0">
                    <div className="container">
                      <div className="row txt ">
                        <h4>Dedicated Development Team</h4>
                        <p>We quickly allocate independent software developers for your internal projects with a focus on communication processes & detailed development phases.</p>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="Transformation" role="tabpanel" aria-labelledby="Transformation-tab" tabindex="0">
                    <div className="container">
                      <div className="row txt">
                        <h4>Digital Transformation</h4>
                        <p>We have development experience, knowledge, and tech expertise, we are confident that our team can give you game-changing advice.</p>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="WebDEv" role="tabpanel" aria-labelledby="WebDEv-tab" tabindex="0">
                    <div className="container">
                      <div className="row txt">
                        <h4>Web Development</h4>
                        <p>We always keep up with the latest Front & Back-end Web Development technologies to create high-quality Web Applications in a constantly changing business environment.</p>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="v-MobileApp" role="tabpanel" aria-labelledby="v-MobileApp-tab" tabindex="0">
                    <div className="container">
                      <div className="row txt">
                        <h4>Mobile App Development</h4>
                        <p>Sun Bright has immense experience creating feature-rich & high-performing Mobile Apps for iOS and Android platforms.</p>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="v-Cloud" role="tabpanel" aria-labelledby="v-Cloud-tab" tabindex="0">
                    <div className="container">
                      <div className="row txt">
                        <h4>Cloud Services</h4>
                        <p>Cloud computing services are changing how businesses and public institutions use information technology. Today cloud services are available to meet most any IT need.</p>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="Testing" role="tabpanel" aria-labelledby="Testing-tab" tabindex="0">
                    <div className="container">
                      <div className="row txt">
                        <h4>Testing & QA</h4>
                        <p>Sun Bright has immense experience creating feature-rich & high-performing Mobile Apps for iOS and Android platforms.</p>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="Machine" role="tabpanel" aria-labelledby="Machine-tab" tabindex="0">
                    <div className="container">
                      <div className="row txt">
                        <h4>Artificial intelligence & Machine Learning</h4>
                        <p>Sun Bright has immense experience creating feature-rich & high-performing Mobile Apps for iOS and Android platforms. </p>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="Metaverse" role="tabpanel" aria-labelledby="Metaverse-tab" tabindex="0">
                    <div className="container">
                      <div className="row txt">
                        <h4>Metaverse</h4>
                        <p>The metaverse is a vision of what many in the computer industry believe is the next iteration of the internet: a single, shared, immersive, persistent, 3D virtual space where humans experience life in ways they could not in the physical world.</p>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="Analytics" role="tabpanel" aria-labelledby="Analytics-tab" tabindex="0">
                    <div className="container">
                      <div className="row txt">
                        <h4>Analytics</h4>
                        <p>Analytics software includes tools for measuring the performance of digital content. Analytical tools can be used to convert business data into reports, dashboards, and other visualizations.</p>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="Applications" role="tabpanel" aria-labelledby="Applications-tab" tabindex="0">
                    <div className="container">
                      <div className="row txt">
                        <h4>Modern Applications</h4>
                        <p>Modern application development is an approach that enables you to innovate rapidly by using cloud-native architectures with loosely coupled microservices, managed databases, AI, DevOps support, and built-in monitoring.</p>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="ERP" role="tabpanel" aria-labelledby="ERP-tab" tabindex="0">
                    <div className="container">
                      <div className="row txt">
                        <h4>ERP's</h4>
                        <p>Enterprise resource planning (ERP) refers to a type of software that organizations use to manage day-to-day business activities such as accounting, procurement, project management, risk management and compliance, and supply chain operations.</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services