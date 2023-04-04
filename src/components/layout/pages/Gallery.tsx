import React, { useState } from "react";
import { Card, Grid, Pagination } from "@nextui-org/react";

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [page, setPage] = useState(1);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const startIdx = (page - 1) * 3;
  const imagesToDisplay = images.slice(startIdx, startIdx + 3);

  return (
    <>
      <Grid.Container gap={1}>
        {imagesToDisplay.map((image, index) => (
          <Grid key={index} xs={12} sm={4}>
            <Card>
              <img src={image} alt={`image-${index}`} width="100%" height="auto" />
            </Card>
          </Grid>
        ))}
      </Grid.Container>
      <div style={{ marginTop: "16px", textAlign: "center" }}>
        <Pagination
          total={Math.ceil(images.length / 3)}
          onChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default Gallery;
