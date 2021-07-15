import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Token } from "../types/types";

interface IProps {
	updateToken(token: Token): void;
}

interface IState {
	username: string;
	password: string;
}

export default class Login extends React.Component<IProps, IState> {
	public state: IState = {
		password: ``,
		username: ``,
	};

	public updateUsername = (username: string) => {
		this.setState({
			username,
		});
	};

	public updatePassword = (password: string) => {
		this.setState({
			password,
		});
	};

	public login = async () => {
		// TODO: Update the login function to work properly
		this.props.updateToken(`TemporaryTestToken`);
	};

	public render() {
		return (
			<View style={styles.container}>
				<View style={styles.title}>
					<Text style={styles.titleText}>Login</Text>
				</View>
				<View style={styles.login}>
					<TextInput
						style={styles.usernameInput}
						onChangeText={this.updateUsername}
						placeholder="Username"
						placeholderTextColor="#333"
					/>
					<TextInput
						style={styles.passwordInput}
						onChangeText={this.updatePassword}
						placeholder="Password"
						placeholderTextColor="#333"
					/>
					<TouchableOpacity style={styles.loginButton} onPress={this.login}>
						<Text>Login</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: `#333`,
	},
	title: {
		flex: 1,
		alignItems: `center`,
		justifyContent: `center`,
	},
	titleText: {
		fontSize: 30,
		color: `#B2C3F4`,
	},
	login: {
		flex: 3,
		alignItems: `center`,
		justifyContent: `center`,
	},
	usernameInput: {
		backgroundColor: `#AAA`,
		borderRadius: 20,
		paddingVertical: `2%`,
		paddingHorizontal: `7%`,
		marginBottom: `5%`,
	},
	passwordInput: {
		backgroundColor: `#AAA`,
		borderRadius: 20,
		paddingVertical: `2%`,
		paddingHorizontal: `7%`,
		marginBottom: `15%`,
	},
	loginButton: {
		backgroundColor: `#CCC`,
		borderRadius: 20,
		paddingVertical: `2%`,
		paddingHorizontal: `5%`,
	},
});
