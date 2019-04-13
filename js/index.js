// Your code goes here

//////////////////////////
const buttons = document.querySelectorAll('.btn');

// #1
buttons.forEach(el => {
  el.addEventListener('click', () => {
    alert('You clicked a Sign Me up button!');
  })
})

/////////////////////
const mapTracker = document.querySelector('.img-content img');

// #2
mapTracker.addEventListener('drag', () => {
  mapTracker.style.opacity = '0.5';
});

//#3
mapTracker.addEventListener('dragend', () => {
  mapTracker.style.opacity = '1.0';
});

////////////////////////
const headerImg = document.querySelector('header img');

// #4
headerImg.addEventListener('mouseover', () => {
  headerImg.style.width = '120%';
  headerImg.style.maxWidth = 'initial';
  headerImg.style.position = 'relative';
  headerImg.style.left = '-20px';
  headerImg.style.zIndex = '-1';
})

// #5
headerImg.addEventListener('mouseout', () => {
  headerImg.style.width = null;
  headerImg.style.maxWidth = null;
  headerImg.style.position = null;
  headerImg.style.left = null;
  headerImg.style.zIndex = null;
})

////////////////////////
const headline = document.querySelector('.logo-heading');

// #6
headline.addEventListener('dblclick', () => {
  let headMarg = headline.style.margin;

  const editStyle = (copy, target) => {
    copy = copy.split('');
    copy[0] *= 2;
    copy[0].toString();
    copy = copy.join('');
    target.style.margin = `${copy}`;
  }
  
  if (headMarg === '') {
    headMarg = '1px';
    editStyle(headMarg, headline);
  } else {
    editStyle(headMarg, headline);
  }
});


/////////////////////////
// #7
document.body.addEventListener('contextmenu', e => {
  e.preventDefault();
  console.log(e.clientX)

  const popRClick = document.createElement('p');
  popRClick.classList.add('overlay');
  popRClick.innerHTML = "Ooohh a secret menu :3<br>Too bad the right click menu was disabled. :/";
  popRClick.style.position = 'fixed';
  popRClick.style.left = `${e.clientX}px`;
  popRClick.style.top = `${e.clientY}px`;
  popRClick.style.zIndex = '100';
  popRClick.style.width = '150px;'
  popRClick.style.padding = '30px';
  popRClick.style.background = '#fff';
  popRClick.style.border = '2px solid aqua';

  document.body.appendChild(popRClick)

  setTimeout(() => {
    document.querySelector('.overlay').remove();
  }, 3500);
})

// #8
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(el => {
  el.addEventListener('click',() => {
    alert(`You tried to visit ${el.textContent} and this page is down. Please try again later.`)
  });
});

// #9
document.body.addEventListener('wheel', ()=> {
  document.body.style.background = 'red';
})

// #10
document.body.addEventListener('keydown', (e)=> {
  console.log(e.key);
})