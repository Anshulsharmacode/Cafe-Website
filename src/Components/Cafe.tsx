import React from "react";
import { TextHoverEffect } from "@/Components/ui/text-hover-effect";

function Cafe() {
  return (
    <div className="h-[30rem] sm:h-[40rem] flex items-center justify-center">
      <TextHoverEffect text="CAFE" className="text-5xl sm:text-7xl" />
    </div>
  );
}

export default Cafe;
