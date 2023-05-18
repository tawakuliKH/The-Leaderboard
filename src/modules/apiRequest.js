const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/5zgCqz3d3NksmCC4EJjC/scores';

export const getScores = async () => {
  const response = await fetch(url).then((response) => response.json());
  return response.result;
};

export const postScore = async (body) => {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};