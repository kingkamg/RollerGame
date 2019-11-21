import BetLocItem from "../store/Bets/BetLocItem"

export enum appMode {
    LOCAL_TEST = 1,//本地测试模式
    SERVER_TEST = 2,//服务器测试模式
    BUILD = 3 //部署模式
}

export enum TableLocationType {
    SKY = 'sky', //天
    MIDDLE = 'middle', //中
    LAND = 'land',  //地
    LANDLORD = 'landlord'  //庄
}

export class PromiseParam {
    result: number
    extObject?: any
    msg?: string
}

export const PromiseResult = {
    SUCCESS: 0, //通用成功
    ERROR: -1 //通用失败
}

//趋势表图状态
export const TrendMapState = {
    HIDDEN: 1,//隐藏
    FOLD: 2,//折叠
    SHOW: 3 //展示
}

export interface DiceCountInfo {
    one: number, //第一个的值
    two: number //第二个的值
}

export enum roomState {
    OPEN = 1, //创建,房主没点开始，等待玩家进入
    PLAYING = 2,  //进行中
    ALL_RACE_FINISHED = 3, //所有比赛结束
    CLOSE = 4   //关闭
}

export interface Coordinate {
    x: number,
    y: number
}

export enum betLocaion {
    SKY = 'sky',
    LAND = 'land',
    MIDDLE = 'middle',
    BRIDG = 'bridg',
    SKY_CORNER = 'skyCorner',
    LAND_CORNER = 'landCorner'
}

//应用中事件定义
export enum EventType {
    ROOM_STATE_CHANGE_EVENT = 1, //房间状态改变通知   （数据改变触发）
    RACE_STATE_CHANGE_EVENT = 2,  //当前比赛状态改变通知 （数据改变触发）
    MEMBER_CHANGE_EVENT = 3,  //人员变动通知  （数据改变触发）
    LOCAL_NOTICE_EVENT = 4,  //本地通知事件 （本地对本地 和数据改变无关）
    LANDLORD_CAHNGE_EVENT = 5,//地主改变通知 （数据改变触发）
    BET_CHIP_CHANGE_EVENT = 6, //下注改变通知 （数据改变触发）
    RACING_NUM_CHANGE_EVENT = 7 //进行中的比赛场次号改变通知（数据改变触发）
}

//单场游戏状态
export enum RaceState {
    NOT_BEGIN = 1, //没开始
    CHOICE_LANDLORD = 2, //选地主
    ROLL_DICE = 3,  //摇色子
    DEAL = 4,  //发牌
    BET = 5,  //下注
    SHOW_DOWN = 6,  //比大小 包括大小的通知动画 比如通赔
    SHOW_RESULT = 7,  //揭晓结果 即显示本次比赛分数面板
    FINISHED = 8  //完成
}


//场次状态改变参数
export interface RaceStateChangeParam {
    raceId: string
    raceNum: number
    fromState: RaceState
    toState: RaceState
}

export enum LocalNoticeEventType { // LOCAL_NOTICE_EVENT 事件的子事件 （本地对本地  和数据状态改变而触发无关）
    PLAY_BUTTON_EVENT = 1, // 游戏开始按钮被点击通知
    LOCAL_BE_LANDLORD_RESULT = 2,  //本人是否愿意当地主结果通知
    ROLL_DICE_FINISHED_NOTICE = 3, //摇色子动画结束通知
    DELIVERY_CARD_FINISHED_NOTICE = 4, //发牌动画执行结束通知
    OPEN_CARD_FINISHED_NOTICE = 5, //翻牌动画结束通知
    SHOW_DOWN_ANIMATION_FINISHED_NOTICE = 6, //比大小动画结束通知
    OPEN_CARD_REQUEST_NOTICE = 7, //要求本地翻牌通知
    LOCAL_TIME_XIAZHU_FINISHED_NOTICE = 8, //本地设置的下注段时间完毕通知
}

export interface LocalNoticeEventPara {
    type: LocalNoticeEventType
    info?: any
}

export const chipPoint = {
    sky: { left: { x: -277, y: 81 }, right: { x: -151, y: 81 } }, //SKY
    land: { left: { x: 151, y: 79 }, right: { x: 285, y: 79 } },  //LAND
    middle: { left: { x: -66, y: -64 }, right: { x: 69, y: -64 } }, //MIDDLE 
    bridg: { left: { x: -60, y: 79 }, right: { x: 65, y: 79 } },  //BRIDG 
    skyCorner: { left: { x: -246, y: -16 }, right: { x: -149, y: -16 } },  //SKY_CORNER
    landCorner: { left: { x: 148, y: -31 }, right: { x: 240, y: -31 } }  //LAND_CORNER
}

export const IconValueList = {
    1: ['1_1'],
    2: ['2_1', '2_2'],
    3: ['3_1'],
    4: ['4_1', '4_2', '4_3', '4_4'],
    5: ['5_1', '5_2', '5_3', '5_4', '5_5'],
    6: ['6_1', '6_2'],
    7: ['7_1'],
    8: ['8_1'],
    9: ['9_1', '9_2', '9_3', '9_4', '9_5', '9_6', '9_7', '9_8', '9_9'],
    0.5: ['0_1']
}

export enum MajhongValueType {
    DUI_ZI = 1, //对子
    BI_SHI = 2, //鄙十
    DIAN = 3 //点
}

export interface BetRecord {
    id?: string
    roomId?:string
    raceNum:number
    isWin:CompareDxRe
    userId: string
    raceId: string
    betLocaion: betLocaion
    costValue: number
    creatTime?:string
    modTime?:string
}

export interface BetScore {
    raceId: string,
    userId: string,
    userName: string,
    sky: number,
    land: number,
    middle: number,
    bridg: number,
    skyCorner: number,
    landCorner: number,
}
export enum gameMemberType {
    MANAGE = 1, //房主
    PLAYER = 2,  //玩家
    VISITOR = 3   //观众
}

export enum memberState {
    OnLine = 1, //在线
    OffLine = 2,  //离线
    KickOut = 3   //被踢出
}

export interface GameMember {
    id?:string
    roomId?:string
    userId: string
    roleType: gameMemberType
    nick: string
    icon: string
    score?: number  //本房间当前成员总分数
    creatTime?:string
    modTime?:string
    state: memberState
}

export interface raceRecord {
    id: string
    roomId?:number
    raceNum: number //场次编号
    playState: RaceState   //比赛状态
    landlordScore?:DiceCountInfo
    skyScore?:DiceCountInfo
    middleScore?:DiceCountInfo
    landScore?:DiceCountInfo
    landlordId: string //地主ID
    betInfo?: BetLocItem[] //下注信息 本地有
    majongResult?: MajongResult  //发牌位置的牌值集合 本地有
    points: DiceCountInfo  //色子点数信息集合
    locationResultDetail?: LocationResultDetail  //每个下注位置的输赢结果集合 本地有
    skyResult?: CompareDxRe //接口有 天输赢
    middleResult?: CompareDxRe //接口有 中输赢
    landResult?: CompareDxRe //接口有 地输赢
    skyCornerResult?: CompareDxRe //接口有  天角输赢
    landCornerResult?: CompareDxRe //接口有 地角输赢
    bridgResult?: CompareDxRe //接口有 桥输赢
    creatTime?:string
    modTime?:string

}

export interface MajongResult {
    sky: DiceCountInfo,
    middle: DiceCountInfo,
    land: DiceCountInfo,
    landlord: DiceCountInfo
}

export enum playMode {
    LANDLORD = 1, //霸王庄
    TURN = 2, //轮流
}

export interface RoomInfo {
    id: number  //房间编号
    creatUserId: string  //创建者ID
    memberLimit: number  //人员数量限制
    playCount: number  //场次限制
    playMode: playMode  //上庄模式
    roomFee:number //房间费用
    roomPay:number //付费模式
    costLimit: number  //消费上限
    roomState: roomState  //房间状态
    oningRaceNum: number //当前进行中的场次编号
    creatTime?:string
    modTime?:string
}

export interface BetChipChangeInfo {
    raceId: string
    userId: string
    betLocation: betLocaion
    fromVal: number
    toValue: number
}

//每个位置的输赢 true表示赢 false 表示输
export interface LocationResultDetail {
    sky: CompareDxRe
    land: CompareDxRe
    middle: CompareDxRe
    bridg: CompareDxRe
    sky_corner: CompareDxRe
    land_corner: CompareDxRe
}

export interface ResponseData {
    data: any,
    message: string,
    status: ResponseStatus
}

export enum ResponseStatus {
    SUCCESS = 1,
    FAIL = 0
}


//开房付款模式
export enum CreateRoomPayModel {
    AA = 1,  //AA制
    DAI_KAI = 2 //代开
}

//大小比较结果
export enum CompareDxRe {
    BIG = 'w',  //大
    SMALL = 's', //小
    EQ = 'e' //相等
}


