let cell_area = document.querySelector('.game-area');
let cells = document.querySelectorAll('.cell')
let cell_arr = Array.from(document.querySelectorAll('.cell'))

let turn = 'X';
let game = true;

let arr = ['','','','','','','','','']

cell_area.addEventListener('click', (e) => {
  if(e.target.className == 'cell') {
    const index = cell_arr.indexOf(e.target);

    if (arr[index] == '' && game){
    e.target.value = turn;
    arr[index] = turn;
    renderCells();
    if (turn == 'X') {
       turn = 'O';
       changeTurn();
    } else {
      turn = "X";
      changeTurn();
    }
    checkWin();
    }
  }
});


function renderCells(){;
  cells.forEach(cell => {
    if (cell.value != undefined){
    cell.innerHTML = cell.value;
    }
  });
}

function changeTurn(){
  let turn_title = document.getElementById('turn');
  turn_title.innerHTML = `${turn} Turn!`
}

function checkTie(){
  let condition = true;

  arr.forEach(ar =>{
    if (ar == '') return condition = false;
  })

  return condition;
}

function checkWin(){
  let win_title = document.getElementById('result');

  if (arr[0] != '' && (arr[0] == arr[3] && arr[3] == arr[6])){
    game = false;
    win_title.innerHTML = `Game Over! ${arr[0]} Wins!`
  } else if (arr[1] != '' && (arr[1] == arr[4] && arr[4] == arr[7])){
    game = false;
    win_title.innerHTML = `Game Over! ${arr[1]} Wins!`
  } else if (arr[2] != '' && (arr[2] == arr[5] && arr[5] == arr[8])){
    game = false;
    win_title.innerHTML = `Game Over! ${arr[2]} Wins!`
  } else if (arr[0] != '' && (arr[0] == arr[1] && arr[1] == arr[2])){
    game = false;
    win_title.innerHTML = `Game Over! ${arr[0]} Wins!`
  } else if (arr[3] != '' && (arr[3] == arr[4] && arr[4] == arr[5])){
    game = false;
    win_title.innerHTML = `Game Over! ${arr[3]} Wins!`
  } else if (arr[6] != '' && (arr[6] == arr[7] && arr[7] == arr[8])){
    game = false;
    win_title.innerHTML = `Game Over! ${arr[6]} Wins!`
  } else if (arr[0] != '' && (arr[0] == arr[4] && arr[4] == arr[8])){
    game = false;
    win_title.innerHTML = `Game Over! ${arr[0]} Wins!`
  } else if (arr[6] != '' && (arr[6] == arr[4] && arr[4] == arr[2])){
    game = false;
    win_title.innerHTML = `Game Over! ${arr[6]} Wins!`
  } else if(checkTie()) {
    game = false;
    win_title.innerHTML = 'Game Over! Tie'
  }
}
