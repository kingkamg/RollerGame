export interface RoomGameConfig {
    rollDiceTime:number //摇色子持续时间 s
    dealTime:number //发牌持续时间 s
    betTime:number //下注持续时间 s
    showDownTime:number //比大小持续时间 s  两部分（翻牌事件+大小结果播报动画）
    showResultTime:number //显示结果持续时间 s （结果面板）
    delayTime?:number //服务器和客户端之间的延迟时间
}
export const roomGameConfig: RoomGameConfig = {
    rollDiceTime : 6,
    dealTime : 6,
    betTime : 6,
    showDownTime : 6,
    showResultTime : 6
}