import styles from './button.module.css';

/* eslint-disable-next-line */
export interface ButtonProps {}

export function Button(props: ButtonProps) {
  return (
    <div className={styles['container']}>
      <button>Welcome to Button!</button>
    </div>
  );
}

export default Button;
