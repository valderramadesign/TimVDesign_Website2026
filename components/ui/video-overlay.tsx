"use client";
import Pi4Slideshow from "@/components/ui/pi4-slideshow";

const PROTOTYPE_URL =
  "https://www.figma.com/proto/D9bFYkGXUZiIliqQ8Fyvv2/Pi4-Prototype-Ai?node-id=30102-13987&p=f&viewport=-1816%2C-1683%2C0.06&t=iwyrQi9R85uJhpV1-8&scaling=scale-down&content-scaling=fixed&starting-point-node-id=30102%3A13987&page-id=18168%3A28543&hotspot-hints=0&disable-default-keyboard-nav=1&hide-ui=1";

export default function VideoOverlay() {
  return (
    <div
      className="relative aspect-square cursor-pointer overflow-hidden"
      style={{ outline: "2px solid #00B0D8" }}
      onClick={() => window.open(PROTOTYPE_URL, "_blank")}
    >
      <Pi4Slideshow />
    </div>
  );
}
