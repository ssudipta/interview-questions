const API = 'https://jsonplaceholder.typicode.com/users'

async function fetchUsers(){
  try{
    const response = await fetch(API)
    if(!response.ok){
      throw new Error(`Network Error: ${response.error} : ${response.statusText}`)
    }
    const data = await response.json()
    console.log(data)
    populateDropdownData(data)
  }catch(e){
    throw new Error('Error in fetching data')
  }
}

function populateDropdownData(userList){
  const userDropdown = document.getElementById('user-dropdown')

  const initialState = userDropdown.options[0]
  userDropdown.innerHTML = ''
  userDropdown.appendChild(initialState)


  userList.forEach(user=>{
    const option = document.createElement('option')
    option.value = user.id
    option.textContent = user.name
    userDropdown.appendChild(option)
  })
}

document.getElementById('user-dropdown').addEventListener('change', ()=>{
    const userDropdown = document.getElementById('user-dropdown')
    const selectedName = userDropdown.options[userDropdown.selectedIndex]
    console.log('Currently selected name', selectedName.textContent)
})

document.addEventListener('DOMContentLoaded', fetchUsers)
