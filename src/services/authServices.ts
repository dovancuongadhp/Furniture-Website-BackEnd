import User from "../model/User"

const authServices = {
    register: async (req: any, res: any) => {
        const {userName, password, email} = req.body
        if (userName && password) {
            const query = User.where({userName})
            const result = await query.findOne()
            if (result) {
                res.status(400).json(`user: ${userName} already exists in the current database`)
            } else {

                const user = new User({
                    userName,
                    password
                })   
                await user.save()
                res.status(200).json(`user name: ${userName} was created successfully`)
            }
        } else {
            res.status(400).json("please enter all fields")
        }
    },
    login: (req: any, res: any) => {
        console.log("login services")
    }
}

export default authServices