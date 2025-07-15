import Link from "next/link";
import flagsmith from "@/utils/flagsmith";
import "@testing-library/jest-dom/jest-globals";

export const revalidate = 0;

export default async function Home() {
  const flags = await flagsmith.getEnvironmentFlags();
  return (
    <main className="main">
      <div>
        <h2>Hello World</h2>
      </div>
      <Link href="/about">About</Link>
      <br />
      {flags.isFeatureEnabled("search") && <input placeholder="Search" />}
    </main>
  );
}
