import { useState } from 'react'
import './App.css'
import GeneralInfo from './components/GeneralInfo.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'

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
  return (
    <div>
      <GeneralInfo formData={generalInfoData} onChange={handleChangeGeneralInfo}/>
      <Experience experienceData={experienceData} onChange={handleChangeExperience}/>
      <Education educationData={educationData} handleChange={handleChangeEducation}/>
    </div>
  )
}

export default App
