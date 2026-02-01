export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Welcome to Site Erectus Plus</h1>
      <p>This is a Next.js application with Vercel Speed Insights enabled.</p>
      
      <section style={{ marginTop: '2rem' }}>
        <h2>About Speed Insights</h2>
        <p>
          Vercel Speed Insights helps you monitor and improve your website&apos;s performance
          by tracking real user metrics like Core Web Vitals.
        </p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Features</h2>
        <ul>
          <li>Real-time performance monitoring</li>
          <li>Core Web Vitals tracking</li>
          <li>Automatic data collection</li>
          <li>Dashboard analytics</li>
        </ul>
      </section>
    </main>
  )
}
