import { FaTrashCan } from "react-icons/fa6";
import Tasks from "./Tasks"
import { AppContext } from "../utils/ContextPorvider";
import { createPortal } from "react-dom";
import Modal from "./Modal";
import { ModalContextProvider } from "../utils/ContextPorvider";

import { useContext, useRef } from "react";

const SelectedProject = () => {

    const { selectedProject, deleteProject } = useContext(AppContext)

    const date = selectedProject[0]?.createdAt.slice(0, 24)

    const dialogRef = useRef(null)

    function openModal() {
        dialogRef.current?.showModal()
    }

    function closeModal() {
        dialogRef.current?.close()
    }

    function proceedFunc() {
        deleteProject()
        dialogRef.current?.close()

    }

    return (
        <section
            className="section selected-project">
            <div>
                <div
                    className="selected-project-top">
                    <div
                        className="details-div">
                        <h2
                            className="name"
                            id="name">
                            {selectedProject[0]?.name}
                        </h2>
                        <span
                            id="date"
                            className="date">
                            {date}
                        </span>
                    </div>

                    <div
                        className="action-div">
                        <button
                            className="button delete-project-button"
                            onClick={
                                () => {
                                    openModal()
                                }
                            }
                        >

                            <FaTrashCan
                                className="icon"
                            />
                        </button>
                    </div>
                </div>
                <div
                    className="description">
                    {selectedProject[0]?.description}
                </div>
            </div>


            <div className="selected-project-bottom">
                <Tasks />
            </div>

            {
                createPortal(
                    <ModalContextProvider value={{ proceedFunc, closeModal }}>
                        <Modal ref={dialogRef}>

                            <p>
                                Do you really want to delete this project?
                            </p>

                        </Modal>
                    </ModalContextProvider>,
                    document.getElementById("modal-root"))
            }
        </section>
    )
}

export default SelectedProject
