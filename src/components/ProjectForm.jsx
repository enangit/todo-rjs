import { useContext } from "react"
import { useRef, useState, useEffect } from "react"
import { AppContext } from "../utils/AppContextPorvider"

const ProjectForm = () => {

    const { handleCreateProject, cancelCreateProject } = useContext(AppContext)

    const projectNameRef = useRef()
    const projectDescriptionRef = useRef()
    const [errorMessage, setErrorMessage] = useState([]);


    useEffect(() => {
        function hasNoError(errorMessage) {
            if (errorMessage.length === 0) {
                handleCreateProject({ projectNameRef, projectDescriptionRef })
            }
        }
        hasNoError(errorMessage)
    }, [errorMessage, handleCreateProject])

    function validateField() {

        if (projectNameRef.current.value === "") {
            setErrorMessage(prev => {
                return {
                    ...prev,
                    name: "Project name field is empty!",
                }
            })
        }

        else if (projectNameRef.current.value.length !== "" && projectNameRef.current.value.length < 8) {
            setErrorMessage(prev => {
                return {
                    ...prev,
                    name: "Project name should be at least 8 characters!",
                }
            })
        } else {
            setErrorMessage(prev => {
                return {
                    ...prev,
                    name: " ",
                }
            })
        }


        if (projectDescriptionRef.current.value === "") {
            setErrorMessage(prev => {
                return {
                    ...prev,
                    desc: "Project description field is empty!",
                }
            })
        }

        else if (projectDescriptionRef.current.value.length > 0 && projectDescriptionRef.current.value.length < 12) {
            setErrorMessage(prev => {
                return {
                    ...prev,
                    desc: "Project description should be at least 12 characters!",
                }
            })
        }
        else {
            setErrorMessage(prev => {
                return {
                    ...prev,
                    desc: " ",
                }
            })
        }


        if (projectDescriptionRef.current.value.length >= 12 && projectNameRef.current.value.length >= 8) {
            setErrorMessage([])
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
                className={errorMessage.length !== 0 ? "project-form has-error" : "project-form"}
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
                        {errorMessage.desc != "" ? errorMessage.desc : "Error!"}
                    </span>
                </div>

                <div>
                    <button
                        className="button cancel"
                        type="button"
                        id="submit-project"
                        onClick={cancelCreateProject}
                    >
                        Cancel
                    </button>

                    <button
                        className="button"
                        type="submit"
                        id="submit-project"
                    >
                        Save
                    </button>
                </div>

            </form>
        </section>
    )
}

export default ProjectForm
