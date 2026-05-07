import Sidebar from "@/components/Sidebar";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full flex overflow-hidden">
      <Sidebar />
      <main className="flex-1 relative overflow-auto bg-background">
        {children}
      </main>
    </div>
  );
}
