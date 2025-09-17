export default function Footer() {
  return (
    <footer
      id="contact" // 👈 important for scrolling
      className="
        mt-12 sm:mt-16
        border-t border-white/10
        bg-black/40 backdrop-blur-sm
      "
    >
      <div
        className="
          container mx-auto px-4
          py-6 sm:py-8 md:py-10
          text-center
        "
      >
        <p
          className="
            text-xs sm:text-sm md:text-base
            text-gray-400
          "
        >
          Design &amp; built by{" "}
          <span className="font-medium text-gray-200">
            Pawan Kumari
          </span>
        </p>

        {/* 👇 Contact details */}
        <p className="mt-3 text-sm sm:text-base text-gray-300">
          📧 Email:{" "}
          <a
            href="mailto:Pawankumari08765@gmail.com"
            className="underline hover:text-white transition-colors"
          >
            Pawankumari08765@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
}
