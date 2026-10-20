import prisma from "../config/prisma";





export  async function createTask(data){
    const task=await prisma.task.create({
        data:
            data

        
    })
    return task
}

export  async function getAllTasks() {
    const tasks=await prisma.task.findMany()
    return tasks
    
}

export  async function getTaskById(id) {
    
    const task=await prisma.task.findUnique({
        where:{
            id
        }
    })
    return task
}

export  async function updateTask(id,data) {


    const updatedTask=await prisma.task.update({
        where:{
            id
        },
        data: data
        
    })
    return updatedTask
}

export  async function deleteTask(id) {
    const deletedTask=await prisma.task.delete({
        where:{
            id
        }
    })
    return deletedTask
    
}