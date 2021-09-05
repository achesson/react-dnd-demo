import React, { useState} from "react";
import DragBlock from "./DragBlock";

import { useDrop } from "react-dnd";
import "../App.css";



function DropZone(props) {
let blocks = props.blocks;
  const [board, setBoard] = useState(blocks);


  const [{ isOver }, drop] = useDrop(() => ({
    accept: "button",
    drop: (item) => 
        props.moveBlockCb(item.id, props.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

//   const addBlockToBoard = (id) => {
//     const draggedBlock = blocks.filter((block) => id === block.id);
//     setBoard((board) => [...board, draggedBlock[0]]);
//   };


  return (

  <div className="Board" ref={drop} id={props.id}>
      <h2>{props.title}</h2>
  {board.map((block) => {
    return <DragBlock  description={block.description} id={block.id} ranking={block.ranking}/>;
  })}

</div>

  );
}

export default DropZone;