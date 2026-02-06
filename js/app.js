/**
 * Main Application Logic for Unikey Tutor
 */

class UniKeyTutorApp {
  constructor() {
    this.telexEngine = new TelexEngine();
    this.currentLevel = null;
    this.currentExerciseIndex = 0;
    this.exerciseList = [];
    this.stats = {
      totalAttempts: 0,
      correctChars: 0,
      totalChars: 0,
      exercises: []
    };
    this.darkMode = false;
    
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.showWelcomeScreen();
    this.loadThemePreference();
  }

  setupEventListeners() {
    // Practice area with Telex conversion
    const practiceArea = document.getElementById('practice-area');
    if (practiceArea) {
      practiceArea.addEventListener('keydown', (e) => this.handlePracticeInput(e));
    }

    // Exercise input
    const exerciseInput = document.getElementById('exercise-input');
    if (exerciseInput) {
      exerciseInput.addEventListener('keydown', (e) => this.handleExerciseInput(e));
      exerciseInput.addEventListener('input', () => this.checkExerciseProgress());
    }

    // Level selection buttons
    document.querySelectorAll('.level-btn').forEach(btn => {
      btn.addEventListener('click', (e) => this.startLevel(e.target.dataset.level));
    });

    // Navigation buttons
    const nextBtn = document.getElementById('next-btn');
    const skipBtn = document.getElementById('skip-btn');
    const backBtn = document.getElementById('back-to-menu');
    
    if (nextBtn) nextBtn.addEventListener('click', () => this.nextExercise());
    if (skipBtn) skipBtn.addEventListener('click', () => this.skipExercise());
    if (backBtn) backBtn.addEventListener('click', () => this.showWelcomeScreen());

    // Cheatsheet toggle
    const toggleCheatsheet = document.getElementById('toggle-cheatsheet');
    if (toggleCheatsheet) {
      toggleCheatsheet.addEventListener('click', () => this.toggleCheatsheet());
    }

    // Dark mode toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
      darkModeToggle.addEventListener('click', () => this.toggleDarkMode());
    }

    // Tab switching
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => this.switchTab(e.target.dataset.tab));
    });
  }

  handlePracticeInput(e) {
    const textarea = e.target;
    
    // Don't process special keys
    if (e.key.length > 1 && e.key !== 'Enter' && e.key !== 'Backspace') {
      return;
    }

    if (e.key === 'Backspace' || e.key === 'Enter') {
      return; // Let default behavior handle these
    }

    e.preventDefault();

    const cursorPos = textarea.selectionStart;
    const currentText = textarea.value;
    
    const result = this.telexEngine.processKey(currentText, e.key, cursorPos);
    
    textarea.value = result.text;
    textarea.setSelectionRange(result.cursorPos, result.cursorPos);
  }

  handleExerciseInput(e) {
    const input = e.target;
    
    // Don't process special keys except Enter and Backspace
    if (e.key.length > 1 && e.key !== 'Enter' && e.key !== 'Backspace') {
      return;
    }

    if (e.key === 'Backspace') {
      return; // Let default behavior handle backspace
    }

    if (e.key === 'Enter') {
      e.preventDefault();
      this.nextExercise();
      return;
    }

    e.preventDefault();

    const cursorPos = input.selectionStart;
    const currentText = input.value;
    
    const result = this.telexEngine.processKey(currentText, e.key, cursorPos);
    
    input.value = result.text;
    input.setSelectionRange(result.cursorPos, result.cursorPos);
    
    // Trigger input event manually for checking progress
    input.dispatchEvent(new Event('input'));
  }

  checkExerciseProgress() {
    const input = document.getElementById('exercise-input');
    const target = this.exerciseList[this.currentExerciseIndex].target;
    const userInput = input.value;
    
    // Character-by-character comparison
    const comparisonDiv = document.getElementById('comparison');
    comparisonDiv.innerHTML = '';
    
    let correctChars = 0;
    const maxLength = Math.max(target.length, userInput.length);
    
    for (let i = 0; i < maxLength; i++) {
      const span = document.createElement('span');
      
      if (i < target.length && i < userInput.length) {
        span.textContent = target[i];
        if (target[i] === userInput[i]) {
          span.className = 'char-correct';
          correctChars++;
        } else {
          span.className = 'char-incorrect';
        }
      } else if (i < target.length) {
        span.textContent = target[i];
        span.className = 'char-pending';
      } else {
        span.textContent = userInput[i];
        span.className = 'char-extra';
      }
      
      comparisonDiv.appendChild(span);
    }
    
    // Update accuracy
    const accuracy = target.length > 0 ? Math.round((correctChars / target.length) * 100) : 0;
    const accuracyDisplay = document.getElementById('accuracy-display');
    if (accuracyDisplay) {
      accuracyDisplay.textContent = `${accuracy}%`;
      
      // Update color based on accuracy
      if (accuracy >= 90) {
        accuracyDisplay.className = 'accuracy excellent';
      } else if (accuracy >= 70) {
        accuracyDisplay.className = 'accuracy good';
      } else {
        accuracyDisplay.className = 'accuracy needs-practice';
      }
    }
    
    // Check if complete and correct
    if (userInput === target) {
      this.completeExercise(accuracy);
    }
  }

  completeExercise(accuracy) {
    const exercise = this.exerciseList[this.currentExerciseIndex];
    
    // Record stats
    this.stats.exercises.push({
      target: exercise.target,
      accuracy: accuracy,
      completed: true
    });
    
    this.stats.correctChars += exercise.target.length * (accuracy / 100);
    this.stats.totalChars += exercise.target.length;
    this.stats.totalAttempts++;
    
    // Show completion feedback
    const feedback = document.getElementById('exercise-feedback');
    if (feedback) {
      feedback.textContent = accuracy === 100 ? '✓ Perfect!' : '✓ Complete!';
      feedback.className = 'feedback-show';
      
      setTimeout(() => {
        feedback.className = 'feedback-hide';
      }, 1500);
    }
    
    // Enable next button
    const nextBtn = document.getElementById('next-btn');
    if (nextBtn) {
      nextBtn.disabled = false;
      nextBtn.classList.add('pulse');
    }
  }

  startLevel(level) {
    this.currentLevel = level;
    this.currentExerciseIndex = 0;
    this.exerciseList = exercises[level];
    this.stats = {
      totalAttempts: 0,
      correctChars: 0,
      totalChars: 0,
      exercises: []
    };
    
    // Show exercise section
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('exercise-section').style.display = 'block';
    
    this.loadExercise();
  }

  loadExercise() {
    if (this.currentExerciseIndex >= this.exerciseList.length) {
      this.showResults();
      return;
    }
    
    const exercise = this.exerciseList[this.currentExerciseIndex];
    
    // Update UI
    document.getElementById('target-text').textContent = exercise.target;
    document.getElementById('exercise-description').textContent = exercise.description || '';
    document.getElementById('exercise-progress').textContent = 
      `Exercise ${this.currentExerciseIndex + 1} of ${this.exerciseList.length}`;
    
    // Reset input
    const input = document.getElementById('exercise-input');
    input.value = '';
    input.focus();
    
    // Reset comparison and accuracy
    document.getElementById('comparison').innerHTML = '';
    const accuracyDisplay = document.getElementById('accuracy-display');
    if (accuracyDisplay) {
      accuracyDisplay.textContent = '0%';
      accuracyDisplay.className = 'accuracy';
    }
    
    // Disable next button until complete
    const nextBtn = document.getElementById('next-btn');
    if (nextBtn) {
      nextBtn.disabled = true;
      nextBtn.classList.remove('pulse');
    }
    
    // Update progress bar
    this.updateProgressBar();
  }

  updateProgressBar() {
    const progress = ((this.currentExerciseIndex) / this.exerciseList.length) * 100;
    const progressFill = document.getElementById('progress-fill');
    if (progressFill) {
      progressFill.style.width = `${progress}%`;
    }
  }

  nextExercise() {
    this.currentExerciseIndex++;
    this.loadExercise();
  }

  skipExercise() {
    // Record as skipped
    const exercise = this.exerciseList[this.currentExerciseIndex];
    this.stats.exercises.push({
      target: exercise.target,
      accuracy: 0,
      completed: false,
      skipped: true
    });
    
    this.stats.totalChars += exercise.target.length;
    
    this.nextExercise();
  }

  showResults() {
    const overallAccuracy = this.stats.totalChars > 0 
      ? Math.round((this.stats.correctChars / this.stats.totalChars) * 100)
      : 0;
    
    const completedCount = this.stats.exercises.filter(e => e.completed).length;
    const skippedCount = this.stats.exercises.filter(e => e.skipped).length;
    
    // Hide exercise section, show results
    document.getElementById('exercise-section').style.display = 'none';
    
    const resultsDiv = document.createElement('div');
    resultsDiv.id = 'results-screen';
    resultsDiv.className = 'results-screen';
    resultsDiv.innerHTML = `
      <div class="results-container">
        <h2>🎉 Level Complete!</h2>
        <div class="results-stats">
          <div class="stat-card">
            <div class="stat-value">${overallAccuracy}%</div>
            <div class="stat-label">Overall Accuracy</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${completedCount}</div>
            <div class="stat-label">Completed</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${skippedCount}</div>
            <div class="stat-label">Skipped</div>
          </div>
        </div>
        <div class="results-actions">
          <button class="btn btn-primary" onclick="app.retryLevel()">Retry Level</button>
          <button class="btn btn-secondary" onclick="app.showWelcomeScreen()">Back to Menu</button>
        </div>
      </div>
    `;
    
    document.querySelector('.container').appendChild(resultsDiv);
  }

  retryLevel() {
    const resultsScreen = document.getElementById('results-screen');
    if (resultsScreen) {
      resultsScreen.remove();
    }
    this.startLevel(this.currentLevel);
  }

  showWelcomeScreen() {
    // Hide all screens
    document.getElementById('exercise-section').style.display = 'none';
    const resultsScreen = document.getElementById('results-screen');
    if (resultsScreen) {
      resultsScreen.remove();
    }
    
    // Show welcome screen
    document.getElementById('welcome-screen').style.display = 'block';
    
    // Switch to practice tab
    this.switchTab('practice');
  }

  switchTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabName);
    });
    
    // Update tab content
    document.querySelectorAll('.tab-content').forEach(content => {
      content.classList.toggle('active', content.id === `${tabName}-tab`);
    });
  }

  toggleCheatsheet() {
    const cheatsheet = document.querySelector('.cheatsheet');
    const toggleBtn = document.getElementById('toggle-cheatsheet');
    
    cheatsheet.classList.toggle('collapsed');
    
    if (cheatsheet.classList.contains('collapsed')) {
      toggleBtn.textContent = 'Show Cheatsheet';
    } else {
      toggleBtn.textContent = 'Hide Cheatsheet';
    }
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark-mode', this.darkMode);
    
    // Save preference
    localStorage.setItem('darkMode', this.darkMode);
    
    const toggle = document.getElementById('dark-mode-toggle');
    if (toggle) {
      toggle.textContent = this.darkMode ? '☀️ Light Mode' : '🌙 Dark Mode';
    }
  }

  loadThemePreference() {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
      this.toggleDarkMode();
    }
  }
}

// Initialize app when DOM is ready
let app;
document.addEventListener('DOMContentLoaded', () => {
  app = new UniKeyTutorApp();
});
