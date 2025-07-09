export default function SponsorsPage() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Sponsor Us</h1>
      <p className="mb-6">
        We are grateful for the support of our sponsors. If your company is
        interested in supporting the next generation of cybersecurity
        professionals, please view our sponsorship packet.
      </p>
      <a
        href="/bash-sponsor-packet.pdf" // Put our sponsor packet in the `public` folder
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
      >
        Download Sponsor Packet
      </a>
      {/* We can add our sponsor logos here */}
    </div>
  );
}
