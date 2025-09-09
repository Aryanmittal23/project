import { Phone, Mail, MapPin, Clock, Globe, Send } from "lucide-react";

export function Contact() {
  const offices = [
    {
      region: "North America",
      address: "123 Marble Avenue, New York, NY 10001",
      phone: "+1 (555) 123-4567",
      email: "usa@marmilix.com",
    },
    {
      region: "Europe",
      address: "456 Stone Street, London EC1A 1BB, UK",
      phone: "+44 20 7123 4567",
      email: "europe@marmilix.com",
    },
    {
      region: "Asia Pacific",
      address: "789 Granite Road, Singapore 018956",
      phone: "+65 6123 4567",
      email: "asia@marmilix.com",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 border border-gray-300 text-sm font-medium rounded-full text-gray-700 mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let’s Discuss Your Project
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to transform your space with premium natural stone? Get in
            touch with our global team for expert consultation and personalized
            solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-2xl p-8 border">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Request a Quote
            </h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company (Optional)
                </label>
                <input
                  type="text"
                  placeholder="Your Company Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Type
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none">
                  <option>Select project type</option>
                  <option>Residential - Kitchen</option>
                  <option>Residential - Bathroom</option>
                  <option>Residential - Flooring</option>
                  <option>Commercial - Office</option>
                  <option>Commercial - Hotel</option>
                  <option>Commercial - Retail</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project requirements..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium"
              >
                Send Inquiry
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Global Offices */}
            <div>
              <h3 className="text-xl font-semibold flex items-center text-gray-900 mb-6">
                <Globe className="h-5 w-5 mr-2 text-blue-600" />
                Global Offices
              </h3>
              <div className="space-y-4">
                {offices.map((office, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-md rounded-xl p-5 border hover:shadow-lg transition"
                  >
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded mb-3">
                      {office.region}
                    </span>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div className="flex items-start">
                        <MapPin className="h-4 w-4 mr-2 mt-0.5 text-gray-500" />
                        <span>{office.address}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-gray-500" />
                        <span>{office.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 mr-2 text-gray-500" />
                        <span>{office.email}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white shadow-md rounded-xl p-6 border">
              <h3 className="text-lg font-semibold flex items-center text-gray-900 mb-4">
                <Clock className="h-5 w-5 mr-2 text-blue-600" />
                Business Hours
              </h3>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t text-xs text-gray-500">
                * Times shown are local to each office. For urgent inquiries
                outside business hours, please send an email and we’ll respond
                within 24 hours.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
