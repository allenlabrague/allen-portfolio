"use client";

import { ThemeProvider } from "next-themes";

import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar } from "./components";
import "./App.scss";

export default function Home() {
  return (
    <ThemeProvider attribute="class">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </ThemeProvider>
  );
}
