import { Helmet } from "react-helmet";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Alprosper</title>
        <meta name="description" content="Alprosper's Terms of Service - Read our terms and conditions for using our automation services." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Terms of Service
            </h1>
            
            <p className="text-muted-foreground mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
              <section>
                <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">1. Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using Alprosper's website and services, you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access our services. These Terms apply to all visitors, users, and clients of our automation consulting services.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">2. Description of Services</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Alprosper provides automation consulting and implementation services, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Business process automation analysis and strategy</li>
                  <li>AI workflow design and implementation</li>
                  <li>Integration with existing business systems</li>
                  <li>Custom automation solutions development</li>
                  <li>Training and ongoing support</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">3. User Responsibilities</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When using our services, you agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the confidentiality of any account credentials</li>
                  <li>Use our services only for lawful purposes</li>
                  <li>Not interfere with or disrupt our services or servers</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Respect intellectual property rights</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">4. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Unless otherwise agreed in writing:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>All content on our website, including text, graphics, logos, and software, is owned by AL Prosper and protected by intellectual property laws.</li>
                  <li>Custom solutions developed for clients remain the property of the client upon full payment, unless otherwise specified in the service agreement.</li>
                  <li>AL Prosper retains the right to use general knowledge, techniques, and methodologies developed during client engagements.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">5. Payment Terms</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For paid services:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Payment terms will be outlined in individual service agreements</li>
                  <li>Invoices are due within the timeframe specified in the agreement</li>
                  <li>Late payments may incur additional fees as specified in the service agreement</li>
                  <li>We reserve the right to suspend services for overdue accounts</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">6. Confidentiality</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We understand the sensitive nature of business information shared during our engagements. Both parties agree to maintain confidentiality of proprietary information disclosed during the course of our working relationship. Specific confidentiality terms will be outlined in individual service agreements or separate Non-Disclosure Agreements (NDAs).
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">7. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To the maximum extent permitted by law:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>AL Prosper shall not be liable for any indirect, incidental, special, consequential, or punitive damages.</li>
                  <li>Our total liability shall not exceed the amount paid for the specific services giving rise to the claim.</li>
                  <li>We are not responsible for any third-party services or integrations.</li>
                  <li>Results from AI automation implementations may vary based on individual business circumstances.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">8. Disclaimer of Warranties</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are provided "as is" and "as available" without warranties of any kind, either express or implied. While we strive to deliver high-quality automation solutions, we do not guarantee specific results, cost savings, or performance improvements. The effectiveness of automation implementations depends on various factors including existing systems, data quality, and organizational adoption.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">9. Termination</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Either party may terminate services:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>With written notice as specified in the service agreement</li>
                  <li>Immediately if the other party breaches these Terms or the service agreement</li>
                  <li>Upon completion of the agreed-upon services</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Upon termination, you remain responsible for any outstanding payments, and provisions regarding confidentiality and intellectual property shall survive.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">10. Indemnification</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You agree to indemnify and hold harmless AL Prosper, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of our services, violation of these Terms, or infringement of any third-party rights.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">11. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which AL Prosper operates, without regard to conflict of law principles. Any disputes arising from these Terms shall be resolved through binding arbitration or in the courts of the applicable jurisdiction.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">12. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after any changes constitutes acceptance of the new Terms. We encourage you to review these Terms periodically.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">13. Severability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">14. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these Terms of Service, please contact us at:
                </p>
                <p className="text-muted-foreground mt-4">
                  <strong>Alprosper</strong><br />
                  Email: legal@alprosper.com
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

export default TermsOfService;
