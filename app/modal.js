// /app/modal.js
"use client";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    // Backdrop
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
    >
      {/* Modal Content */}
      <div
        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the modal
        className="relative bg-gray-900 rounded-lg shadow-xl w-full max-w-md p-1"
      >
        <div className="relative bg-slate-800 rounded-lg p-6">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-white"
          >
            &times;
          </button>
          {children}
        </div>
      </div>
    </div>
  );
}
