export function Footer() {
  return (
    <footer className="bg-black text-neutral-400 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="tracking-wider">UTAH ARCHITECTS</p>
          <p className="text-sm">
            © {new Date().getFullYear()} Utah Architects. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
