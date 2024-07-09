import styles from "./ModalPuzzle.module.css";

export function ModalPuzzle() {
  return (
    <div className={styles.fff}>
      <div class={styles.popupContainer}>
        <div class={styles.popup}>
          <div class={styles.popupContent}>
            <div class={styles.popupText}>Игра пройдена без супер-сил</div>
          </div>
        </div>
      </div>
    </div>
  );
}
