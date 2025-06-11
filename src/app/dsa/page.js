import DsaMainContent from "@/components/dsa/DsaMainContent";
import DsaSidebar from "@/components/dsa/DsaSidebar";

export default function DSAPage() {
  return (
    <div className="md:flex min-h-screen">
      <DsaSidebar />

      <main className="flex-1 p-6">
        <DsaMainContent />
      </main>
    </div>
  );
}
