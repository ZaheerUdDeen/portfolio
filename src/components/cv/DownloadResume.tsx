import React, { useEffect } from 'react';
import jsPDF from "jspdf";

const DownloadCV = ({ pagePath }) => {
  useEffect(() => {
    const downloadButton = document.querySelector("#downloadButton");

    if (downloadButton) {
      downloadButton.addEventListener('click', () => {
        // const contentToDownload = document.querySelector(`[data-page-path="${pagePath}"]`);
        const cvLink = document.getElementById("cv")
        if (cvLink instanceof HTMLElement) {
          const pdf = new jsPDF();
          pdf.html(cvLink, {
            callback: (pdf) => {
              pdf.save("resume.pdf");
            }
          });
        }
      });
    }
  }, [pagePath]);

  return (
    <button id="downloadButton">Download PDF</button>
  );
};

export default DownloadCV;
