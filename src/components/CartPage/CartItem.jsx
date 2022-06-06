import React from 'react';
import styles from './CartItem.module.scss';
import cn from "classnames";
import { useDispatch } from 'react-redux';
import { addItem, minusItem, removeItem } from '../../redux/slices/cartSlice';


const CartItem = ({ id, imageUrl, name, price, totalCount }) => {

	const dispatch = useDispatch();

	const plusItem = () => {
		const obj = {
			id,
			name,
			imageUrl,
			price,
			totalCount
		}
		dispatch(addItem(obj));

	};

	const munusItem = () => {
		dispatch(minusItem(id));
	};

	const deleteItem = () => {
		dispatch(removeItem(id));
	}


	return (
		<div className={styles.cartItem}>
			<img className={styles.img} src={imageUrl} alt="фото товара" />
			<div className={styles.text}>{name}</div>
			<div className={styles.price}>{price.toLocaleString()} ₽</div>
			<div className={styles.counter}>

				<div onClick={plusItem} className={cn(styles.circle, styles.buttonOutline, styles.buttonCircle)}>
					<svg
						width="10"
						height="10"
						viewBox="0 0 10 10"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
							fill="#74c7fc"
						/>
						<path
							d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
							fill="#74c7fc"
						/>
					</svg>
				</div>
				<div className="counter-sum">{totalCount}</div>
				<div onClick={munusItem} className={cn(styles.circle, styles.buttonOutline, styles.buttonCircle, styles.cartMinus)}>
					<svg
						width="10"
						height="10"
						viewBox="0 0 10 10"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
							fill="#74c7fc"
						/>
						<path
							d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
							fill="#74c7fc"
						/>
					</svg>
				</div>
			</div>
			<div className={styles.totalPrice}>{(totalCount * price).toLocaleString()} ₽</div>
			<div onClick={deleteItem} className={cn(styles.circle, styles.buttonOutline, styles.buttonCircle, styles.removeItem)}>
			<svg 
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
              fill="#EB5A1E"></path>
            <path
              d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
              fill="#EB5A1E"></path>
          </svg>
			</div>
		</div>
	)
}


export default CartItem;