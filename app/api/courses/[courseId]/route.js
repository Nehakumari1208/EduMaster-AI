import { db } from "@/configs/db";
import { CourseList } from "@/configs/schema";
import { eq } from "drizzle-orm";

export async function GET(request, { params }) {
  try {
    const result = await db
      .select()
      .from(CourseList)
      .where(eq(CourseList.courseId, params.courseId));

    return Response.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error("Error fetching course:", error);
    return Response.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}

export async function PUT(request, { params }) {
  try {
    const courseData = await request.json();
    const { courseId, ...updates } = courseData;

    const result = await db
      .update(CourseList)
      .set(updates)
      .where(eq(CourseList.courseId, params.courseId));

    return Response.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error("Error updating course:", error);
    return Response.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
