import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/slices/cartSlice';
import styles  from "./Item.module.scss";


const Item = ({ id, imageUrl, name, price, description }) => {

	const dispatch = useDispatch();

	// const productToLocalStorage = () => {
	// 	localStorage.setItem('activeItem', JSON.stringify({ id, imageUrl, name, price, description }))
	// }

	// const onAddItem = () => {
	// 	const obj = {
	// 		id,
	// 		name,
	// 		imageUrl,
	// 		price,
	// 		totalCount: 1
	// 	}
	// 	addProductToCart(obj)
	// }

	
	const addProductToCart = () => {
		const obj = {
			id,
			name,
			imageUrl,
			price,
			totalCount: 1
		}

		dispatch(addItem(obj))
	}



	return (
		<div className={styles.item}>
			<Link to={`/product/${id}`} id={id}>
				<img  src={imageUrl} alt="item" />
			</Link>
			<div className={styles.bottom}>
				<div className={styles.text}>
					{name}
				</div>
				<div className={styles.price}>
					<div >
						<div className={styles.priceName}>Цена</div>
						<div className={styles.priceValue}>{price.toLocaleString()} ₽</div>
					</div>
					<div >
						<Button onClick={addProductToCart} />
					</div>
				</div>
			</div>
		</div>
	)
}


export default Item;