import { NextResponse } from "next/server";
// TODO: remove global resources
const resources = [
    {
        id: 1,
        title: "Building a website"
    },
    {
        id: 2,
        title: "Fixing a bug"
    },
    {
        id: 3,
        title: "Asking for help"
    }
]

export async function GET() {
    return NextResponse.json({resources});
}