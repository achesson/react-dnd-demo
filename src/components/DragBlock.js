  
import React from "react";
import { useDrag } from "react-dnd";

function DragBlock({ id, description, ranking}) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "button",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
 
    <div>
   
    <button 
    
    ref={drag} 
    className="btn btn-dark"
    style={{ border: isDragging ? "5px solid pink" : "0px",
              backgroundColor: (ranking===3)  ? "slateblue": 
                                (ranking===2) ? "orange": "darkseagreen"
  
  }}
     >
    {description} {" "}⬇️
    </button>
    </div>
  );
}

export default DragBlock;
