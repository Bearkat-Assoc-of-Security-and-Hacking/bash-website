export const dynamic = "force-dynamic";

const FinishLoginClient = dynamic(
  async () => {
    const mod = await import("./FinishLoginClient");
    return mod.default;
  },
  { ssr: false }
);

export default function Page() {
  return <FinishLoginClient />;
}
