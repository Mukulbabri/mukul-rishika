import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Cover } from "@/components/Cover";
import { Hero } from "../components/Hero";
import { Countdown } from "@/components/Countdown";
import { Events } from "@/components/Events";
import { Awaiting, Families } from "@/components/Awaiting";
import { Venue, Footer } from "@/components/Venue";
import { FloatingPetals } from "@/components/FloatingPetals";
import { AudioToggle } from "@/components/AudioToggle";
import { ScrollReveal } from "@/components/ScrollReveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rushikesh & Prajakta — Wedding Invitation · 19 July 2026" },
      {
        name: "description",
        content:
          "Join us in celebrating the wedding of Rushikesh & Prajakta on 19th July 2026 at Fulai Garden, Phaltan.",
      },
      { property: "og:title", content: "Rushikesh & Prajakta — Wedding Invitation" },
      {
        property: "og:description",
        content: "19th July 2026 · Fulai Garden, Phaltan, Satara",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="relative">
      <FloatingPetals />
      <AudioToggle autoplay={opened} />
      {!opened ? (
        <Cover onOpen={() => setOpened(true)} />
      ) : (
        <main className="animate-fade-in">
          <Hero />
          <Countdown />
          <Events />
          <Awaiting />
          <Families />
          <Venue />
          <Footer />
        </main>
      )}
    </div>
  );
}

