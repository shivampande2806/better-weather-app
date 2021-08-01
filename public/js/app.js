const weatherForm = document.querySelector('form')
const searchString = document.querySelector('input')
const messageOne = document.querySelector('#one')
const messageTwo = document.querySelector('#two')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = searchString.value

    messageOne.textContent = "Loading..."
    messageTwo.textContent = ""

    fetch("/weather?address=" + location).then((answer) => {
        answer.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = "Location: " + data.location
                messageTwo.textContent = "Weather Report: " + data.forecast
            }
        })
    })

})