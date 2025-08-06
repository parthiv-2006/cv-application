function CvPreview({ generalInfoData, experienceData, educationData }) {
  return (
    <div className="cv-preview">
      <h1>CV Preview</h1>
      <h2>{generalInfoData.name}</h2>
      <div className="cv-preview__contact-info">
        <p>Email: {generalInfoData.email}</p>
        {generalInfoData.phone && <p>Phone: {generalInfoData.phone}</p>}
      </div>

      <div className="cv-preview__education">
        <h3>Education</h3>
        <div className="cv-preview__education-items">
          <p>
            {educationData.university} - {educationData.degree}
          </p>
          <p>{educationData.endDate}</p>
        </div>
      </div>

      <div className="cv-preview__experience">
        <h3>Experience</h3>
        <div className="cv-preview__experience-items">
          <p>
            <b>{experienceData.company}</b> - {experienceData.position}
          </p>
          <p>
            {experienceData.startDate} - {experienceData.endDate}
          </p>
        </div>
        <div className="cv-preview__experience-description">
          <p>{experienceData.description}</p>
        </div>
      </div>
    </div>
  );
}

export default CvPreview;
