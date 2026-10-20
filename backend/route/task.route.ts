import {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask

} from "../controller/task.controller"

import express from "express"

const router=express()

router.post("/",createTask)
router.get("/",getAllTasks)
router.get("/:id",getTaskById)
router.patch("/:id",updateTask)
router.delete("/:id",deleteTask)

export default router