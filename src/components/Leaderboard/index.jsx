import "./style.css";
import backButton from "../../assets/back-button.svg";
import leaderboardStar from "../../assets/leaderboard-star.svg";
import LeaderboardItem from "../LeaderboardItem";

function Leaderboard() {
  return (
    <div className="leaderboard-bg">
      <img src={backButton} alt="Go Back" />
      <div className="leaderboard-main">
        <header>
          <h1>LEADERBOARD</h1>
          <img src={leaderboardStar} alt="Leaderboard Star" />
        </header>
        <LeaderboardItem />
      </div>
    </div>
  );
}

export default Leaderboard;
