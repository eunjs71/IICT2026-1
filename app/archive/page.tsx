import ProjectCard from "@/components/ProjectCard";
import { getProjects } from "./projects";

export default function Page() {
    const projects = getProjects();
    return (
        <main className="min-h-[calc(100vh-4rem)] py-10">
            <div className="mx-auto flex w-full max-w-6xl flex-col px-5">
                <h1 className="font-heading text-4xl text-[#263047]">
                    Archive
                </h1>
                <div className="mt-8 columns-1 gap-6 sm:columns-2 lg:columns-3">
                    {projects.map((project, index) => (
                        <div key={`${project.title}-${index}`} className="mb-6 break-inside-avoid">
                            <ProjectCard {...project} />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}