"use client";

import { useState } from "react";
import Modal from "./modal";
import NotificationInfo from "./NotificationInfo";

export default function NotificationInfoModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* This is the button that will be visible on the homepage */}
      <div className="text-center mt-4">
        <button
          onClick={() => setIsOpen(true)}
          className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
        >
          Learn more about push notifications
        </button>
      </div>

      {/* This is the Modal that will pop up */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <NotificationInfo />
      </Modal>
    </>
  );
}
