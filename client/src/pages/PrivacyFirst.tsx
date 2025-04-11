
import { Link } from "react-router-dom";
import { 
  Shield, 
  Lock, 
  Check, 
  Server, 
  FileCode, 
  Database, 
  Eye, 
  Code, 
  FileKey,
  Terminal 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PrivacyFirst = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center bg-finance-green-light/30 text-finance-green-dark px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <Shield size={16} className="mr-1" />
                  <span>Privacy By Design</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="gradient-text">How We Protect Your Privacy</span>
                </h1>
                <p className="text-xl text-gray-600">
                  Financial Time Machine was built with privacy as its foundation. Here's proof of how we keep your data secure and private.
                </p>
              </div>

              <div className="glass-card p-8 md:p-10 mb-12">
                <div className="flex flex-col md:flex-row items-center mb-8">
                  <div className="bg-finance-green-light/50 w-16 h-16 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6">
                    <Lock size={32} className="text-finance-green" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold mb-2 text-center md:text-left">Local Processing</h2>
                    <p className="text-gray-700 leading-relaxed">
                      Unlike most financial tools, Financial Time Machine processes all your data directly in your browser. Your sensitive financial information never leaves your device and is never sent to our servers.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="bg-finance-green-light/30 w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                        <FileCode size={20} className="text-finance-green" />
                      </div>
                      <h3 className="text-lg font-semibold">Client-Side Computation</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      All calculations, projections, and analysis happen on your device using JavaScript. This means your data stays with you.
                    </p>
                    <div className="bg-gray-50 p-3 rounded border border-gray-100 font-mono text-xs overflow-x-auto">
                      <code>// Example of client-side processing<br />
                      function calculateProjection(userData) {'{'}<br />
                      &nbsp;&nbsp;// All processing happens locally<br />
                      &nbsp;&nbsp;const results = [...]; <br />
                      &nbsp;&nbsp;return results;<br />
                      {'}'}</code>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="bg-finance-green-light/30 w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                        <Database size={20} className="text-finance-green" />
                      </div>
                      <h3 className="text-lg font-semibold">Local Storage Only</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Your data is stored only in your browser's local storage, which means it remains on your device and is not accessible to us or third parties.
                    </p>
                    <div className="bg-gray-50 p-3 rounded border border-gray-100 font-mono text-xs overflow-x-auto">
                      <code>// Example of local storage usage<br />
                      localStorage.setItem('userFinancialData', <br />
                      &nbsp;&nbsp;JSON.stringify(encryptedData));<br />
                      // Data never leaves your device</code>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8 md:p-10 mb-12">
                <h2 className="text-2xl font-semibold mb-6">Security Measures We Implement</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-finance-green-light/50 w-10 h-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Eye size={20} className="text-finance-green" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">No Analytics or Tracking</h3>
                      <p className="text-gray-600">
                        We don't use any analytics, tracking cookies, or user behavior monitoring in our application. Your usage patterns are completely private.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-finance-green-light/50 w-10 h-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Server size={20} className="text-finance-green" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">No Backend Data Collection</h3>
                      <p className="text-gray-600">
                        Our application has no backend database that stores user information. Everything runs in your browser, and we have no way to access your data.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-finance-green-light/50 w-10 h-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <FileKey size={20} className="text-finance-green" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Local Encryption</h3>
                      <p className="text-gray-600">
                        Any data saved to your browser's local storage is encrypted using AES-256 encryption, providing an additional layer of security.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8 md:p-10 mb-12">
                <h2 className="text-2xl font-semibold mb-6">Transparent Code</h2>
                <p className="text-gray-700 mb-6">
                  We believe in transparency. Our code is open for inspection, allowing you to verify our privacy claims directly.
                </p>
                
                <div className="flex items-center mb-6">
                  <div className="bg-finance-blue-light/50 w-10 h-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Code size={20} className="text-finance-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">No Network Requests with Your Data</h3>
                    <p className="text-gray-600">
                      You can verify through your browser's network tab that we never send your financial information to any server.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <h4 className="text-lg font-medium mb-4">Verify It Yourself</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="bg-finance-green-light/30 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <Terminal size={16} className="text-finance-green" />
                      </div>
                      <div>
                        <p className="text-gray-700">
                          <span className="font-medium">Open Developer Tools:</span> Press F12 or right-click and select "Inspect" in your browser.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-finance-green-light/30 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <Terminal size={16} className="text-finance-green" />
                      </div>
                      <div>
                        <p className="text-gray-700">
                          <span className="font-medium">Check Network Tab:</span> Go to the Network tab and observe that no sensitive data is transmitted while using the application.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-finance-green-light/30 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <Terminal size={16} className="text-finance-green" />
                      </div>
                      <div>
                        <p className="text-gray-700">
                          <span className="font-medium">Check Application Tab:</span> Look at the Local Storage section to see how your data is stored locally.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-6">Frequently Asked Privacy Questions</h2>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg font-medium">How do you make money if you don't sell my data?</AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      We offer premium features and additional capabilities through a subscription model. Our business model is built around providing value directly to users, not monetizing their data.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-lg font-medium">What happens to my data if I clear my browser cache?</AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      Since all data is stored locally in your browser, clearing your cache will remove your saved financial information. We recommend exporting your data periodically if you want to keep it.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-lg font-medium">How does the AI advisor work without accessing my data?</AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      Our AI advisor runs entirely in your browser. The machine learning models are downloaded to your device, and all processing happens locally without sending your data to external servers.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-lg font-medium">Is my data shared between devices?</AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      No, because we don't use any central server to store your data. You would need to manually export your data from one device and import it on another if you want to use multiple devices.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-lg font-medium">What information do you collect about me?</AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      Absolutely nothing. We don't collect any personal, financial, or usage data. We don't know who uses our application or how they use it.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="bg-finance-green-light/20 rounded-xl p-6 flex items-center">
                <Shield size={24} className="text-finance-green mr-4 flex-shrink-0" />
                <p className="text-gray-700 italic">
                  "We built Financial Time Machine with the privacy we would want for our own financial data. We believe that financial planning tools should help you make better decisions, not exploit your information."
                </p>
              </div>
              
              <div className="mt-12 text-center">
                <Button className="bg-finance-blue hover:bg-finance-blue-dark">
                  <Link to="/dashboard" className="flex items-center">
                    <span>Try Financial Time Machine</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyFirst;
