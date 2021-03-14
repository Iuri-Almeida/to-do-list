const inputText = document.querySelector('input[type="text"]')
const addButton = document.querySelector('button.add')
const ul = document.querySelector('div.todos ul')

function createElement (text) {
    const li = document.createElement('li')
    const div = document.createElement('div')
    const span = document.createElement('span')
    const input = document.createElement('input')
    const button = document.createElement('button')
    const img = document.createElement('img')

    input.setAttribute('type', 'checkbox')
    button.setAttribute('type', 'button')
    button.setAttribute('class', 'remove')
    img.setAttribute('src', './images/delete.png')
    img.setAttribute('alt', 'Remover')

    div.style.opacity = 1

    span.innerHTML = text

    div.appendChild(input)
    div.appendChild(span)

    button.appendChild(img)

    li.appendChild(div)
    li.appendChild(button)

    ul.appendChild(li)
}

addButton.onclick = () => {
    const text = inputText.value

    if (!text) { return }
    
    createElement(text)
    
    inputText.value = ''
    
    let removeButtons = document.querySelectorAll('button.remove')

    removeButtons.forEach((element) => {
        element.addEventListener('click', () => element.parentElement.remove())
    })

    let checkbox = document.querySelectorAll('input[type="checkbox"]')

    checkbox.forEach((element) => {
        element.addEventListener('click', () => {
            if (element.parentElement.style.opacity == 1) {
                element.parentElement.style.opacity = 0.4
            } else {
                element.parentElement.style.opacity = 1
            }
        })
    })

}
