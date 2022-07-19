import Layout from "../../components/layout"
import Opportunity from "../../components/opportunity"
import Aside from "../../components/aside"
import { GetServerSideProps } from "next"
import { Resume } from "../../types/resume"
import Head from "next/head"

type EmailArgs = {
  email?: string
}

type SocialArgs = {
  username?: string
}

function EmailSection(props: EmailArgs) {
  return props.email ? (
    <li className="flex items-center">
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 mr-2 fill-current text-indigo-700 dark:text-indigo-300"
      >
        <title>Mail icon</title>
        <path d="M15.61 12c0 1.99-1.62 3.61-3.61 3.61-1.99 0-3.61-1.62-3.61-3.61 0-1.99 1.62-3.61 3.61-3.61 1.99 0 3.61 1.62 3.61 3.61M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12c2.424 0 4.761-.722 6.76-2.087l.034-.024-1.617-1.879-.027.017A9.494 9.494 0 0 1 12 21.54c-5.26 0-9.54-4.28-9.54-9.54 0-5.26 4.28-9.54 9.54-9.54 5.26 0 9.54 4.28 9.54 9.54a9.63 9.63 0 0 1-.225 2.05c-.301 1.239-1.169 1.618-1.82 1.568-.654-.053-1.42-.52-1.426-1.661V12A6.076 6.076 0 0 0 12 5.93 6.076 6.076 0 0 0 5.93 12 6.076 6.076 0 0 0 12 18.07a6.02 6.02 0 0 0 4.3-1.792 3.9 3.9 0 0 0 3.32 1.805c.874 0 1.74-.292 2.437-.821.719-.547 1.256-1.336 1.553-2.285.047-.154.135-.504.135-.507l.002-.013c.175-.76.253-1.52.253-2.457 0-6.617-5.383-12-12-12" />
      </svg>
      <a href={`mailto:${props.email}`}>{props.email}</a>
    </li>
  ) : null
}

function GitHubSection(props: SocialArgs) {
  return props.username ? (
    <li className="my-2 flex items-center">
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 mr-2 fill-current text-indigo-700 dark:text-indigo-300"
      >
        <title>GitHub icon</title>
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
      <a href={`https://www.${props.username}`}>{props.username}</a>
    </li>
  ) : null
}

function LinkedInSection(props: SocialArgs) {
  return props.username ? (
    <li className="flex items-center">
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 mr-2 fill-current text-indigo-700 dark:text-indigo-300"
      >
        <title>LinkedIn icon</title>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
      <a href={`https://www.${props.username}`}>{props.username}</a>
    </li>
  ) : null
}

export default function EmailPage(resume: Resume) {
  return (
    <Layout>
      <Head>
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content={resume.title} />
        <meta property="og:image" content="/preview.jpg" />
        <meta property="og:image:width" content="1664" />
        <meta property="og:image:height" content="962" />
      </Head>

      <div className="grid grid-cols-7 gap-8 mb-4 print:mx-8 print:mt-8">
        {/* left */}
        <div className="col-span-7 print:col-span-5 md:col-span-5">
          <h1 className="text-4xl">{resume.label}</h1>
          <h2 className="text-2xl font-mono">&gt {resume.role}</h2>
        </div>

        {/* right */}
        <div className="col-span-7 print:col-span-2 md:col-span-2">
          <ul className="text-sm">
            <EmailSection email={resume.email} />
            <GitHubSection username={resume.github} />
            <LinkedInSection username={resume.linkedin} />
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-8 print:mx-8 print:mb-8">
        {/* left */}
        <div className="col-span-7 print:col-span-5 md:col-span-5">
          {resume.education && (
            <Opportunity title="Education" collection={resume.education} />
          )}
          {resume.experience && (
            <Opportunity title="Experience" collection={resume.experience} />
          )}
          {resume.projects && (
            <span className="print:hidden">
              <Opportunity title="Projects" collection={resume.projects} />
            </span>
          )}
        </div>

        {/* right */}
        <div className="col-span-7 print:col-span-2 md:col-span-2 print:text-xs">
          {resume.skills && <Aside title="Skills" collection={resume.skills} />}
          {resume.tools && <Aside title="Tools" collection={resume.tools} />}
          {resume.references && (
            <Aside title="References" collection={resume.references} />
          )}
        </div>
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      owner: "goforjohnny@icloud.com",
      ...JOHNNYS_RESUME,
    },
  }
}

const JOHNNYS_RESUME: Resume = {
  title: "Johnny Domino's Resume",
  label: "Johnny Domino",
  role: "Software Engineer",
  location: "Pittsburgh, PA",
  email: "goforjohnny@icloud.com",
  linkedin: "linkedin.com/in/jmonster",
  github: "github.com/jmonster",
  education: [
    {
      label: "Carnegie Mellon University",
      location: "Pittsburgh, PA",
      start: "August 2006",
      end: "December 2009",
      notes: [
        "Bachelors of Science in **Computer Science**\n\nwith a Minor in _Multimedia Production_\n",
      ],
    },
    {
      label: "Apple Cocoa Camp",
      location: "Cupertino, CA",
      start: "Summer 2009",
      notes: [
        "Apple Cocoa Camp was an experiment within [Apple University](https://en.wikipedia.org/wiki/Apple_University) to train students in various aspects of Apple's technology and culture",
      ],
    },
  ],
  experience: [
    {
      label: "Volition",
      location: "Remote (San Francisco)",
      role: "Software Architect",
      start: "August 2021",
      end: "Present",
      notes: [
        "E-Commerce focused development",
        "Written in TypeScript",
        "Tools like [PostgreSQL](https://www.postgresql.org), [ElasticSearch](https://www.elastic.co/what-is/elasticsearch), [Graphile Worker](https://github.com/graphile/worker) + [Migrate](https://github.com/graphile/migrate), [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), [Puppeteer](https://github.com/puppeteer/puppeteer)",
        "Build data acquisition tooling for gig-workers that accelerate our efforts",
        "Document and communicate processes rigorously",
      ],
    },
    {
      label: "Heroku",
      location: "Remote (San Francisco)",
      role: "Lead Software Engineer",
      start: "November 2014",
      end: "December 2020",
      notes: [
        "Created Enterprise Web Applications in Full-Stack JavaScript",
        "Built [dashboard.heroku.com](https://dashboard.heroku.com), [data.heroku.com](https://data.heroku.com), [status.heroku.com](https://status.heroku.com) and marketing pages",
        "Employed Ember.JS, Node.JS, [SocketIO](https://socket.io) and [SSE](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events)",
        "Prioritized accessibility with heavy usage of [ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) attributes",
        "Represented Heroku at technical conferences including [GitHub Universe](https://githubuniverse.com) and [EmberConf](https://emberconf.com)",
        "Engagement with stakeholders from design, product and marketing",
        "Collaborative workplace through the use of [Request for Comments (RFCs)](https://en.wikipedia.org/wiki/Request_for_Comments) and [Architectural Decision Records (ADRs)](https://adr.github.io)",
        "Performed code reviews and acted as a mentor for colleagues",
        "Guided summer intern projects",
        "Authored and reviewed entries on [the Heroku Engineering Blog](https://blog.heroku.com/engineering)",
      ],
    },
    {
      label: "Branding Brand",
      location: "Pittsburgh, PA",
      role: "Director of Architecture",
      start: "April 2013",
      end: "October 2014",
      notes: [
        "Led the architecture team of 10 engineers",
        "Created ambitious Web Applications with Ember.JS",
        "Authored backend API services in JavaScript, Ruby, and PHP",
        "Accelerated deliverability with reusable native libraries for our iOS and Android apps",
        "Trained engineering team leads to become experts of our architecture and tooling",
        "Collaborated with sales on feasibility and ROI",
        "Integrated a CMS component into our product to give our client's on-demand control",
        "Advised the DevOps team",
        "I contributed directly to most of the company's IP",
        "Worked with eBay, Sephora, Victoria's Secret, Crate & Barrel, et al on site and remotely",
      ],
    },
    {
      label: "Branding Brand",
      location: "Pittsburgh, PA",
      role: "Engineering Manager (API)",
      start: "November 2012",
      end: "April 2013",
      notes: [
        "Trained and managed a team of 10 whom became leaders at the company",
      ],
    },
    {
      label: "Branding Brand",
      location: "Pittsburgh, PA",
      role: "Principal Software Engineer",
      start: "December 2011",
      end: "November 2012",
      notes: [
        "Reduced infrastructure costs while improving performance by orders of magnitude each",
        "Unified the company's technology stack behind Javascript",
        "Improved employee retention and satisfaction ",
      ],
    },
    {
      label: "Branding Brand",
      location: "Pittsburgh, PA",
      role: "Frontend Software Engineer",
      start: "October 2011",
      end: "December 2011",
      notes: [
        "Developed mobile web apps for brands such as eBay, Sephora, Costco, Crate and Barrel, Victoria's Secret, Macy's, Dick's Sporting Goods, Dollar General, Toys R Us, and more",
        "Developed native iOS apps for Sephora and American Eagle",
        "Redesigned and implemented v2 of the company's core product",
        "Reported directly to the CEO for the remainder of my employment",
      ],
    },
    {
      label: "UPMC's Technology Development Center",
      location: "Pittsburgh, PA",
      role: "Software Engineer",
      start: "July 2010",
      end: "September 2011",
      notes: [
        "Led R&D of all projects",
        "Technologies spanning backend services, frontend web, and mobile iOS clients",
        "Utilized Ruby on Rails and Apple's iPhone SDK",
        "Coordinated regularly with engineering, design, product, and medical professionals",
        "Reported directly to senior staff",
      ],
    },
    {
      label:
        "Carnegie Mellon University's Software Engineering Institute The CERT Division",
      location: "Pittsburgh, PA",
      start: "April 2009",
      end: "July 2010",
      notes: [
        "Developed e-learning solutions",
        "Contributed to an online social network with an emphasis on participant engagement",
        "Ported the [Remote Desktop Protocol (RDP)](https://docs.microsoft.com/en-us/troubleshoot/windows-server/remote/understanding-remote-desktop-protocol) to ActionScript",
      ],
    },
    {
      label: "FAA Technical Institute",
      location: "Egg Harbor, NJ",
      role: "CO-OP",
      start: "Summer 2008",
      notes: ["Contributed to the development of their Java flight simulator"],
    },
    {
      label: "Victoria's Secret",
      location: "Altoona, PA",
      role: "Sales Associate",
      start: "Summer 2006",
      notes: [
        "Supported a customer-centric culture, where the full energy and activity of the store team are focused on delivering highly satisfying customer experiences",
      ],
    },
  ],
  skills: [
    {
      notes: [
        "Software Architecture\n\nResearch & Development (R&D)\n\nPrototyping\n",
        "Design\n\nUser Experience\n\nHuman Computer Interaction\n",
        "E-commerce\n\nMarketing\n\nAnalytics\n\nGrowth\n",
        "Collaboration, Teamwork\n\nCode Reviews\n\nFeedback\n",
        "Leadership\n\nAdvocate, Ally\n",
        "Customer success",
      ],
    },
  ],
  tools: [
    {
      notes: [
        "[HTML](https://developer.mozilla.org/en-US/docs/Web/HTML),\n[CSS](https://developer.mozilla.org/en-US/docs/Web/HTML/Applying_color),\n[SVG](https://developer.mozilla.org/en-US/docs/Web/SVG),\n[TypeScript](https://www.typescriptlang.org),\n[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript),\n[Ember.js](https://emberjs.com),\n[SproutCore](https://sproutcore.com),\n[D3.js](https://d3js.org),\n[React](https://reactjs.org),\n[Next.js](https://nextjs.org),\n[Vue](https://vuejs.org),\n[Lit](https://lit.dev),\n[TailwindCSS](http://tailwindcss.com),\n[tachyons](https://tachyons.io),\n[i18n](https://en.wikipedia.org/wiki/Internationalization_and_localization),\n[jQuery](https://github.com/jquery/jquery),\n[cheerio](https://www.npmjs.com/package/cheerio)\n",
        "[Node.js](https://nodejs.org/en/),\n[Express](https://expressjs.com),\n[Koa](https://koajs.com),\n[Hapi](https://hapi.dev),\n[Ruby on Rails](https://rubyonrails.org),\n[Sinatra](http://sinatrarb.com),\n[Elixir](https://elixir-lang.org),\n[Phoenix](https://www.phoenixframework.org),\n[Java](https://en.wikipedia.org/wiki/Java_(programming_language))\n",
        "[Mocha](https://mochajs.org), [QUnit](https://qunitjs.com), [Jasmine](https://jasmine.github.io), [Chai](https://www.chaijs.com), [Jest](https://jestjs.io), [Lab](https://hapi.dev/module/lab/), [Puppeteer](https://developers.google.com/web/tools/puppeteer)\n",
        "[Adobe](http://adobe.com),\n[Affinity](http://affinity.serif.com),\n[Figma](https://www.figma.com/),\n[Sketch](https://www.sketch.com),\n[InVision](https://www.invisionapp.com)\n",
        "[PostgreSQL](https://www.postgresql.org),\n[Redis](http://redis.io),\n[Firebase](https://firebase.google.com),\n[ElasticSearch](https://www.elastic.co),\n[Splunk](https://www.splunk.com),\n[meilisearch](https://www.meilisearch.com),\n[typesense](https://typesense.org),\n[MongoDB](https://www.mongodb.com),\n[Graphile Migrate](https://github.com/graphile/migrate),\n[Graphile Worker](https://github.com/graphile/worker),\n[fastq](https://www.npmjs.com/package/fastq)\n",
        "[Heroku](https://www.heroku.com),\n[Amazon Web Services (AWS)](https://aws.amazon.com),\n[Netlify](http://netlify.com),\n[Google Cloud Services (GCS)](https://cloud.google.com)\n",
        "[GitHub](https://github.com),\n[GitLab](https://about.gitlab.com),\n[Slack](https://slack.com),\n[Trello](https://trello.com),\n[Shortcut](http://shortcut.com),\n[Google Workspace](https://workspace.google.com),\n[Zoom](https://zoom.us) \n",
      ],
    },
  ],
  references: [
    {
      notes: [
        "[Jeremy Herrman](https://www.linkedin.com/in/jherrm/)\n\nCTO, [Volition](https://govolition.com)\n",
        "[Joey Rahimi](https://www.linkedin.com/in/joeyrahimi)\n\nCOO, [Aiken House Investments](https://www.aikenhouse.com/team/joey-rahimi)\n",
        "[Ameesh Kappor](https://www.linkedin.com/in/ameeshkapoor)\n\nHead of Engineering, [412-FOOD](https://412foodrescue.org/about-us/)\n",
        "[Mike Stoltz](https://www.linkedin.com/in/jherrm/)\n\nSoftware Engineer, [Argo AI](https://www.argo.ai)\n",
      ],
    },
  ],
  projects: [
    {
      label: "🤣 Amphetamemes",
      location: "https://amphetamem.es",
      notes: [
        "Instant access to millions of screen-caps from the most quotable shows and movies",
      ],
    },
    {
      label: "🎓 vitae.email",
      location: "https://vitae.email",
      notes: [
        "Publish your resume from a plaintext email -- much like the one you're reading",
      ],
    },
    {
      label: "🏕 Jellystone",
      location: "Run your studio remotely",
      notes: [
        "Jellystone (as in, Yogi's Jellystone Park), is a [WebRTC-based](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API) product that enables peer-to-peer video calls without relying on any external products or services. This makes it simpler, cheaper, faster and more secure",
        "_This project was discontinued due to abysmal [WebRTC](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API) support in Safari_",
      ],
    },
    {
      label: "🦖 Dealzilla",
      location: "A money saving experience",
      notes: [
        "TLDR Google Shopping but Google Shopping didn't exist at the time 😅",
        "Employed web crawling and scraping techniques",
        "Provided the user with a rich and beautiful experience across many merchants",
        "_This project is no longer active_",
      ],
    },
  ],
}
