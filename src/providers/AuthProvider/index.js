import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axiosInstance from "../../axios";
import { setUser, setToken } from "../../redux/slices/authSlice";


const AuthProvider = (props) => {

	const dispatch = useDispatch();

	useEffect(() => {
		(async () => {
			const tokenData = localStorage.getItem("auth-token");

		try{
			if (tokenData) {
				const { data } = await axiosInstance.get("/v1/auth/me");
				dispatch(setToken(tokenData))
				dispatch(setUser(data))
			}


		} catch {
			console.log('ошибка при авторизации: /v1/auth/me');
			localStorage.removeItem("auth-token");
		}
		})();
	}, [])

	return props.children;
}

export default AuthProvider;