import "./globals.css";

export const metadata = {
  title: "Gym Management",
  description: "Atomic Design NextJS + MockAPI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-neutral-900 flex justify-center min-h-screen">
        <main className="w-full max-w-[420px] bg-black min-h-screen shadow-2xl relative overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}