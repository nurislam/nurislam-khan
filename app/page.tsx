import Image from 'next/image';

const CAREER_START = new Date(2012, 0, 1); // Jan 2012 — AskBangladesh.com Limited

function yearsOfExperience(from: Date): number {
  const now = new Date();
  let years = now.getFullYear() - from.getFullYear();
  const monthDiff = now.getMonth() - from.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < from.getDate())) {
    years--;
  }
  return years;
}

function WebsiteLink({ domain, label }: { domain: string; label?: string }) {
  const href = domain.startsWith('http') ? domain : `https://${domain}`;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="underline hover:text-indigo-700">
      {label ?? domain}
    </a>
  );
}

export default function Home() {
  const experienceYears = yearsOfExperience(CAREER_START);
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow fixed top-0 left-0 w-full z-50">
        <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Md. Nur Islam Khan</h1>
            <p className="text-sm text-gray-600">Lead Full-Stack Engineer — <WebsiteLink domain="dropndot.com" label="Dropndot Solutions" /></p>
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
              I’m a dedicated Full-Stack Developer with over {experienceYears} years of experience in developing and designing
              dynamic web applications using Node.js, PHP frameworks, and Shopify Apps. Currently serving as Lead
              Full-Stack Developer at <WebsiteLink domain="dropndot.com" label="Dropndot Solutions" />, I focus on scalable architectures, performance optimization,
              and team leadership.
            </p>

            <div className="mt-4 flex gap-3">
              <a href="mailto:nurislam.cse@gmail.com" className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md">Email</a>
              <a href="/Md-Nur-Islam-Khan.pdf" className="inline-block border border-gray-300 px-4 py-2 rounded-md">Download CV (PDF)</a>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mt-10 bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold">Skills</h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <strong>Core Technologies:</strong>
              <div>PHP (Laravel, CodeIgniter, CakePHP, Yii), Node.js, LoopBack, Expert in Data Parsing in n8n, Shopify App/Theme Development, REST & GraphQL APIs, Microservices Architecture</div>

              <strong className="mt-3 block">Front-End & UI:</strong>
              <div>React.js, TypeScript, Next.js, React Router, JavaScript (ES6+), jQuery, HTML5, CSS3, Tailwind CSS, Bootstrap, Responsive Design, UI/UX Best Practices</div>

              <strong className="mt-3 block">Databases & Data Management:</strong>
              <div>MySQL, PostgreSQL, MongoDB, Redis, Database Design & Optimization, Data Migration</div>

              <strong className="mt-3 block">Payment & Integration:</strong>
              <div>Stripe, PayPal, Authorize.Net, Bank APIs, Bkash API, Mobile Wallet Integrations</div>
            </div>

            <div>
              <strong>DevOps & Tools:</strong>
              <div>Git, GitHub/GitLab, CI/CD, Docker, Composer, NPM, Elasticsearch, Unit & Integration Testing, AWS</div>

              <strong className="mt-3 block">Project Management & Agile:</strong>
              <div>Agile methodologies, Scrum, Kanban, Scrum Master, Jira, Trello, Reporting & Documentation</div>

              <strong className="mt-3 block">Leadership & Collaboration:</strong>
              <div>Team Management, Technical Planning, Code Review, Mentoring, Cross-Functional Coordination, Stakeholder Communication</div>

              <strong className="mt-3 block">Additional Strengths:</strong>
              <div>Problem Solving, Critical Thinking, Performance Optimization, Security Best Practices</div>

              <strong className="mt-3 block">Specialized skill:</strong>
              <div>Quick learner, Fast coder, and I can do better than explain.
              </div>
            </div>
          </div>

          <div className="mt-4">
            <strong>Languages:</strong>
            <div className="text-sm text-gray-700 mt-1">English (Full Professional) • Hindi (Full Professional) • Bengali (Native or Bilingual)</div>
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

        {/* Experience */}
        <section className="mt-8">
          <h3 className="text-xl font-semibold">Experience</h3>

          <div className="mt-4 space-y-6">
            <article className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold">Lead Full-Stack Engineer — <WebsiteLink domain="dropndot.com" label="Dropndot Solutions" /></h4>
                  <div className="text-sm text-gray-600">Sep 2022 – Present • Eskaton, Dhaka</div>
                </div>
                <div className="text-sm text-gray-600">Key: Code Review, Technical Planning, Team Management, Docker, CI/CD, Node.js, Shopify Apps</div>
              </div>
              <p className="mt-3 text-gray-700">Leading a skilled development team to deliver scalable Node.js and PHP-based web and Shopify applications. Focused on performance, clean architecture, and seamless user experience.</p>
            </article>

            <article className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold">Senior Software Engineer — <WebsiteLink domain="dropndot.com" label="Dropndot Solutions" /></h4>
                  <div className="text-sm text-gray-600">Sep 2015 – Sep 2022</div>
                </div>
                <div className="text-sm text-gray-600">Key: LoopBack, MongoDB, PHP, Next.js, Laravel, Docker, Elasticsearch</div>
              </div>
              <p className="mt-3 text-gray-700">Developed full-stack, real-time applications across multiple frameworks and platforms. Contributed to system design, eCommerce integrations, and high-traffic CMS solutions.</p>
            </article>

            <article className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold">Software Engineer — <WebsiteLink domain="dropndot.com" label="Dropndot Solutions" /></h4>
                  <div className="text-sm text-gray-600">Jul 2012 – Sep 2015</div>
                </div>
                <div className="text-sm text-gray-600">Key: Laravel, OpenCart, Shopify, WooCommerce</div>
              </div>
              <p className="mt-3 text-gray-700">Created and maintained dynamic web platforms and online stores, integrating secure payment solutions and improving UX.</p>
            </article>

            <article className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold">Software Developer Consultant — <WebsiteLink domain="pearlbd.com" label="PEARL Consultant Ltd" /> (Part-time)</h4>
                  <div className="text-sm text-gray-600">Oct 2015 – Nov 2022 • Kathal Bagan, Dhaka</div>
                </div>
                <div className="text-sm text-gray-600">Key: QA Leadership, Testing, Reporting</div>
              </div>
              <p className="mt-3 text-gray-700">Provided technical consulting and QA leadership. Oversaw testing, issue resolution, and project presentations.</p>
            </article>

            <article className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold">Web Developer — <WebsiteLink domain="askBangladesh.com" label="AskBangladesh.com Limited" /></h4>
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
              <h4 className="font-semibold">Tawseil (Restaurants, Stores, Food and Delivery Marketplace) — POS, Accounts, Full E-commerce</h4>
              <div className="text-sm text-gray-600">
                <WebsiteLink domain="www.tawseil.co" /> • 2 years 
              </div>
              <div className="mt-2 text-sm text-gray-700">
                <div><strong>Tech:</strong> Laravel API, Node.js, MySQL, TypeScript, MUI, Firebase</div>
                <div className="mt-1"><strong>Role (Team Lead):</strong> Designed backend architecture, developed Laravel APIs, and managed app architecture.</div>
                <div className="mt-1"><strong>Achievements:</strong> Payment integration, mobile SMS integration.</div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-semibold">Carbazar — Automotive Buy & Sell Marketplace</h4>
              <div className="text-sm text-gray-600">
                <WebsiteLink domain="www.carbazar.com.bd" /> • 2.5 months
              </div>
              <div className="mt-2 text-sm text-gray-700">
                <div><strong>Tech:</strong> Laravel API, Node.js, MySQL, TypeScript, MUI, Firebase</div>
                <div className="mt-1"><strong>Role (Team Lead):</strong> Designed backend architecture, developed Laravel APIs, and managed app architecture.</div>
                <div className="mt-1"><strong>Achievements:</strong> Payment integration, mobile SMS integration.</div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-semibold">Asthamart — E-commerce Marketplace</h4>
              <div className="text-sm text-gray-600">
                <WebsiteLink domain="www.asthamart.com.bd" /> • 3 months
              </div>
              <div className="mt-2 text-sm text-gray-700">
                <div><strong>Tech:</strong> Laravel API, Node.js, MySQL, TypeScript, MUI, Firebase</div>
                <div className="mt-1"><strong>Role (Team Lead):</strong> Designed backend architecture, developed Laravel APIs, and managed app architecture.</div>
                <div className="mt-1"><strong>Achievements:</strong> Payment integration, mobile SMS integration.</div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-semibold">Medicase - eCRF</h4>
              <div className="text-sm text-gray-600"><WebsiteLink domain="dev.medicase.io" /></div>
              <div className="mt-2 text-sm">
                Tech: Node.js, Next.js, LoopBack 4, Material Design, Stripe, PayPal. Clinical data management
                (eCRF) platform for Sweden-based client.
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-semibold">Bangladesh Yellowbook — Business directory in Bangladesh</h4>
              <div className="text-sm text-gray-600">
                <WebsiteLink domain="www.bangladeshyellowbook.com" /> • 16 months (completed before deadline)
              </div>
              <div className="mt-2 text-sm text-gray-700">
                <div><strong>Tech:</strong> Laravel, Elasticsearch, AJAX, reCAPTCHA v3, MySQL/MariaDB, Stripe</div>
                <div className="mt-1"><strong>Role (Sr. Software Engineer):</strong> Developed backend services, search system, and authentication with group-wise role-based access.</div>
                <div className="mt-1"><strong>Achievements:</strong> Implemented Elasticsearch for fast user search and optimized backend APIs, reducing response time by 60%.</div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-semibold">Students Management — All-in-one solution for schools, colleges, institutes, and universities</h4>
              <div className="text-sm text-gray-600">
                <WebsiteLink domain="www.afmccdt.org" /> • 18 months (completed before deadline)
              </div>
              <div className="mt-2 text-sm text-gray-700">
                <div><strong>Tech:</strong> CodeIgniter, MySQL, jQuery, Bootstrap, Bkash</div>
                <div className="mt-1"><strong>Role (Team Lead):</strong> Acted as lead database architect, designed backend and API structure, and oversaw full deployment.</div>
                <div className="mt-1"><strong>Achievements:</strong> Built a high-performance student management app for attendance, student fees, and student result processing.</div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-semibold">DeshiBiz - Directory</h4>
              <div className="text-sm text-gray-600"><WebsiteLink domain="deshibiz.com" /></div>
              <div className="mt-2 text-sm">
                Tech: CakePHP, MySQL, Bootstrap — Business listing and profiles.
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-semibold">Gold Belly - E-commerce</h4>
              <div className="text-sm text-gray-600"><WebsiteLink domain="goldbelly.com" /></div>
              <div className="mt-2 text-sm">
                Tech: Next.js, MUI, MySQL, Stripe — Gourmet food & delivery platform.
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-semibold">Phoenix Card - E-commerce</h4>
              <div className="text-sm text-gray-600"><WebsiteLink domain="phoenitcg.com" /></div>
              <div className="mt-2 text-sm">
                Tech: WordPress, WooCommerce, Stripe — Online store build.
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-semibold">Droptheme - Marketplace</h4>
              <div className="text-sm text-gray-600"><WebsiteLink domain="droptheme.com" /></div>
              <div className="mt-2 text-sm">
                Tech: Node.js, Next.js, LoopBack 4 — Lead architect; built high-performance digital marketplace
                with Stripe & PayPal.
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-semibold">Extra Cart Fee — Shopify Public App</h4>
              <div className="text-sm text-gray-600">
                Polaris, Node.js, GraphQL, MySQL — Public app for surcharge/tariff management.
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-semibold">Completed.com — Social Platform</h4>
              <div className="text-sm text-gray-600"><WebsiteLink domain="completed.com" /></div>
              <div className="mt-2 text-sm">
                Tech: PHP (Yii3), Elasticsearch — Implemented fast search and optimized APIs, reducing response
                time by 60%.
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-semibold">Jungle Jumps — E-commerce</h4>
              <div className="text-sm text-gray-600">
                <WebsiteLink domain="www.junglejumps.com" /> • 13 months (completed before deadline)
              </div>
              <div className="mt-2 text-sm text-gray-700">
                <div><strong>Tech:</strong> OScommerce (PHP), MySQL, Stripe, PayPal, JavaScript, Bootstrap</div>
                <div className="mt-1"><strong>Role (Sr. Software Engineer):</strong> Developed and customized store modules, integrated payment systems, and ensured responsive UI.</div>
                <div className="mt-1"><strong>Achievements:</strong> Built a multilingual e-commerce store supporting multiple currencies and streamlined checkout for better conversions.</div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-semibold">Real SEO - Review removal</h4>
              <div className="text-sm text-gray-600">USA-based web application</div>
              <div className="mt-2 text-sm">
                Tech: Node.js, Next.js, LoopBack 4. Tool to manage and remove bad reviews from sites.
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-10 text-center text-sm text-gray-600">© 2025 Md. Nur Islam Khan. Built with ❤️ — Lead Full-Stack Engineer at <WebsiteLink domain="dropndot.com" label="Dropndot Solutions" /></footer>
      </main>
    </div>
  );
}
