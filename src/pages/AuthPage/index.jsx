import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../axios';
import { setUser, setToken } from '../../redux/slices/authSlice';
import styles from "./AuthPage.module.scss";

const Auth = () => {

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const firstName = useRef();
	const lastName = useRef();
	const email = useRef();
	const password = useRef();
	const logEmail = useRef();
	const logPassword = useRef();

	const registrationSubmit = async (e) => {
		try {
			e.preventDefault();
			const regData = {
				firstName: firstName.current.value,
				lastName: lastName.current.value,
				email: email.current.value,
				password: password.current.value,
			};

			await axiosInstance.post("/v1/auth/email/register", regData);
			const { data } = await axiosInstance.post("/v1/auth/email/login", regData);
			dispatch(setUser(data.user));
			dispatch(setToken(data.token));
			localStorage.setItem("auth-token", data.token);
			navigate("/profile");

		} catch (error) {
			console.log(error);
		}
	}
	
	const logInSubmit = async (e) => {
		try {
			e.preventDefault();
			const logData = {
				email: logEmail.current.value,
				password: logPassword.current.value,
			};

			const { data } = await axiosInstance.post("/v1/auth/email/login", logData);
			dispatch(setUser(data.user));
			dispatch(setToken(data.token));
			localStorage.setItem("auth-token", data.token);
			navigate("/profile");

		} catch (error) {
			console.log(error);
		}
	}


	return (
		<>
			<h2>Пользователь</h2>

			<div className={styles.user}>
				<div className={styles.registration}>
					<div className={styles.label}>Регистрация</div>
					<form  className={styles.form} onSubmit={registrationSubmit}  >
						<input ref={firstName} type="text"  placeholder='Имя'/> <br/>
						<input ref={lastName} type="text" placeholder='Фамилия'/><br/>
						<input ref={email} type="text" placeholder='Email'/><br/>
						<input ref={password} type="password" placeholder='Пароль'/><br/>
						<button className={styles.button} type='submit'>Зарегистрироваться</button>
					</form>
				</div>
				<div className={styles.logIn}>
					<div className={styles.label}>Авторизация</div>
					<form  className={styles.form} onSubmit={logInSubmit}  >
						<input ref={logEmail} type="text" placeholder='Email'/><br/>
						<input ref={logPassword} type="password" placeholder='Пароль'/><br/>
						<button className={styles.button} type='submit'>Вход</button>
					</form>
				</div>
			</div>
		</>
	)
}


export default Auth;