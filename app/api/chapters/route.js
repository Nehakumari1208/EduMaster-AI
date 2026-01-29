import { db } from "@/configs/db";
import { Chapters } from "@/configs/schema";
import { and, eq } from "drizzle-orm";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const chapterId = searchParams.get("chapterId");
    const courseId = searchParams.get("courseId");

    if (chapterId && courseId) {
      const result = await db
        .select()
        .from(Chapters)
        .where(
          and(
            eq(Chapters.chapterId, parseInt(chapterId)),
            eq(Chapters.courseId, courseId),
          ),
        );
      return Response.json({ success: true, data: result });
    }

    const result = await db.select().from(Chapters);
    return Response.json({ success: true, data: result });
  } catch (error) {
    console.error("Error fetching chapters:", error);
    return Response.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}

export async function POST(request) {
  try {
    const chapterData = await request.json();

    const result = await db.insert(Chapters).values(chapterData).returning();

    return Response.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error("Error creating chapter:", error);
    return Response.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
