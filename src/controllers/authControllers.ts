import authServices from "../services/authServices"

const authControllers = {
    register: authServices.register,
    login: authServices.login
}

export default authControllers