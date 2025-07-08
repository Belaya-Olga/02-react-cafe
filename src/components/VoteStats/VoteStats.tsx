import styles from "./VoteStats.module.css";
import type { Votes } from "../../types/votes";

interface VoteStatsProps {
  votes: Votes;
  totalVotes: number;
  positiveRate: number;
}
export default function VoteStats({
  votes,
  totalVotes,
  positiveRate,
}: VoteStatsProps) {
  return (
    <div className={styles.container}>
      <p className={styles.stat}>Good: {votes.good}</p>
      <p className={styles.stat}>Neutral: {votes.neutral}</p>
      <p className={styles.stat}>Bad: {votes.bad}</p>
      <p className={styles.stat}>Total: {totalVotes}</p>
      <p className={styles.stat}>Positive: {positiveRate}</p>
    </div>
  );
}
