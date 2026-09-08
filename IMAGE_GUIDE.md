# Image Guide for Heads Up Game

## ✅ What I've Done

Your game now supports images! I've added emoji to all words in the `daily1`, `daily2`, and `daily3` categories.

## 📝 How the New Format Works

Each word can now be either:
- A simple string: `"doctor"`
- An object with word and image: `{ word: "Boba Tea / 珍珠奶茶", image: "🧋" }`

## 🎨 How to Add More Images

### Option 1: Using Emoji (Easiest! ⭐ Recommended)
No downloads needed! Just copy emoji from:
- Windows: Press `Win + .` (period) to open emoji picker
- Mac: Press `Cmd + Ctrl + Space`
- Or copy from: https://emojipedia.org/

**Example:**
```javascript
jobs: [
  { word: "doctor", image: "👨‍⚕️" },
  { word: "illustrator", image: "🎨" },
  { word: "astronaut", image: "🚀" }
]
```

### Option 2: Using Image URLs
You can use direct image URLs from free services:

**Example:**
```javascript
daily1: [
  { 
    word: "Boba Tea", 
    image: "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?w=200"
  }
]
```

**Free Image Sources:**
- Unsplash: https://unsplash.com/ (right-click → copy image address)
- Pexels: https://www.pexels.com/
- Pixabay: https://pixabay.com/

### Option 3: Mix Both!
Some words with images, some without:
```javascript
jobs: [
  { word: "doctor", image: "👨‍⚕️" },
  "illustrator",  // No image
  { word: "astronaut", image: "🚀" }
]
```

## 🔧 To Update Other Categories

Just modify the format in [app.js](app.js). For example, for jobs:

```javascript
jobs: [
  { word: "doctor", image: "👨‍⚕️" },
  { word: "teacher", image: "👨‍🏫" },
  { word: "artist", image: "🎨" },
  // ... rest of your jobs
]
```

## 💡 Pro Tips

1. **Mix & Match**: Not all words need images - only add them where it helps!
2. **Emoji Work Offline**: Unlike image URLs, emoji work without internet
3. **Keep It Simple**: Don't spend hours finding perfect images - emoji are quick and fun!
4. **Test Mobile**: Emoji display consistently across devices

Enjoy your enhanced game! 🎮✨
