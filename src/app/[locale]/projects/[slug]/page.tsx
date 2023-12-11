import {allProjects, Post as PostType} from "contentlayer/generated";
import {notFound} from "next/navigation";

import Mdx from "@/src/app/[locale]/projects/components/ui/MdxWrapper";
import {Link as NavigationLink} from "@/src/navigation";
import {useTranslations} from "next-intl";
import Link from "@/src/app/[locale]/components/ui/Link";

type PostProps = {
    post: PostType;
    related: PostType[];
};

export default function Project({params}: { params: any }) {
    const translate = useTranslations('projects');
    const generalTranslate = useTranslations('general');
    const post = allProjects.find((post) => post.slug === params.slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="flex flex-col gap-20">
            <article>
                <div className="flex animate-in flex-col gap-3">
                    <div className="flex gap-3 text-secondary">
                        <p>{post.time}</p>
                        {post.url && (
                            <>
                                <span>&middot;</span>
                                <Link href={post.url} className="hover:text-primary">
                                    {translate('visitProject')}
                                </Link>
                            </>
                        )}
                    </div>
                    <h1 className="text-3xl font-bold leading-tight tracking-tight text-primary">
                        {post.title}
                    </h1>
                    <p
                        className="animate-in text-lg leading-tight text-secondary md:text-xl"
                        style={{"--index": 1} as React.CSSProperties}
                    >
                        {translate(post.title + "." + post.description)}

                    </p>
                </div>

                <div className="h-12"/>
                <div
                    className="project prose animate-in"
                    style={{"--index": 2} as React.CSSProperties}
                >
                    <Mdx code={post.body.code}/>
                </div>
            </article>
            <div className="flex flex-col gap-20">
                <div className="flex flex-col gap-6">
                    <h2>{generalTranslate('tags')}</h2>
                    <div className="flex flex-wrap gap-3 ">
                        {post.tags.map((tag: string) => (
                            <div
                                key={tag}
                                className="whitespace-nowrap rounded-lg bg-secondary px-4 py-1.5 text-sm text-secondary"
                            >
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-6">
                    <h2>{generalTranslate('contact')}</h2>
                    <p className="max-w-lg text-secondary">
                        {translate('contactStart') + " "}
                        <a
                            href="mailto:thibaultmorizet@icloud.com"
                            className="text-primary underline"
                        >
                            thibaultmorizet@icloud.com
                        </a>
                        {translate('contactEnd')}
                    </p>
                </div>

                <NavigationLink href="/projects" className="text-primary underline">
                    ← {translate('allProjects')}
                </NavigationLink>
            </div>

            <div/>
        </div>
    );
}
