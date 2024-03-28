"use server";

import { createCourse, editDescription, editTitle } from "@/lib/course-service";
import { revalidatePath } from "next/cache";

export const onCourseCreate = async (title: string) => {
    try {
        const addedCourse = await createCourse(title);
        return addedCourse;
    } catch (err) {
        console.log(err)
    }
}

export const onTitleUpdate = async (courseId: string, title: string) => {
    try {
        const updatedCourse = await editTitle(courseId, title);
        revalidatePath(`/teacher/courses/${courseId}`);
        return updatedCourse;
    } catch (err) {
        console.log(err)
    }
}

export const onDescriptionUpdate = async (courseId: string, description: string) => {
    try {
        const updatedCourse = await editDescription(courseId, description);
        revalidatePath(`/teacher/courses/${courseId}`);
        return updatedCourse;
    } catch (err) {
        console.log(err)
    }
}