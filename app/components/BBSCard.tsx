import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { BBSData } from "../types/types";

interface BBSDataProps {
  bbsData: BBSData;
}
export const BBSCard = ({ bbsData }: BBSDataProps) => {
  const { id, title, username, content, createdAt } = bbsData;
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{username}</CardDescription>
      </CardHeader>
      <CardContent>{content}</CardContent>
      <CardFooter className="flex justify-between">
        <Link href={`bbs-posts/${id}`} className="text-blue-500">
          Read more
        </Link>
      </CardFooter>
    </Card>
  );
};
