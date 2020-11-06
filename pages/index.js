import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css';
import Nav from '@components/Nav'
import Header from '@components/Header'
import Card from '@components/Card'
import Footer from '@components/Footer'
import Section from '@components/Section';
import { fetchEntries } from 'util/contentfulPost'

export default function Home({ experiences }) {
  return (
    <div >
      <Head>
        <title>My Portfolio Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />

      <main>
        <Header text="Shoesmart : Better Workflow, Clear Roadmap, and Focused Goal" />
        {experiences.map((p) => {
        return <Section key={p.company}  title={p.title} subtitle={p.subtitle} hint={p.hint}  image={p.image.fields}/>
        return 1
        })}

      
      </main>

      <Footer />

      <style jsx>{`
        .container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .cards {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
// at the bottom of your component file

export async function getStaticProps() {
  const res = await fetchEntries()
  const experiences = await res.map((e) => {
    console.log("masuk asyncs")
    console.log(e.fields.image.fields)
    return e.fields
  })

  return {
    props: {
      experiences,
    },
  }
}