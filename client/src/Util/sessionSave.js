export const sessionSave = (session) => {
  let sessionList = [];
  const leaderboard = localStorage.getItem("leaderboard");
  sessionList.push(session);
  if (!leaderboard) {
    localStorage.setItem("leaderboard", JSON.stringify(sessionList));
  } else if (leaderboard) {
    let newSessionList = JSON.parse(localStorage.getItem("leaderboard"));
    newSessionList.push(session);
    localStorage.setItem("leaderboard", JSON.stringify(newSessionList));
  }
};
