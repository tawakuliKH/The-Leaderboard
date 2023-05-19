import { postScore, getScores } from './apiRequest.js';

export default class Methods {
  listScores = async (scoreTable) => {
    const scores = await getScores();
    scoreTable.innerHTML = '';
    scores.forEach((score) => {
      scoreTable.innerHTML += `<tr>
                              <td>${score.user}</td>
                              <td>${score.score}</td>
                              </tr>`;
    });
  };

  addScores = async (yourName, yourScore) => {
    const data = {
      user: yourName.value,
      score: yourScore.value,
    };
    postScore(data);
    yourName.value = '';
    yourScore.value = '';
  };
}