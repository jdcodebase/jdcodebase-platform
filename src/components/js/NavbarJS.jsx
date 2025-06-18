import { jsTopics } from "@/data/pl/jsTopics";
import Link from "next/link";

export default function NavbarJS() {
  return (
    <nav className="bg-neutral-900 text-white p-4 space-y-4">
      {jsTopics.map((section, index) => (
        <div key={index}>
          <h2 className="text-xl font-bold mb-2">{section.label}</h2>
          <ul className="space-y-1 ml-4">
            {section.items.map((item, i) => (
              <li key={i}>
                <Link
                  className="hover:underline text-blue-400"
                  href={item.path}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}
