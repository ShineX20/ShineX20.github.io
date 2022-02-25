var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');
var mas = [];
var count = 0;
var stop = 1;
var level =0;
var population = 0;
var work = 1;
ctx.fillStyle = "rgba(88,88,88, 0.7)";
var  pause=0;
var time= 700;

canvas.onclick = function (event) {
  var x = event.offsetX;
  var y = event.offsetY;
  //console.log(x);
  //console.log(y);
  x = Math.floor(x / 10);
  y = Math.floor(y / 10);
  mas[y][x] = 1;
  //console.log(y,x);
  //console.log(mas);
  drawField();
};
function goLife() {
  var n = 70,
    m = 70;
  for (var i = 0; i < m; i++) {
    mas[i] = [];
    for (var j = 0; j < n; j++) {
      mas[i][j] = [0];
    }
  }
}
goLife();

function pousetimeFunc() {
  if (pause==0){pause=1;}
  else{pause=0;}
  startLife();
}




function clearField() {
    level=0;
    work=1;
  ctx.clearRect(0, 0, 700, 700);
  for (var i = 0; i < 70; i++) {
    for (var j = 0; j < 70; j++) {
      mas[i][j] = [0];
    }
  }
  count = 0;
  document.getElementById('count').innerHTML = count;
  stop = 0;
  population = 0;
  document.getElementById('popul').innerHTML = population;
  document.getElementById('info').innerHTML = 'EMPTY';
}

function drawField() {
  ctx.clearRect(0, 0, 700, 700);

  for (var i = 0; i < 70; i++) {
    for (var j = 0; j < 70; j++) {
      if (mas[i][j] == 1) {
        ctx.fillRect(j * 10, i * 10, 10, 10);
      }
    }
  }
}
function startLife() {

 drawField();
  var mas2 = [];

  for (var i = 0; i < 70; i++) {
    mas2[i] = [];

    for (var j = 0; j < 70; j++) {
      var neighbors = 0;
      if (mas[fpm(i) - 1][j] == 1) neighbors++;
      if (mas[i][fpp(j) + 1] == 1) neighbors++;
      if (mas[fpp(i) + 1][j] == 1) neighbors++;
      if (mas[i][fpm(j) - 1] == 1) neighbors++;
      if (mas[fpm(i) - 1][fpp(j) + 1] == 1) neighbors++;
      if (mas[fpp(i) + 1][fpp(j) + 1] == 1) neighbors++;
      if (mas[fpp(i) + 1][fpm(j) - 1] == 1) neighbors++;
      if (mas[fpm(i) - 1][fpm(j) - 1] == 1) neighbors++;

      if (mas[i][j] ==1 && neighbors < 2) mas2[i][j] = 0;
      if (mas[i][j] ==1 && neighbors > 3) mas2[i][j] = 0;
      if (mas[i][j] ==1 && neighbors==2 || neighbors==3  ) mas2[i][j] = 1;
      if (mas[i][j] ==0 && neighbors == 3) mas2[i][j] = 1;
 
       

    }
    
    
  }
  mas = mas2;

  
  
    

  count++;
  if ((level == 1)) {
    check1level();
  }
  if ((level == 2)) {
    check2level();
  } 
  if ((level == 3)) {
    check3level();
  }
  if ((level == 4)) {
    check4level();
  } 
  if ((level == 5)) {
    check5level();
  } 
  count_population();
  document.getElementById('count').innerHTML = count;
  document.getElementById('popul').innerHTML = population;
  if (work==1 && pause==0) 
  {timer = setTimeout(startLife, time);}

}
function fpm(i) {
  if (i == 0) return 70;
  else return i;
}
function fpp(i) {
  if (i == 69) return -1;
  else return i;
}

function stopLife() {
    work = 0;
    
  //console.log(stop);
}



function level1() {
  mas[14][15] = 1;
  mas[16][15] = 1;
  level = 1;
  population = 2;
  document.getElementById('popul').innerHTML = population;
  document.getElementById('info').innerHTML =
    'Размер популяции должен быть равен 3 к 10 поколению';
  drawField();
}

function count_population() {
  population=0;
  for (var i = 0; i < 70; i++) {
    for (var j = 0; j < 70; j++) {
      if (mas[i][j] == 1) {
        population++;
      }
    }
  }
  //console.log(population);
}

function check1level() {
  count_population();
  
  if (count == 10 && population == 3) {
    stopLife();
    document.getElementById('info').innerHTML = 'You score';
  } else if (count > 10 && population != 3) {
    stopLife();
    document.getElementById('info').innerHTML = 'Didn’t work, Try again';
  }
}



function level2() {
  mas[15][15] = 1;
  mas[16][15] = 1;
  level = 2;
  population = 3;
  document.getElementById('popul').innerHTML = population;
  document.getElementById('info').innerHTML =
    'Размер популяции должен быть равен 4 к 10 поколению';
  drawField();
}


function check2level() {
  count_population();
  
  if (count == 10 && population == 4) {
    stopLife();
    document.getElementById('info').innerHTML = 'You score';
  } else if (count > 10 && population != 4) {
    stopLife();
    document.getElementById('info').innerHTML = 'Didn’t work, Try again';
  }
}

function level3() {
  mas[20][20] = 1;
  mas[21][21] = 1;
  mas[19][21] = 1;
  level = 3;
  population = 3;
  document.getElementById('popul').innerHTML = population;
  document.getElementById('info').innerHTML =
    'Размер популяции должен быть равен 4 к 10 поколению';
  drawField();
}

function check3level() {
  count_population();
  
  if (count == 10 && population == 4) {
    stopLife();
    document.getElementById('info').innerHTML = 'You score';
  } else if (count > 10 && population != 4) {
    stopLife();
    document.getElementById('info').innerHTML = 'Didn’t work, Try again';
  }
}


function level4() {
  mas[20][20] = 1;
  mas[21][20] = 1;
  mas[21][21] = 1;
  mas[22][22] = 1;
  level = 4;
  population = 4;
  document.getElementById('popul').innerHTML = population;
  document.getElementById('info').innerHTML =
    'Размер популяции должен быть равен 7 к 4 поколению';
  drawField();
}

function check4level() {
  count_population();
  
  if (count == 4 && population == 7) {
    stopLife();
    document.getElementById('info').innerHTML = 'You score';
  } else if (count > 4 && population != 7) {
    stopLife();
    document.getElementById('info').innerHTML = 'Didn’t work, Try again';
  }
}


function level5() {
  mas[22][19] = 1;
  mas[21][20] = 1;
  mas[20][20] = 1;
  mas[22][27] = 1;
  mas[21][26] = 1;
  mas[20][26] = 1;
  mas[19][25] = 1;
  level = 5;
  population = 3;
  document.getElementById('popul').innerHTML = population;
  document.getElementById('info').innerHTML =
    'Размер популяции должен быть равен 12 к 5 поколению';
  drawField();
}

function check5level() {
  count_population();
  
  if (count == 5 && population == 12) {
    stopLife();
    document.getElementById('info').innerHTML = 'You score';
  } else if (count > 5 && population != 12) {
    stopLife();
    document.getElementById('info').innerHTML = 'Didn’t work, Try again';
  }
}


