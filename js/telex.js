/**
 * Telex Input Method Engine
 * Converts Telex keystrokes to Vietnamese characters
 */

class TelexEngine {
  constructor() {
    // Vowel modifications
    this.vowelMap = {
      'aa': 'â',
      'aw': 'ă',
      'ee': 'ê',
      'oo': 'ô',
      'ow': 'ơ',
      'uw': 'ư',
      'dd': 'đ',
      'AA': 'Â',
      'AW': 'Ă',
      'EE': 'Ê',
      'OO': 'Ô',
      'OW': 'Ơ',
      'UW': 'Ư',
      'DD': 'Đ',
      'Aa': 'Â',
      'Aw': 'Ă',
      'Ee': 'Ê',
      'Oo': 'Ô',
      'Ow': 'Ơ',
      'Uw': 'Ư',
      'Dd': 'Đ'
    };

    // Tone marks
    this.toneKeys = {
      's': 'acute',      // sắc
      'f': 'grave',      // huyền
      'r': 'hook',       // hỏi
      'x': 'tilde',      // ngã
      'j': 'dot',        // nặng
      'z': 'remove'      // remove tone
    };

    // Tone mark unicode combinations
    this.toneMarks = {
      'acute': {
        'a': 'á', 'ă': 'ắ', 'â': 'ấ', 'e': 'é', 'ê': 'ế', 'i': 'í', 'o': 'ó', 'ô': 'ố', 'ơ': 'ớ', 'u': 'ú', 'ư': 'ứ', 'y': 'ý',
        'A': 'Á', 'Ă': 'Ắ', 'Â': 'Ấ', 'E': 'É', 'Ê': 'Ế', 'I': 'Í', 'O': 'Ó', 'Ô': 'Ố', 'Ơ': 'Ớ', 'U': 'Ú', 'Ư': 'Ứ', 'Y': 'Ý'
      },
      'grave': {
        'a': 'à', 'ă': 'ằ', 'â': 'ầ', 'e': 'è', 'ê': 'ề', 'i': 'ì', 'o': 'ò', 'ô': 'ồ', 'ơ': 'ờ', 'u': 'ù', 'ư': 'ừ', 'y': 'ỳ',
        'A': 'À', 'Ă': 'Ằ', 'Â': 'Ầ', 'E': 'È', 'Ê': 'Ề', 'I': 'Ì', 'O': 'Ò', 'Ô': 'Ồ', 'Ơ': 'Ờ', 'U': 'Ù', 'Ư': 'Ừ', 'Y': 'Ỳ'
      },
      'hook': {
        'a': 'ả', 'ă': 'ẳ', 'â': 'ẩ', 'e': 'ẻ', 'ê': 'ể', 'i': 'ỉ', 'o': 'ỏ', 'ô': 'ổ', 'ơ': 'ở', 'u': 'ủ', 'ư': 'ử', 'y': 'ỷ',
        'A': 'Ả', 'Ă': 'Ẳ', 'Â': 'Ẩ', 'E': 'Ẻ', 'Ê': 'Ể', 'I': 'Ỉ', 'O': 'Ỏ', 'Ô': 'Ổ', 'Ơ': 'Ở', 'U': 'Ủ', 'Ư': 'Ử', 'Y': 'Ỷ'
      },
      'tilde': {
        'a': 'ã', 'ă': 'ẵ', 'â': 'ẫ', 'e': 'ẽ', 'ê': 'ễ', 'i': 'ĩ', 'o': 'õ', 'ô': 'ỗ', 'ơ': 'ỡ', 'u': 'ũ', 'ư': 'ữ', 'y': 'ỹ',
        'A': 'Ã', 'Ă': 'Ẵ', 'Â': 'Ẫ', 'E': 'Ẽ', 'Ê': 'Ễ', 'I': 'Ĩ', 'O': 'Õ', 'Ô': 'Ỗ', 'Ơ': 'Ỡ', 'U': 'Ũ', 'Ư': 'Ữ', 'Y': 'Ỹ'
      },
      'dot': {
        'a': 'ạ', 'ă': 'ặ', 'â': 'ậ', 'e': 'ẹ', 'ê': 'ệ', 'i': 'ị', 'o': 'ọ', 'ô': 'ộ', 'ơ': 'ợ', 'u': 'ụ', 'ư': 'ự', 'y': 'ỵ',
        'A': 'Ạ', 'Ă': 'Ặ', 'Â': 'Ậ', 'E': 'Ẹ', 'Ê': 'Ệ', 'I': 'Ị', 'O': 'Ọ', 'Ô': 'Ộ', 'Ơ': 'Ợ', 'U': 'Ụ', 'Ư': 'Ự', 'Y': 'Ỵ'
      },
      'remove': {
        'á': 'a', 'à': 'a', 'ả': 'a', 'ã': 'a', 'ạ': 'a',
        'ắ': 'ă', 'ằ': 'ă', 'ẳ': 'ă', 'ẵ': 'ă', 'ặ': 'ă',
        'ấ': 'â', 'ầ': 'â', 'ẩ': 'â', 'ẫ': 'â', 'ậ': 'â',
        'é': 'e', 'è': 'e', 'ẻ': 'e', 'ẽ': 'e', 'ẹ': 'e',
        'ế': 'ê', 'ề': 'ê', 'ể': 'ê', 'ễ': 'ê', 'ệ': 'ê',
        'í': 'i', 'ì': 'i', 'ỉ': 'i', 'ĩ': 'i', 'ị': 'i',
        'ó': 'o', 'ò': 'o', 'ỏ': 'o', 'õ': 'o', 'ọ': 'o',
        'ố': 'ô', 'ồ': 'ô', 'ổ': 'ô', 'ỗ': 'ô', 'ộ': 'ô',
        'ớ': 'ơ', 'ờ': 'ơ', 'ở': 'ơ', 'ỡ': 'ơ', 'ợ': 'ơ',
        'ú': 'u', 'ù': 'u', 'ủ': 'u', 'ũ': 'u', 'ụ': 'u',
        'ứ': 'ư', 'ừ': 'ư', 'ử': 'ư', 'ữ': 'ư', 'ự': 'ư',
        'ý': 'y', 'ỳ': 'y', 'ỷ': 'y', 'ỹ': 'y', 'ỵ': 'y',
        'Á': 'A', 'À': 'A', 'Ả': 'A', 'Ã': 'A', 'Ạ': 'A',
        'Ắ': 'Ă', 'Ằ': 'Ă', 'Ẳ': 'Ă', 'Ẵ': 'Ă', 'Ặ': 'Ă',
        'Ấ': 'Â', 'Ầ': 'Â', 'Ẩ': 'Â', 'Ẫ': 'Â', 'Ậ': 'Â',
        'É': 'E', 'È': 'E', 'Ẻ': 'E', 'Ẽ': 'E', 'Ẹ': 'E',
        'Ế': 'Ê', 'Ề': 'Ê', 'Ể': 'Ê', 'Ễ': 'Ê', 'Ệ': 'Ê',
        'Í': 'I', 'Ì': 'I', 'Ỉ': 'I', 'Ĩ': 'I', 'Ị': 'I',
        'Ó': 'O', 'Ò': 'O', 'Ỏ': 'O', 'Õ': 'O', 'Ọ': 'O',
        'Ố': 'Ô', 'Ồ': 'Ô', 'Ổ': 'Ô', 'Ỗ': 'Ô', 'Ộ': 'Ô',
        'Ớ': 'Ơ', 'Ờ': 'Ơ', 'Ở': 'Ơ', 'Ỡ': 'Ơ', 'Ợ': 'Ơ',
        'Ú': 'U', 'Ù': 'U', 'Ủ': 'U', 'Ũ': 'U', 'Ụ': 'U',
        'Ứ': 'Ư', 'Ừ': 'Ư', 'Ử': 'Ư', 'Ữ': 'Ư', 'Ự': 'Ư',
        'Ý': 'Y', 'Ỳ': 'Y', 'Ỷ': 'Y', 'Ỹ': 'Y', 'Ỵ': 'Y'
      }
    };
  }

  /**
   * Process a single keystroke and return the transformed text
   * @param {string} currentText - The current text in the input
   * @param {string} key - The key that was pressed
   * @param {number} cursorPos - The cursor position
   * @returns {object} - { text, cursorPos }
   */
  processKey(currentText, key, cursorPos) {
    // Insert the key at cursor position
    let newText = currentText.slice(0, cursorPos) + key + currentText.slice(cursorPos);
    let newCursorPos = cursorPos + 1;

    // Try to apply transformations
    const result = this.applyTransformations(newText, newCursorPos);
    
    return result;
  }

  /**
   * Apply Telex transformations to text
   * @param {string} text - The text to transform
   * @param {number} cursorPos - The cursor position
   * @returns {object} - { text, cursorPos }
   */
  applyTransformations(text, cursorPos) {
    let transformed = text;
    let newCursorPos = cursorPos;

    // Look back from cursor position for possible transformations
    // Check for vowel modifications (2-character sequences)
    if (cursorPos >= 2) {
      const lastTwo = text.slice(cursorPos - 2, cursorPos);
      if (this.vowelMap[lastTwo]) {
        transformed = text.slice(0, cursorPos - 2) + this.vowelMap[lastTwo] + text.slice(cursorPos);
        newCursorPos = cursorPos - 1; // Cursor moves back by 1 (2 chars became 1)
      }
    }

    // Check for tone marks
    // Need to find the vowel in the current word and apply tone
    if (cursorPos >= 1) {
      const lastChar = transformed.charAt(newCursorPos - 1);
      
      if (this.toneKeys[lastChar]) {
        const tone = this.toneKeys[lastChar];
        
        // Find the vowel to apply tone to (scan backwards in the current word)
        // Extract text before cursor (excluding the tone key)
        const beforeCursor = transformed.slice(0, newCursorPos - 1);
        // Find the start of the current word by searching for the last whitespace
        // search() returns -1 if no match, so Math.max ensures we get 0 for start of text
        const lastSpaceIndex = beforeCursor.search(/\s[^\s]*$/);
        const wordStart = lastSpaceIndex === -1 ? 0 : lastSpaceIndex + 1;
        const currentWord = beforeCursor.slice(wordStart);
        
        // Find the main vowel to apply tone
        const vowelPos = this.findMainVowelPosition(currentWord);
        
        if (vowelPos !== -1) {
          const absoluteVowelPos = wordStart + vowelPos;
          const vowel = transformed.charAt(absoluteVowelPos);
          
          let newVowel;
          if (tone === 'remove' && this.toneMarks.remove[vowel]) {
            newVowel = this.toneMarks.remove[vowel];
          } else if (tone !== 'remove' && this.toneMarks[tone][vowel]) {
            newVowel = this.toneMarks[tone][vowel];
          }
          
          if (newVowel) {
            // Replace the vowel and remove the tone key
            transformed = transformed.slice(0, absoluteVowelPos) + 
                         newVowel + 
                         transformed.slice(absoluteVowelPos + 1, newCursorPos - 1) +
                         transformed.slice(newCursorPos);
            newCursorPos--; // Remove the tone key character
          }
        }
      }
    }

    return { text: transformed, cursorPos: newCursorPos };
  }

  /**
   * Find the position of the main vowel in a word for tone marking
   * Vietnamese tone rules: apply to the main vowel of the syllable
   */
  findMainVowelPosition(word) {
    // Vietnamese vowel priority rules
    // For simplicity, we find the last vowel cluster
    const vowels = ['ư', 'ơ', 'â', 'ă', 'ê', 'ô', 'u', 'o', 'a', 'e', 'i', 'y',
                    'Ư', 'Ơ', 'Â', 'Ă', 'Ê', 'Ô', 'U', 'O', 'A', 'E', 'I', 'Y'];
    
    // Also check for already-toned vowels
    const tonedVowels = Object.keys(this.toneMarks.remove);
    const allVowels = [...vowels, ...tonedVowels];
    
    // Find vowel clusters
    let lastVowelPos = -1;
    for (let i = word.length - 1; i >= 0; i--) {
      if (allVowels.includes(word[i])) {
        lastVowelPos = i;
        break;
      }
    }
    
    return lastVowelPos;
  }

  /**
   * Transform a complete text (useful for initial text)
   */
  transform(text) {
    // This is a simple pass-through for already typed text
    // Real Telex works character by character
    return text;
  }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = TelexEngine;
}
