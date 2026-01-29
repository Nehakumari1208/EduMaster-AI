import { db } from "@/configs/db";
import { CourseList } from "@/configs/schema";

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
