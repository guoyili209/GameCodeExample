import { ITask } from "./ITask"

export class TaskManager {
    _task_queue: ITask[] = []
    static _instance
    static get Instance(): TaskManager {
        if (this._instance == null) {
            this._instance = new TaskManager()
        }
        return this._instance
    }
    constructor() {

    }
    AddTask(task: ITask) {
        this._task_queue.push(task)
    }
    CheckTask() {
        if (this._task_queue[0]) {
            if (this._task_queue[0].complete) {
                this._task_queue.splice(0, 1)
            }
            this._task_queue[0].run()
        }
    }
}