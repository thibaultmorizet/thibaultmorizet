"use client";
import Image, {StaticImageData} from "next/image";
import {useTheme} from "next-themes";

import Link from "@/src/app/[locale]/components/ui/Link";
import {useMessages} from "next-intl";

type Workplace = {
    title: string;
    company: string;
    imageSrc: string | StaticImageData;
    time?: string;
    link?: string;
};

function Workplace({title, company, imageSrc, time, link}: Workplace) {
    const {theme} = useTheme();
    const messages = useMessages();
    const works = messages.works as any

    const content = (
        <>
            <div className="flex items-center gap-4">
                <Image
                    src={imageSrc}
                    alt={company}
                    width={48}
                    height={48}
                    className={"rounded-full"}
                />
                <div className="flex flex-col gap-px">
                    <p className={link ? "external-arrow" : ""}>{works?.[title]}</p>
                    <p className="text-secondary">{company}</p>
                </div>
            </div>
            {time && <time className="text-secondary">{time}</time>}
        </>
    );
    return (
        <li className="transition-opacity" key={company}>
            {link ? (
                <Link
                    href={link}
                    className="flex justify-between w-full px-3 py-2 -mx-3 -my-2 no-underline"
                >
                    {content}
                </Link>
            ) : (
                <div className="flex justify-between ">{content}</div>
            )}
        </li>
    );
}

export default function Workplaces({items}: { items: Workplace[] }) {
    return (
        <ul className="flex flex-col gap-8 animated-list">
            {items.map(Workplace)}
        </ul>
    );
}
