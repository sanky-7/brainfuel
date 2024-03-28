import { auth } from "@clerk/nextjs";
import { db } from "./db";

export const createCourse = async (title: string) => {
  try {
    const { userId } = auth();

    if (!userId) {
      throw new Error("User not found!");
    }

    const course = await db.course.create({
      data: {
        title,
        userId,
      },
    });

    return course;
  } catch {
    throw new Error("Something went wrong, please try again.");
  }
};

export const editTitle = async (courseId: string, title: string) => {
  const course = await db.course.update({
    where: {
      id: courseId,
    },
    data: {
      title,
    },
  });

  return course;
};

export const editDescription = async (courseId: string, description: string) => {
  const course = await db.course.update({
    where: {
      id: courseId,
    },
    data: {
      description,
    },
  });

  return course;
}