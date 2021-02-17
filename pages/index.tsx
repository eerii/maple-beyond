import Head from 'next/head'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>MOOSE ~ Time Banking</title>
      </Head>

      <main>
        <h1>
          Welcome to <a>MOOSE!</a>
        </h1>
      </main>

      <footer>
        <p>MOOSE, 2021</p>
      </footer>
    </div>
  )
}

export default Home