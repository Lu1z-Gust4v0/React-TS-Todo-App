import { Router } from "express"
import { 
    registerController, 
    loginController 
} from "../controllers/users/index"


const router: Router = Router()

router.post("/register", registerController)

router.post("/login", loginController)

export { router as userRouter }