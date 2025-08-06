import { useState } from "react";

function GeneralInfo() {
    const [formData, setFormData] = useState({name: '', email: '', phone: ''})
    const [isEditing, setEdting] = useState(true)

    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData => ({...prevFormData, [name]: value}))
    }
    function handleSubmit(event) {
        event.preventDefault()
        setEdting(false)
    }

    if (isEditing) {
        return (
        <div className="general-info-section">
            <h2>General Information</h2>
            <form onSubmit={handleSubmit}>
            <label>
                Name*:
                <input type="text" name="name" value={formData.name} onChange={handleChange} required/>
            </label>
            <label>
                E-mail*:
                <input type="email" name="email" value={formData.email} onChange={handleChange} required/>
            </label>
            <label>
                Phone Number:
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange}/>
            </label>
            <button type="submit">Submit</button>
            </form>
        </div>
        );
    }
    return (
      <div>
        <h2>General Information</h2>
        <p>Name: {formData.name}</p>
        <p>E-mail: {formData.email}</p>
        {formData.phone !== '' && <p>Phone: {formData.phone}</p>}
        <button onClick={() => setEdting(true)}>Edit</button>
      </div>
    );
}

export default GeneralInfo;