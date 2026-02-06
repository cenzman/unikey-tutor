# 🇻🇳 Unikey Tutor

An interactive web application for learning and practicing Vietnamese typing using the **Unikey (Telex)** input method. This single-page application helps users master Vietnamese characters through real-time conversion, guided exercises, and comprehensive reference materials.

![Vietnamese Flag Colors](https://img.shields.io/badge/🇻🇳-Vietnamese-red)
![License](https://img.shields.io/badge/license-MIT-blue)
![No Dependencies](https://img.shields.io/badge/dependencies-none-green)

## ✨ Features

### 📚 Comprehensive Unikey Cheatsheet
- Always-accessible reference for all Telex typing rules
- **Vowel Modifications**: â (aa), ă (aw), ê (ee), ô (oo), ơ (ow), ư (uw), đ (dd)
- **Tone Marks**: Sắc (s), Huyền (f), Hỏi (r), Ngã (x), Nặng (j), Remove (z)
- Collapsible interface to maximize practice area

### ✍️ Interactive Practice Area
- Free-form text area with **real-time Telex conversion**
- Type naturally and watch your keystrokes transform into Vietnamese characters
- Simulates authentic Unikey input method behavior
- Perfect for casual practice and experimentation

### 📖 Guided Practice Exercises
Three difficulty levels with structured learning:

#### 🌱 Beginner
- Practice individual vowels and tone marks
- Learn basic character combinations
- Build muscle memory for common patterns

#### 🌿 Intermediate
- Practice common Vietnamese words
- Master tone placement
- Expand vocabulary while typing

#### 🌳 Advanced
- Type complete Vietnamese sentences
- Practice natural phrases and expressions
- Perfect your speed and accuracy

### 📊 Real-Time Feedback
- **Character-by-character comparison** with color coding
  - 🟢 Green = Correct
  - 🔴 Red = Incorrect
  - ⚪ Gray = Pending
- **Live accuracy percentage** tracking
- **Progress bar** showing completion status
- Exercise completion feedback

### 🎯 Score & Statistics
- Track accuracy per exercise
- Monitor overall session performance
- View detailed results at level completion
- Retry levels to improve your scores

### 🎨 Modern UI/UX
- **Vietnamese cultural color theme** (red and yellow from the flag)
- Clean, modern design with smooth animations
- **Responsive layout** - works perfectly on desktop, tablet, and mobile
- **Dark mode support** with preference persistence
- Optimized typography for Vietnamese characters

## 🚀 Getting Started

### Quick Start
1. **Clone or download** this repository
2. **Open `index.html`** in your web browser
3. **Start typing!** No installation or setup required

```bash
git clone https://github.com/cenzman/unikey-tutor.git
cd unikey-tutor
# Open index.html in your browser
```

### Using as a Static Website
Simply upload the entire directory to any web hosting service. No server-side processing required!

## 📖 How to Use

### Free Practice Mode
1. Click on the **"Free Practice"** tab
2. Start typing in the text area
3. Use Telex conventions (e.g., type "aa" for "â", "as" for "á")
4. Watch your text transform in real-time!

**Example:**
- Type: `chaof` → Result: `chào`
- Type: `Vieej Nam` → Result: `Việt Nam`
- Type: `carm own` → Result: `cảm ơn`

### Guided Exercises
1. Click on the **"Guided Exercises"** tab
2. Choose your difficulty level:
   - **Beginner**: Individual characters and tones
   - **Intermediate**: Common words
   - **Advanced**: Full sentences
3. Type the target text shown on screen
4. Watch real-time feedback with color-coded comparison
5. Use **Skip** to move forward or wait for **Next** after completion
6. Review your statistics at the end!

### Telex Input Reference

#### Vowel Modifications
| Type | Key Combo | Result |
|------|-----------|--------|
| â | aa | â |
| ă | aw | ă |
| ê | ee | ê |
| ô | oo | ô |
| ơ | ow | ơ |
| ư | uw | ư |
| đ | dd | đ |

#### Tone Marks (Dấu)
| Tone Name | Key | Example |
|-----------|-----|---------|
| Sắc (acute) | s | as → á |
| Huyền (grave) | f | af → à |
| Hỏi (hook above) | r | ar → ả |
| Ngã (tilde) | x | ax → ã |
| Nặng (dot below) | j | aj → ạ |
| Remove tone | z | áz → a |

## 🏗️ Project Structure

```
unikey-tutor/
│
├── index.html          # Main HTML file with complete UI
├── README.md           # This file
│
├── css/
│   └── style.css      # Comprehensive stylesheet with responsive design
│
└── js/
    ├── telex.js       # Telex input method engine (character conversion)
    ├── exercises.js   # Exercise data for all difficulty levels
    └── app.js         # Main application logic (UI, scoring, navigation)
```

## 🛠️ Technical Details

### Technology Stack
- **Pure HTML5, CSS3, and JavaScript** (ES6+)
- **No frameworks or libraries required**
- **No server-side dependencies**
- **100% client-side** - runs entirely in the browser

### Browser Compatibility
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### Features
- **Responsive Design**: Adapts to any screen size
- **Dark Mode**: Automatic preference persistence using localStorage
- **Accessibility**: Keyboard navigation, proper ARIA labels
- **Performance**: Optimized for smooth real-time conversion
- **No External Dependencies**: Everything works offline

## 🎯 Learning Path

### For Complete Beginners
1. Start with the **Cheatsheet** - familiarize yourself with the key combinations
2. Try the **Free Practice** area - experiment with typing different characters
3. Move to **Beginner Exercises** - practice individual characters systematically
4. Progress to **Intermediate** when comfortable with basic characters

### For Intermediate Learners
1. Practice **Intermediate Exercises** to build vocabulary
2. Use the **Free Practice** area to type your own words
3. Focus on accuracy over speed
4. Move to **Advanced** when you can type words without thinking about keys

### For Advanced Users
1. Complete **Advanced Exercises** to practice full sentences
2. Use **Free Practice** for real-world typing scenarios
3. Try to improve your accuracy to 95%+
4. Practice regularly to maintain muscle memory

## 💡 Tips for Success

1. **Start Slow**: Focus on accuracy before speed
2. **Use the Cheatsheet**: Keep it visible until patterns become automatic
3. **Practice Daily**: Even 10 minutes a day makes a big difference
4. **Learn Patterns**: Many combinations follow logical rules
5. **Don't Peek**: Try to type from memory, check the cheatsheet only when stuck

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Add more exercises
- Improve translations
- Enhance the UI/UX

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Inspired by the **Unikey** Vietnamese input method
- Vietnamese cultural colors from the national flag
- Built with ❤️ for Vietnamese language learners worldwide

## 📞 Support

If you encounter any issues or have questions:
1. Check the cheatsheet reference
2. Try the beginner exercises
3. Open an issue on GitHub

---

**Happy Typing! Chúc bạn học tốt! 🇻🇳**