"use client"
import Image from "next/image";
import avatar from "public/avatar.png";
import CV from "public/CV/CV.jpeg";

export default function Links() {
    const downloadCV = async () => {
        const CV =
            "https://github.com/thibaultmorizet/thibaultmorizet.github.io/blob/main/public/CV/CV.pdf";

        // use fetch to get a response
        const response = await fetch(CV);

        // return a new response but use 'content-disposition' to suggest saving the file to the user's computer
        return new Response(response.body, {
            headers: {
                ...response.headers, // copy the previous headers
                "content-disposition": `attachment; filename="CV.pdf"`,
            },
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
