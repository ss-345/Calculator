import styles from "./Display.module.css";
function Display({calVal}) {
  return (
    <>
      <input type="text" className={styles.display} value={calVal} readOnly/>
    </>
  );
}
export default Display;
