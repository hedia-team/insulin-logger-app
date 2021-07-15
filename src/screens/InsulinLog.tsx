import React from "react";
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { EXAMPLE_DATA } from "../../ExampleData";
import { ILogbook, Token } from "../types/types";

interface IProps {
	token: Token;
	logout(): void;
}

export default class InsulinLog extends React.Component<IProps> {
	public renderInsulinLog = ({ bloodGlucose, insulinDose, timestamp }: ILogbook) => {
		return (
			<View style={styles.logEntry}>
				<Text>{new Date(timestamp).toLocaleString()}</Text>
				<Text>Blood Glucose: {bloodGlucose}</Text>
				<Text>Insulin Dose: {insulinDose}</Text>
			</View>
		);
	};

	public renderSpacing = () => {
		return <View style={{ marginBottom: `5%` }} />;
	};

	public render() {
		const { logout } = this.props;

		// TODO: Change out EXAMPLE_DATA with "real" data
		const data = EXAMPLE_DATA;

		return (
			<View style={styles.container}>
				<View style={styles.title}>
					<Text style={styles.titleText}>Insulin Logs</Text>
				</View>
				<ScrollView style={{ flex: 2 }}>
					<FlatList
						data={data}
						ItemSeparatorComponent={this.renderSpacing}
						renderItem={({ item }) => this.renderInsulinLog(item)}
						keyExtractor={({ timestamp }) => timestamp}
					/>
				</ScrollView>
				<View style={styles.logout}>
					<TouchableOpacity style={styles.logoutButton} onPress={logout}>
						<Text>Logout</Text>
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
		marginBottom: `5%`,
	},
	titleText: {
		fontSize: 30,
		color: `#B2C3F4`,
	},
	logout: {
		flex: 1,
		alignItems: `center`,
		justifyContent: `center`,
	},
	logoutButton: {
		backgroundColor: `#CCC`,
		borderRadius: 20,
		paddingVertical: `2%`,
		paddingHorizontal: `5%`,
	},
	logEntry: {
		borderWidth: 2,
		borderColor: `black`,
		backgroundColor: `#AAA`,
		borderRadius: 20,
		marginHorizontal: `15%`,
		alignItems: `center`,
	},
});
