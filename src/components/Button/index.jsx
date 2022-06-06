import React from 'react';
import styles from "./index.module.scss";

const Button = ({ onClick }) => {

	return (
		<button onClick={onClick} className={styles.button}>В корзину</button>
	)
}


export default Button;