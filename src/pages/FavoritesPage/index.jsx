import React from 'react';

// import { gitares } from '../gitars';
import FavoriteItem from '../../components/FavoritesPage/FavoriteItem';
import { useSelector } from 'react-redux';
import styles from "./Favorites.module.scss";



const Favorites = () => {

	const { items } = useSelector((state) => state.favorite);

	return (
		items.length ? (
			items.map((item => (
				<FavoriteItem
					key={item.id}
					id={item.id}
					imageUrl={item.imageUrl}
					name={item.name}
					price={item.price}
					description={item.description}
				/>)))) : (
			<div className={styles.header}>
				<h2>Нет избранных товаров</h2>
			</div>
		)
	)
}


export default Favorites;