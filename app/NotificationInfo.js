import Accordion from "./Accordion";
import { FiInfo, FiSmartphone, FiMonitor } from "react-icons/fi";
import { FaApple } from "react-icons/fa";

// The component now returns the content directly, without the outer card div.
export default function NotificationInfo() {
  return (
    <>
      <div className="flex items-center gap-x-3 mb-6">
        <FiInfo className="h-6 w-6 text-blue-400" />
        <h2 className="text-2xl font-bold">Push Notification Info</h2>
      </div>

      <div className="space-y-2 text-left">
        <Accordion title="Do I Need to Be Logged In?">
          <p>
            No. Once you enable notifications for a device, you don&apos;t need
            to be logged in or have our website open to receive them. Your
            browser and operating system handle them in the background as long
            as your device is online.
          </p>
        </Accordion>

        <Accordion title="Supported Browsers">
          <p className="mb-4">
            You need to use a supported browser to receive notifications.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold flex items-center gap-x-2">
                <FiMonitor /> Desktop
              </h4>
              <ul className="list-disc list-inside ml-2">
                <li>Google Chrome</li>
                <li>Mozilla Firefox</li>
                <li>Microsoft Edge</li>
                <li>Safari (on macOS)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold flex items-center gap-x-2">
                <FiSmartphone /> Android
              </h4>
              <ul className="list-disc list-inside ml-2">
                <li>
                  Google Chrome and Mozilla Firefox are supported. Most modern
                  mobile browsers should work.
                </li>
              </ul>
              <h4 className="font-bold flex items-center gap-x-2 mt-2">
                <FaApple /> iPhone / iPad
              </h4>
              <ul className="list-disc list-inside ml-2">
                <li>Requires iOS or iPadOS 16.4 or newer.</li>
                <li>You must use Safari.</li>
                <li>
                  You must add the website to your Home Screen to enable
                  notifications.
                </li>
              </ul>
            </div>
          </div>
        </Accordion>

        <Accordion title="When Should I Enable Notifications Again?">
          <p className="mb-2">
            You might need to enable notifications again if you:
          </p>
          <ul className="list-disc list-inside ml-2">
            <li>Clear your browser&apos;s data, cache, or cookies.</li>
            <li>Use a different web browser on the same device.</li>
            <li>Start using a new phone or computer.</li>
            <li>Use the website in Incognito or Private Browse mode.</li>
            <li>Reinstall your browser or operating system.</li>
          </ul>
        </Accordion>
      </div>
    </>
  );
}
