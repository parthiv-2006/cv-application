import { useState } from "react";
import styles from "../styles/GeneralInfo.module.css"; // Import the CSS module

function GeneralInfo({ formData, onChange, onFormSubmit }) {
  const [isEditing, setEditing] = useState(true);

  function handleSubmit(event) {
    event.preventDefault();
    setEditing(false);
    onFormSubmit();
  }

  if (isEditing) {
    return (
      <div className={styles["general-info-section"]}>
        <h2>General Information</h2>
        <form onSubmit={handleSubmit} className={styles["form"]}>
          <label>
            Name*:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={onChange}
              required
            />
          </label>
          <label>
            E-mail*:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={onChange}
              required
            />
          </label>
          <label>
            Phone Number:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={onChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
  return (
    <div className={styles["edit-section"]}>
      <h2>General Information</h2>
      <p>Name: {formData.name}</p>
      <p>E-mail: {formData.email}</p>
      {formData.phone !== "" && <p>Phone: {formData.phone}</p>}
      <button onClick={() => setEditing(true)}>Edit</button>
    </div>
  );
}

export default GeneralInfo;
