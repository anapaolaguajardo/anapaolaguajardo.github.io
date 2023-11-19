let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #0C356A;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #0C356A;">Soy estudiante de ingeniería en electrónica y automatización.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
