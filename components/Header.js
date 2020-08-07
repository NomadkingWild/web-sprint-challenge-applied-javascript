// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container
const head = document.querySelector('.header-container')
function Header() {
    const header = document.createElement('div')
    const date = document.createElement('span')
    const title = document.createElement('h1')
    const temp = document.createElement('span')

    header.appendChild(date)
    header.appendChild(title)
    header.appendChild(temp)

    header.className = 'header'
    date.className = 'date'
    temp.className = 'temp'

    date.textContent = header.date
    title.textContent= header.title
    temp.textContent= header.temp

    return Header;
    
}

header.appendChild(head)
  console.log(header)
    
