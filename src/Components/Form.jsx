import { useState } from "react";
import "../Routes/main.css";

const Form = () => {
	const [fullname, setFullname] = useState("");
	const [email, setEmail] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [successMessage, setSuccessMessage] = useState("");

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		if (name === "fullname") {
			setFullname(value);
		} else if (name === "email") {
			setEmail(value);
		}
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (fullname.length < 6) {
			setErrorMessage("El nombre debe tener al menos 6 caracteres");
			setSuccessMessage("");
			return;
		}

		const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
		if (!emailRegex.test(email)) {
			setErrorMessage("Por favor verifique su información nuevamente");
			setSuccessMessage("");
			return;
		}
		setSuccessMessage(
			`Gracias ${fullname}, te contactaremos lo antes posible vía correo electrónico a ${email}`
		);
		setErrorMessage("");
		console.log("Nombre completo:", fullname);
		console.log("Email:", email);
		setFullname("");
		setEmail("");
	};

	return (
		<div className="form-container">
			<form onSubmit={handleSubmit}>
				<label htmlFor="fullname">Nombre completo:</label>
				<input
					type="text"
					id="fullname"
					name="fullname"
					value={fullname}
					onChange={handleInputChange}
					required
					minLength={6}
				/>
				<br />
				<label htmlFor="email">Email:</label>
				<input
					type="email"
					id="email"
					name="email"
					value={email}
					onChange={handleInputChange}
					required
				/>
				<br />
				<button type="submit" value="Enviar"> Enviar </button>
			</form>
			{errorMessage && (
				<div className="error-message">{errorMessage}</div>
			)}
			{successMessage && (
				<div className="success-message">{successMessage}</div>
			)}
		</div>
	);
};

export default Form;
