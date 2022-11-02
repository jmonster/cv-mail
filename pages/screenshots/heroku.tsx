import Layout from "../../components/layout"
import { GetServerSideProps } from "next"
import { Resume } from "../../types/resume"
import Head from "next/head"
import props from "../../resume.json"
import heroku1 from "../../public/screenshots/heroku1.webp"
import heroku2 from "../../public/screenshots/heroku2.webp"
import heroku3 from "../../public/screenshots/heroku3.webp"
import heroku4 from "../../public/screenshots/heroku4.webp"
import heroku5 from "../../public/screenshots/heroku5.webp"
import heroku6 from "../../public/screenshots/heroku6.webp"
import heroku7 from "../../public/screenshots/heroku7.webp"
import heroku8 from "../../public/screenshots/heroku8.webp"
import heroku9 from "../../public/screenshots/heroku9.webp"
import heroku10 from "../../public/screenshots/heroku10.webp"
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
        <h1 className="text-2xl text-center">Heroku</h1>
        <Link href="https://dashboard.heroku.com/">
          <a target="_blank" className="block text-lg text-center italic">
            https://dashboard.heroku.com
          </a>
        </Link>
        <div className="grid grid-cols-2">
          <Link href="/screenshots/heroku2.webp">
            <a target="_blank">
              <Image src={heroku2} alt="screenshot of product" />
            </a>
          </Link>
          <Link href="/screenshots/heroku5.webp">
            <a target="_blank">
              <Image src={heroku5} alt="screenshot of product" />
            </a>
          </Link>
        </div>
        <div className="grid grid-cols-2">
          <Link href="/screenshots/heroku1.webp">
            <a target="_blank">
              <Image src={heroku1} alt="screenshot of product" />
            </a>
          </Link>
          <Link href="/screenshots/heroku3.webp">
            <a target="_blank">
              <Image src={heroku3} alt="screenshot of product" />
            </a>
          </Link>
        </div>
        <div className="grid grid-cols-2">
          <Link href="/screenshots/heroku4.webp">
            <a target="_blank">
              {" "}
              <Image src={heroku4} alt="screenshot of product" />
            </a>
          </Link>
          <Link href="/screenshots/heroku6.webp">
            <a target="_blank">
              <Image src={heroku6} alt="screenshot of product" />
            </a>
          </Link>
        </div>

        <Link href="https://status.heroku.com/">
          <a
            target="_blank"
            className="pt-2 block text-lg text-center italic border-t border-indigo-700"
          >
            https://status.heroku.com
          </a>
        </Link>
        <div className="grid grid-cols-2">
          <Link href="/screenshots/heroku7.webp">
            <a target="_blank">
              <Image src={heroku7} alt="screenshot of product" />
            </a>
          </Link>
          <Link href="/screenshots/heroku8.webp">
            <a target="_blank">
              <Image src={heroku8} alt="screenshot of product" />
            </a>
          </Link>
        </div>
        <div className="grid grid-cols-1">
          <Link href="/screenshots/heroku9.webp">
            <a target="_blank">
              <Image src={heroku9} alt="screenshot of product" />
            </a>
          </Link>
        </div>

        <Link href="https://data.heroku.com/">
          <a
            target="_blank"
            className="pt-2 block text-lg text-center italic border-t border-indigo-700"
          >
            https://data.heroku.com
          </a>
        </Link>
        <div className="grid grid-cols-1">
          <Link href="/screenshots/heroku10.webp">
            <a target="_blank">
              <Image src={heroku10} alt="screenshot of product" />
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetServerSideProps = async (context) => {
  return { props: props }
}
