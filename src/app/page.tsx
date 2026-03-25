import { PromptRefiner } from "@/components/PromptRefiner";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-white to-gray-50">
      <div className="flex-1">
        <PromptRefiner />
      </div>
    </main>
  );
}
