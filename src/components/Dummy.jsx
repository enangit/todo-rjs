import { useContext } from "react"
import { AppContext } from "../utils/AppContextPorvider"

const Dummy = () => {
    const {selectedProjectId} = useContext(AppContext)
    console.log("data", selectedProjectId)
    return (
        <div>Dummy</div>
    )
}

export default Dummy
