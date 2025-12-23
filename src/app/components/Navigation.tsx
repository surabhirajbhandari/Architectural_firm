import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="tracking-wider hover:opacity-70 transition-opacity"
          >
            UTAH ARCHITECTS
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-neutral-900 text-white px-6 py-2 hover:bg-neutral-700 transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("about")}
              className="text-neutral-600 hover:text-neutral-900 transition-colors text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-neutral-600 hover:text-neutral-900 transition-colors text-left"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-neutral-600 hover:text-neutral-900 transition-colors text-left"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-neutral-900 text-white px-6 py-2 hover:bg-neutral-700 transition-colors text-left"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
