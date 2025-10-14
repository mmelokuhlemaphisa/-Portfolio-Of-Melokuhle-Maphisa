
import NavBar from "../Components/NavBar";
import Footer from "../Components/footer";

export default function Privacy() {
  return (
    <div>
      <div
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <NavBar />
        <main style={{ flex: 1, padding: "2rem 0", textAlign: "center" }}>
          <div className="container">
            <h1>Privacy Policy</h1>

            <p>
              This Privacy Policy describes how your information is collected,
              used, and shared when you visit or interact with the Portfolio
              website.
            </p>

            <div className="section">
              <h2>Information Collected</h2>
              <p>
                We only collect personal information you voluntarily provide
                through the Contact Us form. This includes:
              </p>
              <ul>
                <li>Your name</li>
                <li>Your email address</li>
                <li>Your message</li>
              </ul>
            </div>

            <h2>Purpose of Collection</h2>
            <p>
              We collect your data to respond to your enquiries and improve
              communication. Your data will not be used for marketing or shared
              with third parties.
            </p>

            <h2>Data Storage</h2>
            <p>
              Submitted information is not stored in a database. If connected to
              an email system, your message may be temporarily stored in our
              inbox and deleted after 30 days.
            </p>

            <h2>Your Rights</h2>
            <p>
              You may request access to the personal data we have about you, ask
              for corrections, or request deletion of your data at any time by
              contacting us through the same form.
            </p>

            <h2>Security</h2>
            <p>
              All communication through our website is encrypted via HTTPS to
              protect your data during transmission.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this policy, please use the
              <a href="contact.html">Contact Us</a> page.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
