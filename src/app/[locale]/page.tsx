import Image from "next/image";
import {Link as NavigationLink} from "../../navigation";
import {ArrowUpRightIcon} from "@heroicons/react/20/solid";
import Avatar from "@/public/avatar.png";
import Section from "@/src/app/[locale]/components/Section";
import ConnectLinks from "@/src/app/[locale]/components/ConnectLinks";
import Workplaces from "@/src/app/[locale]/components/Workplaces";
import ankamaLogo from "@/public/work/ankama-logo.png";
import glanumLogo from "@/public/work/glanum-logo.png";
import snbLogo from "@/public/work/snb-logo.png";
import peopleInLogo from "@/public/work/people-in-logo.png";
import {useTranslations} from 'next-intl';
import {firstLetterUppercase} from "@/lib/utils";
import Link from "@/src/app/[locale]/components/ui/Link";

export default function Home() {
    const generalTranslate = useTranslations('general');
    const linksTranslate = useTranslations('links');
    const translate = useTranslations('home');
    return (
        <div className="flex flex-col gap-16 md:gap-24">
            <div className="flex animate-in flex-col gap-8">
                <div>
                    <h1 className="animate-in text-3xl font-bold tracking-tight text-primary">
                        Thibault Morizet
                    </h1>
                    <p
                        className="animate-in text-secondary"
                        style={{"--index": 1} as React.CSSProperties}
                    >
                        {translate('description')}
                    </p>
                </div>
                <div
                    className="flex animate-in flex-col gap-6 text-secondary md:flex-row md:items-center"
                    style={{"--index": 1} as React.CSSProperties}
                >
                    <Image
                        src={Avatar}
                        width={85}
                        height={85}
                        alt="avatar"
                        className="rounded-full bg-secondary"
                    />
                    <div>
                        <p
                            className="mb-2 max-w-lg animate-in text-primary"
                            style={{"--index": 2} as React.CSSProperties}
                        >
                            {translate('presentation')}
                        </p>
                        <ul
                            className="animated-list flex animate-in flex-col gap-2 text-secondary md:flex-row md:gap-6"
                            style={{"--index": 2} as React.CSSProperties}
                        >
                            <li className="transition-opacity">
                                <Link
                                    href="mailto:tmorizet@icloud.com"
                                    className="flex items-center gap-2 no-underline"
                                >
                                    <ArrowUpRightIcon className="h-5 w-5"/>
                                    <span>
                                        {firstLetterUppercase(generalTranslate('emailMe'))}
                                    </span>
                                </Link>
                            </li>
                            <li className="transition-opacity">
                                <NavigationLink
                                    href="/links"
                                    className="flex items-center gap-2 no-underline"
                                >
                                    <ArrowUpRightIcon className="h-5 w-5"/>
                                    <span>
                                        {generalTranslate('moreConnect')}
                                    </span>
                                </NavigationLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-16 md:gap-24">
                <div
                    className="flex animate-in flex-col gap-16 md:gap-24"
                    style={{"--index": 3} as React.CSSProperties}
                >
                    <Section heading={generalTranslate('about')} headingAlignment="left">
                        <div className="flex flex-col gap-6">
                            <p>{translate('about.first')}</p>
                            <p>{translate('about.second')}</p>
                        </div>
                    </Section>

                    <Section heading={generalTranslate('connect')} headingAlignment="left">
                        <div className="flex w-full flex-col gap-8">
                            <p>
                                {translate("connect.haveAQuestion") + " "}
                                <Link href="mailto:tmorizet@icloud.com">{generalTranslate('contactMe')}</Link>.
                                {" " + translate("connect.tryFinding")}
                            </p>
                            <ul className="animated-list grid flex-grow grid-cols-1 gap-2 md:grid-cols-2">
                                {ConnectLinks.map((link) => (
                                    <li
                                        className="col-span-1 transition-opacity"
                                        key={link.label}
                                    >
                                        <Link
                                            href={link.href}
                                            className="inline-grid w-full rounded-lg border border-primary p-4 no-underline transition-opacity"
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className="text-xl">{link.icon}</span>
                                                {linksTranslate(link.label)}
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    className="ml-auto h-5 w-5 text-secondary"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Section>

                    <Section heading={generalTranslate('work')} headingAlignment="left">
                        <div className="flex w-full flex-col gap-8">
                            <p>
                                {new Date().getFullYear() - 2021} {" " + translate("work.title")}
                            </p>
                            <p>
                                {translate("work.description")}
                            </p>
                            <Workplaces items={workplaces}/>
                        </div>
                    </Section>
                </div>
            </div>
        </div>
    );
}

const workplaces = [
    {
        title: "snb",
        company: "Studio no Border (Ankama)",
        timeStart: "2024-10-01",
        timeEnd: "",
        imageSrc: snbLogo,
        link: "https://www.studio-no-border.com/en/",
    },
    {
        title: "ankama",
        company: "Ankama",        
        timeStart: "2023-08-01",
        timeEnd: "2024-09-30",
        imageSrc: ankamaLogo,
        link: "https://www.ankama.com",
    },
    {
        title: "glanum",
        company: "Glanum",
        timeStart: "2023-01-01",
        timeEnd: "2023-07-31",
        imageSrc: glanumLogo,
        link: "https://www.glanum.com",
    },
    {
        title: "peopleIn",
        company: "People In",
        timeStart: "2021-09-01",
        timeEnd: "2022-12-31",
        imageSrc: peopleInLogo,
        link: "https://www.people-in.fr",
    },
];
