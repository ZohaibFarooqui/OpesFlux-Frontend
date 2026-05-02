export default function KeystaticLayout({ children }: { children: React.ReactNode }) {
  return <div style={{ height: "100dvh", display: "flex", flexDirection: "column" }}>{children}</div>;
}
