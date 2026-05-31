export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/20">
      <div className="max-w-container mx-auto px-gutter py-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-label-md font-bold text-on-surface">
          Muhtasim Ahmed
        </div>
        <div className="text-caption text-on-surface-variant">
          © {new Date().getFullYear()} Muhtasim Ahmed. Built with precision.
        </div>
        <div className="flex gap-8">
          <a
            href="mailto:ahmed05muhtasim@gmail.com"
            className="text-on-surface-variant hover:text-primary transition-colors duration-200"
          >
            Email
          </a>
          <a
            href="#"
            className="text-on-surface-variant hover:text-primary transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="text-on-surface-variant hover:text-primary transition-colors duration-200"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
