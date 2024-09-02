import styles from "./Input.module.css";

type Props = {
  placeHolder: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

function Input({ placeHolder, ...rest }: Props) {
  return (
    <input className={styles.container} placeholder={placeHolder} {...rest} />
  );
}

export default Input;
