// /app/actionCard.js
import Link from "next/link";

export default function ActionCard({
  icon,
  title,
  description,
  href,
  buttonText,
  onClick,
}) {
  const buttonClasses =
    "mt-auto bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors";

  return (
    <div className="bg-slate-800 p-6 rounded-lg text-center border border-slate-700 flex flex-col items-center">
      {icon}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4 flex-grow">{description}</p>

      {href ? (
        <Link
          href={href}
          target={href.startsWith("http") ? "_blank" : "_self"}
          rel="noopener noreferrer"
          className={buttonClasses}
        >
          {buttonText}
        </Link>
      ) : (
        <button onClick={onClick} className={buttonClasses}>
          {buttonText}
        </button>
      )}
    </div>
  );
}
