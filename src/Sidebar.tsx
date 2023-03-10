import React from "react";
import { IPanel } from "./types";

interface SidebarProps {
  nodes: IPanel[];
}

export const Sidebar = ({ nodes }: SidebarProps) => {
  const onDragStart = (event: React.DragEvent, node: IPanel) => {
    event.dataTransfer.setData("application/reactflow", JSON.stringify(node));
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside className="flex flex-col justify-center px-5 w-72">
      <div className="description">
        You can drag these nodes to the pane on the right.
      </div>
      {nodes.map((node) => (
        <div
          key={node.id}
          className="dndnode border-2 border-black font-bold p-2 my-2 cursor-pointer"
          onDragStart={(event) => onDragStart(event, node)}
          draggable
        >
          {node.title}
        </div>
      ))}
    </aside>
  );
};
