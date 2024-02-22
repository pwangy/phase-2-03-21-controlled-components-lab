// form control:
import {useState} from 'react'
// const url = ''

const ProjectForm = () => {

    // const [name, setName] = useState("");
    // const [about, setAbout] = useState(initialState);
    const [error, setError] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        about: ""
    })

    const handleChange = ({target: {name, value}}) => {
        // const {name, value} = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        //! package the user inputted data into one object: formData
        // const newProject = {name, about}
        //! VALIDATE your data!!!!!!!!!!

        //! Then IF VALID, now we think about what to do with it!
          //TODO optimistic rendering
          //* 1. Update the UI => send the newProject to the component that owns the list of projects
          //* 2. Talk to the server => POST fetch request
          //* 3. If everything worked: success message, EMPTY the form
          //* 4. If it didn't work: DISPLAY the error message, DO NOT reset the form, remove the new project you optimistically added to the DOM
          //TODO pessimistic rendering
          //* 1. Talk to the server => POST fetch request
          //* 2. Update the UI IF SUCCESSFUL (inside the .then()) => send the newProject to the component that owns the list of projects
          //* 3. .then(EMPTY the form)
          //* 4. If it didn't work: DISPLAY the error message, DO NOT reset the form
          

    }

    if (isSubmitting) {
        return <p>Loading...</p>
    }
  
    return (
    <section>
        {error ? <p className='red center'>{error}</p> : null}
      <form className="form" onChange={handleChange} onSubmit={handleSubmit}>
        <h3>Add New Project</h3>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" value={formData.name} />
        <label htmlFor="about">About</label>
        <textarea id="about" name="about" value={formData.about} />
        <button type="submit" disabled={isSubmitting}>Add Project</button>
        {/* <input type="submit" value="Add Project" /> */}
      </form>
    </section>
  );
};

export default ProjectForm;