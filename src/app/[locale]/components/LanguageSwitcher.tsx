import {useEffect, useState} from "react";
import {Listbox} from "@headlessui/react";
import clsx from "clsx";
import {AnimatePresence, motion} from "framer-motion";
import {useTheme} from "next-themes";

import {CheckIcon, LanguageIcon} from "@heroicons/react/20/solid";
import {useLocale, useTranslations} from "next-intl";
import {locales, usePathname, useRouter} from "@/src/navigation";

export default function LanguageSwitcher() {
    const [mounted, setMounted] = useState(false);
    const {theme} = useTheme();
    const translate = useTranslations('languages');
    const language = useLocale()
    const pathname = usePathname();
    const router = useRouter();
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <>
            <Listbox value={language} onChange={(value) => router.push(pathname, {locale: value})}>
                {({open}) => {
                    const iconClassName = clsx(
                        "w-5 h-5 text-secondary hover:text-primary cursor-pointer transition-colors",
                        open ? "text-primary" : "text-secondary"
                    );
                    return (
                        <div className="relative">
                            <Listbox.Button
                                className={clsx(
                                    "relative w-8 h-8 cursor-default rounded-full flex items-center justify-center focus:outline-none "
                                )}
                            >
                                {<LanguageIcon className={iconClassName}/>}
                            </Listbox.Button>
                            <AnimatePresence>
                                {open && (
                                    <Listbox.Options
                                        as={motion.ul}
                                        static
                                        initial={{opacity: 0, scale: 0.9}}
                                        animate={{opacity: 1, scale: 1}}
                                        exit={{opacity: 0, scale: 0.9}}
                                        transition={{type: "spring", bounce: 0.3, duration: 0.3}}
                                        className="absolute right-0 p-2 mt-2 overflow-auto text-base origin-top-right shadow-lg max-h-60 w-42 rounded-xl bg-white dark:bg-black focus:outline-none sm:text-sm capitalize"
                                        style={
                                            theme === "terminal" ? {background: "#040605"} : {}
                                        }
                                    >
                                        {locales.map((language) => (
                                            <Listbox.Option
                                                key={language}
                                                className={({active}) =>
                                                    clsx(
                                                        "relative cursor-default select-none py-2 pl-10 pr-4 rounded-md",
                                                        active ? "bg-tertiary" : ""
                                                    )
                                                }
                                                value={language}
                                            >
                                                {({selected}) => (
                                                    <>
                            <span
                                className={`block truncate ${
                                    selected ? "font-medium" : "font-normal"
                                }`}
                            >
                              {translate(language)}
                            </span>
                                                        {selected ? (
                                                            <span
                                                                className="absolute inset-y-0 left-0 flex items-center pl-3 dark:text-neutral-50">
                                <CheckIcon
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                />
                              </span>
                                                        ) : null}
                                                    </>
                                                )}
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                }}
            </Listbox>
        </>
    );
}
