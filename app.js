/**
 * NSYSU Language Exchange Club - Heads Up!
 * Modern 5-Level Architecture & Interactive Game Logic
 */

// ============================================================================
// 1. Word Categories & Vocabulary Data
// ============================================================================
const wordCategories = {
    // Level 1: Absolute Beginner (Pronouns & "To Be" verbs)
    absolute_beginner: [
        { word: "I / 我 (wǒ)", image: "🙋‍♂️" },
        { word: "You / 你 (nǐ)", image: "👉" },
        { word: "He / 他 (tā)", image: "👨" },
        { word: "She / 她 (tā)", image: "👩" },
        { word: "It / 它 (tā)", image: "📦" },
        { word: "We / 我們 (wǒ men)", image: "👥" },
        { word: "They / 他們 (tā men)", image: "🧑‍🤝‍🧑" },
        { word: "To Be (is/am/are) / 是 (shì)", image: "✨" },
    ],

    // Level 2: Very Easy (A0 Fundamentals: Greetings, Numbers, Colors, Basics)
    very_easy: [
        { word: "Hello / 你好 (nǐ hǎo)", image: "👋" },
        { word: "Thank you / 謝謝 (xiè xie)", image: "🙏" },
        { word: "Goodbye / 再見 (zài jiàn)", image: "🙋‍♀️" },
        { word: "Yes / 是的 (shì de)", image: "✅" },
        { word: "No / 不是 (bú shì)", image: "🚫" },
        { word: "Please / 請 (qǐng)", image: "🤲" },
        { word: "Sorry / 對不起 (duì bu qǐ)", image: "🙇" },
        { word: "You're welcome / 不客氣 (bú kè qì)", image: "😊" },
        { word: "One / 一 (yī)", image: "1️⃣" },
        { word: "Two / 二 (èr)", image: "2️⃣" },
        { word: "Three / 三 (sān)", image: "3️⃣" },
        { word: "Red / 紅色 (hóng sè)", image: "🔴" },
        { word: "Blue / 藍色 (lán sè)", image: "🔵" },
        { word: "Yellow / 黃色 (huáng sè)", image: "🟡" },
        { word: "Green / 綠色 (lǜ sè)", image: "🟢" },
        { word: "White / 白色 (bái sè)", image: "⚪" },
        { word: "Black / 黑色 (hēi sè)", image: "⚫" },
        { word: "Delicious / 好吃 (hǎo chī)", image: "😋" },
        { word: "Happy / 開心 (kāi xīn)", image: "😄" },
        { word: "Water / 水 (shuǐ)", image: "💧" }
    ],

    // Level 3: Easy (10 Original daily1 items + 12 New Beginner items)
    easy: [
        // Original 10 items
        { word: "Boba Tea / 珍珠奶茶 (zhēnzhū nǎichá)", image: "🧋" },
        { word: "Airplane / 飛機 (fēi jī)", image: "✈️" },
        { word: "Mobile Phone / 手機 (shǒu jī)", image: "📱" },
        { word: "Umbrella / 雨傘 (yǔ sǎn)", image: "☂️" },
        { word: "Keys / 鑰匙 (yào shi)", image: "🔑" },
        { word: "Water Bottle / 水壺 (shuǐ hú)", image: "💧" },
        { word: "Toilet Paper / 衛生紙 (wèi shēng zhǐ)", image: "🧻" },
        { word: "Shoes / 鞋子 (xié zi)", image: "👟" },
        { word: "Backpack / 背包 (bēi bāo)", image: "🎒" },
        { word: "Glasses / 眼鏡 (yǎn jìng)", image: "👓" },
        // 12 Additional items
        { word: "Bus / 公車 (gōng chē)", image: "🚌" },
        { word: "Bicycle / 腳踏車 (jiǎo tà chē)", image: "🚲" },
        { word: "Coffee / 咖啡 (kā fēi)", image: "☕" },
        { word: "Book / 書 (shū)", image: "📖" },
        { word: "Cat / 貓咪 (māo mī)", image: "🐱" },
        { word: "Dog / 狗狗 (gǒu gou)", image: "🐶" },
        { word: "Watch / 手錶 (shǒu biǎo)", image: "⌚" },
        { word: "Hat / 帽子 (mào zi)", image: "🧢" },
        { word: "Bread / 麵包 (miàn bāo)", image: "🍞" },
        { word: "Apple / 蘋果 (píng guǒ)", image: "🍎" },
        { word: "Laptop / 筆電 (bǐ diàn)", image: "💻" },
        { word: "Dormitory / 宿舍 (sù shè)", image: "🏢" }
    ],

    // Level 4: Medium (8 Original daily2 items + 12 New Intermediate items)
    medium: [
        // Original 8 items
        { word: "Earphones / 耳機 (ěr jī)", image: "🎧" },
        { word: "Teapot / 茶壺 (chá hú)", image: "🫖" },
        { word: "Helmet / 安全帽 (ān quán mào)", image: "🪖" },
        { word: "Receipt / 發票 (fā piào)", image: "🧾" },
        { word: "Charger / 充電器 (chōng diàn qì)", image: "🔌" },
        { word: "Microwave / 微波爐 (wéi bō lú)", image: "📟" },
        { word: "Toothbrush / 牙刷 (yá shuā)", image: "🪥" },
        { word: "Credit Card / 信用卡 (xìn yòng kǎ)", image: "💳" },
        // 12 Additional items
        { word: "Convenience Store / 便利商店 (biàn lì shāng diàn)", image: "🏪" },
        { word: "Night Market / 夜市 (yè shì)", image: "🏮" },
        { word: "Passport / 護照 (hù zhào)", image: "🛂" },
        { word: "Luggage / 行李箱 (xíng li xiāng)", image: "🧳" },
        { word: "Air Conditioner / 冷氣機 (lěng qì jī)", image: "❄️" },
        { word: "Reusable Bag / 環保袋 (huán bǎo dài)", image: "🛍️" },
        { word: "Elevator / 電梯 (diàn tī)", image: "🛗" },
        { word: "Thermos Cup / 保溫杯 (bǎo wēn bēi)", image: "🥤" },
        { word: "Scarf / 圍巾 (wéi jīn)", image: "🧣" },
        { word: "Pillow / 枕頭 (zhěn tou)", image: "🛋️" },
        { word: "Hair Dryer / 吹風機 (chuī fēng jī)", image: "💨" },
        { word: "Flashlight / 手電筒 (shǒu diàn tǒng)", image: "🔦" }
    ],

    // Level 5: Hard (8 Original daily3 items + 12 New Advanced items)
    hard: [
        // Original 8 items
        { word: "Power Bank / 行動電源 (xíng dòng diàn yuán)", image: "🔋" },
        { word: "Contact Lenses / 隱形眼鏡 (yǐn xíng yǎn jìng)", image: "👁️" },
        { word: "Extension Cord / 延長線 (yán cháng xiàn)", image: "🔌" },
        { word: "Electric Mosquito Swatter / 電蚊拍 (diàn wén pāi)", image: "🦟" },
        { word: "Nail Clippers / 指甲剪 (zhǐ jia jiǎn)", image: "✂️" },
        { word: "Sunscreen / 防曬乳 (fáng shài rǔ)", image: "🧴" },
        { word: "Vacuum Cleaner / 吸塵器 (xī chén qì)", image: "🧹" },
        { word: "Alarm Clock / 鬧鐘 (nào zhōng)", image: "⏰" },
        // 12 Additional items
        { word: "Dehumidifier / 除濕機 (chú shī jī)", image: "💧" },
        { word: "Noise-Cancelling Headphones / 降噪耳機 (jiàng zào ěr jī)", image: "🎧" },
        { word: "Mosquito Repellent / 防蚊液 (fáng wén yè)", image: "🌿" },
        { word: "Hand Warmer / 暖暖包 (nuǎn nuǎn bāo)", image: "♨️" },
        { word: "Luggage Scale / 行李秤 (xíng li chèng)", image: "⚖️" },
        { word: "Universal Adapter / 萬國轉接頭 (wàn guó zhuǎn jiē tóu)", image: "🔌" },
        { word: "Lint Roller / 隨身除塵滾輪 (suí shēn chú chén gǔn lún)", image: "🧻" },
        { word: "Essential Oil / 精油 (jīng yóu)", image: "🧴" },
        { word: "Screen Protector / 螢幕保護貼 (yíng mù bǎo hù tiē)", image: "📱" },
        { word: "Humidifier / 加濕器 (jiā shī qì)", image: "💨" },
        { word: "Raincoat / 雨衣 (yǔ yī)", image: "🧥" },
        { word: "Reusable Straw / 環保吸管 (huán bǎo xī guǎn)", image: "🥤" }
    ],

    // Custom Category
    custom: []
};

// Level Display Titles for UI Badges
const levelTitles = {
    absolute_beginner: "Level 1: Absolute Beginner",
    very_easy: "Level 2: Very Easy",
    easy: "Level 3: Easy",
    medium: "Level 4: Medium",
    hard: "Level 5: Hard",
    custom: "Custom Deck"
};

// ============================================================================
// 2. State & DOM Element References
// ============================================================================
let currentCategory = [];
let currentCategoryKey = "easy";
let remainingWords = 0;
let currentIndex = 0;
let score = 0;
let isSoundEnabled = true;

// Screens
const screenCategories = document.getElementById("categories");
const screenPregame = document.getElementById("pregame-screen");
const screenGame = document.getElementById("game");

// Modals
const modalGameOver = document.getElementById("game-over-modal");
const modalCustomize = document.getElementById("customize");

// Game Play Elements
const wordCard = document.getElementById("word");
const passBtn = document.getElementById("pass");
const getBtn = document.getElementById("get");
const resetBtn = document.getElementById("reset");
const exitGameBtn = document.getElementById("exit-game");
const cardsSpan = document.getElementById("cards");
const scoreSpan = document.getElementById("score");
const levelBadge = document.getElementById("current-level-badge");

// Pregame Elements
const pregameBackBtn = document.getElementById("pregame-back");
const pregameStartBtn = document.getElementById("pregame-start-btn");
const pregameVocabGrid = document.getElementById("pregame-vocab-grid");

// Game Over Elements
const finalScoreSpan = document.getElementById("final-score");
const finalLevelSpan = document.getElementById("final-level");
const playAgainBtn = document.getElementById("play-again-btn");
const returnMenuBtn = document.getElementById("return-menu-btn");

// Customize Elements
const customBtn = document.getElementById("custom");
const cTitle = document.getElementById("c-title");
const addInput = document.getElementById("add");
const addBtn = document.getElementById("add-button");
const closeEditBtn = document.getElementById("close-edit");
const startCustomBtn = document.getElementById("start");
const editListContainer = document.getElementById("edit-list-container");

// Sound Toggle
const soundToggleBtn = document.getElementById("sound-toggle");

// ============================================================================
// 3. Audio Synth Feedback (Web Audio API)
// ============================================================================
const AudioContext = window.AudioContext || window.webkitAudioContext;
let audioCtx = null;

function playTone(type) {
    if (!isSoundEnabled) return;
    try {
        if (!audioCtx) {
            audioCtx = new AudioContext();
        }
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }

        const now = audioCtx.currentTime;
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);

        if (type === 'get') {
            // Pleasant major third chime
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(523.25, now); // C5
            osc.frequency.setValueAtTime(659.25, now + 0.08); // E5
            osc.frequency.setValueAtTime(783.99, now + 0.16); // G5
            gain.gain.setValueAtTime(0.15, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
            osc.start(now);
            osc.stop(now + 0.35);
        } else if (type === 'pass') {
            // Soft boop
            osc.type = 'sine';
            osc.frequency.setValueAtTime(320, now);
            osc.frequency.exponentialRampToValueAtTime(220, now + 0.15);
            gain.gain.setValueAtTime(0.12, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
            osc.start(now);
            osc.stop(now + 0.18);
        } else if (type === 'win') {
            // Cheerful fanfare
            const notes = [523.25, 659.25, 783.99, 1046.50];
            notes.forEach((freq, i) => {
                const noteOsc = audioCtx.createOscillator();
                const noteGain = audioCtx.createGain();
                noteOsc.connect(noteGain);
                noteGain.connect(audioCtx.destination);
                noteOsc.type = 'triangle';
                noteOsc.frequency.setValueAtTime(freq, now + i * 0.1);
                noteGain.gain.setValueAtTime(0.18, now + i * 0.1);
                noteGain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.1 + 0.3);
                noteOsc.start(now + i * 0.1);
                noteOsc.stop(now + i * 0.1 + 0.3);
            });
        }
    } catch (e) {
        console.warn("Audio context not allowed yet:", e);
    }
}

// Sound toggle button click
if (soundToggleBtn) {
    soundToggleBtn.addEventListener("click", () => {
        isSoundEnabled = !isSoundEnabled;
        soundToggleBtn.textContent = isSoundEnabled ? "🔊" : "🔇";
        soundToggleBtn.setAttribute("title", isSoundEnabled ? "Mute Sound" : "Enable Sound");
    });
}

// ============================================================================
// 4. Navigation & Screen Routing
// ============================================================================
function showScreen(screen) {
    [screenCategories, screenPregame, screenGame].forEach(s => {
        if (s) {
            s.classList.remove("screen-active");
            s.style.display = "none";
            s.setAttribute("aria-hidden", "true");
        }
    });

    if (screen) {
        screen.style.display = "flex";
        // Force reflow for CSS animation
        void screen.offsetWidth;
        screen.classList.add("screen-active");
        screen.setAttribute("aria-hidden", "false");
    }
}

function openModal(modal) {
    if (!modal) return;
    modal.style.display = "flex";
    void modal.offsetWidth;
    modal.classList.add("modal-active");
    modal.setAttribute("aria-hidden", "false");
}

function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove("modal-active");
    modal.setAttribute("aria-hidden", "true");
    setTimeout(() => {
        if (!modal.classList.contains("modal-active")) {
            modal.style.display = "none";
        }
    }, 200);
}

// ============================================================================
// 5. Pre-Game Review Screen Logic (Absolute Beginner)
// ============================================================================
function renderPregameReview() {
    pregameVocabGrid.innerHTML = "";
    const list = wordCategories.absolute_beginner || [];

    list.forEach(item => {
        const card = document.createElement("div");
        card.className = "vocab-card";

        const parsed = parseWordItem(item);
        card.innerHTML = `
            <div class="vocab-emoji">${parsed.image}</div>
            <div class="vocab-details">
                <span class="vocab-en">${parsed.en}</span>
                <span class="vocab-cn">${parsed.cn}</span>
                ${parsed.pinyin ? `<span class="vocab-pinyin">${parsed.pinyin}</span>` : ""}
            </div>
        `;
        pregameVocabGrid.appendChild(card);
    });

    showScreen(screenPregame);
}

// ============================================================================
// 6. Gameplay Logic
// ============================================================================

/**
 * Parses word item whether it is `{ word: "EN / CN (pinyin)", image: "..." }` or a plain string
 */
function parseWordItem(item) {
    if (!item) return { en: "", cn: "", pinyin: "", image: "✨", raw: "" };

    const rawWord = typeof item === 'string' ? item : (item.word || "");
    const image = (typeof item === 'object' && item.image) ? item.image : "💬";

    // Expected format: "English / 中文 (pinyin)" or "English / 中文"
    if (rawWord.includes("/")) {
        const parts = rawWord.split("/");
        const en = parts[0].trim();
        const rest = parts.slice(1).join("/").trim();

        // Check for pinyin in parentheses
        const pinyinMatch = rest.match(/\(([^)]+)\)/);
        if (pinyinMatch) {
            const pinyin = pinyinMatch[1];
            const cn = rest.replace(/\([^)]+\)/, "").trim();
            return { en, cn, pinyin, image, raw: rawWord };
        } else {
            return { en, cn: rest, pinyin: "", image, raw: rawWord };
        }
    }

    return { en: rawWord, cn: "", pinyin: "", image, raw: rawWord };
}

function getRandomIndex() {
    if (currentCategory.length === 0) return 0;
    return Math.floor(Math.random() * currentCategory.length);
}

function updateStatusCounters() {
    remainingWords = currentCategory.length;
    if (cardsSpan) cardsSpan.textContent = `${remainingWords}`;
    if (scoreSpan) scoreSpan.textContent = `${score}`;
    if (levelBadge) levelBadge.textContent = levelTitles[currentCategoryKey] || currentCategoryKey;
}

function displayCurrentWord() {
    if (currentCategory.length === 0) {
        checkGameCompletion();
        return;
    }

    const currentItem = currentCategory[currentIndex];
    const parsed = parseWordItem(currentItem);

    // Re-trigger animation
    wordCard.style.animation = 'none';
    void wordCard.offsetWidth;
    wordCard.style.animation = 'cardPopIn 0.28s cubic-bezier(0.175, 0.885, 0.32, 1.275)';

    if (parsed.cn) {
        wordCard.innerHTML = `
            <div class="word-image">${parsed.image}</div>
            <div class="word-content-box">
                <div class="word-en">${parsed.en}</div>
                <div class="word-cn-group">
                    <span class="word-cn">${parsed.cn}</span>
                    ${parsed.pinyin ? `<span class="word-pinyin">(${parsed.pinyin})</span>` : ""}
                </div>
            </div>
        `;
    } else {
        wordCard.innerHTML = `
            <div class="word-image">${parsed.image}</div>
            <div class="word-content-box">
                <div class="word-en">${parsed.en}</div>
            </div>
        `;
    }

    fitWordToCard();
}

function fitWordToCard() {
    // Dynamic adjustment for high-density cards if needed
    const wordEn = wordCard.querySelector(".word-en");
    if (!wordEn) return;

    let fontSize = Math.min(Math.floor(window.innerWidth * 0.08), 44);
    if (window.innerHeight < 500) {
        fontSize = 24; // Compact on landscape
    }
    wordEn.style.fontSize = `${Math.max(fontSize, 20)}px`;
}

function checkGameCompletion() {
    if (remainingWords === 0) {
        playTone('win');
        wordCard.innerHTML = `
            <div class="game-over-banner">
                <span style="font-size: 3.5rem;">🎉</span>
                <span>Deck Completed!</span>
            </div>
        `;
        passBtn.disabled = true;
        getBtn.disabled = true;

        // Populate and open Game Over Modal
        if (finalScoreSpan) finalScoreSpan.textContent = `${score}`;
        if (finalLevelSpan) finalLevelSpan.textContent = levelTitles[currentCategoryKey] || currentCategoryKey;
        setTimeout(() => {
            openModal(modalGameOver);
        }, 500);
    }
}

function startActiveGame(categoryKey) {
    currentCategoryKey = categoryKey;
    // Clone category deck
    currentCategory = [...wordCategories[currentCategoryKey]];
    score = 0;
    updateStatusCounters();

    closeModal(modalGameOver);
    closeModal(modalCustomize);
    showScreen(screenGame);

    passBtn.disabled = false;
    getBtn.disabled = false;

    if (currentCategory.length === 0) {
        wordCard.innerHTML = `<div class="word-placeholder">No words in this deck. Add words in Custom!</div>`;
        passBtn.disabled = true;
        getBtn.disabled = true;
        return;
    }

    currentIndex = getRandomIndex();
    displayCurrentWord();
}

// ============================================================================
// 7. Event Handlers & Button Actions
// ============================================================================

// Main Category Level Click Routing
function setupCategorySelection() {
    // Level Cards click (Play button or card body)
    const levelCards = document.querySelectorAll(".level-card");
    levelCards.forEach(card => {
        const levelKey = card.getAttribute("data-level");
        const playBtn = card.querySelector(".btn-play");

        const handleSelect = (e) => {
            // Prevent edit button clicks from triggering play
            if (e.target.closest(".btn-edit")) return;

            if (levelKey === "absolute_beginner") {
                // Route to Pre-Game Review Screen
                renderPregameReview();
            } else {
                startActiveGame(levelKey);
            }
        };

        if (playBtn) {
            playBtn.addEventListener("click", handleSelect);
        }
    });

    // Pregame buttons
    if (pregameBackBtn) {
        pregameBackBtn.addEventListener("click", () => {
            showScreen(screenCategories);
        });
    }

    if (pregameStartBtn) {
        pregameStartBtn.addEventListener("click", () => {
            startActiveGame("absolute_beginner");
        });
    }

    // Exit Game button
    if (exitGameBtn) {
        exitGameBtn.addEventListener("click", () => {
            showScreen(screenCategories);
        });
    }

    // Game Over modal buttons
    if (playAgainBtn) {
        playAgainBtn.addEventListener("click", () => {
            startActiveGame(currentCategoryKey);
        });
    }

    if (returnMenuBtn) {
        returnMenuBtn.addEventListener("click", () => {
            closeModal(modalGameOver);
            showScreen(screenCategories);
        });
    }
}

// PASS Button Action
passBtn.addEventListener("click", () => {
    if (currentCategory.length === 0) return;
    playTone('pass');

    // Pick a different random word if there is more than 1
    if (currentCategory.length > 1) {
        let nextIndex;
        do {
            nextIndex = getRandomIndex();
        } while (nextIndex === currentIndex && currentCategory.length > 1);
        currentIndex = nextIndex;
    }
    displayCurrentWord();
});

// GET Button Action
getBtn.addEventListener("click", () => {
    if (currentCategory.length === 0) return;
    playTone('get');

    // Remove the current word
    currentCategory.splice(currentIndex, 1);
    score++;
    updateStatusCounters();

    if (currentCategory.length > 0) {
        currentIndex = getRandomIndex();
        displayCurrentWord();
    } else {
        checkGameCompletion();
    }
});

// RESET Button Action
resetBtn.addEventListener("click", () => {
    score = 0;
    currentCategory = [...wordCategories[currentCategoryKey]];
    updateStatusCounters();
    passBtn.disabled = false;
    getBtn.disabled = false;

    if (currentCategory.length > 0) {
        currentIndex = getRandomIndex();
        displayCurrentWord();
    } else {
        wordCard.innerHTML = `<div class="word-placeholder">Deck is empty!</div>`;
    }
});

// ============================================================================
// 8. Edit / Customize Word Modal Logic
// ============================================================================
function setupEditAndCustomization() {
    const editBtns = document.querySelectorAll(".btn-edit");

    editBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const levelKey = btn.id.replace("edit-", "");
            openEditModalForCategory(levelKey);
        });
    });

    if (customBtn) {
        customBtn.addEventListener("click", () => {
            openEditModalForCategory("custom");
        });
    }

    if (closeEditBtn) {
        closeEditBtn.addEventListener("click", () => {
            closeModal(modalCustomize);
        });
    }

    if (startCustomBtn) {
        startCustomBtn.addEventListener("click", () => {
            startActiveGame(currentCategoryKey);
        });
    }

    if (addBtn) {
        addBtn.addEventListener("click", handleAddWord);
    }

    if (addInput) {
        addInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                handleAddWord();
            }
        });
    }
}

function openEditModalForCategory(categoryKey) {
    currentCategoryKey = categoryKey;
    cTitle.textContent = `${levelTitles[categoryKey] || categoryKey.toUpperCase()} - Word List`;
    renderEditWordList();
    openModal(modalCustomize);
}

function renderEditWordList() {
    editListContainer.innerHTML = "";
    const words = wordCategories[currentCategoryKey] || [];

    const ul = document.createElement("ul");
    ul.className = "edit-words-list";

    words.forEach((item, index) => {
        const li = document.createElement("li");
        const parsed = parseWordItem(item);
        const textSpan = document.createElement("span");
        textSpan.textContent = `${parsed.image} ${parsed.raw || parsed.en}`;

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "close";
        deleteBtn.textContent = "✕";
        deleteBtn.setAttribute("aria-label", "Delete word");
        deleteBtn.onclick = () => {
            wordCategories[currentCategoryKey].splice(index, 1);
            renderEditWordList();
        };

        li.appendChild(textSpan);
        li.appendChild(deleteBtn);
        ul.appendChild(li);
    });

    editListContainer.appendChild(ul);
}

function handleAddWord() {
    const val = addInput.value.trim();
    if (!val) return;

    if (!wordCategories[currentCategoryKey]) {
        wordCategories[currentCategoryKey] = [];
    }

    // Default icon if not provided
    const newWordObj = {
        word: val,
        image: "💬"
    };

    wordCategories[currentCategoryKey].push(newWordObj);
    addInput.value = "";
    renderEditWordList();
}

// ============================================================================
// 9. Keyboard Controls (Facilitator Shortcuts)
// ============================================================================
document.addEventListener("keydown", (e) => {
    // Do not trigger game controls when user is typing in an input
    if (document.activeElement && document.activeElement.tagName === "INPUT") {
        return;
    }

    // Modal Escape shortcuts
    if (modalCustomize && modalCustomize.classList.contains("modal-active")) {
        if (e.key === "Escape") {
            closeModal(modalCustomize);
            return;
        }
    }

    // Active game shortcuts
    if (screenGame && screenGame.classList.contains("screen-active") && !modalGameOver.classList.contains("modal-active")) {
        if (e.key === "ArrowLeft" || e.key === "p" || e.key === "P") {
            if (!passBtn.disabled) passBtn.click();
        } else if (e.key === "ArrowRight" || e.key === " " || e.key === "g" || e.key === "G") {
            e.preventDefault(); // Prevent spacebar scroll
            if (!getBtn.disabled) getBtn.click();
        } else if (e.key === "Escape") {
            showScreen(screenCategories);
        }
    } else if (modalGameOver && modalGameOver.classList.contains("modal-active")) {
        if (e.key === "Enter" || e.key === " ") {
            if (playAgainBtn) playAgainBtn.click();
        }
    }
});

// ============================================================================
// 10. Initialization
// ============================================================================
window.addEventListener("DOMContentLoaded", () => {
    setupCategorySelection();
    setupEditAndCustomization();
    window.addEventListener("resize", fitWordToCard);
    showScreen(screenCategories);
});
