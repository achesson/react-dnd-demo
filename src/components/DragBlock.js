  
import React from "react";
import { useDrag } from "react-dnd";

// function DragBlock({ id, description, ranking}) {
//   const [{ isDragging }, dragRef] = useDrag(() => ({
//     type: "button",
//     item: { id: id },
//     collect: (monitor) => ({
//       isDragging: !!monitor.isDragging(),
//     }),
//   }));


  function DragBlock(props) {
    const [collected, dragRef] = useDrag(() => ({
        type: "box",

        // This is called when drag starts
        item: () => {
            let row = document.getElementById(props.id).parentElement;
            // Return IDs of box and col where drag started
            return { id: props.id, startDragRowId: row.id };
        }
    }));
  return (
 
    
   
    <button 
    className={`DragBlock${props.rowId}`}
    id={props.id}
    ref={dragRef} 
     >
    {props.children} {" "}⬇️
    </button>
    
  );
}

export default DragBlock;
