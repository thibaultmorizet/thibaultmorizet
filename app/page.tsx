import Image from "next/image";
import Link from "@/components/ui/Link";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Avatar from "@/public/avatar.png";
import Section from "@/components/Section";
import ConnectLinks from "@/components/ConnectLinks";
import Workplaces from "@/app/components/Workplaces";
import ankamaLogo from "@/public/work/ankama-logo.png";
import glanumLogo from "@/public/work/glanum-logo.png";
import peopleInLogo from "@/public/work/people-in-logo.png";

export default async function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div className="flex animate-in flex-col gap-8">
        <div>
          <h1 className="animate-in text-3xl font-bold tracking-tight text-primary">
            Thibault Morizet
          </h1>
          <p
            className="animate-in text-secondary"
            style={{ "--index": 1 } as React.CSSProperties}
          >
            I write code.
          </p>
        </div>
        <div
          className="flex animate-in flex-col gap-6 text-secondary md:flex-row md:items-center"
          style={{ "--index": 1 } as React.CSSProperties}
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
              style={{ "--index": 2 } as React.CSSProperties}
            >
              Hi, I&apos;m Thibault Morizet, a developer who loves building cool
              things with code.
            </p>
            <ul
              className="animated-list flex animate-in flex-col gap-2 text-secondary md:flex-row md:gap-6"
              style={{ "--index": 2 } as React.CSSProperties}
            >
              <li className="transition-opacity">
                <Link
                  href="mailto:thibaultmorizet@icloud.com"
                  className="flex items-center gap-2 no-underline"
                >
                  <ArrowUpRightIcon className="h-5 w-5" />
                  <span>Email me</span>
                </Link>
              </li>
              <li className="transition-opacity">
                <Link
                  href="/links"
                  className="flex items-center gap-2 no-underline"
                >
                  <ArrowUpRightIcon className="h-5 w-5" />
                  <span>More ways to connect</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-16 md:gap-24">
        <div
          className="flex animate-in flex-col gap-16 md:gap-24"
          style={{ "--index": 3 } as React.CSSProperties}
        >
          <Section heading="About" headingAlignment="left">
            <div className="flex flex-col gap-6">
              <p>Hello world, I&apos;m Thibault Morizet !</p>

              <p>
                I have a passion for web design and back-end development, so am
                always looking for ways to incorporate it into my life.
              </p>
              <p>
                When I&apos;m not at my desk I am probably lifting weights,
                boxing, or reading :)
              </p>
            </div>
          </Section>

          <Section heading="Connect" headingAlignment="left">
            <div className="flex w-full flex-col gap-8">
              <p>
                Have a question or just want to chat ? Feel free to{" "}
                <Link href="mailto:thibaultmorizet@icloud.com">email me</Link>.
                Try finding me anywhere else at @thibaultmorizet
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
                        {link.label}
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

          <Section heading="Work" headingAlignment="left">
            <div className="flex w-full flex-col gap-8">
              <p>
                {new Date().getFullYear() - 2020}+ years of professional
                development experience.
              </p>
              <p>
                I started my career at a small companies. Then I went to a
                bigger company. Now I&apos;m a React Native Developer currently
                working at{" "}
                <Link className="underline" href="https://www.ankama.com">
                  Ankama
                </Link>
                , one of the largest gaming company in France.
              </p>
              <Workplaces items={workplaces} />
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
}

const workplaces = [
  {
    title: "React Native Developer",
    company: "Ankama",
    time: "2023 -",
    imageSrc: ankamaLogo,
    link: "https://www.ankama.com",
  },
  {
    title: "Web & applications programmer",
    company: "Glanum",
    time: "2023 - 2023",
    imageSrc: glanumLogo,
    link: "https://www.glanum.com",
  },
  {
    title: "Web Developer",
    company: "People In",
    time: "2021 - 2022",
    imageSrc: peopleInLogo,
    link: "https://www.people-in.fr",
  },
];
