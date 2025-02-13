import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { authOptions } from "@/utils/authOptions";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";

export const metadata: Metadata = {
  title: "Shakiqur Rahman",
  description: "Developed by Shakiqur Rahman",
};

export default async function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <>
      <Header session={session} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
