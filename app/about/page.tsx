import type { Metadata } from "next";
import type { AboutType, StatusType } from "@/types/about";
import about from "@/lib/about.json";
import Hero from "@/components/layout/Hero";
import Status from "@/components/about/Status";
import Section from "@/components/about/Section";
import About from "./About";

const statuses: StatusType[] = [
  {
    id: 0,
    heading: "Currently Developing:",
    name: "Iridium",
    description:
      "Self-hosted school management platform for students, staff, classes, clubs, grades, and more.",
    link: "https://iridium.tonymac.net",
    image: "https://iridium.tonymac.net/logo.png",
  },
  {
    id: 1,
    heading: "Currently Developing:",
    name: "MacWeb",
    description:
      "Rewriting the entire full-stack platform and subapps in Next.js",
    link: "https://macweb.app",
    image: "https://macweb.app/logo.png",
  },
  {
    id: 2,
    heading: "Currently Watching:",
    name: "Gintama",
    description: "350 episodes of peak comedy! (I'm never finishing this 😭)",
    link: "https://www.imdb.com/title/tt0988818",
    image:
      "https://m.media-amazon.com/images/M/MV5BNTMzNjE0N2ItNjFiYi00NmIzLTk1MzMtZWFjNThjMzI5MTJlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: 5,
    heading: "Currently Reading:",
    name: "Harry Potter and the Order of the Phoenix",
    description: "First time reading the series",
    link: "https://en.wikipedia.org/wiki/Harry_Potter_and_the_Order_of_the_Phoenix",
    image:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1627045351i/58613451.jpg",
  },
];

export const metadata: Metadata = {
  title: "About | TonyMac129",
  description:
    "Here's some stuff about me, my contact info, and other interesting things if you want to reach out or learn more about me. You can also find this portfolio's information here.",
  authors: [{ name: "TonyMac129", url: "https://tonymac.net" }],
  openGraph: {
    title: "About Me | TonyMac129",
    description:
      "Here's some stuff about me, my contact info, and other interesting things if you want to reach out or learn more about me. You can also find this portfolio's information here.",
    url: "https://tonymac.net/about",
    siteName: "TonyMac129",
    images: [
      {
        url: "/logo.png",
        width: 50,
        height: 50,
      },
    ],
    type: "website",
  },
};

function Page() {
  const aboutData: AboutType[] = about.about;

  return (
    <div className="mb-15">
      <Hero title="About Me">
        Here&apos;s some stuff about me, my contact info, and other interesting
        things if you want to reach out or learn more about me. You can also
        find this portfolio&apos;s information here.
      </Hero>
      <div className="flex flex-col md:flex-row gap-15 px-5 sm:px-10 lg:px-40 max-w-430 mx-auto mb-15">
        <div className="flex flex-col gap-y-3 flex-1 h-fit">
          {statuses.map((status) => (
            <Status key={status.id} status={status} />
          ))}
          <div className="text-zinc-800 dark:text-zinc-300 text-sm">
            Status last updated 11/16/26
          </div>
        </div>
        <div className="flex flex-col gap-y-10 flex-2">
          <Section title="Brief Intro">
            👋 I&apos;m Tony, a 15 year old full-stack web developer based in
            northern Virginia, USA. I&apos;m a high school freshman studying
            STEM and computer science at{" "}
            <a
              href="https://tjhsst.fcps.edu"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              TJHSST
            </a>
            . I&apos;m also the founder and developer of{" "}
            <a
              href="https://macweb.app"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              MacWeb
            </a>
            , an online platform for gaming and learning web development. As of
            computer programming, my primary tech stack for building web apps is
            React, Next.js, TypeScript, Tailwind, and MongoDB. I&apos;ve also
            had experience with several other languages and technologies,
            including HTML, CSS, JavaScript, Express, Node, Java, C#, and
            Python. I enjoy watching anime, listening to music, and playing
            basketball in my free time as well.
          </Section>
          <Section title="My Story">
            I was born in Taipei, Taiwan in 2010 and got into an advanced
            program in 2019 and learned a lot of cool stuff and STEM there. In
            2022, when I was 11, we moved from Taipei to Virginia, USA and lived
            here ever since. It was that summer when I started really get into
            programming, especially web development. I started learning JS in
            early 2023 and switched to React in March 2025. Everything I know
            about web development is self taught through YouTube tutorials,
            online resources, ChatGPT, and books, so it was a pretty tough but
            rewarding journey. In April 2025, I got accepted to TJHSST, one of
            the best public high schools in the nation that focuses on STEM and
            it&apos;s always been a dream of mine to go here. I hope to keep
            expanding my skills beyond web dev in the future and learn more!
          </Section>
          <Section title="Contact?">
            I&apos;m not really sure why someone would want to contact me
            (I&apos;m a student who has like 2 hours of homework everyday 😭),
            but if you really want to do that, you can see all my socials below
            in the footer. I would prefer email, Discord, and GitHub as I check
            these most often and I barely touch my other accounts. If you just
            wanna give a suggestion to this site, submit an issue in the GitHub
            repository and I&apos;ll get to you ASAP!
          </Section>
        </div>
      </div>
      <About aboutData={aboutData} />
    </div>
  );
}

export default Page;
