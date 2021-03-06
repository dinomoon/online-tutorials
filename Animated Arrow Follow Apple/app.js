let arrow = document.querySelectorAll('.arrow');

function randomSize(min, max) {
  min = Math.ceil(40);
  max = Math.ceil(150);
  return Math.floor(Math.random() * (max - min)) + min;
}

for (let i = 0; i < arrow.length; i++) {
  arrow[i].style.left = Math.floor(Math.random() * 99) + 'vw';
  arrow[i].style.top = Math.floor(Math.random() * 99) + 'vh';
  arrow[i].style.width = randomSize() + 'px';
}

function rotateArrow(event) {
  arrow.forEach(function (arrow) {
    let x = arrow.getBoundingClientRect().left + arrow.clientWidth / 2;
    let y = arrow.getBoundingClientRect().top + arrow.clientHeight / 2;

    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rot = radian * (180 / Math.PI) * -1 + 270;
    arrow.style.transform = `rotate(${rot}deg)`;
  });
}

document.body.addEventListener('mousemove', rotateArrow);
