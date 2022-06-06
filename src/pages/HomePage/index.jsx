import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import styles from "./HomePage.module.scss";
import { fetchItems } from '../../redux/slices/itemSlice';

import Item from '../../components/HomePage/Item';
import SortPopup from '../../components/HomePage/SortPopup';
import { setSort, setCategory } from '../../redux/slices/filterSlice';

// import { gitares } from './gitars';



const categoryNames = [
	{ name: 'все', type: 0 },
	{ name: 'аккустические', type: 1 },
	{ name: 'классические', type: 2 },
	{ name: 'электрогитары', type: 3 }];

const sortItems = [
	{ name: 'популярности', type: 'rating', order: 'desc' },
	{ name: 'цене(убыв.)', type: 'price', order: 'desc' },
	{ name: 'цене(возр.)', type: 'price', order: 'asc' }
];


const Home = () => {


	const dispatch = useDispatch()
	
	const { items } = useSelector(( state ) => state.products);
	const { category, sortBy, order } = useSelector(( state ) => state.filter);
	const [searchValue, setSearchValue] = useState('');


	useEffect(() => {
		// axios.get(`https://621510a4cdb9d09717ac4a98.mockapi.io/guitars?
		// ${category !== 0 ? `category=${category}` : ''}
		// &sortBy=${sortBy}
		// &order=${order}`)
		// 	.then(items => setItems(items.data));
		const params = {
			category, 
			sortBy, 
			order
		}
		dispatch(fetchItems(params));

		// setItems(gitares)
	}, [category, sortBy, order]);


	const onChangeSearchInput = (e) => {
		setSearchValue(e.target.value)
	}

	const onSelectCategory = useCallback((obj) => {
		dispatch(setCategory(obj));
	}, []);

	const onSelectSortType = (obj) => {
		dispatch(setSort(obj));
	};

	// // изменения в корзине
	// const addProductToCart = (item) => {
	// 	dispatch(addItem(item));
	// }

	if(!items){
		return <h2>загрузка</h2>
	}

	// localStorage.setItem("auth-token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDkwLCJyb2xlIjp7ImlkIjoyLCJuYW1lIjoiVXNlciIsIl9fZW50aXR5IjoiUm9sZSJ9LCJpYXQiOjE2NTQyNjMyOTcsImV4cCI6MTgyNzA2MzI5N30.DIQq7KlKKErjmcUsGqJpvWsnrYvaAOshk0JP7CnGqMQ")

	return (
		<>
			<div className={styles.content}>
			<h2 className='allItems '>Все товары</h2>

				<SortPopup
					items={categoryNames}
					activeSortType={category}
					sortingСhange={onSelectCategory}
					name={'Тип'} />
				<SortPopup
					items={sortItems}
					activeSortType={sortBy}
					order={order}
					sortingСhange={onSelectSortType}
					name={'Сортировка по'} />


				<div className={styles.search}>
					<img src="./img/search.svg" alt="поиск" className={styles.icon} />
					<input type="text" placeholder='Поиск' onChange={onChangeSearchInput} />
				</div>
			</div>
			<div className={styles.items}>
				{items.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase())).map(item => (
					<Item
						key={item.id}
						id={item.id}
						imageUrl={item.imageUrl}
						name={item.name}
						price={item.price}
						types={item.types}
						rating={item.rating}
						description={item.description}
						// addProductToCart={addProductToCart}
					/>))}
			</div>
		</>
	)
}


export default Home;