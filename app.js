const wordCategories = {
    daily1: [
      "Boba Tea / 珍珠奶茶 (zhēnzhū nǎichá)",
      "Airplane / 飛機 (fēi jī)",
      "Mobile Phone / 手機 (shǒu jī)",
      "Umbrella / 雨傘 (yǔ sǎn)",
      "Keys / 鑰匙 (yào shi)",
      "Water Bottle / 水壺 (shuǐ hú)",
      "Toilet Paper / 衛生紙 (wèi shēng zhǐ)",
      "Shoes / 鞋子 (xié zi)",
      "Backpack / 背包 (bēi bāo)",
      "Glasses / 眼鏡 (yǎn jìng)",
    ],

    daily2: [
      "Earphones / 耳機 (ěr jī)",
      "Teapot / 茶壺 (chá hú)",
      "Helmet / 安全帽 (ān quán mào)",
      "Receipt / 發票 (fā piào)",
      "Charger / 充電器 (chōng diàn qì)",
      "Microwave / 微波爐 (wéi bō lú)",
      "Toothbrush / 牙刷 (yá shuā)",
      "Credit Card / 信用卡 (xìn yòng kǎ)",
    ],

    daily3: [
      "Power Bank / 行動電源 (xíng dòng diàn yuán)",
      "Contact Lenses / 隱形眼鏡 (yǐn xíng yǎn jìng)",
      "Extension Cord / 延長線 (yán cháng xiàn)",
      "Electric Mosquito Swatter / 電蚊拍 (diàn wén pāi)",
      "Nail Clippers / 指甲剪 (zhǐ jia jiǎn)",
      "Sunscreen / 防曬乳 (fáng shài rǔ)",
      "Vacuum Cleaner / 吸塵器 (xī chén qì)",
      "Alarm Clock / 鬧鐘 (nào zhōng)",
    ],

    jobs: [
      "doctor",
      "illustrator",
      "astronaut",
      "movie director",
      "comedian",
      "musician",
      "office worker",
      "scientist",
      "singer",
      "nurse",
      "engineer",
      "reporter",
      "captain",
      "flight attendant",
      "teacher",
      "police officer",
      "artist",
      "architect",
      "writer",
      "soccer player",
      "photographer",
      "vet",
      "dentist",
      "fire fighter",
      "voice actor",
      "carpenter",
      "taxi driver",
      "dancer",
      "farmer",
      "actor",
      "pilot",
      "pastry chef",
      "programmer",
      "lawyer",
      "nursery school teacher",
      "cartoonist",
      "pharmacist",
      "barber",
      "chef",
      "cook",
    ],

    classroom: [
      "chair",
      "calendar",
      "blackboard",
      "trash can",
      "class schedule",
      "speaker",
      "map",
      "dustpan",
      "chalk",
      "desk",
      "clock",
      "bucket",
      "broom",
      "whiteboard",
      "ink",
      "paint",
      "pencil",
      "pencil sharpener",
      "bag",
      "textbook",
      "highlighter",
      "eraser",
      "compass",
      "dictionary",
      "mechanical pencil",
      "ruler",
      "glue stick",
      "stapler",
      "tape",
      "name tag",
      "notebook",
      "scissors",
      "pencil case",
      "pen",
      "brush",
    ],

    house: [
      "bedroom",
      "kitchen",
      "living room",
      "entrance",
      "bathroom",
      "garden",
      "air conditioner",
      "curtain",
      "mirror",
      "rice cooker",
      "slippers",
      "washing machine",
      "fan",
      "sink",
      "sofa",
      "table",
      "TV",
      "microwave",
      "telephone",
      "pillow",
      "blanket",
      "bookcase",
      "fridge",
    ],

    example: [
      "English",
      "Japanese",
      "art",
      "math",
      "science",
      "technology",
      "social studies",
      "moral education",
      "home economics",
      "P.E.",
      "music"
    ],

    custom: [],
  }

  let currentCategory = [];
  let currentCategoryKey;
  let remainingWords;
  let currentIndex = 0;
  let score = 0;
  const pass = document.getElementById("pass");
  const get = document.getElementById("get");
  const reset = document.getElementById("reset");
  const word = document.getElementById("word");
  const categories = document.getElementById("categories");
  const docu = document.documentElement;
  const custom = document.getElementById("custom");
  const customize = document.getElementById("customize");
  const cTitle = document.getElementById("c-title")
  const addInput = document.getElementById("add");
  const addBtn = document.getElementById("add-button");
  const allEditBtns = document.querySelectorAll(".edit");

  allEditBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      let category = btn.id.match(/\w+/)[0];
      let ul = document.createElement('ul');
      ul.id = `${category}-list`;
      customize.appendChild(ul);
      currentCategoryKey = category;

      customize.style.display = "flex";
      cTitle.textContent = category.toUpperCase();
      document.getElementById('start').style.display = 'none';

      wordCategories[category].forEach(word => {
        let li = document.createElement('li');
        let button = document.createElement('button')
        let newItem = document.createTextNode(word);


        button.classList.add('close');
        button.textContent = "x";
        li.appendChild(newItem);
        li.appendChild(button);
        ul.appendChild(li);
      })
    })
  })

  //function setCategory
    //ITERATE through the wordCategories
      //ADD a click eventListener
      //SET the currentCategory using the id of the clicked category
      //INITIALIZE the game

  function setCategory(){
    const allCategories = categories.querySelectorAll(".category");
    allCategories.forEach(category => {
      category.addEventListener("click", () => {
        currentCategoryKey = category.id;
        currentCategory = [...wordCategories[currentCategoryKey]];
        initializeGame();
      })
    })
  }

  // function getRandomNumber
    //USE Math.floor and Math.random multiplied to the category's length

  function getRandomNumber(){
    return Math.floor(Math.random() * currentCategory.length);
  }

  // function setRandomWord
    //INSERT the currentWord in the word div

  function setRandomWord(){
    if (currentCategory.length === 0){
      word.textContent = "";
      return;
    }

    word.textContent = currentCategory[currentIndex];
    fitWordToCard();
  }

  function fitWordToCard(){
    if (!word.textContent.trim()) return;

    let fontSize = Math.min(Math.floor(window.innerWidth * 0.12), 140);
    const minFontSize = 50;

    word.style.fontSize = `${fontSize}px`;
    while (
      (word.scrollWidth > word.clientWidth - 50 || word.scrollHeight > word.clientHeight - 50) &&
      fontSize > minFontSize
    ) {
      fontSize -= 2;
      word.style.fontSize = `${fontSize}px`;
    }
  }

  // function countRemaining
    //GET the current array length
    //SET the length in cards span

  function countRemaining(){
    remainingWords = currentCategory.length;
    const cards = document.getElementById("cards");
    cards.textContent = `${remainingWords}`;
  }

  // function setScore
    //SET the score in the score span

  function setScore(){
    const scoreSpan = document.getElementById("score");
    scoreSpan.textContent = `${score}`;
  }

  // function checkEnd
    //IF there are no more remaining cards
        //RELOAD the window
    //ELSE continue

  function checkEnd(){
    if (remainingWords == 0){
        get.disabled = true;
        pass.disabled = true;
    } else return;
  }

  // function addWord
    //GET the value of the text input
    //IF the value is empty, return
    //ELSE create a new li element
      //ADD a textnode and append it to the li element
      //APPEND the li element to the list
      //PUSH the value into the category array
      //CLEAR the input value

    function addWord(category){
      let index = wordCategories[category].length;
      let word = addInput.value;
      if (word == "" || wordCategories[category].indexOf(word) !== -1) return;

      index++;
      let li = document.createElement('li');
      let button = document.createElement('button');
      let newItem = document.createTextNode(word);


      button.classList.add('close');
      button.textContent = "x";
      li.id = `${category}-${word}`
      li.appendChild(newItem);
      li.appendChild(button);
      document.getElementById(`${category}-list`).appendChild(li);
      wordCategories[category].push(word);
      addInput.value = "";
    }

  // ADD an eventListener for the pass button
    // USE getRandomNumber and REASSING currentWord
    // USE setRandomWord

  pass.onclick = () => {
    currentIndex = getRandomNumber();
    setRandomWord();
  }

  // ADD an eventListener for the get button
    // REMOVE the currentWord from the list through splicing
    // INCREMENT the score
    // SET the remaining number of cards
    // GET the new currentWord through getRandomNumber
    // SET the new currentWord in the html

  get.onclick = () => {
    currentCategory.splice(currentIndex, 1);
    score++;
    setScore();
    countRemaining();
    currentIndex = getRandomNumber();
    setRandomWord();
    checkEnd();
  }

  // ADD an eventListener for the reset button
    // SET the score to 0

  reset.onclick = () => {
    score = 0;
    setScore();

    currentCategory = [...wordCategories[currentCategoryKey]];
    countRemaining();
    get.disabled = false;
    pass.disabled = false;

    if (remainingWords > 0){
      currentIndex = getRandomNumber();
      setRandomWord();
    } else {
      word.textContent = "";
    }
  }

  //ADD a click function for custom
    //SET the display for customize div as flex
    //SET the textContent of h3 as the textContent of the specific button

  custom.onclick = () => {
    customize.style.display = "flex";
    cTitle.textContent = custom.textContent;
    currentCategoryKey = "custom";
    const list = document.createElement("ul");
    list.id = "custom-list"
    document.querySelector('#start').style.display = "flex"

    wordCategories[currentCategoryKey].forEach(word => {
      let li = document.createElement('li');
      let button = document.createElement('button')
      let newItem = document.createTextNode(word);


      button.classList.add('close');
      button.textContent = "x";
      li.appendChild(newItem);
      li.appendChild(button);
      list.appendChild(li);
    })
    
    customize.appendChild(list);

  }

  //ADD a click function for the customize enter button

  addBtn.onclick = () => {
    addWord(currentCategoryKey);
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addBtn.click();
  })

  document.getElementById('start').onclick = () =>{
    currentCategoryKey = "custom";
    currentCategory = [...wordCategories.custom];
    initializeGame();
  }

  document.getElementById('close-edit').onclick = (e) => {
    e.target.parentNode.style.display = "none";
    document.getElementById(`${currentCategoryKey}-list`).remove()
  }

  //function initializeGame
    //SET the display of the categories div to none
    //ASSIGN the currentWord using currentCategory[currentIndex]
    //INSERT the currentWord in div using setRandomWord

  function initializeGame(){
    categories.style.display = 'none';
    customize.style.display = 'none';
    word.style.display ='flex';
    score = 0;
    countRemaining();
    setScore();

    if (remainingWords === 0){
      word.textContent = "";
      get.disabled = true;
      pass.disabled = true;
      return;
    }

    get.disabled = false;
    pass.disabled = false;
    currentIndex = getRandomNumber();
    setRandomWord();
  }

  window.addEventListener('resize', fitWordToCard)

  window.addEventListener('load', setCategory)

  document.addEventListener('click', (e) => {
    if (e.target.classList.contains("close")){
      let wordToDelete = e.target.parentNode.firstChild.textContent.trim();
      let i = wordCategories[currentCategoryKey].indexOf(wordToDelete);

      wordCategories[currentCategoryKey].splice(i, 1);
      e.target.parentNode.remove()
    }
  })

