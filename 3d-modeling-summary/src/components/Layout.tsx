// src/components/Layout.tsx
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b p-4">Navigatiebalk</header>
      
      <div className="flex flex-1">
        <aside className="w-64 bg-gray-50 p-4 border-r">Sidebar (Inhoudsopgave)</aside>
        <main className="flex-1 p-8">{children}</main>
      </div>

      <footer className="bg-gray-100 p-4 text-center">Footer</footer>
    </div>
  );
}