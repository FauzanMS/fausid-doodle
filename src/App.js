import * as React from "react";
import './App.css';
import { fileToImageURL, generatePdfFromImages } from "./utils/helpers.tsx";
import { Whiteboard } from "react-whiteboard";
import {saveAs} from "file-saver";

const App = () => {
  const [files, setFiles] = React.useState({});
  const [resendFiles, setResendFiles] = React.useState(false);

  const [canvasJSON, setCanvasJSON] = React.useState({});

  const [uploadedImages, setUploadedImages] = React.useState([]);

  const cleanUpUploadedImages = React.useCallback(() => {
    setUploadedImages([]);
    uploadedImages.forEach((image) => {
      URL.revokeObjectURL(image.src);
    });
    // eslint-disable-next-line
  }, [setUploadedImages, uploadedImages]);

  const handleImageUpload = (files) => {
    const fileList = files;
    const fileArray = fileList ? Array.from(fileList) : [];
    const fileToImagePromises = fileArray.map(fileToImageURL);

    Promise.all(fileToImagePromises).then(setUploadedImages);
  }


  React.useEffect(() => {
    if (uploadedImages.length > 0) {
      generatePdfFromImage(uploadedImages);
    }
    // eslint-disable-next-line
  }, [uploadedImages])

  React.useEffect(() => {
    const pdfFunc = async () => {
      handleImageUpload(Object.values(files));
    }

    if (Object.values(files).length > 0) {
      pdfFunc();
    }
    // eslint-disable-next-line
  }, [files]);


  const generatePdfFromImage = React.useCallback((uploadedImages) => {
    if (uploadedImages.length > 0) {
      const pdf = generatePdfFromImages(uploadedImages);
      console.log(canvasJSON,resendFiles);
      saveAs(pdf,"p1.pdf");
    }
    // eslint-disable-next-line
  }, [uploadedImages, cleanUpUploadedImages]);



  const color = [
    {
      title: 'red',
      color: '#ff0019'
    },
    {
      title: 'yellow',
      color: '#ffc400'
    },
    {
      title: 'black',
      color: '#000000'
    },
    {
      title: 'green',
      color: '#59ff0d'
    },
    {
      title: 'pink',
      color: '#f700ff'
    },
    {
      title: 'purple',
      color: '#8000ff'
    },
    {
      title: 'cyan',
      color: '#00c9c3'
    },
    {
      title: 'blue',
      color: '#021ff7'
    },
  ]

  const width = window.innerWidth > 610 ? 610 : window.innerWidth;
  const height = window.innerHeight > 670 ? 670 : window.innerHeight;

  return (
    <div>
      <main>
        <Whiteboard aspectRatio={width / (height)} pdf="" setFiles={setFiles} setResendFiles={setResendFiles} color={color} setJSON={setCanvasJSON} pdfUrl="" resend={true} revision={false} buttonFlag={true} />
      </main>
    </div>
  );
};

export default App;