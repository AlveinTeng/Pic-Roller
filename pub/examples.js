  
  //API button
  document.querySelector('.API_button').addEventListener('click', () => {
    // console.log("clicked!")
    window.location = "./api.html"
  })
  // example 1
   document.querySelector('.example1__js__btn');
   document.querySelector('.example1__html__btn');
   document.querySelector('.example1__css__btn');

   document.querySelector('.example1__js');
   document.querySelector('.example1__html');
   document.querySelector('.example1__css');

  document.querySelector('.example1__js__btn').addEventListener('click', () => {
    document.querySelector('.example1__html').classList.add('hidden');
    document.querySelector('.example1__css').classList.add('hidden');
    document.querySelector('.example1__js').classList.remove('hidden');
  });

  document.querySelector('.example1__html__btn').addEventListener('click', () => {
    document.querySelector('.example1__css').classList.add('hidden');
    document.querySelector('.example1__js').classList.add('hidden');
    document.querySelector('.example1__html').classList.remove('hidden');
  });

  document.querySelector('.example1__css__btn').addEventListener('click', () => {
    document.querySelector('.example1__html').classList.add('hidden');
    document.querySelector('.example1__js').classList.add('hidden');
    document.querySelector('.example1__css').classList.remove('hidden');
  });

  // example 2
  document.querySelector('.example2__js__btn');
  document.querySelector('.example2__html__btn');
  document.querySelector('.example2__css__btn');

  document.querySelector('.example2__js');
  document.querySelector('.example2__html');
  document.querySelector('.example2__css');

 document.querySelector('.example2__js__btn').addEventListener('click', () => {
   document.querySelector('.example2__html').classList.add('hidden');
   document.querySelector('.example2__css').classList.add('hidden');
   document.querySelector('.example2__js').classList.remove('hidden');
 });

 document.querySelector('.example2__html__btn').addEventListener('click', () => {
   document.querySelector('.example2__css').classList.add('hidden');
   document.querySelector('.example2__js').classList.add('hidden');
   document.querySelector('.example2__html').classList.remove('hidden');
 });

 document.querySelector('.example2__css__btn').addEventListener('click', () => {
   document.querySelector('.example2__html').classList.add('hidden');
   document.querySelector('.example2__js').classList.add('hidden');
   document.querySelector('.example2__css').classList.remove('hidden');
 });
  // example 3

  document.querySelector('.example3__css__btn').addEventListener('click', () => {
    document.querySelector('.example3__html').classList.add('hidden');
    document.querySelector('.example3__js').classList.add('hidden');
    document.querySelector('.example3__css').classList.remove('hidden');
  });
 
    document.querySelector('.example3__js__btn');
    document.querySelector('.example3__html__btn');
    document.querySelector('.example3__css__btn');
 
    document.querySelector('.example3__js');
    document.querySelector('.example3__html');
    document.querySelector('.example3__css');
 
   document.querySelector('.example3__js__btn').addEventListener('click', () => {
     document.querySelector('.example3__html').classList.add('hidden');
     document.querySelector('.example3__css').classList.add('hidden');
     document.querySelector('.example3__js').classList.remove('hidden');
   });
 
   document.querySelector('.example3__html__btn').addEventListener('click', () => {
     document.querySelector('.example3__css').classList.add('hidden');
     document.querySelector('.example3__js').classList.add('hidden');
     document.querySelector('.example3__html').classList.remove('hidden');
   });
 
   document.querySelector('.example3__css__btn').addEventListener('click', () => {
     document.querySelector('.example3__html').classList.add('hidden');
     document.querySelector('.example3__js').classList.add('hidden');
     document.querySelector('.example3__css').classList.remove('hidden');
   });
//  example 4

 document.querySelector('.example4__css__btn').addEventListener('click', () => {
   document.querySelector('.example4__html').classList.add('hidden');
   document.querySelector('.example4__js').classList.add('hidden');
   document.querySelector('.example4__css').classList.remove('hidden');
 });

   document.querySelector('.example4__js__btn');
   document.querySelector('.example4__html__btn');
   document.querySelector('.example4__css__btn');

   document.querySelector('.example4__js');
   document.querySelector('.example4__html');
   document.querySelector('.example4__css');

  document.querySelector('.example4__js__btn').addEventListener('click', () => {
    document.querySelector('.example4__html').classList.add('hidden');
    document.querySelector('.example4__css').classList.add('hidden');
    document.querySelector('.example4__js').classList.remove('hidden');
  });

  document.querySelector('.example4__html__btn').addEventListener('click', () => {
    document.querySelector('.example4__css').classList.add('hidden');
    document.querySelector('.example4__js').classList.add('hidden');
    document.querySelector('.example4__html').classList.remove('hidden');
  });

  document.querySelector('.example4__css__btn').addEventListener('click', () => {
    document.querySelector('.example4__html').classList.add('hidden');
    document.querySelector('.example4__js').classList.add('hidden');
    document.querySelector('.example4__css').classList.remove('hidden');
  });

// example 5
document.querySelector('.example5__css__btn').addEventListener('click', () => {
  document.querySelector('.example5__html').classList.add('hidden');
  document.querySelector('.example5__js').classList.add('hidden');
  document.querySelector('.example5__css').classList.remove('hidden');
});

  document.querySelector('.example5__js__btn');
  document.querySelector('.example5__html__btn');
  document.querySelector('.example5__css__btn');

  document.querySelector('.example5__js');
  document.querySelector('.example5__html');
  document.querySelector('.example5__css');

 document.querySelector('.example5__js__btn').addEventListener('click', () => {
   document.querySelector('.example5__html').classList.add('hidden');
   document.querySelector('.example5__css').classList.add('hidden');
   document.querySelector('.example5__js').classList.remove('hidden');
 });

 document.querySelector('.example5__html__btn').addEventListener('click', () => {
   document.querySelector('.example5__css').classList.add('hidden');
   document.querySelector('.example5__js').classList.add('hidden');
   document.querySelector('.example5__html').classList.remove('hidden');
 });

 document.querySelector('.example5__css__btn').addEventListener('click', () => {
   document.querySelector('.example5__html').classList.add('hidden');
   document.querySelector('.example5__js').classList.add('hidden');
   document.querySelector('.example5__css').classList.remove('hidden');
 });

  

const picRoller1 = new picRoller();
const displayRegion1 = document.getElementById('first-picRoller')
picRoller1.horizontal(true)
picRoller1.clickable(true)
picRoller1.displayPictures(displayRegion1, 'square');
picRoller1.addButtonText(0, 'Kobe')
picRoller1.addButtonText(1, 'Jordan')
picRoller1.addButtonText(2, 'Shaq')
picRoller1.addButtonText(3, 'Iverson')
picRoller1.addButtonText(4, 'Westbrook')

const picRoller2 = new picRoller();
const displayRegion2 = document.getElementById('second-picRoller')
picRoller2.auto(true)
picRoller2.setSpeed(2000)
picRoller2.horizontal(false)
// picRoller2.clickable(true)
picRoller2.displayPictures(displayRegion2, 'dot');

const picRoller3 = new picRoller();
const displayRegion3 = document.querySelector('#third-picRoller')
picRoller3.auto(true)
picRoller3.horizontal(true)
// picRoller3.clickable(true)
picRoller3.displayPictures(displayRegion3, 'square');

const picRoller4 = new picRoller()
const displayRegion4 = document.querySelector('#forth-picRoller')
picRoller4.auto(true)
picRoller4.horizontal(false)
picRoller4.setMutiPic(2)
picRoller4.setSpeed(2500)
picRoller4.hoverPause()
picRoller4.displayPictures(displayRegion4, 'dot')

const picRoller5 = new picRoller()
const displayRegion5 = document.querySelector('#fifth-picRoller')
picRoller5.auto(true)
picRoller5.horizontal(false)
// picRoller5.setMutiPic(1)
picRoller5.setSpeed(2500)
picRoller5.hoverPause()
picRoller5.hoverPause()
picRoller5.displayPictures(displayRegion5, 'dot')

