import { Helmet } from "react-helmet";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Shield, Lock, Eye, Server, CheckCircle, AlertTriangle } from "lucide-react";

const Security = () => {
  return (
    <>
      <Helmet>
        <title>Security | Alprosper</title>
        <meta name="description" content="Alprosper's Security - Learn about our security practices, data protection measures, and commitment to keeping your information safe." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-2xl bg-primary/10">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                Security
              </h1>
            </div>
            
            <p className="text-muted-foreground mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            {/* Security Overview Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 rounded-2xl border border-border bg-card">
                <Lock className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-display font-semibold text-foreground mb-2">Encrypted Data</h3>
                <p className="text-sm text-muted-foreground">All data is encrypted at rest and in transit using industry-standard protocols.</p>
              </div>
              <div className="p-6 rounded-2xl border border-border bg-card">
                <Eye className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-display font-semibold text-foreground mb-2">Privacy First</h3>
                <p className="text-sm text-muted-foreground">Your data is never sold or shared with third parties for marketing purposes.</p>
              </div>
              <div className="p-6 rounded-2xl border border-border bg-card">
                <Server className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-display font-semibold text-foreground mb-2">Secure Infrastructure</h3>
                <p className="text-sm text-muted-foreground">Hosted on enterprise-grade infrastructure with 99.9% uptime guarantee.</p>
              </div>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
              <section>
                <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">1. Our Security Commitment</h2>
                <p className="text-muted-foreground leading-relaxed">
                  At Alprosper, security is at the core of everything we do. We understand that you trust us with your business data, and we take that responsibility seriously. Our security program is designed to protect your information while enabling you to leverage the full power of our automation solutions.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">2. Data Encryption</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We employ robust encryption measures to protect your data:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>In Transit:</strong> All data transmitted between your browser and our servers is encrypted using TLS 1.3 (Transport Layer Security).</li>
                  <li><strong>At Rest:</strong> Data stored in our databases is encrypted using AES-256 encryption.</li>
                  <li><strong>Backup Encryption:</strong> All backups are encrypted and stored in geographically distributed secure locations.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">3. Infrastructure Security</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our infrastructure is built with security in mind:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Cloud Hosting:</strong> We use enterprise-grade cloud providers with SOC 2 Type II certification.</li>
                  <li><strong>Network Security:</strong> Firewalls, intrusion detection systems, and DDoS protection are in place.</li>
                  <li><strong>Access Controls:</strong> Strict access controls and multi-factor authentication for all internal systems.</li>
                  <li><strong>Regular Audits:</strong> We conduct regular security audits and penetration testing.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">4. Application Security</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our applications are developed with security best practices:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Secure Development:</strong> We follow OWASP guidelines and conduct code reviews for all changes.</li>
                  <li><strong>Vulnerability Scanning:</strong> Automated security scanning is integrated into our development pipeline.</li>
                  <li><strong>Dependency Management:</strong> Regular updates and monitoring of third-party dependencies.</li>
                  <li><strong>Session Management:</strong> Secure session handling with automatic timeout and invalidation.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">5. Access Management</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We implement strict access controls:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Principle of Least Privilege:</strong> Employees only have access to data necessary for their role.</li>
                  <li><strong>Multi-Factor Authentication:</strong> Required for all internal systems and administrative access.</li>
                  <li><strong>Access Logging:</strong> All access to sensitive data is logged and monitored.</li>
                  <li><strong>Regular Reviews:</strong> Access permissions are reviewed quarterly.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">6. Data Protection</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Your data is protected through multiple layers:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Data Isolation:</strong> Customer data is logically separated and isolated.</li>
                  <li><strong>Backup & Recovery:</strong> Regular automated backups with tested recovery procedures.</li>
                  <li><strong>Data Retention:</strong> Clear data retention policies with secure deletion when no longer needed.</li>
                  <li><strong>Data Portability:</strong> You can export your data at any time.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">7. Incident Response</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We have a comprehensive incident response plan:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>24/7 Monitoring:</strong> Continuous monitoring for security threats and anomalies.</li>
                  <li><strong>Rapid Response:</strong> Dedicated security team ready to respond to incidents.</li>
                  <li><strong>Communication:</strong> Timely notification to affected customers in case of security incidents.</li>
                  <li><strong>Post-Incident Analysis:</strong> Thorough investigation and implementation of preventive measures.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">8. Compliance</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We maintain compliance with industry standards and regulations:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>GDPR:</strong> Full compliance with the General Data Protection Regulation.</li>
                  <li><strong>CCPA:</strong> Compliance with the California Consumer Privacy Act.</li>
                  <li><strong>SOC 2:</strong> Working towards SOC 2 Type II certification.</li>
                  <li><strong>Industry Best Practices:</strong> Alignment with NIST and ISO 27001 frameworks.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">9. Employee Security</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our team is trained and equipped to handle security:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Background Checks:</strong> All employees undergo thorough background checks.</li>
                  <li><strong>Security Training:</strong> Regular security awareness training for all staff.</li>
                  <li><strong>Confidentiality:</strong> All employees sign confidentiality agreements.</li>
                  <li><strong>Secure Workstations:</strong> Company devices are encrypted and managed.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">10. Reporting Security Issues</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We value the security research community and encourage responsible disclosure. If you discover a security vulnerability, please report it to us:
                </p>
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                  <p className="text-muted-foreground">
                    <strong>Email:</strong> security@alprosper.com<br />
                    <strong>Response Time:</strong> We aim to acknowledge reports within 24 hours.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4 text-foreground">11. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about our security practices, please contact us at:<br /><br />
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

export default Security;
