export const runtime = "edge"; // <-- ADD THIS LINE
export const dynamic = "force-dynamic";

import dyn from "next/dynamic";

const FinishLoginClient = dynamic(
  () => import("./FinishLoginClient").then((mod) => mod.default),
  { ssr: false }
);

export default function Page() {
  return <FinishLoginClient />;
}
