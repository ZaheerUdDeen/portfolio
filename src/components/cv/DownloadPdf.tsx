import React, { useEffect, useState } from 'react';
import jsPDF from "jspdf";


interface Props {
    downloadLink: string;
  }
  
  const DownloadPdfCV: React.FC<Props> = ({ downloadLink }) => {
    const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleDownload = () => {
    console.info("downloading..")
    const link = document.createElement('a');
    link.href = downloadLink;
    link.download = 'ZaheerResume.pdf'; // replace 'filename.pdf' with your desired filename
    link.click();
  };

  return (
    <div style={{display: 'inline-block', marginLeft: '10px'}}>
      {isHovered && <span style={{position: 'absolute'}}>Download</span>}
      <span 
  style={{fontSize: '1.2em', verticalAlign: 'middle', cursor: 'pointer'}}
  onMouseEnter={() => console.log("Mouse entered")}
  onMouseLeave={() => console.log("Mouse left")}
  onClick={() => console.log("Clicked")}
>
  ⬇
</span>
    </div>
  );
};

export default DownloadPdfCV;