let team = {
    _players: [{
    firstName: 'Lionel',
    lastName: 'Messi',
    age: 33
  },
  {
    firstName: 'Cristiano',
    lastName: 'Ronaldo',
    age: 35
  },
  {
    firstName: 'Paul',
    lastName: 'Pogba',
    age: 28
  }],
    _games: [{
    opponent: 'Madrid',
    teamPoints: 50,
    opponentPoints: 30
  },
  {
    opponent: 'Napoli',
    teamPoints: 42,
    opponentPoints: 27
  },
  {
    opponent: 'Chelsea',
    teamPoints: 80,
    opponentPoints: 43
  }],
  
  get players(){
    return this._players;
  },
  
  get games(){
    return this._games;
  },
  
  addPlayer(firstName, lastName, age){
    const newPlayer = {firstName: firstName,
                     lastName: lastName,
                     age: age};
      this._players.push(newPlayer);
  },
  
  addGame(opponent, teamPoints, opponentPoints){
    const newGame = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    };
    this._games.push(newGame)
  }
  
  }
  
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  
  console.log(team._players);
  
  team.addGame('Kotoko', 10, 12);
  team.addGame('Hearts', 15, 89);
  team.addGame('Olympics', 5, 2);
  
  console.log(team._games);
  
  