// pages/gallery.tsx
import React from "react";
import Navbar from "@/components/Navbar";

import type { NextPage } from "next";
import Gallery from "@/components/layout/pages/Gallery";
import images from "@/components/navbar/gallery_images";

const GalleryPage: NextPage = () => {
  return (
    <div>
      <Navbar />
      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "16px" }}>
        <Gallery images={images} />
      </div>
    </div>
  );
};

export default GalleryPage;
