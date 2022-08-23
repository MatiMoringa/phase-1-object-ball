console.log(gameObject());
/*
{
  home: {
    teamName: "",
    colors: [...],
    players: {
      "Alan Anderson": {...},
      "Reggie Evans": {...}
    }
  },
  away: {
    ...
  } 
}
*/
function homeTeamName(){
  return gameObject()['home']['teamName']
}

console.log(homeTeamName())
// logs "Brooklyn Nets"
