import Layout from "../components/layout"
import { GetServerSideProps } from "next"
import { Resume } from "../types/resume"
import Head from "next/head"
import props from "../resume.json"
import heroku from "../public/screenshots/heroku.webp"
import carpememe from "../public/screenshots/carpememe.webp"
import ketaminegames from "../public/screenshots/ketaminegames.webp"
import Image from "next/image"
import Link from "next/link"

export default function EmailPage(resume: Resume) {
  return (
    <Layout>
      <Head>
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content={resume.title} />
        <meta property="og:image" content="/johnny-portrait.jpg" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
      </Head>

      <div className="">
        <Link href="/screenshots/heroku">
          <a className="grid grid-cols-1">
            <Image src={heroku} alt="screenshot of product" />
          </a>
        </Link>

        <Link href="/screenshots/carpememe">
          <a className="grid grid-cols-1">
            <Image src={carpememe} alt="screenshot of product" />
          </a>
        </Link>

        <Link href="/screenshots/ketaminegames">
          <a className="grid grid-cols-1">
            <Image src={ketaminegames} alt="screenshot of product" />
          </a>
        </Link>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetServerSideProps = async (context) => {
  return { props: props }
}
