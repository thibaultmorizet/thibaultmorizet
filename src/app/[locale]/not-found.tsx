import {useTranslations} from "next-intl";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "404 | Thibault Morizet",
    description: "Uh oh! This page does not exist",
};

export default function NotFound() {
    const translate = useTranslations('404');
    return (
        <div className="flex flex-col gap-2">
            <h1>{translate("pageNotFound")}</h1>
            <p className="text-secondary">
                {translate("messageStart")}{translate("messageEnd")}
            </p>
            <div className="h-2"/>
            <a href="/" className={"underline"}>
                {translate("returnHome")}
            </a>
        </div>
    )
}

