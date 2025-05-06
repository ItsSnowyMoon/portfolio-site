// app/contact/page.tsx

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
      <h1 style={{ fontSize: '2.5rem',color: '#b581d6', marginBottom: '1rem' }}>Contact</h1>
      <p style={{ fontSize: '1.125rem', marginBottom: '2rem' }}>
        Feel free to reach out via email, phone, or LinkedIn!
      </p>

      <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.1rem',color: '#b581d6', }}>
        <li style={{ marginBottom: '1rem' }}>
          📧 Email: <a href="mailto:henry@example.com" style={linkStyle}>henrykeo12@gmail.com</a>
        </li>
        <li style={{ marginBottom: '1rem' }}>
          📞 Phone: <a href="tel:+1234567890" style={linkStyle}>+1 (952) 270-4948</a>
        </li>
        <li>
          💼 LinkedIn: <a href="https://www.linkedin.com/in/henry-keo-6673351b0" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            linkedin.com/in/henrykeo
          </a>
        </li>
      </ul>
    </section>
  );
}

const linkStyle: React.CSSProperties = {
  color: '#0070f3',
  textDecoration: 'none',
};
