import { db } from "@/configs/db";
import { Chapters } from "@/configs/schema";

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
