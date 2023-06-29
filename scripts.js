//! function that write letters in the Home Page 

function writingLetters() {
    const title = document.querySelector('.writing')

    const text = title.innerHTML;
    title.innerHTML = '';

    let index = 0;
    const interval = setInterval(() => {
        title.innerHTML += text[index];
        index++;
        if (index >= text.length) {
            clearInterval(interval);
        }
    }, 75);
}
writingLetters()


const activeMenu = document.querySelector('.fa-bars')
const navMenu = document.querySelector('.header .primary-navgation')

activeMenu.addEventListener('click', () => {
    activeMenu.classList.toggle('fa-x')
    navMenu.classList.toggle('active')
})

const menuLinks = document.querySelectorAll('.primary-navgation')


for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            activeMenu.classList.remove('fa-x');
            navMenu.classList.remove('active');
        }
    });
}
    


const listAll = document.querySelectorAll('.project-content ul li')
const buttonsNav = document.querySelectorAll('.project-models ul li')
const buttonAllProjects = document.querySelector('.project-models .all')


function removeClick(index) {
    buttonsNav.forEach(item => {
        item.classList.remove('active')
    })
    buttonsNav[index].classList.add('active')
}

buttonsNav.forEach((event, index) => {
    event.addEventListener('click', () => {
        removeClick(index)
    })
});


function showList(list, button = 'all') {
    list.forEach(item => {
        item.classList.remove('active')
    })

    if(button === 'website'){
      list[0].classList.add('active')  
      list[1].classList.add('active')  
      list[2].classList.add('active')  
    }
    if(button === 'html'){
      list[3].classList.add('active')  
      list[4].classList.add('active')  
      list[5].classList.add('active')  
    }
    if(button === 'react'){
      list[6].classList.add('active')  
      list[7].classList.add('active')  
    }
    if(button === 'all'){
      list[0].classList.add('active')  
      list[1].classList.add('active')  
      list[2].classList.add('active')  
      list[3].classList.add('active')  
      list[4].classList.add('active')  
      list[5].classList.add('active')  
      list[6].classList.add('active')  
      list[7].classList.add('active')  
    }
}

buttonsNav.forEach(item => {
    item.addEventListener('click', (e) =>{
        let curretButton = e.target

        if(curretButton.classList.contains('all')){
            showList(listAll)
        }
  
        if(curretButton.classList.contains('website')){
            showList(listAll,'website')
        }
        if(curretButton.classList.contains('html')){
            showList(listAll, 'html')
        }
        if(curretButton.classList.contains('react')){
            showList(listAll, 'react')
        }
        if(curretButton.classList.contains('all')){
            showList(listAll, 'all')
        }
    })
})



// button to home config

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("voltar-ao-topo").style.display = "block";
  } else {
    document.getElementById("voltar-ao-topo").style.display = "none"  }
}

document.getElementById("voltar-ao-topo").addEventListener("click", function(){
  document.body.scrollTop = 0;          // para navegadores Safari
  document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
});
