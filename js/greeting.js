export default class Greeting {

	constructor(name) {
		this._name = name;
	}

	get getName() {
		return this._name;
	}

	toString() {
		return 'Hello ' + this._name + '!';
	}
}
