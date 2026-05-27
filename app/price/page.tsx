import React from "react";
import { Navbar, Footer, MobileDock } from "@/components/global";
import Pricing from "@/components/sections/Pricing";

export default function PricePage() {
  return (
    <div className="bg-ink font-sans selection:bg-accent/30 selection:text-ink">
      <Navbar />
      <main className="pt-24 lg:pt-28">
        <Pricing />
      </main>
      <Footer />
      <MobileDock />
    </div>
  );
}
