import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css';
import Nav from '@components/Nav'
import Header from '@components/Header'
import Card from '@components/Card'
import Footer from '@components/Footer'
import Section from '@components/Section'

export default function Home({ items }) {
  return (
    <div >
      <Head>
        <title>My Portfolio Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />

      <main>
        <Section 
        title="Shoesmart : Better Workflow, Clear Roadmap, and Focused Goal"
        subtitle="We got better user acquisition every
        product launches, increased about
        91% from July to October. And also
        our transaction increased about 124%
        from July to October 2020."
        hint="Shoesmart is targetting on user acquisition this time and we
        know that we everytime we launches something, people
        often sign up on our website."
        picture={items[0].image}
        ></Section>
        <div className="cards">
          {items?.length &&
            items.map((i) => {
              return (
                <Card
                  key={i.title}
                  title={i.title}
                  picture={i.image}
                  link={i.slug}
                />
              )
            })}
        </div>
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

export async function getStaticProps() {
  const portfolioData = await import(`../portfolio.json`)

  let slugs = []
  portfolioData.items.map((i) => {
    slugs.concat(i.slug)
  })

  return {
    props: {
      items: portfolioData.items,
    },
  }
}
