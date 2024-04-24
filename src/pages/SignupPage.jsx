import { Form } from "react-router-dom"

function SignupPage() {
    return (
        <Form
            className="login-form"
            action="login"
            method="post"
        >
            <fieldset
                name="login-data"
                className="form-fieldset"
            >
                <legend
                    className="fieldset-legend"
                >
                    Login Page
                </legend>

                <div
                    className="form-group"
                >
                    <label
                        htmlFor="username"
                    >
                        Username
                    </label>

                    <input
                        type="text"
                        name="username"
                        id="username"
                    />
                </div>

                <div
                    className="form-group"
                >
                    <label
                        htmlFor="password"
                    >
                        Password
                    </label>

                    <input
                        type="text"
                        name="password"
                        id="password"
                    />
                </div>

                <button
                    type="submit"
                    className="button login-btn"
                >
                    Login
                </button>

            </fieldset>
        </Form>
    )
}

export default SignupPage
