import { Button } from "@/components/ui/button";
import Link from "next/link";

const TeacherPage = () => {
  return (
    <Link href="/teacher/create">
      <Button className="p-6">New Course</Button>
    </Link>
  );
};

export default TeacherPage;
