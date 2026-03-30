// A-2 fix: Root layout must not emit <html>/<body> — locale layout handles that
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
