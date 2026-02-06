import { Helmet } from "react-helmet";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Alprosper</title>
        <meta name="description" content="Alprosper's Privacy Policy - Learn how we collect, use, and protect your personal information." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Privacy Policy
            </h1>
            
            <p className="text-muted-foreground mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
              <section>
                <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Alprosper ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our automation services.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">2. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may collect information about you in various ways, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Personal Data:</strong> Name, email address, phone number, and business information you provide when booking a consultation or contacting us.</li>
                  <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, and navigation patterns.</li>
                  <li><strong>Device Data:</strong> Browser type, operating system, IP address, and device identifiers.</li>
                  <li><strong>Cookies:</strong> Small data files stored on your device to enhance your browsing experience.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">3. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Provide, operate, and maintain our services</li>
                  <li>Process and manage consultation bookings</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Improve our website and services</li>
                  <li>Analyze usage patterns and trends</li>
                  <li>Protect against fraudulent or unauthorized activity</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">4. Information Sharing</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We do not sell your personal information. We may share your information with:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Service Providers:</strong> Third-party vendors who assist us in operating our website and delivering services.</li>
                  <li><strong>Business Partners:</strong> Trusted partners with whom we collaborate to provide integrated solutions.</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">5. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">6. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Depending on your location, you may have the following rights regarding your personal data:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Access and receive a copy of your personal data</li>
                  <li>Rectify inaccurate or incomplete data</li>
                  <li>Request deletion of your personal data</li>
                  <li>Object to or restrict processing of your data</li>
                  <li>Data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">7. Cookies Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences. Disabling cookies may affect certain features of our website.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">8. Third-Party Links</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies before providing any personal information.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">9. Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">10. Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. Your continued use of our services after any changes constitutes acceptance of the updated policy.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">11. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy or our data practices, please contact us at:
                </p>
                <p className="text-muted-foreground mt-4">
                  <strong>Alprosper</strong><br />
                  Email: privacy@alprosper.com
                </p>
              </section>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;
