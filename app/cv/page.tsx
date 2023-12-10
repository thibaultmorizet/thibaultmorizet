"use client"
import Image from "next/image";
import avatar from "public/avatar.png";
import CV from "public/CV/CV.jpeg";

export default function Links() {
    const downloadCV = async () => {
        const CV =
            "https://github.com/thibaultmorizet/thibaultmorizet.github.io/blob/main/public/CV/CV.pdf";
        await fetch(CV, {method: "get", mode: "no-cors", referrerPolicy: "no-referrer"})
            .then((res) => res.blob())
            .then((res) => {
                const aElement = document.createElement("a");
                aElement.setAttribute("download", "CV.pdf");
                const href = URL.createObjectURL(res);
                aElement.href = href;
                aElement.setAttribute("target", "_blank");
                aElement.click();
                URL.revokeObjectURL(href);
            });
    };

    return (
        <>
            <div className="flex flex-col gap-16 md:gap-24">
                <div className="flex animate-in flex-col gap-8">
                    <Image
                        src={avatar}
                        width={100}
                        height={100}
                        alt="avatar"
                        className="mx-auto animate-in rounded-full bg-secondary"
                        style={{"--index": 1} as React.CSSProperties}
                    />
                    <div
                        className="animate-in space-y-1"
                        style={{"--index": 2} as React.CSSProperties}
                    >
                        <h1 className="text-center text-2xl font-bold tracking-tight">
                            Thibault Morizet
                        </h1>
                    </div>
                </div>
                <button onClick={downloadCV}>Download CV</button>

                <Image
                    src={CV}
                    width={600}
                    height={1000}
                    alt="CV"
                    className="mx-auto animate-in bg-secondary"
                    style={{"--index": 1} as React.CSSProperties}
                />
            </div>
        </>
    );
}
