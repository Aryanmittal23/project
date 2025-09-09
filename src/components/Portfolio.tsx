import Image from "next/image";
import { ExternalLink, MapPin, Calendar } from "lucide-react";

export function Portfolio() {
  const projects = [
    {
      title: "Grand Royal Hotel",
      location: "Dubai, UAE",
      year: "2023",
      type: "Commercial",
      description:
        "Luxurious marble lobby and reception areas featuring Carrara White marble with gold veining",
      image:
        "/Grand-royal-hotel.jpeg", // make sure this image is in /public folder,
      materials: ["Carrara White", "Gold Veining"],
    },
    {
      title: "Metropolitan Office Tower",
      location: "New York, USA",
      year: "2023",
      type: "Commercial",
      description:
        "Modern granite façade and interior applications showcasing Black Galaxy granite",
      image:
        "/Metropolitan-Office-Tower.jpeg",
      materials: ["Black Galaxy", "Polished Finish"],
    },
    {
      title: "Luxury Private Residence",
      location: "London, UK",
      year: "2022",
      type: "Residential",
      description:
        "Elegant marble kitchen and bathroom installations with premium Calacatta marble",
      image:
        "/Luxury-Private-Residence.jpeg",
      materials: ["Calacatta Gold", "Honed Finish"],
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block border px-3 py-1 text-sm rounded mb-4">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl mb-6 font-bold">
              Featured Projects Around the World
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our remarkable projects spanning luxury hotels, prestigious office
              buildings, and exclusive residential developments across the globe.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group border rounded-xl overflow-hidden shadow-sm bg-white"
              >
                <div className="relative overflow-hidden h-64 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-2 py-1 text-xs rounded ${
                        project.type === "Commercial"
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200 text-gray-800"
                      }`}
                    >
                      {project.type}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <button className="p-2 rounded-full opacity-0 group-hover:opacity-100 transition">
                      <ExternalLink className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>

                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="mr-4">{project.location}</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{project.year}</span>
                  </div>

                  <p className="text-sm text-gray-600 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.materials.map((material, materialIndex) => (
                      <span
                        key={materialIndex}
                        className="px-2 py-1 text-xs border rounded"
                      >
                        {material}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              View All Projects
              <ExternalLink className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
