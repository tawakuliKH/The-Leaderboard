import { postScore, getScores } from './apiRequest.js';

const manipulate = () => {
  const refreshBtn = document.querySelector('.refresh-btn');
  const scoreTable = document.querySelector('.name-scores');
  const yourName = document.querySelector('.your-name');
  const yourScore = document.querySelector('.your-score');
  const submitBtn = document.querySelector('.submit');

  const listScores = async () => {
    const scores = await getScores();
    scoreTable.innerHTML = '';
    scores.forEach((score) => {
      scoreTable.innerHTML += `<tr>
                              <td>${score.user}</td>
                              <td>${score.score}</td>
                              </tr>`;
    });
  };
  const addScores = async () => {
    const data = {
      user: yourName.value,
      score: yourScore.value,
    };
    postScore(data);
    yourName.value = '';
    yourScore.value = '';
  };

  listScores();
  refreshBtn.addEventListener('click', listScores);
  submitBtn.addEventListener('click', addScores);
};

export default manipulate;