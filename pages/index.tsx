import type { NextPage } from "next"
import Head from "next/head"
import Layout from "../components/layout"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { tomlExample, tomlTemplate } from "../template"
import Link from "next/link"

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <meta property="og:locale" content="en_US" />
        <meta name="description" content="text in, resume out" />
        <meta property="og:description" content="text in, resume out" />
        <meta
          property="og:title"
          content="Write your resume in plain-text with email."
        />
        <meta property="og:image" content="/preview-email.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="601" />
      </Head>

      <div className="comment-body markdown-body js-preview-body">
        <h1 className="text-3xl">🎓 vitae.email</h1>
        <p>Publish your resume from a plaintext email</p>
        <p>
          <Link href="/e/goforjohnny@icloud.com">View sample resume</Link>
        </p>

        <h2 id="toml" className="text-xl mt-4 mb-1">
          Write and Publish
        </h2>
        <p className="text-red-500 bg-red-100 border-solid border-2 border-red-500 font-bold p-1 mb-1">
          We are not currently accepting new users.
        </p>
        <p>
          <a href="mailto:toml@vitae.email?subject=This%20space%20intentionally%20left%20blank&body=title%20=%20%22%22%0Alabel%20=%20%22%22%0Arole%20=%20%22%22%0Alocation%20=%20%22%22%0Aemail%20=%20%22%22%0Alinkedin%20=%20%22linkedin.com/in/%22%0Agithub%20=%20%22github.com/%22%0A%0A%5B%5Beducation%5D%5D%0Alabel%20=%20%22%22%0Alocation%20=%20%22%22%0Astart%20=%20%22%22%0Aend%20=%20%22%22%0Anotes%20=%20%5B%0A%20%20%22%22,%0A%20%20%22%22%0A%5D%0A%0A%5B%5Beducation%5D%5D%0Alabel%20=%20%22%22%0Alocation%20=%20%22%22%0Astart%20=%20%22%22%0Aend%20=%20%22%22%0Anotes%20=%20%5B%0A%20%20%22%22,%0A%20%20%22%22%0A%5D%0A%0A%5B%5Bexperience%5D%5D%0Alabel%20=%20%22%22%0Alocation%20=%20%22%22%0Arole%20=%20%22%22%0Astart%20=%20%22%22%0Aend%20=%20%22%22%0Anotes%20=%20%5B%0A%20%20%22%22,%0A%20%20%22%22%0A%5D%0A%0A%5B%5Bexperience%5D%5D%0Alabel%20=%20%22%22%0Alocation%20=%20%22%22%0Arole%20=%20%22%22%0Astart%20=%20%22%22%0Aend%20=%20%22%22%0Anotes%20=%20%5B%0A%20%20%22%22,%0A%20%20%22%22%0A%5D%0A%0A%5B%5Bskills%5D%5D%0Anotes%20=%20%5B%0A%20%20%22%22,%0A%20%20%22%22%0A%5D%0A%0A%5B%5Btools%5D%5D%0Anotes%20=%20%5B%0A%20%20%22%22,%0A%20%20%22%22%0A%5D%0A%0A%5B%5Bprojects%5D%5D%0Alabel%20=%20%22%22%0Alocation%20=%20%22%22%0Anotes%20=%20%5B%0A%20%20%22%22,%0A%20%20%22%22%0A%5D">
            Send an email
          </a>{" "}
          to{" "}
          <span className="bg-indigo-100 dark:bg-indigo-900 p-1 rounded-sm">
            toml@vitae.email
          </span>{" "}
          with a message utilizing the template format shown below
        </p>

        <h2 className="text-xl mt-4 mb-1">View and Share</h2>
        <div className="mb-2">
          <p>
            Visit{" "}
            <span className="bg-indigo-100 dark:bg-indigo-900 p-1">
              https://vitae.email/e/
              <span className="font-semibold">email-address</span>
            </span>
          </p>
          <p>
            <span className="text-xs">
              If your email address is{" "}
              <span className="font-medium bg-green-50 dark:bg-green-900">
                carol@hr.com
              </span>{" "}
              then your resume is available at{" "}
              <span className="bg-gray-50 dark:bg-gray-900">
                https://vitae.email/e/
                <span className="font-medium bg-green-50 dark:bg-green-900">
                  carol@hr.com
                </span>
              </span>
            </span>
          </p>
        </div>

        <h2 id="toml" className="text-xl mt-4 mb-1">
          Template
        </h2>
        <div className="text-xs bg-gray-50 dark:bg-gray-800 p-2 overflow-hidden rounded">
          <div className="mt-2 mb-4">
            <CopyToClipboard text={tomlTemplate} onCopy={() => {}}>
              <span className="bold bg-indigo-100 border-indigo-500 dark:bg-indigo-900 dark:border-indigo-400 p-1 cursor-pointer rounded border-2">
                copy template to clipboard
              </span>
            </CopyToClipboard>
          </div>
          <pre>{tomlExample}</pre>
        </div>
      </div>
    </Layout>
  )
}

export default Home
