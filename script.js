const panels = document.querySelectorAll('.panel') //a variable to get all panels

//method taking in a function as an argument 
// basically for each panel in array(nodelist) panels
panels.forEach(panel => {
    panel.addEventListener('click', function(){
        removeActiveClasses();
        panel.classList.add('active')
    })
})  //ok so basically for every click on a panel we are changing the class to active

function removeActiveClasses(){
    panels.forEach(panel =>{
        panel.classList.remove('active')
    })
}