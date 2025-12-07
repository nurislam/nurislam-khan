import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex">

      {/* ========== LEFT SIDEBAR (Fixed) ========== */}
      <aside className="w-72 bg-white border-r h-screen fixed top-0 left-0 flex flex-col p-6 overflow-y-auto shadow-lg">

        {/* Profile */}
        <div className="text-center">
          <div className="w-28 h-28 mx-auto rounded-full overflow-hidden shadow">
            <Image
              src="/nur-with-laptop.png"
              width={112}
              height={112}
              alt="Profile"
              className="object-cover"
            />
          </div>

          <h1 className="text-xl font-bold mt-4">Md. Nur Islam Khan</h1>
          <p className="text-sm text-gray-600 mt-1">
            Lead Full-Stack Engineer  
            <br /> Dropndot Solutions
          </p>

          <a
            href="mailto:nurislam.cse@gmail.com"
            className="mt-3 inline-block bg-indigo-600 text-white px-3 py-1.5 rounded-md text-sm"
          >
            Contact Me
          </a>
        </div>

        {/* Navigation */}
        <nav className="mt-8 space-y-2 text-sm">
          <a href="#about" className="block hover:text-indigo-600">About Me</a>
          <a href="#skills" className="block hover:text-indigo-600">Skills</a>
          <a href="#experience" className="block hover:text-indigo-600">Experience</a>
          <a href="#projects" className="block hover:text-indigo-600">Projects</a>
          <a href="#education" className="block hover:text-indigo-600">Education</a>
        </nav>

        {/* Download CV */}
        <a
          href="/Md-Nur-Islam-Khan.pdf"
          className="mt-10 block text-center border border-gray-300 py-2 rounded-md text-sm hover:bg-gray-100"
        >
          Download CV (PDF)
        </a>

      </aside>

      {/* ========== MAIN CONTENT ========== */}
      <main className="ml-72 flex-1 p-10 overflow-y-auto">

        {/* ABOUT */}
        <section id="about">
          <h2 className="text-2xl font-bold">About Me</h2>

          <p className="mt-4 text-gray-700 leading-relaxed">
            I am a passionate and experienced Full-Stack Engineer with 13+ years in software
            development. I specialize in Node.js, PHP, Shopify Apps, scalable architecture,
            and performance-focused engineering. Currently, I serve as Lead Full-Stack
            Engineer at Dropndot Solutions.
          </p>
        </section>

        {/* SKILLS */}
        <section id="skills" className="mt-10 bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold">Skills</h3>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <strong>Core Technologies:</strong>
              <p>Node.js, PHP (Laravel, Yii, CodeIgniter, CakePHP), LoopBack, Shopify Apps, REST & GraphQL, Microservices</p>

              <strong className="block mt-3">Front-End & UI:</strong>
              <p>React.js, Next.js, JavaScript (ES6+), jQuery, Tailwind, Bootstrap</p>

              <strong className="block mt-3">Databases:</strong>
              <p>MySQL, PostgreSQL, MongoDB, Redis</p>
            </div>

            <div>
              <strong>Payment & Integration:</strong>
              <p>Stripe, PayPal, Authorize.Net, Bank APIs, Bkash</p>

              <strong className="block mt-3">DevOps & Tools:</strong>
              <p>Git, CI/CD, Docker, Composer, NPM, Elasticsearch</p>

              <strong className="block mt-3">Leadership:</strong>
              <p>Agile, Scrum, Jira, Team Management, Code Review</p>
            </div>
          </div>

          <div className="mt-3">
            <strong>Languages:</strong>
            <p className="text-sm mt-1">English • Hindi • Bengali</p>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="mt-10">
          <h3 className="text-xl font-semibold">Experience</h3>

          <div className="mt-4 space-y-5">

            {[
              {
                title: "Lead Full-Stack Engineer — Dropndot Solutions",
                date: "Sep 2022 – Present • Dhaka",
                keys: "Code Review, Technical Planning, Team Management, Shopify Apps",
                desc: "Leading a skilled development team to deliver scalable web and Shopify applications.",
              },
              {
                title: "Senior Software Engineer — Dropndot Solutions",
                date: "Sep 2015 – Sep 2022",
                keys: "LoopBack, MongoDB, Laravel, Docker, Next.js",
                desc: "Developed full-stack, real-time applications and optimized system architecture.",
              },
              {
                title: "Software Engineer — Dropndot Solutions",
                date: "Jul 2012 – Sep 2015",
                keys: "Laravel, OpenCart, Shopify",
                desc: "Created and maintained dynamic web platforms and online stores.",
              },
              {
                title: "Consultant — PEARL Consultant Ltd",
                date: "Oct 2015 – Nov 2022",
                keys: "QA Leadership, Testing",
                desc: "Provided technical consulting, QA leadership, and project documentation.",
              },
            ].map((job, i) => (
              <article key={i} className="bg-white p-6 rounded-lg shadow">
                <h4 className="font-semibold">{job.title}</h4>
                <p className="text-sm text-gray-600">{job.date}</p>
                <p className="text-sm text-gray-600 mt-1">Key: {job.keys}</p>
                <p className="mt-3 text-gray-700">{job.desc}</p>
              </article>
            ))}

          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mt-10">
          <h3 className="text-xl font-semibold">Projects & Achievements</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">

            {[
              ["Medicase - eCRF", "Node.js, Next.js, Stripe", "Clinical data platform"],
              ["Real SEO Review Removal", "Next.js, LoopBack", "Review removal tool"],
              ["Bangladesh Yellowbook", "Laravel, MySQL", "Business directory"],
              ["DeshiBiz", "CakePHP, MySQL", "Business listing"],
              ["Gold Belly", "Next.js, Stripe", "US e-commerce"],
              ["Phoenix Card", "WooCommerce", "Online store"],
              ["Droptheme", "Node.js, Stripe", "Theme marketplace"],
              ["Extra Cart Fee App", "Node.js, GraphQL", "Shopify public app"],
            ].map((p, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-semibold">{p[0]}</h4>
                <p className="text-sm text-gray-600">{p[1]}</p>
                <p className="mt-2 text-sm">{p[2]}</p>
              </div>
            ))}

          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="mt-10 bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold">Education</h3>

          <p className="text-sm mt-3">
            <strong>BIST</strong> — MSc. in Computer Science, 2009
          </p>
          <p className="text-sm mt-2">
            <strong>Institute of Science & Technology</strong> — BSc. in Computer Science, 2008
          </p>
        </section>

        {/* FOOTER */}
        <footer className="mt-10 text-center text-sm text-gray-600 pb-10">
          © 2025 Md. Nur Islam Khan — Built with Next.js & Tailwind
        </footer>
      </main>
    </div>
  );
}
