/**
 * NSYSU Language Exchange Club - Interactive Word Cloud
 * State Management, Dynamic Sizing, Tooltips, Deletion & TXT Export
 */

// ============================================================================
// 1. Initial State & Configuration
// ============================================================================
const STORAGE_KEY = "nsysu_lec_wordcloud_data";

// Pre-seeded sample data for immediate visual appeal on first visit
const DEFAULT_WORDS = {
    "Japanese": 8,
    "Spanish": 6,
    "Korean": 5,
    "German": 4,
    "French": 4,
    "Mandarin": 3,
    "Vietnamese": 3,
    "Italian": 2,
    "Indonesian": 2,
    "Thai": 2
};

// Curated warm & vibrant color palette for words
const WORD_COLOR_THEMES = [
    { bg: "linear-gradient(135deg, #FF6B6B 0%, #E76F51 100%)", text: "#FFFFFF", border: "#D45B3E" },
    { bg: "linear-gradient(135deg, #4EA8DE 0%, #2A6F97 100%)", text: "#FFFFFF", border: "#014F86" },
    { bg: "linear-gradient(135deg, #52B788 0%, #2D6A4F 100%)", text: "#FFFFFF", border: "#1B4332" },
    { bg: "linear-gradient(135deg, #F4A261 0%, #E07A5F 100%)", text: "#FFFFFF", border: "#C85A3D" },
    { bg: "linear-gradient(135deg, #9B5DE5 0%, #6D597A 100%)", text: "#FFFFFF", border: "#5C3D75" },
    { bg: "linear-gradient(135deg, #00B4D8 0%, #0077B6 100%)", text: "#FFFFFF", border: "#023E8A" },
    { bg: "linear-gradient(135deg, #F15BB5 0%, #D81159 100%)", text: "#FFFFFF", border: "#8F1D45" },
    { bg: "linear-gradient(135deg, #38B000 0%, #007200 100%)", text: "#FFFFFF", border: "#004B23" },
    { bg: "linear-gradient(135deg, #FB8500 0%, #D00000 100%)", text: "#FFFFFF", border: "#9D0208" },
    { bg: "linear-gradient(135deg, #4361EE 0%, #3F37C9 100%)", text: "#FFFFFF", border: "#480CA8" }
];

// In-Memory Data Store (Word -> Count)
let wordCounts = {};

// DOM Elements
const wordCloudContainer = document.getElementById("wordcloud-container");
const emptyState = document.getElementById("cloud-empty-state");
const languageInput = document.getElementById("language-input");
const wordForm = document.getElementById("word-form");
const clearInputBtn = document.getElementById("clear-input-btn");
const downloadBtn = document.getElementById("download-btn");
const clearAllBtn = document.getElementById("clear-all-btn");
const totalVotesSpan = document.getElementById("total-votes-count");
const uniqueLanguagesSpan = document.getElementById("unique-languages-count");
const suggestionChips = document.getElementById("suggestion-chips");

// ============================================================================
// 2. Storage & State Helper Functions
// ============================================================================
function loadState() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            wordCounts = JSON.parse(saved);
        } else {
            // First time load with defaults
            wordCounts = { ...DEFAULT_WORDS };
            saveState();
        }
    } catch (e) {
        console.warn("Could not load from localStorage:", e);
        wordCounts = { ...DEFAULT_WORDS };
    }
}

function saveState() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(wordCounts));
    } catch (e) {
        console.warn("Could not save to localStorage:", e);
    }
}

/**
 * Standardize capitalization & whitespace
 * e.g. "  jAPAnese  " -> "Japanese"
 */
function standardizeWord(str) {
    if (!str) return "";
    const clean = str.trim();
    if (!clean) return "";

    // If English word, capitalize first letter of each word
    if (/^[A-Za-z\s]+$/.test(clean)) {
        return clean
            .toLowerCase()
            .split(/\s+/)
            .map(w => w.charAt(0).toUpperCase() + w.slice(1))
            .join(" ");
    }
    
    // For non-ascii (like Chinese characters) or mixed, return trimmed
    return clean;
}

/**
 * Case-insensitive match check against existing keys
 */
function findExistingKey(input) {
    const target = input.toLowerCase();
    for (const key of Object.keys(wordCounts)) {
        if (key.toLowerCase() === target) {
            return key;
        }
    }
    return null;
}

// ============================================================================
// 3. Word Submission & Management
// ============================================================================
function addWord(inputRaw) {
    const standard = standardizeWord(inputRaw);
    if (!standard) return;

    const existingKey = findExistingKey(standard);
    if (existingKey) {
        wordCounts[existingKey] = (wordCounts[existingKey] || 0) + 1;
    } else {
        wordCounts[standard] = 1;
    }

    saveState();
    renderWordCloud(existingKey || standard);
}

function deleteWord(wordKey) {
    if (confirm(`Delete "${wordKey}" from the Word Cloud?`)) {
        delete wordCounts[wordKey];
        saveState();
        renderWordCloud();
    }
}

function clearAllWords() {
    if (confirm("Are you sure you want to reset all votes in the Word Cloud?")) {
        wordCounts = {};
        saveState();
        renderWordCloud();
    }
}

// ============================================================================
// 4. Dynamic Word Cloud Rendering
// ============================================================================
function renderWordCloud(highlightedWord = null) {
    const keys = Object.keys(wordCounts);
    const totalWords = keys.length;
    let totalVotes = 0;

    keys.forEach(k => {
        totalVotes += wordCounts[k];
    });

    // Update Counters
    if (totalVotesSpan) totalVotesSpan.textContent = totalVotes;
    if (uniqueLanguagesSpan) uniqueLanguagesSpan.textContent = totalWords;

    // Handle Empty State
    if (totalWords === 0) {
        wordCloudContainer.innerHTML = "";
        if (emptyState) {
            emptyState.style.display = "flex";
            wordCloudContainer.appendChild(emptyState);
        }
        return;
    }

    // Determine Min & Max Frequencies
    let minCount = Infinity;
    let maxCount = -Infinity;

    keys.forEach(k => {
        const c = wordCounts[k];
        if (c < minCount) minCount = c;
        if (c > maxCount) maxCount = c;
    });

    // Sort words or shuffle for dynamic cloud appearance
    // Mix of randomized layout + size variety
    const sortedOrShuffled = [...keys].sort((a, b) => {
        // Subtle pseudo-random + weight scattering
        return 0.5 - Math.random();
    });

    wordCloudContainer.innerHTML = "";

    sortedOrShuffled.forEach((wordKey, idx) => {
        const count = wordCounts[wordKey];
        const theme = WORD_COLOR_THEMES[idx % WORD_COLOR_THEMES.length];

        // Dynamic Font-Size Calculation
        // Min size: 1.15rem, Max size: 3.5rem (scales with count)
        const minSize = 1.15;
        const maxSize = 3.6;
        let scale = 0;

        if (maxCount > minCount) {
            scale = (count - minCount) / (maxCount - minCount);
        } else {
            scale = 0.5;
        }

        const calculatedRem = (minSize + scale * (maxSize - minSize)).toFixed(2);

        // Build Word Tag Element
        const tag = document.createElement("div");
        tag.className = "wordcloud-item";
        if (wordKey === highlightedWord) {
            tag.classList.add("just-added");
        }

        tag.style.fontSize = `${calculatedRem}rem`;
        tag.style.background = theme.bg;
        tag.style.color = theme.text;
        tag.style.borderColor = theme.border;

        // Tooltip Text
        const voteLabel = count === 1 ? "vote" : "votes";
        tag.setAttribute("data-tooltip", `${wordKey}: ${count} ${voteLabel}`);

        // Word Content
        const labelSpan = document.createElement("span");
        labelSpan.className = "word-label";
        labelSpan.textContent = wordKey;

        // Badge Count
        const countBadge = document.createElement("span");
        countBadge.className = "word-count-badge";
        countBadge.textContent = count;

        // Delete 'X' Button
        const delBtn = document.createElement("button");
        delBtn.className = "word-delete-btn";
        delBtn.innerHTML = "✕";
        delBtn.title = `Delete ${wordKey}`;
        delBtn.setAttribute("aria-label", `Delete ${wordKey}`);
        delBtn.onclick = (e) => {
            e.stopPropagation();
            deleteWord(wordKey);
        };

        tag.appendChild(labelSpan);
        tag.appendChild(countBadge);
        tag.appendChild(delBtn);

        // Clicking a word can also increment it directly for fast booth polling!
        tag.addEventListener("click", () => {
            addWord(wordKey);
        });

        wordCloudContainer.appendChild(tag);
    });
}

// ============================================================================
// 5. Download Info as .TXT File
// ============================================================================
function downloadInfoTxt() {
    const keys = Object.keys(wordCounts);
    if (keys.length === 0) {
        alert("There are no words to download yet!");
        return;
    }

    // Sort by popularity descending
    const sorted = [...keys].sort((a, b) => wordCounts[b] - wordCounts[a]);

    const now = new Date();
    const formattedDate = now.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    });

    let totalVotes = 0;
    keys.forEach(k => (totalVotes += wordCounts[k]));

    let textContent = "";
    textContent += "============================================================\n";
    textContent += "  NSYSU Language Exchange Club (國立中山大學語言交換社)\n";
    textContent += "  Live Booth Poll: \"What language do you want to learn?\"\n";
    textContent += `  Export Date: ${formattedDate}\n`;
    textContent += `  Total Votes: ${totalVotes} | Unique Languages: ${keys.length}\n`;
    textContent += "============================================================\n\n";

    textContent += "RANKING BY POPULARITY (人氣語言排行榜):\n";
    textContent += "------------------------------------------------------------\n";

    sorted.forEach((word, index) => {
        const count = wordCounts[word];
        const voteStr = count === 1 ? "vote" : "votes";
        const percentage = ((count / totalVotes) * 100).toFixed(1);
        textContent += `${(index + 1).toString().padStart(2, " ")}. ${word.padEnd(20, " ")}: ${count.toString().padStart(3, " ")} ${voteStr} (${percentage}%)\n`;
    });

    textContent += "\n------------------------------------------------------------\n";
    textContent += "Generated by NSYSU LEC Heads Up & Word Cloud System\n";

    // Trigger File Download
    const blob = new Blob([textContent], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    const fileDate = now.toISOString().slice(0, 10);
    link.href = url;
    link.download = `NSYSU_LEC_Language_Wishlist_${fileDate}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

// ============================================================================
// 6. Event Listeners & Initialization
// ============================================================================
function setupEventListeners() {
    // Form Submit
    if (wordForm) {
        wordForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const val = languageInput.value.trim();
            if (val) {
                addWord(val);
                languageInput.value = "";
                languageInput.focus();
            }
        });
    }

    // Clear Input Button
    if (clearInputBtn && languageInput) {
        clearInputBtn.addEventListener("click", () => {
            languageInput.value = "";
            languageInput.focus();
        });
    }

    // Download Button
    if (downloadBtn) {
        downloadBtn.addEventListener("click", downloadInfoTxt);
    }

    // Clear All Button
    if (clearAllBtn) {
        clearAllBtn.addEventListener("click", clearAllWords);
    }

    // Quick Suggestions
    if (suggestionChips) {
        suggestionChips.addEventListener("click", (e) => {
            const btn = e.target.closest(".chip-btn");
            if (btn) {
                const lang = btn.getAttribute("data-lang");
                if (lang) {
                    addWord(lang);
                }
            }
        });
    }
}

// Bootstrap
window.addEventListener("DOMContentLoaded", () => {
    loadState();
    setupEventListeners();
    renderWordCloud();
});
