import React from "react";
import { Token } from "src/types/types";
import InsulinLog from "./src/screens/InsulinLog";
import Login from "./src/screens/Login";

interface IState {
	token: Token;
}

export default class App extends React.Component<{}, IState> {
	public state: IState = {
		token: null,
	};

	public updateToken = (token: IState["token"]) => {
		this.setState({
			token,
		});
	};

	public render() {
		const { token } = this.state;

		if (token === null) {
			return <Login updateToken={this.updateToken} />;
		}

		return <InsulinLog token={token} logout={() => this.updateToken(null)} />;
	}
}
