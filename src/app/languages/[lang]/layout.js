import Sidebar from "@/components/pl/Sidebar";

export default function PLLayout({ children }) {
  return (
    <div className="md:flex">
      <Sidebar />
      <main className="flex-1 bg-gray-950 md:p-5 py-5 px-3 ">{children}</main>
    </div>
  );
}
