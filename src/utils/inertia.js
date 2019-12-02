
export default class Inertia {
	constructor({min = 0, max, acceleration = 0.25, friction = 0.3, reflect = 0}) {
		this._minV = min;
		this._maxV = max;
		this._accel = acceleration;
		this._frict = friction;
		this._reflect = -Math.abs(reflect);
		this._delta = 0;
		this._value = min;
	}

	update(input) {

		this._delta += (input - this._value) * this._accel;
		this._delta *= this._frict;
		this._value += this._delta;

		if (this._value < this._minV) {
			this._value = this._minV;
			if (this._delta < 0) this._delta *= this._reflect;
		} else if (this._value > this._maxV) {
			this._value = this._maxV;
			if (this._delta > 0) this._delta *= this._reflect;
		}
		return this._value;
	}

	setValue(input) {
		this._delta = 0;
		this._value = Math.min(this._maxV, Math.min(this._minV, input));
		return this._value;
	}
}