import { useState } from "react";

function Experience({experienceData, onChange}) {
  
  const [isEditing, setEditing] = useState(true);

  function handleSubmit(event) {
    event.preventDefault();
    setEditing(false);
  }


  if (isEditing) {
    return (
      <div>
        <h2>Experience</h2>
        <form onSubmit={handleSubmit}>
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
        <div>
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
