export default function FooterCopyright() {
  return (
    <div className="mt-10 border-t border-slate-800 pt-6 text-center">
      <p className="text-sm text-slate-500">
        © {new Date().getFullYear()} ArYSL. جميع الحقوق محفوظة.
      </p>
    </div>
  );
}