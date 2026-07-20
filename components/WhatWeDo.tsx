import Image from "next/image";


const services = [
  {
    title: "Data Cleanup",
    text: "Clean, organized, accurate data that’s easy to understand and ready for smarter decisions.",
    img: "/assets/images/spreadsheet-numbers.webp",
    v_pos: "0%" 
  },
  {
    title: "Dashboards",
    text: "Clear, automated dashboards that show exactly what’s happening in your business at a glance.",
    img: "/assets/images/laptop-dashboard.webp",
    v_pos: "20%"
  },
  {
    title: "Templates",
    text: "Custom templates that make daily tasks faster, more consistent, and easier for your team.",
    img: "/assets/images/knolled-template.webp",
    v_pos: "50%"
  },
  {
    title: "Process Automation",
    text: "Automated workflows that eliminate repetitive work, reduce errors, and save hours every week.",
    img: "/assets/images/process.webp",
    v_pos: "0%"
  },
  {
    title: "AI & Bot Implementation",
    text: "Stop answering the same questions all the time. Get a chatbot for your site!",
    img: "/assets/images/robot.webp",
    v_pos: "10%"
  },
  {
    title: "Fractional Data Analyst",
    text: "Need an analyst but not the expense? Hire a Data Analyst at a fraction of the cost!",
    img: "/assets/images/data-anlyst.webp",
    v_pos: "15%"
  },
];

export default function WhatWeDo() {
  return (
    <section className="what-we-do">
      <div className="grid-container">
        <header className="section-head">
          <h2>What We Do</h2>
          <p>
            We turn messy spreadsheets and scattered data into organized,
            automated systems that save time and improve workflow. From templates
            to dashboards, we build tools that help small businesses work smarter
            and make better decisions.
          </p>
        </header>

        <div className="grid">
          {services.map((s) => (
            <div key={s.title} className="card">
              <div className="image">
                <Image src={s.img} alt={s.title} width={600} height={400} style={{ objectPosition: `50% ${s.v_pos}` }} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}