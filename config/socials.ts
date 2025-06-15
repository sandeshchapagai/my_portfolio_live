import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@sandeshchapagai",
    icon: Icons.gitHub,
    link: "https://github.com/sandeshchapagai",
  },
  {
    name: "LinkedIn",
    username: "Sandesh chapagai",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/sandeshchapagai",
  },
  {
    name: "Twitter",
    username: "@sandeshchapagai",
    icon: Icons.twitter,
    link: "https://twitter.com/sandeshchapagai",
  },
  {
    name: "Gmail",
    username: "sandeshchapagai",
    icon: Icons.gmail,
    link: "mailto:sandeshchapagai25@gmail.com",
  },
];
