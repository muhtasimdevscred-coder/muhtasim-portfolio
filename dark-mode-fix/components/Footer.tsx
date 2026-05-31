export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest dark:bg-[#0f1729] border-t border-outline-variant/20 dark:border-white/10">
      <div className="max-w-container mx-auto px-gutter py-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-label-md font-bold text-on-surface dark:text-white">
          Muhtasim Ahmed
        </div>
        <div className="text-caption text-on-surface-variant dark:text-gray-400">
          © {new Date().getFullYear()} Muhtasim Ahmed. Built with precision.
        </div>
        <div className="flex gap-8">
          <a href="mailto:ahmed05muhtasim@gmail.com" className="text-on-surface-variant dark:text-gray-300 hover:text-primary dark:hover:text-inverse-primary transition-colors duration-200">Email</a>
          <a href="#" className="text-on-surface-variant dark:text-gray-300 hover:text-primary dark:hover:text-inverse-primary transition-colors duration-200">LinkedIn</a>
          <a href="#" className="text-on-surface-variant dark:text-gray-300 hover:text-primary dark:hover:text-inverse-primary transition-colors duration-200">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
