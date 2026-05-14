import React from "react";
import dynamic from "next/dynamic";
import { Navbar, Footer, MobileDock } from "@/components/global";

const Pricing = dynamic(() => import("@/components/sections/Pricing"), { ssr: true });

export default function PricePage() {
  return (
    <div className="bg-ink font-sans selection:bg-accent/30 selection:text-ink">
      <Navbar />
      <main>
        <Pricing />
      </main>
      <Footer />
      <MobileDock />
    </div>
  );
}
