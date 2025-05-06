// app/contact/page.tsx
import Link from 'next/link';


export default function ContactPage() {
  return (
    <section
      style={{
        fontFamily: 'Arial, sans-serif',
        maxWidth: '800px',
        margin: '0 auto',
        padding: '2rem',
      }}
      
    >
      <h1 style={{ fontSize: '2.5rem',color: 'var(--accent-color)', marginBottom: '1rem' }}>Contact</h1>
      <p style={{ fontSize: '1.125rem', marginBottom: '2rem' }}>
        Feel free to reach out via email, phone, or LinkedIn!
      </p>
      <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.1rem' }}>
  <li style={{ marginBottom: '1rem' }}>
    📧 Email:{' '}
    <Link href="mailto:henry@example.com" style={{ color: 'var(--link-color)', textDecoration: 'underline' }}>
      henrykeo12@gmail.com
    </Link>
  </li>
  <li style={{ marginBottom: '1rem' }}>
    📞 Phone:{' '}
    <Link href="tel:+1234567890" style={{ color: 'var(--link-color)', textDecoration: 'underline' }}>
      +1 (952) 270-4948
    </Link>
  </li>
  <li style={{ marginBottom: '1rem' }}>
    💼 LinkedIn:{' '}
    <Link
      href="https://www.linkedin.com/in/henry-keo-6673351b0"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: 'var(--link-color)', textDecoration: 'underline' }}
    >
      linkedin.com/in/henrykeo
    </Link>
  </li>
</ul>

    </section>
  );
}

const linkStyle: React.CSSProperties = {
  color: '#0070f3',
  textDecoration: 'none',
};
