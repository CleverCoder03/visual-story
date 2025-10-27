import React from "react";
import GallerySLider from "./GallerySlider";
import { projects } from "../constants";
 // Import your projects data

const Gallery = () => {
  return (
    <div className="px-6 md:px-10 lg:px-18 xl:px-28 pt-15 lg:pt-25">
      {/* Map over the projects array */}
      {projects.map((project) => (
        // Add a key for each project and some margin for spacing
        <div key={project.id} className="mb-16 lg:mb-24">
          <div>
            <div>
              <h1 className="text-center lg:text-left text-4xl font-serif font-bold text-pink-600">
                {project.title} {/* Dynamic Title */}
              </h1>
              <div className="mt-5 lg:mt-10">
                <p className="font-sans text-center lg:text-left">
                  {project.desc} {/* Dynamic Description */}
                </p>
              </div>
            </div>
            <div className="mt-10 lg:mt-15">
              {/* Pass the project's specific images array as a prop */}
              <GallerySLider images={project.images} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;