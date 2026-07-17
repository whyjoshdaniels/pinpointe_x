
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import WhatWeDo from "@/components/WhatWeDo";
import Head from "./head";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Head />
  
      <body>
        <NavBar />
        <Hero />
        <WhatWeDo />
        {/* CONTACT SECTION */}
        <ContactForm />
      </body>
    </main>
  );
}

/* <div> Icons made by <a href="https://www.flaticon.com/authors/vectors-market" title="Vectors Market"> Vectors Market </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div> */