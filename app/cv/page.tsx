import Image from "next/image";
import avatar from "public/avatar.png";
import CV from "public/CV/CV.png";

export default function Links() {
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
                <Image
                    src={CV}
                    width={300}
                    height={500}
                    alt="CV"
                    className="mx-auto animate-in bg-secondary"
                    style={{"--index": 1} as React.CSSProperties}
                />
            </div>
        </>
    );
}
