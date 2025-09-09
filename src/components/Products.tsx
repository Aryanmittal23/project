import { ArrowRight, Mountain, Home, Building2, Palette } from "lucide-react";
import Image from "next/image";

export function Products() {
  const products = [
    {
      icon: Mountain,
      title: "Premium Marble",
      description:
        "Luxurious marble varieties sourced from the finest quarries worldwide",
      features: ["Carrara White", "Calacatta Gold", "Emperador Dark", "Travertine"],
      image:
        "/Premium-marble.jpeg" // make sure this image is in /public folder,
    },
    {
      icon: Palette,
      title: "Exotic Granite",
      description:
        "Durable and stunning granite options for residential and commercial use",
      features: ["Black Galaxy", "Kashmir White", "Absolute Black", "Tan Brown"],
      image:
        "/Exotic-granite.jpeg" // make sure this image is in /public folder,
    },
  ];

  const applications = [
    {
      icon: Home,
      title: "Residential",
      description:
        "Kitchen countertops, bathroom vanities, flooring, and decorative elements",
    },
    {
      icon: Building2,
      title: "Commercial",
      description:
        "Office buildings, hotels, restaurants, and retail spaces",
    },
  ];

  return (
    <section id="products" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block border px-3 py-1 text-sm rounded mb-4">
              Our Products
            </span>
            <h2 className="text-3xl sm:text-4xl mb-6 font-bold">
              Premium Natural Stone Collection
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our extensive range of marble and granite varieties, carefully
              selected from the world's finest quarries to meet the highest quality
              standards.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {products.map((product, index) => (
              <div
                key={index}
                className="border rounded-xl overflow-hidden shadow-sm bg-white"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <product.icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold">{product.title}</h3>
                    <button className="p-2 rounded-full hover:bg-gray-100 transition">
                      <ArrowRight className="h-5 w-5 text-gray-600" />
                    </button>
                  </div>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-2 py-1 text-xs rounded bg-gray-100"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Applications */}
          <div>
            <h3 className="text-2xl mb-8 text-center font-semibold">
              Perfect for Every Application
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {applications.map((app, index) => (
                <div
                  key={index}
                  className="border rounded-xl p-6 bg-white shadow-sm"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <app.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{app.title}</h4>
                      <p className="text-gray-600">{app.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
