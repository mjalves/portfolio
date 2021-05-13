import React from 'react';
import './Resume.css';

function Resume () {
    return (
       <div className='resume-container'>
        <div class="resume">
          <div class="resume_left">
            <div class="resume_profile">
              <img src="/images/jaque.png" alt="profile_pic"/>
            </div>
            <div class="resume_content">
              <div class="resume_item resume_info">
                <div class="title">
                  <p class="bold">Jaqueline Alves</p>
                  <p class="regular">Software Developer</p>
                </div>
                <ul>
                  <li>
                    <div class="icon">
                      <i class="fas fa-map-signs"></i>
                    </div>
                    <div class="data">
                      Washignton DC, USA <br />
                    </div>
                  </li>
                  <li>
                    <div class="icon">
                      <i class="fas fa-mobile-alt"></i>
                    </div>
                    <div class="data">
                      +1 (301) 538-9711
                    </div>
                  </li>
                  <li>
                    <div class="icon">
                      <i class="fas fa-envelope"></i>
                    </div>
                    <div class="data">
                      alves.jaque@icloud.com
                    </div>
                  </li>
                </ul>
              </div>
            <div class="resume_item resume_skills">
              <div class="title">
                <p class="bold">skills</p>
              </div>
              <ul>
                <li>
                  <div class="skill_name">REACT</div>
                  <div class="skill_progress">
                  </div>
                  <div class="skill_per">80%</div>
                </li>
                <li>
                  <div id='css' className="skill_name">NODE.JS</div>
                  <div className="skill_progress"></div>
                  <div className="skill_per">70%</div>
                </li>
                <li>
                  <div class="skill_name">JAVA</div>
                  <div class="skill_progress"></div>
                  <div class="skill_per">90%</div>
                </li>
                <li>
                  <div class="skill_name">PYTHON</div>
                  <div class="skill_progress"></div>
                  <div class="skill_per">75%</div>
                </li>
           <li>
             <div class="skill_name">HTML/CSS
             </div>
             <div class="skill_progress">
             </div>
             <div class="skill_per">95%</div>
           </li>
         </ul>
       </div>
          <div class="resume_item resume_social">
            <div class="title">
              <p class="bold">Social</p>
            </div>
            <ul>
              <li>
                <div class="icon">
                  <i class="fab fa-linkedin"></i>
                </div>
                <div class="data">
                  <p class="semi-bold">Jaque@linkedin</p>
                 
                </div>
              </li>
            </ul>
          </div>
        </div>
  </div>
  <div class="resume_right">
    <div class="resume_item resume_work">
        <div class="experience">
           <p class="bold">Work Experience</p>
         </div>
        <ul>
            <li>
                <div class="date">Jan 2020 - Dec 2020</div> 
                <div class="infor">
                    <p class="semi-bold">CORAS CLOUD, INC., Software Developer Intern</p> 
                    <p>Worked with a team of 10 experienced software engineers to improve software capabilities for various clients including the US Navy</p>
                    <p>
                    Involved in maintaining enterprise decision management software by fixing errors and improving functionality</p>
                    <p>Worked on a broad variety projects that offered cloud-based software solutions to the government using React.Js</p>
                    <p>Improved front-end UI of Coras’ Blog using HubSpot</p>
                    <p>Tested and documented software components verified against strict requirements necessary for a government contractor</p>
                </div>
            </li>
            <li>
              <div class="date">Jul 2018 - Current</div>
              <div class="infor">
                     <p class="semi-bold">WANDERGIER, INC., Founder/President</p> 
                  <p>Turned idea/concept into a company, with website and app currently in beta stage development.</p>
                  <p>Conduct presentations for potential investors; successfully raised considerable funds to date.</p>
                  <p>Generate ideas and oversee design and development of every aspect of the Wandergier business.</p>
                  <p>Chief innovator, with business targeted at the 18-40 year old age group.</p>
                </div>
            </li>
        </ul>
    </div>
    <div class="resume_item resume_education">
      <div class="title">
           <p class="bold">Education</p>
         </div>
      <ul>
            <li>
                <div class="date">2018 - 2020</div> 
                <div class="infor">
                    <p class="semi-bold">TOWSON UNIVERSITY, Towson, Maryland </p> 
                    <p>Major: Computer Science - Bachelors’ Degree</p>
                    <p> International Scholarship Recipient</p>
                </div>
            </li>
            <li>
              <div class="date">2015 - 2018</div>
              <div class="infor">
                    <p class="semi-bold">MONTGOMERY COLLEGE, Rockville, Maryland</p> 
                    <p>Major: Information Technology - Associates Degree</p>
                    <p>Member of Phi Theta Kappa Honor Society</p>
                  </div>
                </li>
              </ul>
          </div>
        </div>
    </div>
    </div>
    );
}

export default Resume;