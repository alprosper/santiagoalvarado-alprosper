import { Helmet } from "react-helmet";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const GDPR = () => {
  return (
    <>
      <Helmet>
        <title>GDPR Compliance | Alprosper</title>
        <meta name="description" content="Alprosper's GDPR Compliance - Learn how we comply with the General Data Protection Regulation and protect your data rights." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-8 text-foreground">
              GDPR Compliance
            </h1>
            
            <p className="text-muted-foreground mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
              <section>
                <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Alprosper LLC ("we," "our," or "us") is committed to complying with the General Data Protection Regulation (GDPR). This page explains how we handle personal data of individuals in the European Economic Area (EEA) and the rights you have under GDPR.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">2. Data Controller</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Alprosper LLC acts as the data controller for personal data collected through our website and services. We determine the purposes and means of processing your personal data.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">3. Legal Basis for Processing</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We process your personal data based on one or more of the following legal grounds:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Consent:</strong> You have given clear consent for us to process your personal data for a specific purpose.</li>
                  <li><strong>Contract:</strong> Processing is necessary for a contract we have with you, or because you have asked us to take specific steps before entering into a contract.</li>
                  <li><strong>Legal Obligation:</strong> Processing is necessary for us to comply with the law.</li>
                  <li><strong>Legitimate Interests:</strong> Processing is necessary for our legitimate interests or the legitimate interests of a third party, unless there is a good reason to protect your personal data which overrides those interests.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">4. Your Rights Under GDPR</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  As an individual in the EEA, you have the following rights regarding your personal data:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Right of Access:</strong> You have the right to request copies of your personal data.</li>
                  <li><strong>Right to Rectification:</strong> You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.</li>
                  <li><strong>Right to Erasure:</strong> You have the right to request that we erase your personal data, under certain conditions.</li>
                  <li><strong>Right to Restrict Processing:</strong> You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
                  <li><strong>Right to Object:</strong> You have the right to object to our processing of your personal data, under certain conditions.</li>
                  <li><strong>Right to Data Portability:</strong> You have the right to request that we transfer the data we have collected to another organization, or directly to you, under certain conditions.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">5. Data We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may collect and process the following categories of personal data:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Identity Data:</strong> First name, last name, username, or similar identifier.</li>
                  <li><strong>Contact Data:</strong> Email address, telephone numbers, and business address.</li>
                  <li><strong>Technical Data:</strong> IP address, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform.</li>
                  <li><strong>Usage Data:</strong> Information about how you use our website and services.</li>
                  <li><strong>Marketing Data:</strong> Your preferences in receiving marketing from us and your communication preferences.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">6. Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements. To determine the appropriate retention period for personal data, we consider the amount, nature, and sensitivity of the personal data, the potential risk of harm from unauthorized use or disclosure, the purposes for which we process your data, and whether we can achieve those purposes through other means.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">7. International Transfers</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your personal data may be transferred to, and processed in, countries other than the country in which you are resident. These countries may have data protection laws that are different from the laws of your country. We take appropriate safeguards to require that your personal data will remain protected in accordance with GDPR, including through the use of Standard Contractual Clauses approved by the European Commission.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">8. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We have implemented appropriate technical and organizational security measures designed to protect your personal data against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, unauthorized access, and other unlawful or unauthorized forms of processing. These measures include encryption, access controls, and regular security assessments.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">9. Data Breach Notification</h2>
                <p className="text-muted-foreground leading-relaxed">
                  In the event of a personal data breach that is likely to result in a risk to your rights and freedoms, we will notify the relevant supervisory authority within 72 hours of becoming aware of the breach. If the breach is likely to result in a high risk to your rights and freedoms, we will also notify you directly.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">10. Exercising Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To exercise any of your rights under GDPR, please contact us using the information below. We will respond to your request within one month. In certain circumstances, we may extend this period by two months if your request is complex or if you have made multiple requests.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Email:</strong> privacy@alprosper.com<br />
                  <strong>Address:</strong> Alprosper LLC, United States
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">11. Right to Lodge a Complaint</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you believe that we have not complied with your data protection rights, you have the right to lodge a complaint with a supervisory authority. You may contact the supervisory authority in the EU Member State where you live, work, or where the alleged infringement took place.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">12. Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this GDPR compliance page from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. You are advised to review this page periodically for any changes.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">13. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this GDPR compliance page or our data protection practices, please contact us at:<br /><br />
                  <strong>Email:</strong> support@alprosper.com<br />
                  <strong>Website:</strong> alprosper.com
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

export default GDPR;
