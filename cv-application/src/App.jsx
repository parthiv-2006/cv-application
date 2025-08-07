import { useState } from 'react'
import './App.css'
import GeneralInfo from './components/GeneralInfo.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import CvPreview from './components/CvPreview.jsx'

function App() {
  const [generalInfoData, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  function handleChangeGeneralInfo(event) {
    const { name, value } = event.target;
    setGeneralInfo((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  const [experienceData, setExperienceData] = useState({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    description: "",
  });
  function handleChangeExperience(event) {
    const { name, value } = event.target;
    setExperienceData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  const [educationData, setEducation] = useState({
    university: "",
    degree: "",
    endDate: "",
  });
  function handleChangeEducation(event) {
    const { name, value } = event.target;
    setEducation((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  const [submitState, setSubmitState] = useState({
    general: false, experience: false, education: false
  })
  function generalSubmit() {
    setSubmitState((prev) => ({
      ...prev,
      general : true
    }))
  }
  function educationSubmit() {
    setSubmitState((prev) => ({
      ...prev,
      education : true
    }))
  }
  function experienceSubmit() {
    setSubmitState((prev) => ({
      ...prev,
      experience: true,
    }));
  }

  const allSubmitted = submitState.general && submitState.education && submitState.experience;
  return (
    <div>
      <GeneralInfo formData={generalInfoData} onChange={handleChangeGeneralInfo} onFormSubmit = {generalSubmit}/>
      <Experience experienceData={experienceData} onChange={handleChangeExperience} onFormSubmit = {experienceSubmit}/>
      <Education educationData={educationData} handleChange={handleChangeEducation} onFormSubmit = {educationSubmit}/>
      {allSubmitted && (<CvPreview generalInfoData={generalInfoData} experienceData={experienceData} educationData={educationData}/>)}
    </div>
  )
}

export default App
