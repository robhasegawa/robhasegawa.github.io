var cvsM = document.querySelector("#moon");
var ctxM = cvsM.getContext("2d");
cvsM.width = 400;
cvsM.height = 500;
//gradient
var sunGrad=ctxM.createLinearGradient(300,385,300,407);
sunGrad.addColorStop(0,"rgb(255, 20, 219)");
sunGrad.addColorStop(1,"rgb(255, 148, 17)");
//moon
ctxM.beginPath();
ctxM.arc(100,75,5,0,2*Math.PI);
ctxM.fillStyle = 'rgb(214, 198, 242)';
ctxM.fill();
//sun
//ctxM.beginPath();
//ctxM.arc(300,400,5,0,2*Math.PI);
//ctxM.fillStyle = sunGrad;
//ctxM.fill();
