const button = document.querySelector('button')
const body = document.querySelector('body')
const header = document.querySelector('.header')
const colors = ['grey', 'aqua', 'blue', 'darkgrey', '#20123a', 'purple']

body.style.backgroundColor = '#20123a'
button.addEventListener('click', changeBackground)

function changeBackground()
{
    const colorIndex= parseInt(Math.random()*colors.length)
    let i = colorIndex+1
    if ( i == colors.length){
        i = 0
    }
    body.style.backgroundColor = colors[colorIndex]
    button.style.borderColor = header.style.color = button.style.color = colors[i]
}
