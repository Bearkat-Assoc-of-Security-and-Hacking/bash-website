export const dynamic = "force-dynamic";

const FinishLoginClient = dynamic(() => import("./FinishLoginClient"), {
  ssr: false,
});

export default function Page() {
  return <FinishLoginClient />;
}
