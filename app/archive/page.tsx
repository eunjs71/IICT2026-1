'use client'

import ProjectCard from "@/components/ProjectCard";
import { getProjects, Project } from "./projects";
import { useEffect, useState } from "react";

export default function Page() {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const shuffledProjects = getProjects() as Project[];

        // Intentionally shuffle on the client after hydration.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setProjects(shuffledProjects);
    }, []);

    return (
        <main className="min-h-[calc(100vh-4rem)] py-10">
            <div className="mx-auto flex w-full max-w-6xl flex-col px-5">
                <h1 className="font-heading text-4xl text-[#263047]">
                    Archive
                </h1>

                <div className="mt-8 columns-1 gap-6 sm:columns-2 lg:columns-3">
                    {projects.map((project, index) => (
                        <div
                            key={`${project.title}-${index}`}
                            className="mb-6 break-inside-avoid"
                        >
                            <ProjectCard
                                {...project}
                                eager={true}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}