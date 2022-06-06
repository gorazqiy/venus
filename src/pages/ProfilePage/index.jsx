import React, {useRef} from "react";
import styles from "./Profile.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setToken, setUser } from "../../redux/slices/authSlice";
import axiosInstance from "../../axios";


const Profile = () => {

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { user } = useSelector((state) => state.auth);


	const firstName = useRef();
	const lastName = useRef();
	const email = useRef();

	const updateSubmit = async (e) => {
		try {
			e.preventDefault();
			const updateData = {
				firstName: firstName.current.value,
				lastName: lastName.current.value,
				email: email.current.value,
			};

			const { data } = await axiosInstance.patch("/v1/auth/me", updateData);
			dispatch(setUser(data))

		} catch (error) {
			console.log(error);
		}
	}

	const deleteUser = async () => {
		try {
			if (window.confirm('Вы уверены?')){
				await axiosInstance.delete("/v1/auth/me");
				dispatch(setToken(null))
				dispatch(setUser(null))
				navigate("/auth")

			}
		} catch (error) {
			
		}
	}


	if( !user ){
		return  (
			<div className={styles.userLoad}>
				<div className={styles.loader}></div>
			</div>
		)
	} 

	return (
		<>
			<h2>Пользователь</h2>
			<div className={styles.user}>
				<form  className={styles.form} onSubmit={updateSubmit}  >
						<input ref={firstName} type="text"  placeholder='Имя' defaultValue={user.firstName}/><br/>
						<input ref={lastName} type="text" placeholder='Фамилия' defaultValue={user.lastName}/><br/>
						<input ref={email} type="text" placeholder='Email' defaultValue={user.email}/><br/>
						<button className={styles.button} type='submit'>Изменить</button>
				</form>
				<button className={styles.buttonDel} onClick={deleteUser}>Удалить профиль</button>
			</div>
		</>
	);
};


export default Profile;