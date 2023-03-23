import Navbar from "../../components/NavBar/Navbar";
import styles from "./signin.module.scss";

const SignIn = () => {
	return (
		<>
		<Navbar />
		<div style={{marginTop: "4rem"}}></div>
		<div className={styles.container}>
			<div className={styles.formWrapper}>
				<div className={styles.header}>Sign In</div>
				<div className={styles.signupForm}>
					<form action="" method="POST">
						<table>
							<tr>
								<td><label htmlFor="emailID">Email ID: </label></td>
								<td><input type="email" name="emailID" id="emailID" /></td>
							</tr>
							<tr>
								<td><label htmlFor="password">Password: </label></td>
								<td><input type="passowrd" name="password" id="password"/></td>
							</tr>
						</table>
						<button type="submit" style={{marginLeft: "1rem"}}>Sign In</button>
					</form>
				</div>
			</div>
		</div>
		</>
	)
}

export default SignIn;