import Link from "next/link";

const footerLinks = [
  { label: "الرئيسية", href: "/" },
  { label: "التعرف على الإشارة", href: "/predict" },
  { label: "عن المشروع", href: "/about" },
];

export default function FooterLinks() {
  return (
    <div>
      <h3 className="mb-5 text-lg font-bold text-white">
        روابط سريعة
      </h3>

      <ul className="space-y-3">
        {footerLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm transition-colors hover:text-blue-400"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}