import Button from './Button'
const NoSelectedProject = ({handleAddCreateProject}) => {
    return (
        <section>
            No Selected Project

        <Button buttonText="Create New" onClick={handleAddCreateProject}/>
        </section>
    )
}

export default NoSelectedProject
