import {Metadata} from "next";
import Image from "next/image";
import {Link} from "@/src/navigation";
import clsx from "clsx";
import {allProjects} from "contentlayer/generated";
import Halo from "@/src/app/[locale]/components/ui/Halo";
import {useTranslations} from "next-intl";

export const metadata: Metadata = {
    title: "Projects | Thibault Morizet",
    description: "Here are some of the projects I've worked on.",
};

export default function Projects() {
    const translate = useTranslations('navigation');
    const projectsTranslate = useTranslations('projects');

    return (
        <div className="mx-auto max-w-[700px]">
            <div className="flex flex-col gap-16 md:gap-24 ">
                <div className="flex flex-col gap-8">
                    <div>
                        <h1 className="animate-in text-3xl font-bold tracking-tight">
                            {translate('projects')}
                        </h1>
                        <p
                            className="animate-in text-secondary"
                            style={{"--index": 1} as React.CSSProperties}
                        >
                            {projectsTranslate('description')}
                        </p>
                    </div>
                </div>
                <ul
                    className="animated-list flex animate-in flex-col"
                    style={{"--index": 3} as React.CSSProperties}
                >
                    {allProjects.map((project, i) => (
                        <li
                            key={project.slug}
                            className={clsx(
                                "flex flex-col gap-4 py-6 transition-opacity first:pt-0 last:pb-0 md:flex-row md:gap-6",
                            )}
                        >
                            <Link
                                href={`/projects/${project.slug}`}
                                className="aspect-video w-full select-none overflow-clip rounded-lg border border-secondary bg-tertiary md:w-2/5"
                            >
                                <Halo strength={10}>
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="h-full w-full "
                                    />
                                </Halo>
                            </Link>
                            <div className="w-full space-y-2 md:w-3/5">
                                <div>
                                    <Link
                                        href={`/projects/${project.slug}`}
                                        className="font-medium text-primary hover:underline"
                                    >
                                        {projectsTranslate(project.title + "." + project.title)}
                                    </Link>
                                    <time className="text-secondary"> · {project.time}</time>
                                </div>

                                <p className="line-clamp-3 text-tertiary">
                                    {projectsTranslate(project.title + "." + project.description)}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
