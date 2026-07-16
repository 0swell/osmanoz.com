import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";

const links = [
  { href: "https://github.com/0swell", label: "GitHub", Icon: SiGithub },
  { href: "https://www.linkedin.com/", label: "LinkedIn", Icon: FaLinkedin },
];

export function SocialLinks() {
  return (
    <ul className="flex items-center gap-3">
      {links.map(({ href, label, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="inline-flex size-9 items-center justify-center rounded-xl hover:bg-elevated hover:text-accent transition-colors"
          >
            <Icon size={18} />
          </a>
        </li>
      ))}
    </ul>
  );
}
