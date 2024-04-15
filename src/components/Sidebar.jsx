import { useContext } from "react"
import Button from "./Button"
import Projects from "./Projects"
import { AppContext } from "../utils/AppContextPorvider"

const Sidebar = () => {

    const {handleAddCreateProject} = useContext(AppContext)

    return (
        <aside className="sidebar">
            <div className="sidebar_top">
                <h1 className="sidebar_label">
                    Projects
                </h1>
                <Button buttonText={"Add Projects"} onClick={handleAddCreateProject} />
            </div>
            <Projects
            />

        </aside>
    )
}

export default Sidebar

