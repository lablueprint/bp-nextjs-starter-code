import { NextResponse } from "next/server";

export async function POST(request) {
    const {secret} = await request.json();
    console.log(process.env.SECRET);
    let message = "Incorrect secret password!";
    if (secret ===  process.env.SECRET) {
        message = "Great job!";
    }
    return NextResponse.json({message})
}