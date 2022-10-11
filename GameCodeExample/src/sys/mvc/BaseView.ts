export class BaseView {
    dirty = false
    constructor() {

    }
    Update() {
        if (this.dirty == false) return
    }
}