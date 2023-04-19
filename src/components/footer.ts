const cutoutStyle = `
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 50%; /* Adjust this value to change the size of the cutout */
  height: 100%;
  background-color: white;
  clip-path: polygon(0 0, 100% 0, 0 100%);
`;