import React, { useState } from "react";
import DropRow from "./DropRow"
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import "./DragDrop.css";



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
const InitRows = {
  row3: [BlockList.filter(b => b.ranking === 3)],
  row2: [BlockList.filter(b => b.ranking === 2)],
  row1: [BlockList.filter(b => b.ranking === 1)],
};

const InitRows1 = {
  row3: [  {
    id: 1,
    description: "Meeting",
    ranking: 3
  }],
  row2: [  {
    id: 2,
    description: "Dance",
    ranking: 2
  }],
  row1:   [{
    id: 3,
    description: "Hoover",
    ranking: 1
  }],
};

// function DragDrop() {
//   const [blocks, setBlocks] = useState(BlockList);

// const moveBlock = (blockId, dropZoneId) => {
  
//   //get the id of the block that is dragging
//   const draggedBlock = blocks.filter((block) => blockId === block.id);
//   //determine destination of dragged block
//   console.log("moveblock blockId", blockId);
//   console.log("dropId Id", dropZoneId);
//   //change ranking of block
//   let newRanking = zones[dropZoneId];
//   draggedBlock[0].ranking = newRanking;
//   console.log(draggedBlock);
//   //copy state
//   let newBlocks = [...blocks];
//   //replace old block with new block
//   let index = blocks.map(function(e) { return e.id; }).indexOf(blockId);
//   console.log(index);
//   newBlocks.splice(index, 1, draggedBlock[0]);
//   setBlocks(blocks => newBlocks);
  

// }


function DragDrop(props) {
  const [rows, setRows] = useState(InitRows1);

  function moveBox(item, toRowId) {
      let blockId = item.id;
      let fromRowId = item.startDragRowId;

      console.log(`moveBox: ${blockId} from ${fromRowId} to ${toRowId}`)
     
      let newRows = {...rows};
      // Find index of box to move
      let ix = newRows[fromRowId].findIndex(b => b.id === blockId);
      // Remove from old row
      let block = newRows[fromRowId].splice(ix, 1);
      // Add to new row (splice returns an array)
      newRows[toRowId].push(block[0]);
      // Update state
      setRows(rows => newRows);
  }

  return (
    <div className = "DragDrop">
    <DndProvider backend={HTML5Backend}>

      
     
      <DropRow id="row3" blocks={rows.row3} dropCb={moveBox}  title={"High"}/>
      <DropRow id="row2" blocks={rows.row2} dropCb={moveBox} title={"Medium"}/>
      <DropRow id="row1" blocks={rows.row1} dropCb={moveBox}  title={"Low"}/>
   
     
     
      </DndProvider>
      </div>
  );
}

export default DragDrop;
