const games = [
    { name: 'Game 1', source: 'https://aniket-singhal.github.io/Slotgame/', image: 'flen.jpg' },
    { name: 'Game 2', source: 'https://marianapatcosta.github.io/js-slots-cra/', image: 'flen.jpg' },
    { name: 'Game 3', source: 'https://asiryk.github.io/slot-game/', image: 'flen.jpg' },
    { name: 'Game 4', source: 'https://4ark.me/linkup/', image: 'flen.jpg' },
    { name: 'Game 5', source: 'https://4ark.me/2048/', image: 'flen.jpg' },
    { name: 'Game 6', source: 'https://4ark.me/star-battle/', image: 'flen.jpg' }
  ];
  
  let currentPage = 1;
  const gamesPerPage = 5;
  const totalGames = games.length;
  
  function displayGames(startIndex) {
    const gameList = document.getElementById('gameList');
    gameList.innerHTML = '';
  
    for (let i = startIndex; i < startIndex + gamesPerPage && i < totalGames; i++) {
      const game = games[i];
      const listItem = document.createElement('div');
      listItem.classList.add('game-item');
  
      const gameImage = document.createElement('img');
      gameImage.src = game.image;
      gameImage.alt = `${game.name} Logo`;
      gameImage.classList.add('game-image');
  
      const gameName = document.createElement('p');
      gameName.textContent = game.name;
      gameName.onclick = function() {
        showGame(game.source);
      };
      gameImage.onclick = function() {
        showGame(game.source);
      };
      gameName.classList.add('game-name');
  
      listItem.appendChild(gameImage);
      listItem.appendChild(gameName);
      gameList.appendChild(listItem);
    }
  }
  
  function showNextGames() {
    const totalPages = Math.ceil(totalGames / gamesPerPage);
    if (currentPage < totalPages) {
      currentPage++;
      const startIndex = (currentPage - 1) * gamesPerPage;
      displayGames(startIndex);
      updatePageNumber();
    }
  }
  
  function showPreviousGames() {
    if (currentPage > 1) {
      currentPage--;
      const startIndex = (currentPage - 1) * gamesPerPage;
      displayGames(startIndex);
      updatePageNumber();
    }
  }
  
  function updatePageNumber() {
    document.getElementById('currentPage').textContent = `Page ${currentPage}`;
  }
  
  function hideGame() {
    const gameIframeContainer = document.getElementById('game-iframe');
    gameIframeContainer.style.display = 'none';
  }
  window.onload = function() {
    displayGames(0);
    updatePageNumber();
  };
  