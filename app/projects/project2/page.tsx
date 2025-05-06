// app/projects/project2/page.tsx
export default function Project2Page() {
    return (
      <section
        style={{
          fontFamily: 'Arial, sans-serif',
          maxWidth: '800px',
          margin: '0 auto',
          padding: '2rem',
        }}
      >
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Accessible UI Toolkit</h1>
        <p style={{ fontSize: '1.125rem', color: '#555', marginBottom: '1rem' }}>
          A UI toolkit designed to create reusable, accessible components for web applications.
        </p>
  
        <img
          src="/ui-toolkit.jpg" // Image representing the project
          alt="Accessible UI Toolkit"
          style={{
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '8px',
            marginBottom: '1rem',
          }}
        />
  
        <p style={{ fontSize: '1.125rem', color: '#555' }}>
          This toolkit aims to simplify the process of building accessible components that conform to WCAG
          guidelines. The components are flexible, easy to integrate, and come with predefined styling options.
        </p>
  
        <footer style={{ marginTop: '4rem', fontSize: '0.875rem', color: '#888' }}>
          <p>&copy; {new Date().getFullYear()} Henry Keo. All rights reserved.</p>
        </footer>
      </section>
    );
  }
  