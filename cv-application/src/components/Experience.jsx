import { useState } from "react";
import styles from "../styles/GeneralInfo.module.css"; // Import the CSS module

function Experience({experienceData, onChange, onFormSubmit}) {
  
  const [isEditing, setEditing] = useState(true);

  function handleSubmit(event) {
    event.preventDefault();
    setEditing(false);
    onFormSubmit();
  }


  if (isEditing) {
    return (
      <div className={styles["general-info-section"]}>
        <h2>Experience</h2>
        <form onSubmit={handleSubmit} className={styles["form"]}>
          <label>
            Company:
            <input
              type="text"
              name="company"
              value={experienceData.company}
              onChange={onChange}
              required
            />
          </label>
          <label>
            Position:
            <input
              type="text"
              name="position"
              value={experienceData.position}
              onChange={onChange}
              required
            />
          </label>
          <label>
            Start Date:
            <input
              type="date"
              name="startDate"
              value={experienceData.startDate}
              onChange={onChange}
              required
            />
          </label>
          <label>
            End Date:
            <input
              type="date"
              name="endDate"
              value={experienceData.endDate}
              onChange={onChange}
              required
            />
          </label>
          <label>
            Describe Your Responsibilities:
            <textarea
              maxLength={150}
              name="description"
              value={experienceData.description}
              onChange={onChange}
              required
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
    }
    return (
        <div className={styles["edit-section"]}>
            <h2>Experience</h2>
            <p>Company: {experienceData.company}</p>
            <p>Position: {experienceData.position}</p>
            <p>Start Date: {experienceData.startDate}</p>
            <p>End Date: {experienceData.endDate}</p>
            <p>Description: {experienceData.description}</p>
            <button onClick={() => setEditing(true)}>Edit</button>
        </div>
    )
}
export default Experience;
