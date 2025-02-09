function initSnipingCanvas(canvas) {
  if (!canvas) return () => {};
  const context = canvas.getContext('2d');

  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  let target = {
    x: canvas.width * 0.7,
    y: canvas.height * 0.4,
    radius: 20,
    color: 'red'
  };

  const drawTarget = () => {
    context.fillStyle = target.color;
    context.beginPath();
    context.arc(target.x, target.y, target.radius, 0, Math.PI * 2);
    context.fill();
  };

  const drawScene = () => {
    context.fillStyle = '#2d2d2d';
    context.fillRect(0, 0, canvas.width, canvas.height);
    drawTarget();
  };

  drawScene();

  const handleCanvasClick = (event) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const dx = mouseX - target.x;
    const dy = mouseY - target.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance <= target.radius) {
      console.log("Target hit!");
      target.color = 'green';
      drawScene();
      setTimeout(() => {
        target.color = 'red';
        drawScene();
      }, 500);
    }
  };

  canvas.addEventListener('click', handleCanvasClick);

  return () => {
    canvas.removeEventListener('click', handleCanvasClick);
  };
}

export default initSnipingCanvas;