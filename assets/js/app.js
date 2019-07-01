


//get canvas
var canvas = document.getElementById('canvas').getContext('2d');
canvas.font = "30px sans-serif";
canvas.save();
canvas.fillStyle = "green";
canvas.fillRect(0,480,900,20);
canvas.restore();
canvas.save();
canvas.fillStyle = "burlywood";
canvas.fillRect(100,260,20,230);
canvas.restore();
canvas.save();
canvas.fillStyle = "burlywood";
canvas.fillRect(95,100,30,200);
canvas.restore();
canvas.save();
canvas.fillStyle = "burlywood";
canvas.fillRect(120,100,250,30);
canvas.restore();

//LETS CREATE THE PERSON OBJET


function drawHead(){
    canvas.beginPath();
    canvas.arc(350, 190, 40, 0, Math.PI * 2, true); // Outer circle




    canvas.stroke();
}

document.getElementById("a").addEventListener('click', functionA);

function functionA(){
   drawHead();
}