import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anoop Vamsi Meduri | Senior AI/ML Engineer",
  description: "Senior AI/ML Engineer with 7+ years of experience in Generative AI, RAG, agentic AI, machine learning, and data engineering.",
  keywords: ["Anoop Vamsi Meduri", "AI ML Engineer", "Generative AI", "RAG", "Data Engineer"],
  openGraph: { title: "Anoop Vamsi Meduri — Senior AI/ML Engineer", description: "Enterprise AI systems built for reliable decisions.", type: "website" },
  other: { "codex-preview": "development" },
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" data-theme="dark"><body>{children}</body></html>}
