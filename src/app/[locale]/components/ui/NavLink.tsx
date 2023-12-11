import {Link, usePathname} from "@/src/navigation";
import {ReactNode} from "react";
import clsx from "clsx";

type NavLinkProps = {
    href: string;
    children: ReactNode;
};

export default function NavLink({href, children}: NavLinkProps) {
    const pathname = usePathname(); // active paths on dynamic subpages
    const active = pathname === href;

    return (
        <Link
            className={clsx(
                "px-4 py-2 rounded-lg text-sm hover:text-primary transition-colors",
                active ? "bg-secondaryA text-primary" : "text-secondary"
            )}
            href={href}
        >
            {children}
        </Link>
    );
}
