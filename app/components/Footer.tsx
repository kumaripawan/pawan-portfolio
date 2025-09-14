export default function Footer() {
  return (
    <footer
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
      </div>
    </footer>
  );
}
