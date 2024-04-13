import { useRef, useState, useEffect } from "react"

const ProjectForm = ({ handleCreateProject }) => {

    const projectNameRef = useRef()
    const projectDescriptionRef = useRef()
    const [errorMessage, setErrorMessage] = useState({});


    useEffect(() => {
        function hasNoError(errorMessage) {
            if (errorMessage.name === "" && errorMessage.desc === "") {
                handleCreateProject({projectNameRef, projectDescriptionRef})
            }
        }
        hasNoError(errorMessage)
    }, [errorMessage, handleCreateProject])

    function validateField() {
        if (projectNameRef.current.value === "" || projectDescriptionRef.current.value === "") {
            setErrorMessage(prev => {
                return {
                    ...prev,
                    name: "Project name field is empty!",
                    desc: "Project description field is empty",
                }
            })
        } else if (projectNameRef.current.value.length < 8 || projectDescriptionRef.current.value.length < 12) {
            setErrorMessage(prev => {
                return {
                    ...prev,
                    name: "Project name should be at least 8 characters!",
                    desc: "Project description should be at least 12 characters!",
                }
            })
        } else {
            setErrorMessage(() => {
                return {
                    name: "",
                    desc: "",
                }
            })
        }
    }

    function onSubmit(e) {
        e.preventDefault()
        validateField()
    }

    return (
        <section
            className="section"
        >
            <h2
                className="form-section-title"
            >
                New Project
            </h2>
            <form
                onSubmit={onSubmit}
                className={errorMessage.name !== "" ? "project-form has-error" : "project-form"}
            >
                <div className="form-group">
                    <label
                        htmlFor="project-name"
                    >
                        Project Name
                    </label>
                    <input
                        type="text"
                        name="project_name"
                        id="project-name"
                        className="project-name"
                        ref={projectNameRef}
                    />
                    <span
                        id="error-message-container"
                    >
                        {errorMessage.name != "" ? errorMessage.name : "Project name field is empty!"}
                    </span>
                </div>

                <div className="form-group">
                    <label
                        htmlFor="project-description"
                    >
                        Description
                    </label>
                    <textarea
                        name="project_description"
                        id="project-description"
                        className="project-description"
                        ref={projectDescriptionRef}
                    >
                    </textarea>
                    <span
                        id="error-message-container"
                    >
                        {errorMessage.desc !== "" ? errorMessage.desc : "Error!"}
                    </span>
                </div>

                <button
                    className="button"
                    type="submit"
                    id="submit-project"
                >
                    Create Project
                </button>
            </form>
        </section>
    )
}

export default ProjectForm
