export default function Project1Page() {
    return (
      <section
        style={{
          fontFamily: 'Arial, sans-serif',
          maxWidth: '800px',
          margin: '0 auto',
          padding: '2rem',
        }}
      >
        <h1 style={{ fontSize: '2.5rem', color: 'var(--accent-color)', marginBottom: '1rem' }}>
          Lumiere Kiosk - Skincare
        </h1>
        <hr style={{ border: 'none', height: '1px', backgroundColor: 'var(--accent-color)', margin: '1rem 0' }} />
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
  
        <p style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
          For this project, we were tasked to completely create a kiosk from scratch, including the physical shape and digital interface. We decided to create a skincare kiosk located in stores that sell cosmetics to help provide recommendations based on questions. Our goal was to make purchasing skincare products more user-friendly, especially for new users unfamiliar with the vast amount of products and options.
        </p>
  
        <h2 style={{ fontSize: '2.5rem', color: 'var(--accent-color)', marginTop: '1rem' }}>Introduction</h2>
        <hr style={{ border: 'none', height: '1px', backgroundColor: 'var(--accent-color)', margin: '.5rem 0' }} />
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
  {/* Column 1 */}
  <div style={{ flex: '1 1 45%' }}>
    <h3 style={{ fontSize: '1.5rem', marginTop: '1.5rem' }}>Opportunity</h3>
    <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
      <li>• Skincare is a growing industry</li>
      <li>• Offer recommendations and increase sales</li>
      <li>• Can adapt to trends and tailor to customer needs</li>
    </ul>

    <h3 style={{ fontSize: '1.5rem', marginTop: '1.5rem' }}>Challenges</h3>
    <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
      <li>• User adaptability</li>
      <li>• Enabling trust with consumers</li>
    </ul>
  </div>

  {/* Column 2 */}
  <div style={{ flex: '1 1 45%' }}>
    <h3 style={{ fontSize: '1.5rem', marginTop: '1.5rem' }}>Rationale with Site Selection</h3>
    <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
      <li>• Site selection at Target with high foot traffic</li>
      <li>• Convenient for customers</li>
    </ul>
  </div>
</div>

  
<h2 style={{ fontSize: '2.5rem', color: 'var(--accent-color)', marginTop: '1rem' }}>
  Online Research
</h2>
<hr style={{ border: 'none', height: '1px', backgroundColor: 'var(--accent-color)', margin: '0rem 0' }} />

<div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
  {/* Left Column */}
  <div style={{ flex: '1 1 45%' }}>
    <h3 style={{ fontSize: '1.5rem', marginTop: '1.5rem' }}>Skincare Routine</h3>
    <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
      <li>• 71% of consumers not satisfied with their current skincare routine</li>
      <li>• 80% always looking for a better skincare routine</li>
      <li>• High demand for long-lasting results</li>
    </ul>

    <h3 style={{ fontSize: '1.5rem', marginTop: '1.5rem' }}>Common Problems</h3>
    <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
      <li>• Skin type identification and personalization</li>
      <li>• Gen Z concerned with acne/breakouts</li>
      <li>• Millennials concerned with dark eye circles</li>
    </ul>
  </div>

  {/* Right Column */}
  <div style={{ flex: '1 1 45%' }}>
    <h3 style={{ fontSize: '1.5rem', marginTop: '1.5rem' }}>Medical Kiosk</h3>
    
    <p><strong>Pros:</strong></p>
    <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
      <li>• Increase customer satisfaction</li>
      <li>• Available in remote places away from medical centers</li>
    </ul>

    <p><strong>Cons:</strong></p>
    <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
      <li>• Need for internet</li>
      <li>• Privacy and security risks (facial detection data)</li>
    </ul>
  </div>
</div>

  
        <h2 style={{ fontSize: '2.5rem', color: 'var(--accent-color)',marginTop: '1rem' }}>Fieldwork & Interviews</h2>
        <hr style={{ border: 'none', height: '1px', backgroundColor: 'var(--accent-color)', margin: '.5rem 0' }} />
        <h3 style={{ fontSize: '1.5rem', marginTop: '1.5rem' }}>Insight from Target @ Price Center on Campus</h3>
        <p><strong>Skincare Section:</strong></p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
          <li>• Many different products</li>
          <li>• Organized by product type</li>
          <li>• Information cards that explain what a product generally does</li>
        </ul>
  
        <p><strong>Shoppers/Consumers:</strong></p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
          <li>• Don’t spend much time browsing products</li>
          <li>• Already know what they are looking for</li>
        </ul>
  
        <section style={{ padding: '2rem 0' }}>
  <h2 style={{ fontSize: '2rem',color: 'var(--accent-color)', marginBottom: '1.5rem' }}>Interview Insights</h2>
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
    }}
  >
    <div>
      <p style={{ fontWeight: 'bold' }}>
      5/8 Interviewees had concerns with their skin breaking out
      </p>
      <blockquote style={{ fontStyle: 'italic', marginLeft: '1.5rem' }}>
      • “I worry about breakouts” <br />
      • “My main concern is hormonal breakouts”
</blockquote>

    </div>

    <div>
      <p style={{ fontWeight: 'bold' }}>
        5 out of 7 interviewees open to new skincare products preferred a testing option before making a commitment
      </p>
      <blockquote style={{ fontStyle: 'italic', marginLeft: '1.5rem'}}>
      • “I would like to explore more and find products that work for my skin” <br />
      • “I want to purchase new ones but don’t know which one to buy”
      </blockquote>
    </div>

    <div>
      <p style={{ fontWeight: 'bold' }}>
        7/8 Interviewees were open to trying new products
      </p>
      <blockquote style={{ fontStyle: 'italic', marginLeft: '1.5rem'}}>
      • “I would like to explore more and find products that work for my skin” <br />
      • “I want to purchase new ones but don’t know which one to buy”
      </blockquote>
    </div>

    <div>
      <p style={{ fontWeight: 'bold' }}>
        8/8 Interviewees said that they would want recommendations from a skincare kiosk
      </p>
    </div>
  </div>
</section>

  
        <h2 style={{ fontSize: '2.5rem',color: 'var(--accent-color)', marginTop: '1rem' }}>Digital Interface</h2>
        <hr style={{ border: 'none', height: '1px', backgroundColor: 'var(--accent-color)', margin: '.5rem 0' }} />
        <p>
          We used Figma to create a prototype of an interactive interface. The landing screen includes a call to action to tap the screen to find your perfect skincare routine. The next page is a branching path depending if the user is looking to find a specific type of product or a complete routine. After selecting an option, several questions are asked to help formulate a product or skincare routine and then recommend it. Clicking on a product will show more information about the product, reviews, the price, the location, and the option to purchase a sample or to add it to the cart.
        </p>
        <img
            src="/skincare.jpg"
            alt="Lumiere Kiosk"
            style={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '8px',
                marginBottom: '1rem',
            }}
            />

        <h2 style={{ fontSize: '2.5rem', color: 'var(--accent-color)', marginTop: '1 rem' }}>Physical Kiosk</h2>
        <hr style={{ border: 'none', height: '1px', backgroundColor: 'var(--accent-color)', margin: '.5rem 0' }} />
        <p>
          We used the vector drawing software Inkscape to create the design of the physical kiosk. We created 5 different panels that fit together to make a solid base and created a cut-out to hold the screen. We used a laser cutter to precisely cut the plywood pieces and spraypainted and glued them together to put the physical kiosk together.
        </p>
        <img
            src="/physicalkiosk.png"
            alt="Lumiere Kiosk"
            style={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '8px',
                marginBottom: '1rem',
            }}
            />
  
        <h2 style={{ fontSize: '2.5rem',color: 'var(--accent-color)', marginTop: '1rem' }}>User Testing Insights</h2>
        <hr style={{ border: 'none', height: '1px', backgroundColor: 'var(--accent-color)', margin: '.5rem 0' }} />
        <p><strong>Pros:</strong></p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
          <li>Very simple and straightforward UI</li>
          <li>Tasks were easy to complete</li>
          <li>Quiz questions effectively tailored toward user needs</li>
        </ul>
  
        <p><strong>Cons:</strong></p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
          <li>Adding products from a whole routine felt tedious</li>
          <li>User can only access their shopping cart right after adding a product</li>
          <li>Only able to choose one option per question</li>
        </ul>
  
        <p><strong>Recommendations:</strong></p>
        <ul>
          <li>Create a feature that adds all products in a provided routine to your cart</li>
          <li>Add a shopping cart icon at the corner of the screen for easy access</li>
          <li>Be able to select multiple options for the quiz questions</li>
          <li>After pressing “No, keep shopping” on the popup window after adding a product to your cart, it should automatically send you back to the product/routine recommendations page</li>
        </ul>
  
        <footer style={{ marginTop: '4rem', fontSize: '0.875rem', color: '#888' }}>
          <p>&copy; {new Date().getFullYear()} Henry Keo. All rights reserved.</p>
        </footer>
      </section>
    );
  }