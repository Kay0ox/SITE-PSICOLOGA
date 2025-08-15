document.addEventListener("mousemove", function(e) {
  const heroContent = document.getElementById("hero-content");
  const x = (window.innerWidth / 2 - e.pageX) / 25;
  const y = (window.innerHeight / 2 - e.pageY) / 25;
  heroContent.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});
