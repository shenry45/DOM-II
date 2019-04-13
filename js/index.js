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
headline.addEventListener('select', function() {
  console.log('heading hightlighted');
  headline.style.margin = '30px';
})