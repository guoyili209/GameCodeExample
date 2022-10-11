export class GameEvent extends Laya.EventDispatcher {
    constructor() {
        super()
    }
}

export class EventType {
    update_player_data = 'update_player_data'
    update_player_data_show = "update_player_data_show"
}