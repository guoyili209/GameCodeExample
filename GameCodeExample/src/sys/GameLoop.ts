import { MainControl } from "./MainControl"

export class GameLoop {

    constructor() {
        this._Init()
        Laya.timer.frameLoop(1, this, this._Update)
    }
    _Init() {

    }
    _Update() {
        MainControl.Instance.Update()

    }
}