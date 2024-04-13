import Button from './Button'
const NoSelectedProject = ({ handleAddCreateProject }) => {
    return (
        <section className='no-selected-project section'>
            <div className="div">
                <p className="no-selected-section-title">
                    Please select a project or create a new one.
                </p>
            </div>
            <Button buttonText="Create New" onClick={handleAddCreateProject} />
        </section>
    )
}

export default NoSelectedProject
