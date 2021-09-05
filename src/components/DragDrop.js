import React, { useState } from "react";
import DragBlock from "./DragBlock";
import { useDrop } from "react-dnd";
import "../App.css";
import DropZone from "./DropZone"
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


const BlockList = [

  {
    id: 1,
    description: "Meeting",
    ranking: 3
  },
  {
    id: 2,
    description: "Dance",
    ranking: 2
  },
  {
    id: 3,
    description: "Hoover",
    ranking: 1
  },
];
const zones = {"zone-1": 1, "zone-2": 2, "zone-3": 3}

function DragDrop() {
  const [blocks, setBlocks] = useState(BlockList);

//   const [{ isOver }, drop] = useDrop(() => ({
//     accept: "button",
//     drop: (item) => addBlockToBoard(item.id),
//     collect: (monitor) => ({
//       isOver: !!monitor.isOver(),
//     }),
//   }));

const moveBlock = (blockId, dropZoneId) => {
  
  //get the id of the block that is dragging
  const draggedBlock = blocks.filter((block) => blockId === block.id);
  //determine destination of dragged block
  console.log("moveblock blockId", blockId);
  console.log("dropId Id", dropZoneId);
  //change ranking of block
  let newRanking = zones[dropZoneId];
  draggedBlock[0].ranking = newRanking;
  console.log(draggedBlock);
  //copy state
  let newBlocks = [...blocks];
  //replace old block with new block
  let index = blocks.map(function(e) { return e.id; }).indexOf(blockId);
  console.log(index);
  newBlocks.splice(index, 1, draggedBlock[0]);
  setBlocks(blocks => newBlocks);
  

}
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="Blocks">
        {blocks.map((block) => {
          return <DragBlock description={block.description} id={block.id} ranking={block.ranking} />;
        })}
      </div>
      <div className="grid" >
      <DropZone moveBlockCb={(blockId, dropZoneId) => moveBlock(blockId, dropZoneId)} blocks={blocks.filter(block => block.ranking===3)} id="zone-3" title={"High"}/>
      <DropZone moveBlockCb={(blockId, dropZoneId) => moveBlock(blockId, dropZoneId)}blocks={blocks.filter(block => block.ranking===2)}  id="zone-2" title={"Medium"}/>
      <DropZone moveBlockCb={(blockId, dropZoneId) => moveBlock(blockId, dropZoneId)} blocks={blocks.filter(block => block.ranking===1)}  id="zone-1" title={"Low"}/>
   
      </div>
     
      </DndProvider>
  );
}

export default DragDrop;
