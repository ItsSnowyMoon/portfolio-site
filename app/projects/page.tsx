// app/projects/page.tsx
import Link from 'next/link';


export default function ProjectsPage() {
  return (
    <section
      style={{
        fontFamily: 'Arial, sans-serif',
        maxWidth: '800px',
        margin: '0 auto',
        padding: '2rem',
      }}
    >
      <h1 style={{ fontSize: '2.5rem', color: 'var(--accent-color)',marginBottom: '1rem' }}>My Projects</h1>
      <p style={{ fontSize: '1.125rem', marginBottom: '2rem' }}>
        Here are some of my projects:
      </p>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ marginBottom: '1rem' }}>
          <Link href="/projects/project1" style={{color: 'var(--link-color)', textDecoration: 'underline'}}>
            🌟 DSGN 100 Prototyping - Lumiere Skincare Kiosk 
          </Link>
          <p style={{ marginTop: '0.25rem' }}>
            An interactive kiosk to help users find the right skincare products.
          </p>
          <img
            src="/skincare.webp"
            alt="Lumiere Kiosk"
            style={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '8px',
                marginBottom: '1rem',
            }}
            />
        </li>

      </ul>
    </section>
  );
}
