import React, { useState} from "react";
import DragBlock from "./DragBlock";
import { useDrop } from "react-dnd";



// function DropRow(props) {

//   const [board, setBoard] = useState(blocks);


//   const [{ isOver }, drop] = useDrop(() => ({
//     accept: "button",
//     drop: (item) => 
//         props.moveBlockCb(item.id, props.id),
//     collect: (monitor) => ({
//       isOver: !!monitor.isOver(),
//     }),
//  }));

  function DropRow(props) {
    const [collected, dropRef] = useDrop(() => ({
        accept: 'box',

        // This is called when a box is dropped
        drop(item, monitor) {
            // Pass up box and col ID
            props.dropCb(item, props.id);
        },

        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        }),

        // A box can't be dropped on the column where the drag started!
        canDrop(item, monitor) {
            let box = document.getElementById(item.id);
            let row = document.getElementById(props.id);
          
            return box.parentElement !== row;
        }
    }));

 // Set background color if box is being dragged over a different column
 let canDropClass = collected.isOver && collected.canDrop ? 'can-drop' : '';


  return (

    <div id={props.id} key={props.id} ref={dropRef} className={`DropRow ${canDropClass}`} >
    <h2>{props.title}</h2>
    {
        props.blocks.map(b => (
            <DragBlock rowId={props.id} id={b.id} key={b.id}>{b.description}</DragBlock>
        ))
    }
    </div>

  );
}

export default DropRow;