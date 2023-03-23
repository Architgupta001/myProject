import ReactFlow, {
  Background,
  BackgroundVariant,
  // removeElements,
  addEdge,
  Edge,
  // Elements,
  
  Connection,
  MiniMap,
  Controls,
  Node,
} from "react-flow-renderer";
import React, { useState } from "react";

import Navbar from "../../components/NavBar/Navbar";

import GrayscaleNode from "../../components/CustomNodes/GrayscaleNode/GrayscaleNode";
import ImageInputNode from "../../components/CustomNodes/InputImageNode/InputImageNode";
import SaturationNode from "../../components/CustomNodes/SaturationNode/SaturationNode";
import FilmGrainNode from "../../components/CustomNodes/FilmGrainNode/FilmGrainNode";


const initialElements = [
  {
    id: "1",
    type: "imageInput",
    position: { x: 100, y: 100 },
    data: {},
  },
  {
    id: "2",
    type: "grayscale",
    position: { x: 300, y: 300 },
    data: { percent: 57 },
  },
  {
    id: "3",
    type: "saturation",
    position: { x: 600, y: 50 },
    data: { percent: 45 },
  },
  {
    id: "4",
    type: "filmGrain",
    position: { x: 1000, y: 250 },
    data: { percent: 15 },
  },
];

const nodeTypes = {
  grayscale: GrayscaleNode,
  saturation: SaturationNode,
  imageInput: ImageInputNode,
  filmGrain: FilmGrainNode,
};

const nodeColor = (node:any) => {
  switch (node.type) {
    case 'input':
      return '#6ede87';
    case 'output':
      return '#6865A5';
    default:
      return '#ff0072';
  }
};


const Editor = () => {
  const [elements, setElements] = useState(initialElements);

  // const onConnect = (params: Edge<any> | Connection) =>
  //   setElements((els:any) =>
  //     addEdge({ ...params, animated: true }, els)
  //   );

  // const onConnect = (params: Edge<any> | Connection) =>
  //   setElements((els:any) =>
  //     addEdge(params, els)
  //   );

  // const onElementsRemove = (elementsToRemove: Elements<any>) =>
  //   setElements((els: Elements<any>) => removeElements(elementsToRemove, els));

  const logElements = () => {
    console.log(elements);
  };

  return (
    <div style={{ marginTop: "4rem" }}>
      <Navbar />
      <div style={{ height: 600 }}>
        <ReactFlow
          nodes={elements}
          
          nodeTypes={nodeTypes}
          // onConnect={onConnhyect}
          // onElementsRemove={onElementsRemove}
          
          deleteKeyCode={["Backspace","Delete"]}
        >
          <MiniMap
            nodeColor={nodeColor} 
            nodeStrokeWidth={2}
            style={{border: '1px solid gray' }} 
            nodeBorderRadius={4}
          />
          <Background
            variant={BackgroundVariant.Dots}
            gap={15}
            size={0.66}
            color="#aaa"
          />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
};

export default Editor;