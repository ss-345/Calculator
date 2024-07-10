import styles from "./ButtonContainer.module.css";

const list = [
  "C",
  "1",
  "2",
  "+",
  "3",
  "4",
  "-",
  "5",
  "6",
  "*",
  "7",
  "8",
  "/",
  "=",
  "9",
  "0",
  ".",
];

function ButtonContainer({ handleOnButtonClick }) {
  return (
    <div className={styles.buttonContainer}>
      {list.map((item) => (
        <button className={styles.buttonBox} 
        onClick={() => handleOnButtonClick(item)}>
          {item}
        </button>
      ))}
    </div>
  );
}

export default ButtonContainer;
