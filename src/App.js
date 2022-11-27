import * as React from "react";
import './App.css';
import { Whiteboard } from "react-whiteboard";

const App = () => {
  const [files, setFiles] = React.useState({});
  const [resendFiles, setResendFiles] = React.useState(false);

  const [canvasJSON, setCanvasJSON] = React.useState({});

  React.useEffect(() => {
    if (Object.values(files).length > 0) {
      if (resendFiles) {

      }
      console.log(Object.values(files));
      console.log(canvasJSON);
      // for (let i = 0; i < Object.values(files).length; i++) {
      //   saveAs(Object.values(files)[i], `page${i + 1}.png`);
      // }
    }
    // eslint-disable-next-line
  }, [files, resendFiles])

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