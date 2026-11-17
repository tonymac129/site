import {
  SiTypescript,
  SiBambulab,
  SiHackclub,
  SiCrunchyroll,
  SiNextdotjs,
  SiTailwindcss,
  SiPrisma,
  SiGithub,
  SiDocker,
  SiFramework,
  SiVscodium,
} from "react-icons/si";
import {
  FaReact,
  FaRaspberryPi,
  FaServer,
  FaDiscord,
  FaReddit,
  FaPython,
  FaJava,
  FaGitAlt,
  FaBasketballBall,
  FaSteam,
  FaRust,
  FaFlag,
} from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { GrArchlinux } from "react-icons/gr";
import { PiMathOperations, PiAtomBold } from "react-icons/pi";

interface AttributeInterface {
  name: string;
  icon: string | React.ReactNode;
  color?: string;
  link?: string;
}

interface RoleInterface {
  id: number;
  name: string;
  attributes: AttributeInterface[];
}

export const roles: RoleInterface[] = [
  {
    id: 0,
    name: "Web Dev",
    attributes: [
      { name: "Next.js", icon: <SiNextdotjs size={35} />, link: "nextjs.org" },
      {
        name: "React",
        icon: <FaReact size={35} />,
        color: "group-hover:text-blue-400",
        link: "react.dev",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript size={35} />,
        color: "group-hover:text-blue-500",
        link: "typescriptlang.org",
      },
      {
        name: "Tailwind",
        icon: <SiTailwindcss size={35} />,
        color: "group-hover:text-blue-400",
        link: "tailwindcss.com",
      },
      {
        name: "Prisma",
        icon: <SiPrisma size={35} />,
        color: "group-hover:text-emerald-500",
        link: "prisma.io",
      },
      {
        name: "PostgreSQL",
        icon: <BiLogoPostgresql size={35} />,
        color: "group-hover:text-sky-700",
        link: "postgresql.org",
      },
      {
        name: "Docker",
        icon: <SiDocker size={35} />,
        color: "group-hover:text-blue-500",
        link: "docker.com",
      },
    ],
  },
  {
    id: 1,
    name: "Maker",
    attributes: [
      {
        name: "Hack Club",
        icon: <SiHackclub size={35} />,
        color: "group-hover:text-red-500",
        link: "hackclub.com",
      },
      {
        name: "Bambu Lab",
        icon: <SiBambulab size={35} />,
        color: "group-hover:text-green-500",
        link: "bambulab.com",
      },
      {
        name: "Raspberry",
        icon: <FaRaspberryPi size={35} />,
        color: "group-hover:text-rose-600",
        link: "raspberrypi.com",
      },
      {
        name: "Framework",
        icon: <SiFramework size={35} />,
        color: "group-hover:text-[#E76235]",
        link: "frame.work",
      },
      {
        name: "Arch btw",
        icon: <GrArchlinux size={35} />,
        color: "group-hover:text-blue-500",
        link: "archlinux.org",
      },
      {
        name: "Sysadmin",
        icon: <FaServer size={35} />,
        link: "sysadmins.tjhsst.edu",
      },
    ],
  },
  {
    id: 2,
    name: "Programmer",
    attributes: [
      {
        name: "Python",
        icon: <FaPython size={35} />,
        color: "group-hover:text-yellow-400",
        link: "python.org",
      },
      {
        name: "Rust",
        icon: <FaRust size={35} />,
        color: "group-hover:text-[#D34516]",
        link: "rust-lang.org",
      },
      {
        name: "Java",
        icon: <FaJava size={35} />,
        color: "group-hover:text-red-500",
        link: "java.com",
      },
      {
        name: "VS Codium",
        icon: <SiVscodium size={35} />,
        color: "group-hover:text-blue-500",
        link: "vscodium.com",
      },
      {
        name: "Git",
        icon: <FaGitAlt size={35} />,
        color: "group-hover:text-orange-600",
        link: "git-scm.com",
      },
      {
        name: "GitHub",
        icon: <SiGithub size={35} />,
        link: "github.com",
      },
    ],
  },
  {
    id: 3,
    name: "Student",
    attributes: [
      { name: "Club leader", icon: <FaFlag size={35} />, link: "tjdev.club" },
      {
        name: "TJHSST",
        icon: "/icons/tjhsst.svg",
        link: "tjhsst.fcps.edu",
      },
      { name: "Calculus", icon: <PiMathOperations size={35} /> },
      { name: "Physics", icon: <PiAtomBold size={35} /> },
    ],
  },
  {
    id: 4,
    name:
      Math.floor(
        (new Date().getTime() - 1291870800000) / (1000 * 60 * 60 * 24 * 365),
      ) + " y/o",
    attributes: [
      {
        name: "Anime fan",
        icon: <SiCrunchyroll size={35} />,
        color: "group-hover:text-orange-500",
        link: "crunchyroll.com",
      },
      {
        name: "Steam",
        icon: <FaSteam size={35} />,
        color: "group-hover:text-sky-800",
        link: "store.steampowered.com",
      },
      {
        name: "Basketball",
        icon: <FaBasketballBall size={35} />,
        color: "group-hover:text-orange-400",
      },
      {
        name: "Discord",
        icon: <FaDiscord size={35} />,
        color: "group-hover:text-blue-600",
        link: "discord.com",
      },
      {
        name: "Reddit",
        icon: <FaReddit size={35} />,
        color: "group-hover:text-orange-600",
        link: "reddit.com",
      },
    ],
  },
];
