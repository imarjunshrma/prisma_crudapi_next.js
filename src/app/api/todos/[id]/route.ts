import { NextResponse } from "next/server";
import { prisma } from "../../prisma.db";
import { Todos } from "@prisma/client";
interface Context{
    params:{
        id:string
    }
}

export async function PUT(req:Request,context:Context){
    const id:string=context.params.id
    const body=await req.json()
   const res:Todos= await prisma.todos.update({
        where:{
            id
        },
        data:body
    })
return NextResponse.json(res)
}
export async function DELETE(req:Request,context:Context){
    const id:string=context.params.id
    const res:Todos=await prisma.todos.delete({
        where:{
            id
        }
    })
    return NextResponse.json({res}) 
}

//const id=context.params.id

