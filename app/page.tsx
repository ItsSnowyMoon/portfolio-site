import Head from 'next/head';
import Link from 'next/link';
import DesignToggle from '../components/DesignToggle';



export default function Home() {
  return (
    <>
      <Head>
        <title>Henry Keo | Portfolio</title>
        <meta name="description" content="Portfolio of Henry Keo" />
      </Head>

      <main style={{
  fontFamily: 'var(--font-family)',
  padding: '2rem',
  maxWidth: '800px',
  margin: '0 auto'
}}>
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '1rem'
  }}>
    <h1 style={{
      fontSize: '2.5rem',
      color: 'var(--accent-color)',
      margin: 0
    }}>
      Hi, I'm Henry Keo
    </h1>
    <DesignToggle />
  </div>

  <p style={{ fontSize: '1.25rem' }}>
    A UI/UX designer driven to dig deep and delve into unique problems through user-centered solutions.
  </p>


        <section style={{ marginTop: '2rem' }}>
          <h2 style={{ fontSize: '1.75rem',color: '#b581d6', marginBottom: '1rem' }}>Explore</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '1rem' }}>
              <Link href="/about" style={{ color: '#0070f3', textDecoration: 'none' }}>
                👤 About Me
              </Link>
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <Link href="/projects" style={{ color: '#0070f3', textDecoration: 'none' }}>
                💼 My Projects
              </Link>
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <Link href="/contact" style={{ color: '#0070f3', textDecoration: 'none' }}>
                📬 Contact
              </Link>
            </li>
          </ul>
        </section>

        

<section style={{ marginTop: '3rem' }}>
  <h2 style={{ fontSize: '1.75rem', color: '#b581d6', marginBottom: '1rem' }}>
    Featured Projects
  </h2>
  <ul style={{ listStyle: 'none', padding: 0 }}>
    <li style={{ marginBottom: '1rem' }}>
      <Link href="/projects/project1" style={{ color: '#0070f3', textDecoration: 'none' }}>
        🌟 DSGN 100 Prototyping - Lumiere Skincare Kiosk
      </Link>
      <p style={{ marginTop: '0.25rem' }}>
        An interactive kiosk to help users find the right skincare products.
      </p>
    </li>

  </ul>
</section>


        <footer style={{ marginTop: '4rem', fontSize: '0.875rem', color: '#888' }}>
          &copy; {new Date().getFullYear()} Henry Keo. All rights reserved.
        </footer>
      </main>
    </>
  );
}
