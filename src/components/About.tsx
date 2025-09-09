import { Globe, Award, Users, Truck } from "lucide-react";
import Image from "next/image";

export function About() {
  const features = [
    {
      icon: Globe,
      title: "Global Presence",
      description: "Supplying premium marble to 40+ countries worldwide",
    },
    {
      icon: Award,
      title: "Unmatched Quality",
      description: "ISO-certified processes ensuring world-class standards",
    },
    {
      icon: Users,
      title: "Skilled Expertise",
      description: "Dedicated team of artisans and industry professionals",
    },
    {
      icon: Truck,
      title: "Seamless Delivery",
      description: "Reliable logistics and on-time global shipments",
    },
  ];

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <span className="inline-block border px-3 py-1 rounded-full text-sm text-gray-600 mb-4">
                About Marmilix
              </span>
              <h2 className="text-3xl sm:text-4xl mb-6 font-bold">
                Crafting Luxury in Marble for Over 35 Years
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Since 1985, Marmilix has transformed natural stone into timeless elegance.
                From quarries in India to architectural marvels across the globe,
                we are trusted by architects, builders, and designers for our commitment
                to superior quality, innovation, and customer satisfaction.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <feature.icon className="h-5 w-5 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">{feature.title}</h3>
                      <p className="text-sm text-gray-500">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl">
                <img
  src="/about-page.jpeg"
  alt="Description"
  className="w-full h-full object-cover"
/>
              </div>

              {/* Overlay Card */}
              <div className="absolute -bottom-6 -left-6 bg-white shadow-lg rounded-xl p-6">
                <div className="flex items-center space-x-4">
                  <div>
                    <div className="text-2xl font-bold mb-1">35+</div>
                    <div className="text-sm text-gray-500">Years of Excellence</div>
                  </div>
                  <div className="w-px h-12 bg-gray-200"></div>
                  <div>
                    <div className="text-2xl font-bold mb-1">98%</div>
                    <div className="text-sm text-gray-500">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
