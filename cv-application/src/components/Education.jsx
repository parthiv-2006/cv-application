import { useState } from "react";
import styles from "../styles/GeneralInfo.module.css";

function Education({educationData, handleChange, onFormSubmit}) {
  const [isEditing, setEditing] = useState(true);

  function handleSubmit(event) {
    event.preventDefault();
    setEditing(false);
    onFormSubmit();
  }

  if (isEditing) {
    return (
      <div className={styles["general-info-section"]}>
        <h2>Education</h2>
        <form onSubmit={handleSubmit} className={styles["form"]}>
          <label>
            University:
            <input
              type="text"
              name="university"
              value={educationData.university}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Degree:
            <input
              type="text"
              name="degree"
              value={educationData.degree}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Graduation Date:
            <input
              type="date"
              name="endDate"
              value={educationData.endDate}
              onChange={handleChange}
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
      <h2>Education</h2>
      <p>University: {educationData.university}</p>
      <p>Degree: {educationData.degree}</p>
      <p>Graduation Date: {educationData.endDate}</p>
      <button onClick={() => setEditing(true)}>Edit</button>
    </div>
  );
}

export default Education;
