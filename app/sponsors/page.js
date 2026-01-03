import { FiDownload, FiMail } from "react-icons/fi";
import Image from "next/image";

export default function SponsorsPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold mb-4">Partner With Us</h1>
        <p className="text-xl text-gray-400">
          Join us in shaping the next generation of cybersecurity leaders.
        </p>
      </div>

      {/* --- Our Goal Section ---- */}
      <div className="bg-gray-800/40 border border-gray-700 rounded-lg p-8 mb-12">
        <h2 className="text-3xl font-bold mb-4 text-center text-blue-400">
          Our Goal
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed text-center">
          Our goal as an organization is to provide our members with the
          cybersecurity skills and knowledge necessary for them to become
          effective young cybersecurity professionals and future industry
          leaders. A big part of the way we aim to do that is through
          partnerships with companies and firms like yours.
        </p>
      </div>

      {/* --- Why Partner With Us Section --- */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-6">
          Why Partner With BASH?
        </h2>
        <p className="text-lg text-gray-400 text-center max-w-3xl mx-auto leading-relaxed">
          We believe that hearing from cyber professionals in all different
          areas of the industry provides our members with unique insights and
          knowledge that can benefit them greatly when deciding where they want
          to take their career. By partnering with us, you gain a direct channel
          to a dedicated group of aspiring security professionals.
        </p>
      </div>

      {/* --- Sponsorship Packet Download --- */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Become a Sponsor</h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed mb-6">
          We are grateful for the support of our sponsors. If your company is
          interested in supporting our mission, please view our sponsorship
          packet for more details.
        </p>
        <a
          href="/sponsor.pdf" // Ensure our packet is in the `public` folder
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg inline-flex items-center transition-transform transform hover:scale-105"
        >
          <FiDownload className="mr-2" />
          Download Sponsor Packet
        </a>
      </div>

      {/* --- Get in Touch & Speak at BASH Section --- */}
      <div
        id="speak"
        className="bg-gray-800/40 border border-gray-700 rounded-lg p-8"
      >
        <h2 className="text-3xl font-bold mb-4 text-center">Get Involved</h2>
        <p className="text-lg text-gray-300 leading-relaxed text-center mb-6">
          We are always looking for companies to partner and build relationships
          with. Whether you are interested in sponsoring, speaking at a meeting,
          or hosting a workshop, we would love to hear from you. Please reach
          out to us to discuss how we can work together.
        </p>
        <div className="text-center">
          <a
            href="mailto:bashcyberclub@gmail.com"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg inline-flex items-center transition-colors"
          >
            <FiMail className="mr-2" />
            Contact Us
          </a>
        </div>
      </div>

      {/* Sponsor Section to be updated as needed*/}
      <div className="pt-16 mt-16 border-t border-gray-800">
        <h2 className="text-3xl font-bold text-center mb-8">Our Sponsors</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <a
            href="https://arcticwolf.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/articwolf.avif"
              alt="artic wolf logo"
              width={150}
              height={75}
              className="opacity-70 hover:opacity-100 transition-opacity"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
