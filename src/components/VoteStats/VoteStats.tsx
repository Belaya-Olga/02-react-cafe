import styles from "./VoteStats.module.css";
import type { Votes } from "../../types/votes";

interface StatsProps {
  votes: Votes;
  total: number;
  positive: number;
}
export default function VoteStats({ votes, total, positive }: StatsProps) {
  return (
    <div className={styles.container}>
      <p className={styles.stat}>Good: {votes.good}</p>
      <p className={styles.stat}>Neutral: {votes.neutral}</p>
      <p className={styles.stat}>Bad: {votes.bad}</p>
      <p className={styles.stat}>Total: {total}</p>
      <p className={styles.stat}>Positive: {positive}</p>
    </div>
  );
}
