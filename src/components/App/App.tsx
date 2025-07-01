import css from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo";
import type { VoteType, Votes } from "../types/votes";
import { useState } from "react";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import Notification from "../Notification/Notification";

export default function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const handleVote = (type: VoteType) => {
    const updatedVotes = {
      ...votes,
      [type]: votes[type] + 1,
    };
    setVotes(updatedVotes);
  };
  const resetVotes = () => {
    setVotes({ good: 0, neutral: 0, bad: 0 });
  };

  const total = votes.bad + votes.good + votes.neutral;
  const positive = total ? Math.round((votes.good / total) * 100) : 0;
  const canReset = total > 0;
  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions
        onVote={handleVote}
        onReset={resetVotes}
        canReset={canReset}
      />
      {total > 0 ? (
        <VoteStats votes={votes} total={total} positive={positive} />
      ) : (
        <Notification />
      )}
    </div>
  );
}
