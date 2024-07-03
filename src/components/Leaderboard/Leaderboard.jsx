import { Button } from "../Button/Button";
import styles from "./Leaderboard.module.css";

export function Leaderboard() {
  return (
    <div className={styles.leaderboard}>
      <header className={styles.header}>
        <p className={styles.headerTitle}>Лидерборд</p>
        <Button>Начать игру</Button>
      </header>
      <section className={styles.section}>
        <article className={styles.sectionTop}>
          <div>
            <p className={styles.sectionText}>Позиция</p>
            <p className={styles.sectionText}>Пользователь</p>
          </div>
          <p className={styles.sectionText}>Время</p>
        </article>
        <article className={styles.sectionTop}>
          <div>
            <p className={styles.sectionText}>#1</p>
            <p className={styles.sectionText}>ab98awj_918mlz1lavfh_ru</p>
          </div>
          <p className={styles.sectionText}>01:30</p>
        </article>
      </section>
    </div>
  );
}
