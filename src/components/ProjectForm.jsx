import { useRef } from "react"

const ProjectForm = ({ handleCreateProject }) => {

    const projectNameRef = useRef()
    const projectDescriptionRef = useRef()

    return (
        <form>
            <input type="text" name="project_name" id="project-name" className="project-name" ref={projectNameRef} />

            <textarea name="project_description" id="project-description" className="project-description" ref={projectDescriptionRef}>
            </textarea>

            <button type="submit" id="submit-project" onClick={(e) => {
                e.preventDefault()
                handleCreateProject({projectNameRef, projectDescriptionRef})
            }}>
                Create
            </button>
        </form>
    )
}

export default ProjectForm
