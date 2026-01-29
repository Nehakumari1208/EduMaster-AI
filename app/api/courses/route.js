import { db } from "@/configs/db";
import { CourseList } from "@/configs/schema";
import { eq } from "drizzle-orm";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const createdBy = searchParams.get("createdBy");

    if (createdBy) {
      const result = await db
        .select()
        .from(CourseList)
        .where(eq(CourseList.createdBy, createdBy));
      return Response.json({ success: true, data: result });
    }

    const result = await db.select().from(CourseList);
    return Response.json({ success: true, data: result });
  } catch (error) {
    console.error("Error fetching courses:", error);
    return Response.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}

export async function POST(request) {
  try {
    const courseData = await request.json();

    const result = await db.insert(CourseList).values(courseData);

    return Response.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error("Error creating course:", error);
    return Response.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
