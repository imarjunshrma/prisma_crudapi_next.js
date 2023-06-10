//local/api/todos

import { NextResponse } from "next/server";
import { prisma } from "../prisma.db";
import { Todos } from "@prisma/client";


export async function GET(){
   const res:Todos[]=await prisma.todos.findMany({})
    return NextResponse.json({res})
}
export async function POST(req:Request){
    const body=await req.json()
    const res:Todos=await prisma.todos.create({
        data:body
    })
    console.log(res,typeof res)
    return NextResponse.json({res}) 
}

//get
//post
//put
//delete 