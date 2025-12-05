import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow fixed top-0 left-0 w-full z-50">
        <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Md. Nur Islam Khan</h1>
            <p className="text-sm text-gray-600">Lead Full-Stack Engineer — Dropndot Solutions</p>
          </div>
          <div className="text-right text-sm text-gray-600">
            <div>Garden City, Bosila, Mohammadpur, Dhaka-1207</div>
            <div className="mt-1">+8801710318999 • nurislam.cse@gmail.com</div>
            <div className="mt-1">
              <a href="https://linkedin.com/in/nurislam" className="underline">linkedin.com/in/nurislam</a>
              <span className="mx-2">•</span>
              <a href="https://dropndot.com/our-teams" className="underline">dropndot.com/our-teams</a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 pt-32">
        {/* Hero */}
        <section className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg flex-shrink-0">
            {/* Place your photo at /public/a_fresh_clothes.jpeg or update the path below */}
            <Image src="/a_fresh_clothes.jpeg" alt="Profile" width={160} height={160} className="object-cover" />
          </div>

          <div>
            <h2 className="text-2xl font-semibold">About</h2>
            <p className="mt-3 text-gray-700">
              I’m a dedicated Full-Stack Developer with over 13 years of experience in developing and designing
              dynamic web applications using Node.js, PHP frameworks, and Shopify Apps. Currently serving as Lead
              Full-Stack Developer at Dropndot Solutions, I focus on scalable architectures, performance optimization,
              and team leadership.
            </p>

            <div className="mt-4 flex gap-3">
              <a href="mailto:nurislam.cse@gmail.com" className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md">Email</a>
              <a href="/" className="inline-block border border-gray-300 px-4 py-2 rounded-md">Download CV (PDF)</a>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mt-10 bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold">Skills</h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <strong>Core Technologies:</strong>
              <div>Node.js, PHP (Laravel, Yii, CodeIgniter, CakePHP), LoopBack, Shopify App/Theme Development, REST & GraphQL, Microservices</div>

              <strong className="mt-3 block">Front-End & UI:</strong>
              <div>React.js, Next.js, React Router, JavaScript (ES6+), jQuery, HTML5, CSS3, Tailwind CSS, Bootstrap, Responsive Design</div>

              <strong className="mt-3 block">Databases & Data Management:</strong>
              <div>MySQL, PostgreSQL, MongoDB, Redis, Database Design & Optimization, Data Migration</div>
            </div>

            <div>
              <strong>Payment & Integration:</strong>
              <div>Stripe, PayPal, Authorize.Net, Bank APIs, Bkash API, Mobile Wallet Integrations</div>

              <strong className="mt-3 block">DevOps & Tools:</strong>
              <div>Git, GitHub/GitLab, CI/CD, Docker, Composer, NPM, Elasticsearch, Unit & Integration Testing</div>

              <strong className="mt-3 block">Project Management & Leadership:</strong>
              <div>Agile, Scrum, Kanban, Jira, Trello, Team Management, Technical Planning, Code Review, Mentoring</div>

              <strong className="mt-3 block">Additional Strengths:</strong>
              <div>Problem Solving, Performance Optimization, Security Best Practices, Cloud Deployment (AWS, Heroku, DigitalOcean)</div>
            </div>
          </div>

          <div className="mt-4">
            <strong>Languages:</strong>
            <div className="text-sm text-gray-700 mt-1">English (Full Professional) • Hindi (Full Professional) • Bengali (Native)</div>
          </div>
        </section>

        {/* Experience */}
        <section className="mt-8">
          <h3 className="text-xl font-semibold">Experience</h3>

          <div className="mt-4 space-y-6">
            <article className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold">Lead Full-Stack Engineer — Dropndot Solutions</h4>
                  <div className="text-sm text-gray-600">Sep 2022 – Present • Eskaton, Dhaka</div>
                </div>
                <div className="text-sm text-gray-600">Key: Code Review, Technical Planning, Team Management, Docker, CI/CD, Node.js, Shopify Apps</div>
              </div>
              <p className="mt-3 text-gray-700">Leading a skilled development team to deliver scalable Node.js and PHP-based web and Shopify applications. Focused on performance, clean architecture, and seamless user experience.</p>
            </article>

            <article className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold">Senior Software Engineer — Dropndot Solutions</h4>
                  <div className="text-sm text-gray-600">Sep 2015 – Sep 2022</div>
                </div>
                <div className="text-sm text-gray-600">Key: LoopBack, MongoDB, PHP, Next.js, Laravel, Docker, Elasticsearch</div>
              </div>
              <p className="mt-3 text-gray-700">Developed full-stack, real-time applications across multiple frameworks and platforms. Contributed to system design, eCommerce integrations, and high-traffic CMS solutions.</p>
            </article>

            <article className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold">Software Engineer — Dropndot Solutions</h4>
                  <div className="text-sm text-gray-600">Jul 2012 – Sep 2015</div>
                </div>
                <div className="text-sm text-gray-600">Key: Laravel, OpenCart, Shopify, WooCommerce</div>
              </div>
              <p className="mt-3 text-gray-700">Created and maintained dynamic web platforms and online stores, integrating secure payment solutions and improving UX.</p>
            </article>

            <article className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold">Software Developer Consultant — PEARL Consultant Ltd (Part-time)</h4>
                  <div className="text-sm text-gray-600">Oct 2015 – Nov 2022 • Kathal Bagan, Dhaka</div>
                </div>
                <div className="text-sm text-gray-600">Key: QA Leadership, Testing, Reporting</div>
              </div>
              <p className="mt-3 text-gray-700">Provided technical consulting and QA leadership. Oversaw testing, issue resolution, and project presentations.</p>
            </article>

            <article className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold">Web Developer — AskBangladesh.com Limited</h4>
                  <div className="text-sm text-gray-600">Jan 2012 – Jul 2012 • Kawran Bazar, Dhaka</div>
                </div>
                <div className="text-sm text-gray-600">Key: PHP, MySQL, PayPal, Authorize.Net</div>
              </div>
              <p className="mt-3 text-gray-700">Developed and maintained PHP-based web applications, API integrations, and shopping cart systems.</p>
            </article>
          </div>
        </section>

        {/* Projects */}
        <section className="mt-8">
          <h3 className="text-xl font-semibold">Projects & Achievements</h3>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-semibold">Medicase - eCRF</h4>
              <div className="text-sm text-gray-600">dev.medicase.io</div>
              <div className="mt-2 text-sm">Tech: Node.js, Next.js, LoopBack 4, Material Design, Stripe, PayPal. Clinical data management (eCRF) platform for Sweden-based client.</div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-semibold">Real SEO - Review removal</h4>
              <div className="text-sm text-gray-600">USA-based web application</div>
              <div className="mt-2 text-sm">Tech: Node.js, Next.js, LoopBack 4. Tool to manage and remove bad reviews from sites.</div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-semibold">Bangladesh Yellowbook</h4>
              <div className="text-sm text-gray-600">bangladeshyellowbook.com</div>
              <div className="mt-2 text-sm">Tech: Laravel, MySQL, Bootstrap — Business directory platform.</div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-semibold">DeshiBiz - Directory</h4>
              <div className="text-sm text-gray-600">deshibiz.com</div>
              <div className="mt-2 text-sm">Tech: CakePHP, MySQL, Bootstrap — Business listing and profiles.</div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-semibold">Gold Belly - E-commerce</h4>
              <div className="text-sm text-gray-600">goldbelly.com</div>
              <div className="mt-2 text-sm">Tech: Next.js, MUI, MySQL, Stripe — Gourmet food & delivery platform.</div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-semibold">Phoenix Card - E-commerce</h4>
              <div className="text-sm text-gray-600">phoenitcg.com</div>
              <div className="mt-2 text-sm">Tech: WordPress, WooCommerce, Stripe — Online store build.</div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-semibold">Droptheme - Marketplace</h4>
              <div className="text-sm text-gray-600">droptheme.com</div>
              <div className="mt-2 text-sm">Tech: Node.js, Next.js, LoopBack 4 — Lead architect; built high-performance digital marketplace with Stripe & PayPal.</div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-semibold">Extra Cart Fee — Shopify Public App</h4>
              <div className="text-sm text-gray-600">Polaris, Node.js, GraphQL, MySQL — Public app for surcharge/tariff management.</div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-semibold">Completed.com — Social Platform</h4>
              <div className="text-sm text-gray-600">completed.com</div>
              <div className="mt-2 text-sm">Tech: PHP (Yii3), Elasticsearch — Implemented fast search and optimized APIs, reducing response time by 60%.</div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-semibold">Jungle Jumps — E-commerce</h4>
              <div className="text-sm text-gray-600">junglejumps.com</div>
              <div className="mt-2 text-sm">Tech: OScommerce, Stripe, PayPal — Multilingual store with multi-currency support.</div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mt-8 bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold">Education</h3>
          <div className="mt-3 text-sm text-gray-700">
            <div><strong>Bangladesh Institute of Science & Technology (BIST)</strong> — MSc. in Computer Science, 2009</div>
            <div className="mt-2"><strong>Institute of Science & Technology (Under National University)</strong> — BSc. in Computer Science, 2008</div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-10 text-center text-sm text-gray-600">© 2025 Md. Nur Islam Khan. Built with ❤️ — Lead Full-Stack Engineer at Dropndot Solutions</footer>
      </main>
    </div>
  );
}
