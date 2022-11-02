import Layout from "../../components/layout"
import { GetServerSideProps } from "next"
import { Resume } from "../../types/resume"
import Head from "next/head"
import props from "../../resume.json"
import meme1 from "../../public/screenshots/ketaminegames1.webp"
import meme2 from "../../public/screenshots/ketaminegames2.webp"
import meme3 from "../../public/screenshots/ketaminegames3.webp"
import meme4 from "../../public/screenshots/ketaminegames4.webp"
import meme5 from "../../public/screenshots/ketaminegames5.webp"
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
        <h1 className="text-2xl text-center">Ketamine Games</h1>
        <Link href="https://ketamine.games/">
          <a target="_blank" className="block text-lg text-center italic">
            https://ketamine.games
          </a>
        </Link>
        <div className="grid grid-cols-2">
          <Link href="/screenshots/ketaminegames1.webp">
            <a target="_blank">
              <Image src={meme1} alt="screenshot of product" />
            </a>
          </Link>
          <Link href="/screenshots/ketaminegames2.webp">
            <a target="_blank">
              <Image src={meme2} alt="screenshot of product" />
            </a>
          </Link>
        </div>
        <div className="grid grid-cols-3">
          <Link href="/screenshots/ketaminegames3.webp">
            <a target="_blank">
              <Image src={meme3} alt="screenshot of product" />
            </a>
          </Link>
          <Link href="/screenshots/ketaminegames4.webp">
            <a target="_blank">
              <Image src={meme4} alt="screenshot of product" />
            </a>
          </Link>
          <Link href="/screenshots/ketaminegames5.webp">
            <a target="_blank">
              <Image src={meme5} alt="screenshot of product" />
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
