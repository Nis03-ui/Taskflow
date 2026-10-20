import express from "express"
import tasks from "../route/task.route.ts"
const app=express()


app.use(express.json())
app.use("/health",()=>{
    console.log("APP running successfully")
})
app.use("/tasks",tasks)

export default app