import { useContext, forwardRef } from "react"
import { ModalContext } from "../utils/ContextPorvider"

const Modal = forwardRef(function Modal({ children }, ref) {

    const { proceedFunc, closeModal } = useContext(ModalContext)

    return (
        <dialog
            ref={ref}
            id="modal"
            className="modal">

            {children}

            <div className="buttons">
                <button
                    className="button"
                    onClick={proceedFunc}>
                    {"Ok"}
                </button>

                <form method="dialog" onSubmit={closeModal}>
                    <button
                        className="button cancel"
                        type="submit"
                    >
                        {"Cancel"}
                    </button>
                </form>
            </div>
        </dialog>
    )
}
)

export default Modal
