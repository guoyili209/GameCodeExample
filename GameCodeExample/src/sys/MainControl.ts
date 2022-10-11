import { BaseControl } from "./mvc/BaseControl";

export class MainControl extends BaseControl {
    _control_arr = []
    static _instance: MainControl
    static get Instance(): MainControl {
        if (this._instance == null) {
            this._instance = new MainControl()
        }
        return this._instance
    }
    constructor() {
        super()
        this._Init()
    }
    private _Init() {

    }
    Update(): void {
        for (let i = 0; i < this._control_arr.length; i++) {
            this._control_arr[i].Update()
        }
    }
}