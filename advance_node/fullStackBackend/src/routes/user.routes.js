import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

const router = Router()

router.route('/register').post(
    upload.fields([
        {
            name:"avatar",
            maxCound:1
        },{
            name:"CoverImage",
            maxCount:1
        }
    ]),
      registerUser
    )

export default router;