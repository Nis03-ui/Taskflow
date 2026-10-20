
import { 
    createTask as createTaskService, 
    getAllTasks as getAllTasksService,
    getTaskById as getTasksByIdService,
    updateTask as updateTaskService,
    deleteTask as deleteTaskService, 

} from "../services/task.services";



export  async function createTask(req,res) {
    const{title}=req.body

    if(!title){
        return res.status(400).json({
            success:true,
            message:"Invalid title, status and createdAt"
        })
    }


    const task=await createTaskService(req.body)

    return res.status(201).json({
        success:true,
        message:"Task created successfully",
        task:{
            id:task.id,
            title:task.title,
            status:task.status,
            createdAt:task.createdAt
        }
    })
  


    
}

export  async function getAllTasks(req,res) {
    
    const tasks=await getAllTasksService()
    if(!tasks){
        return res.status(400).json({
            success:false,
            message:"Not tasks found"
        })
    }
    return res.status(201).json({
        success:true,
        message:"Tasks retrieved successfully",
        tasks
     

    })
    
}

export async function getTaskById(req,res) {
    const {id}=req.params
    
    const task=await getTasksByIdService(Number(id))
    
    if(!task){
        return res.status(400).json({
            success:false,
            message:"Invalid id"
        })
    }
    return res.status(200).json({
        success:true,
        message:"Task retrieved successfully",
        task
    })
}
export async function updateTask(req,res) {
    const {id}=req.params
    const data=req.body
    

    console.log(id)
    console.log(data)
    const updatedTask=await updateTaskService(Number(id),data)
    if(!updatedTask){
        return res.status(400).json({
            success:true,
            message:"Invalid id"
        })
    }
    return res.status(200).json({
        success:true,
        message:"Task updated successfully",
        data

    })

    
}

export async function deleteTask(req,res) {
    const{id}=req.params
    console.log(typeof id)

    const deletedTask=await deleteTaskService(Number(id))
    if(!deletedTask){
        return res.status(400).json({
            success:true,
            message:"Invalid id"
        })
    }
    return res.status(200).json({
        success:true,
        message:"Task deleted successfully",
        deletedTask
    })
    
}