// app/projects/lifesaver/page.tsx
import Link from 'next/link';

export default function LifeSaverProjectPage() {
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
        Lifesaver: Decentralizing Healthcare, Anywhere and Everywhere
      </h1>
      <hr style={{ border: 'none', height: '1px', backgroundColor: 'var(--accent-color)', margin: '1rem 0' }} />

      <p style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
        The current healthcare system is centralized, expensive, and often inaccessible—even within an arm’s reach.
        From underserved communities to remote research bases and potential Mars missions, it is imperative to place
        patients in control of their treatments and make healthcare accessible anywhere.
      </p>

      <p style={{ fontSize: '1.125rem', marginBottom: '1rem', fontStyle: 'italic' }}>
        How might we place patients in control of their treatments and allow healthcare to exist everywhere?
      </p>

      <h2 style={{ fontSize: '2rem', color: 'var(--accent-color)', marginTop: '1rem' }}>Solution</h2>
      <p style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
        Lifesaver is a multi-system product designed to decentralize healthcare delivery. 
      </p>
      <ul style={{ fontSize: '1.125rem', marginBottom: '1rem', paddingLeft: '1.5rem' }}>
        <li>A portable pod containing all medical equipment needed to treat diseases and physical injuries.</li>
        <li>
          AILA (AI Living Assistant): An AI-powered assistant that diagnoses, prescribes treatment, and
          provides step-by-step guidance for patients to self-administer care, while tracking health data for
          ongoing monitoring.
        </li>
        <img
  src="/HomeLOP.png"
  alt="AILA Samsung Flip 5 Interface"
  style={{
    maxWidth: '150%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '1rem',
  }}
/>
      </ul>

      <h2 style={{ fontSize: '2rem', color: 'var(--accent-color)', marginTop: '1rem' }}>My Role</h2>
      <ul style={{ fontSize: '1.125rem', marginBottom: '1rem', paddingLeft: '1.5rem' }}>
        <li>Lead UI/UX Designer for AILA Interface</li>
        <li>Developed user flows, Figma wireframes, and high-fidelity prototypes.</li>
        <li>Designed AR interfaces for treatment procedures to ensure clarity and safety under stressful conditions.</li>
      </ul>

<h2 style={{ fontSize: '2.5rem', color: 'var(--accent-color)', marginTop: '2rem' }}>
  Discovery & Research
</h2>
<hr style={{ border: 'none', height: '1px', backgroundColor: 'var(--accent-color)', margin: '.5rem 0' }} />

{/* How the project started */}
<h3 style={{ fontSize: '1.75rem', marginTop: '1rem' }}>Origins in DSGN 160</h3>
<p style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
  LifeSaver began as the brainchild of Eliah Aronoff-Spencer, an Assistant Professor of medicine and director of the Design Lab Center for Health, who wanted to provide more accesible healthcare. To put his idea into action, Eli directed the DSGN 160 studio course which took 30 students from different backgrounds to explore how to decentralize healthcare over a span of 10 weeks. The class was structured around addressing critical healthcare challenges in underserved and remote environments, pushing us to think creatively about system-level solutions that could be deployed anywhere.
</p>

{/* In-class work */}
<h3 style={{ fontSize: '1.75rem', marginTop: '1rem' }}>Personas, Workflows, and Early Prototypes</h3>
<p style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
  During the course, we created detailed user personas representing individuals in urban areas, rural areas, and  disaster zones, to understand their pain points and limitations in accessing care. We mapped out workflows for scenarios such as emergency treatment, routine check-ups, and medication dispensing, ensuring our solutions addressed real-world constraints. While creating user workflows, we made sure to keep in  mind the line of interaction, line of visibility, and the user's actions and how they all tie in with each other.
</p>
<p style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
  We developed early UI prototypes to visualize how users would interact with the LifeSaver pod and the AILA assistant, focusing on clarity, safety, and accessibility in high-stress conditions. At this current stage, ideation was still in the brainstorming phase as many diffrent approaches and technologies were proposed.
</p>

<img
  src="/chimeg.png"
  alt="User Personas and Early Workflows"
  style={{
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '1rem',
  }}
/>
<img
  src="/asthma.png"
  alt="Research and Prototyping Process"
  style={{
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '1rem',
  }}
/>

{/* Transition to student interns */}
<h3 style={{ fontSize: '1.75rem', marginTop: '1rem' }}>From Class Project to Yearlong Research</h3>
<p style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
  After the class ended, a handfull of students, including myself, continued working on LifeSaver as student interns at the UCSD Design Lab Center for Health for the next year. We continued refining our user flows and UI prototypes, preparing the system for real-world testing in environments like Devon Island and presentations at the World Design Capital San Diego Tijuana 2024.
</p>




<h2 style={{ fontSize: '2.5rem', color: 'var(--accent-color)', marginTop: '2rem' }}>
  Design & Prototyping
</h2>
<hr style={{ border: 'none', height: '1px', backgroundColor: 'var(--accent-color)', margin: '.5rem 0' }} />

<p style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
  Our design and prototyping process for Lifesaver focused on delivering an intuitive and safe experience for patients in stressful, remote, or extreme conditions.
</p>
{/* Subsection: Designing for Samsung Flip 5 */}
<h3 style={{ fontSize: '1.75rem', marginTop: '1rem' }}>AILA Interface on Samsung Flip 5</h3>
<p style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
  To enhance usability and portability, AILA was designed specifically for the Samsung Flip 5. We leveraged the foldable
  design by using square window layouts. When closed, users can still see a single square window they can still interact with.
  When opened, the Flip 5 displays a dual-window interface with one side for navigation, selecting users, and interacting with AILA
  The other side displays information, next-steps in the procedure, and patient info. This flexible layout allows the user to sill use the device and interact with AILA no matter if the device is closed or opened.
</p>
<ul style={{ fontSize: '1.125rem', marginBottom: '1rem', paddingLeft: '1.5rem' }}>
  <li><strong>Closed mode:</strong> Users interact with a compact square display for quick actions, vitals monitoring, and fast navigation while on the move.</li>
  <li><strong>Open mode:</strong> Expands to a full interface for detailed workflows, procedure walkthroughs, and extended patient data management.</li>
</ul>
<img
  src="/Front Display.png"
  alt="AILA Samsung Flip 5 Interface"
  style={{
    maxWidth: '150%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '1rem',
  }}
/>
<img
  src="/Main Display.png"
  alt="AILA Samsung Flip 5 Interface"
  style={{
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '1rem',
  }}
/>
{/* Subsection: Early Wireframes */}
<h3 style={{ fontSize: '1.75rem', marginTop: '1rem' }}>Early Wireframes</h3>
<p style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
  We began by using low-fidelity wireframes to start mapping out basic user flows. Since we were using a unqiue dual window approach, we wanted to get a feel of how it would function and how usable it was. By using simple wireframes, we were able to quickly mock-up some example screens the user would see and interact with.
</p>
<img
  src="/wireframe.png"
  alt="Early Wireframes"
  style={{
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '1rem',
  }}
/>

{/* Subsection: High-Fidelity Prototypes */}
<h3 style={{ fontSize: '1.75rem', marginTop: '1.5rem' }}>
  High-Fidelity Prototypes
</h3>
<p style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
  After validating our user flows with early wireframes, we developed high-fidelity prototypes to refine the LifeSaver user experience. We focused on a seamless, clear interface for the <strong>AILA AI companion</strong>, ensuring users could navigate medical procedures, track patient data, and communicate with AILA even in high-stress, remote environments.
</p>



 <h2 style={{ fontSize: '2rem', color: 'var(--accent-color)', marginTop: '2rem' }}>
        Key Flows 
      </h2>

      <p style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
        <strong>Medical Procedures</strong><br />
        AILA generates clear, step-by-step medical procedures after determining a diagnosis, displaying the medical condition at the top with an active timer to track procedure duration. Each procedure is broken into steps, with substeps, instructional images, and checklists to guide non-expert users confidently during high-stress situations. Users can scroll to view substeps within each step and use navigation arrows to move forward or backward, ensuring they can follow procedures safely and at their own pace.
      </p>
<img
  src="/medical.png"
  alt="Medical Procedures"
  style={{
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '1rem',
  }}
/>
      <p style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
        <strong>Quick Access</strong><br />
        A swipe-up sidebar provides instant access to the camera, vitals, map, timer, and user profile, ensuring critical tools are one tap away during treatments. This allows seamless switching between tasks (e.g., checking vitals during a procedure) without losing context, supporting rapid, flexible care delivery in the field.
      </p>
<img
  src="/quick.png"
  alt="Quick Sidebar"
  style={{
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '1rem',
  }}
/>
      <p style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
        <strong>Vitals Monitoring</strong><br />
        Displays color-coded, real-time vital signs (temperature, heart rate, respiration, etc.), with at-risk conditions highlighted in red for quick triage. Users can toggle to a trends view to see historical vitals data for informed treatment decisions. A dropdown menu allows users to select specific vitals to view detailed trends, enabling proactive monitoring and intervention during prolonged care sessions.
      </p>
<img
  src="/vitals.png"
  alt="Vitals Page"
  style={{
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '1rem',
  }}
/>
      <p style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
        <strong>Camera Features</strong><br />
        Using integrated sensors, the camera can capture temperature, respiration, and heart rate readings during assessments. Users can take photos to save on the device, flip the camera, review previous images, or switch to an emotion detection mode using Google’s emotion detection API. This mode generates bar graphs visualizing emotional states based on facial expressions, providing a holistic view of the patient’s or user’s mental well-being.
      </p>
<img
  src="/camera.png"
  alt="Camera Page"
  style={{
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '1rem',
  }}
/>
      <p style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
        <strong>Timer Functionality</strong><br />
        Allows users to set and manage treatment or medication timers easily by scrolling to adjust durations and tapping “Start.” A toggle lets users view all active timers across users and events, showing remaining time for each and allowing deletion of completed or unnecessary timers via a trash icon.
      </p>
<img
  src="/timer.png"
  alt="Timer Page"
  style={{
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '1rem',
  }}
/>
      <p style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
        <strong>Map Navigation</strong><br />
        Displays the user’s location relative to a set base and shows the optimal route back during treatments in remote areas. It also visualizes the location of any deployed but not actively carried devices, ensuring equipment tracking and enhancing safety during operations in the field.
      </p>
<img
  src="/map.png"
  alt="Map Page"
  style={{
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '1rem',
  }}
/>
      <p style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
       <strong>User Profiles</strong><br />
        Provides comprehensive personal health management for the gauntlet user. The profile includes real-time vitals monitoring similar to the patient view but specific to the user, ensuring they can track their health while providing care. The medical records section includes:
      </p>
      <img
  src="/users.png"
  alt="User Page"
  style={{
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '1rem',
  }}
/>
      <ul style={{ fontSize: '1.125rem', marginBottom: '1rem', paddingLeft: '1.5rem' }}>
        <li><strong>Medical History:</strong> Recent events, dates, ongoing conditions, and allergies, with expandable dropdowns for detailed views.</li>
        <li><strong>Vaccinations:</strong> Recent immunizations, dates administered, and completion status.</li>
        <li><strong>Prescriptions:</strong> Active prescriptions, dosage schedules, and duration.</li>
        <li><strong>Lab Results:</strong> Recent test results for health tracking.</li>
      </ul>
      <p style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
        Navigation is intuitive, with swipe gestures moving between record pages for rapid review in the field.
      </p>

<p style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
  These high-fidelity prototypes allowed us to test and refine complex workflows in realistic scenarios, ensuring that LifeSaver’s AILA interface remains intuitive and supportive across its wide range of environments and edge cases.
</p>



<h2 style={{ fontSize: '2.5rem', color: 'var(--accent-color)', marginTop: '2rem' }}>
  Testing in Extreme Environments
</h2>
<hr style={{ border: 'none', height: '1px', backgroundColor: 'var(--accent-color)', margin: '.5rem 0' }} />

<p style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
  To validate Lifesaver’s usability and viability in extreme conditions, we partnered with <strong>Danica Vallone</strong>, a Hollywood designer accompanying a <strong>NASA mission to Devon Island</strong>, a Mars analog site in the Canadian Arctic. Devon Island’s isolated, harsh terrain closely simulates conditions astronauts would face on Mars, making it an ideal environment to test Lifesaver’s pod and AILA interface in real-world remote scenarios.
</p>

<p style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
  For this expedition, we deployed our <strong>first functional prototype of the Lifesaver pod</strong> along with the <strong>Samsung Flip 5</strong> running AILA’s interface. While the Artificial Intelligence backend of AILA was still under development, we employed <strong>Wizard of Oz testing</strong> to simulate real-time AI assistance. Danica would interact with the AILA interface, requesting medical guidance and treatment steps, while a technician on our team manually updated her display with step-by-step instructions and relevant information in real-time.
</p>

<p style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
  This method allowed us to test LifeSaver’s workflow and user interface under the extreme conditions of Devon Island while showcasing how healthcare could be decentralized and delivered anywhere, even in the most remote locations on Earth—or beyond. It also provided us with invaluable insights into what instructions, visuals, and feedback mechanisms were most effective in high-stress, low-resource environments.
</p>

<img
  src="/cliff.png"
  alt="LifeSaver Testing on Devon Island"
  style={{
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '1rem',
  }}
/>

<h2 style={{ fontSize: '2.5rem', color: 'var(--accent-color)', marginTop: '2rem' }}>
  Iteration & Public Launch
</h2>
<hr style={{ border: 'none', height: '1px', backgroundColor: 'var(--accent-color)', margin: '.5rem 0' }} />

<p style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
  Building on insights gathered from testing on Devon Island, we refined the <strong>AILA interface</strong> to reduce cognitive load, improve step clarity, and enhance AR treatment guidance. We also updated the LifeSaver pod design, optimizing device arrangement and improving ease of use under stress.
</p>

<p style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
  We showcased our improved LifeSaver system at the <strong>World Design Capital San Diego Tijuana 2024</strong> a two-day global design conference featuring four design tracks, where our project was part of the <strong>Healthcare track</strong>. Our team secured a dedicated corner of the main conference hall throughout the event, where we demonstrated various elements of the LifeSaver ecosystem:
</p>

<ul style={{ fontSize: '1.125rem', marginBottom: '1rem', paddingLeft: '1.5rem' }}>
  <li>The <strong>LifeSaver pod</strong> equipped with essential medical devices to address WHO’s deadliest diseases.</li>
  <li>An early prototype of <strong>AILA’s AI system and AR interface</strong> on the Samsung Flip 5.</li>
  <li>Set dressing replicating a <strong>Mars-like landscape</strong> to simulate the environments where LifeSaver could operate.</li>
</ul>

<p style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
  The project directors, <strong>Dr. Eliah Aronoff-Spencer</strong> and <strong>Danica Vallone</strong>, led a panel discussing LifeSaver’s mission to decentralize healthcare, emphasizing how the system can provide critical care anywhere, regardless of remoteness.
</p>

<p style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
  As a <strong>student intern</strong>, I attended the conference, representing the LifeSaver team in our exhibit space. I explained the system to attendees, answered questions from healthcare professionals and designers, and gathered live user impressions on AILA’s interface. This direct public engagement provided valuable feedback for our next iteration while showcasing LifeSaver to stakeholders passionate about design’s potential to improve healthcare equity.
</p>

<div
  style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem',
    marginBottom: '1rem',
  }}
>
  <img
    src="/panel.JPG"
    alt="Lifesaver Panel"
    style={{
      width: '100%',
      height: 'auto',
      borderRadius: '8px',
    }}
  />
  <img
    src="/crowd.JPG"
    alt="Lifesaver Crowd"
    style={{
      width: '100%',
      height: 'auto',
      borderRadius: '8px',
    }}
  />
  <img
    src="/team.PNG"
    alt="Lifesaver Team"
    style={{
      width: '100%',
      height: 'auto',
      borderRadius: '8px',
    }}
  />
  <img
    src="/booth.JPG"
    alt="Lifesaver Booth"
    style={{
      width: '100%',
      height: 'auto',
      borderRadius: '8px',
    }}
  />
</div>


      <h2 style={{ fontSize: '2rem', color: 'var(--accent-color)', marginTop: '1rem' }}>Key Design Principles</h2>
      <ul style={{ fontSize: '1.125rem', marginBottom: '1rem', paddingLeft: '1.5rem' }}>
        <li>Simplicity Under Stress: Clear AR language, visuals, and progress tracking under emergencies.</li>
        <li>Hands-Free Operation: Designed for AR headset and gesture input for sterility and safety.</li>
        <li>Transparency: Users can view steps and escalate to human support if needed.</li>
        <li>Scalable System: Usable in urban clinics, disaster relief, research bases, and space missions.</li>
      </ul>

      <h2 style={{ fontSize: '2rem', color: 'var(--accent-color)', marginTop: '1rem' }}>Impact</h2>
      <p style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
        LifeSaver demonstrated the viability of decentralized healthcare delivery in remote and extreme environments,
        enabling non-medical users to administer critical treatments under AR guidance. Showcased at World Design
        Capital 2024, it inspired conversations on the future of accessible healthcare.
      </p>

      <h2 style={{ fontSize: '2rem', color: 'var(--accent-color)', marginTop: '1rem' }}>Reflection</h2>
      <p style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
        Leading the design for AILA taught me to design for extreme use cases where clarity, safety, and empowerment are
        critical, while strengthening my skills in AR and hardware-integrated workflows, usability testing in real-world
        environments, and scalable UI/UX system development.
      </p>


      <h2 style={{ fontSize: '2rem', color: 'var(--accent-color)', marginTop: '1rem' }}>Next Steps</h2>
      <p style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
        We are continuing to refine AILA’s AR workflows with user testing, expand treatment libraries, and explore
        voice-integrated workflows to enhance accessibility and safety during treatments.
      </p>

      <footer style={{ marginTop: '4rem', fontSize: '0.875rem', color: '#888' }}>
        <p>&copy; {new Date().getFullYear()} Henry Keo. All rights reserved.</p>
      </footer>
    </section>
  );
}
