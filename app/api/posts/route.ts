import { NextRequest, NextResponse } from "next/server";
import prisma from "@/_lib/prisma";
/**
 * get all posts
 */
export async function GET() {
      const posts = await prisma.post.findMany({
        include:{
            user: {
                select: {name: true}
            }
        }
      });
    return NextResponse.json(posts);
}
/**
 * create post
 * @param request 
 * @returns 
 */
export async function POST(request: NextRequest) {
    const body = await request.json();
    const { title, content,published ,user_id} = body;
  
    const newPost = await prisma.post.create({
      data: {
        title: title,
        content: content,
        user: { connect: { id:  user_id } },
      },
      include: {
        user: true,
      },
    });
    return NextResponse.json({"success":true,"message":"create success","post":newPost});
  }