import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterAbout from "./FooterAbout";
import FooterCopyright from "./FooterCopyright";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <FooterBrand />
          <FooterLinks />
          <FooterAbout />
        </div>

        <FooterCopyright />

      </div>
    </footer>
  );
}