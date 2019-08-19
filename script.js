const PHONE_MODELS = [
    'Huawei Y7', 'Infinix', 'Tecno', 'iPhoneX',
    'Xiomi', 'Oppo', 'Samsung', 'Sagem', 'Alcatel'
  ]
  // adds the click event to 
  const activeToggleButton = (listEl) => {
    const arrowButton = listEl.querySelector('.toggle-btn');
    const toggleAction = () => {
      if (listEl.classList.contains('is-active')) {
        listEl.classList.remove('is-active');
        arrowButton.textContent = '<';
      } else {
        listEl.classList.add('is-active');
        arrowButton.textContent = '>';
      }
    }
    arrowButton.addEventListener('click', toggleAction)
    // call the toggleAction
    toggleAction();
  }
  const createList = (phone_name) => {
    // NB: Virtual Elements don't exist in DOM after creation. 
    // creates a virtual Element
    let listEl = document.createElement('li');
    // adds a class to the Virtual Elements
    listEl.style.className = 'fancy__list';
    listEl.innerHTML = `
        <div class="text">${phone_name}</div>
        <button class="toggle-btn">&lt;</button>
        <button class="bg-teal-200">+</button>
        <button class="bg-orange-200">-</button>
        <button class="bg-red-200">x</button>
    `;
    activeToggleButton(listEl);
    return listEl
  }
  // adds the 
  const addToList = (arr) => {
    const listHolder = document.querySelector('.list-holder')
    for (let listEl of arr) {
      listHolder.append(listEl)
    }
  }
  // runs the code
  const startApp = () => {
    // create the phoneList
    let phoneList = [];
    for (let model of PHONE_MODELS) {
       // call createList here
       let listEl = createList(model);
       phoneList.push(listEl);
    }
    // call addToList here
    addToList(phoneList);
  }
  // call startApp
  startApp();
  

