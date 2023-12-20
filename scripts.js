// Function to show login form in modal
function showLoginForm() {
    const loginSignupForm = document.getElementById('loginSignupForm');
    loginSignupForm.innerHTML = `
      <h2>Login</h2>
      <form id="loginForm">
        <input type="text" placeholder="Username" id="username">
        <input type="password" placeholder="Password" id="password">
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="#" onclick="showSignupForm()">Sign Up</a></p>
    `;
    document.getElementById('loginModal').style.display = 'block';
  }
  
  // Function to show signup form in modal
  function showSignupForm() {
    const loginSignupForm = document.getElementById('loginSignupForm');
    loginSignupForm.innerHTML = `
      <h2>Sign Up</h2>
      <form id="signupForm">
        <input type="text" placeholder="Username" id="newUsername">
        <input type="password" placeholder="Password" id="newPassword">
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <a href="#" onclick="showLoginForm()">Login</a></p>
    `;
    document.getElementById('loginModal').style.display = 'block';
  }
  
  // Function to close modal
  function closeModal() {
    document.getElementById('loginModal').style.display = 'none';
  }
  
  // Event listeners for login and signup buttons
  document.getElementById('loginButton').addEventListener('click', showLoginForm);
  document.getElementById('signupButton').addEventListener('click', showSignupForm);
// Function to show the selected game in the iframe
// Function to show the selected game in the iframe
function showGame(gameUrl) {
    const gameIframe = document.getElementById('gameIframe');
    gameIframe.src = gameUrl;
  
    const gameIframeContainer = document.getElementById('game-iframe');
    gameIframeContainer.style.display = 'block';
  }
  
  // Function to hide the game iframe
  function hideGame() {
    const gameIframeContainer = document.getElementById('game-iframe');
    gameIframeContainer.style.display = 'none';
  }


  
    