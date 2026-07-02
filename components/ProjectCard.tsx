import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";
import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({
    title,
    src,
    students,
    githubLink,
    pageLink,
}: {
    title: string;
    src: string;
    students: string[];
    githubLink: string;
    pageLink: string;
}) {
    return (
        <Card className="mx-auto w-full max-w-sm overflow-hidden pt-0 shadow-[0_10px_30px_rgba(38,48,71,0.22)]">
            <Image
                src={src}
                alt={title}
                width={800}
                height={800}
                className="h-auto w-full object-contain"
                sizes="(max-width: 640px) 100vw, 384px"
            />

            <CardHeader>
                <CardTitle className="text-2xl font-bold">{title}</CardTitle>

                <CardDescription>
                    {students.join(", ")}
                </CardDescription>
            </CardHeader>

            <CardFooter className="flex gap-2">


                {githubLink && (
                    <Button className="flex-1" asChild>
                        <Link href={githubLink} target="_blank" rel="noopener noreferrer">
                            GitHub
                        </Link>
                    </Button>
                )}

                {pageLink && (
                    <Button className="flex-1" asChild>
                        <Link href={pageLink} target="_blank" rel="noopener noreferrer">View Project</Link>
                    </Button>
                )}

            </CardFooter>
        </Card>
    );
}