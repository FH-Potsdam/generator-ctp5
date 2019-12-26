document.addEventListener("DOMContentLoaded", function() {
  const canvas = document.querySelector("canvas#sketch");
  if (!canvas) {
    throw new Error("Could not find #canvas");
  }
  if (canvas instanceof HTMLCanvasElement) {
    const ctx = canvas.getContext("2d");
    if (ctx !== null) {
      ctx.moveTo(10, 10);
      ctx.lineTo(20, 20);
      ctx.stroke();
    }
  }
});
