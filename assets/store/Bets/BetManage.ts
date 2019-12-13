import { config } from '../../common/Config'
import { appMode, PromiseParam, PromiseResult, BetRecord, GameMember, betLocaion, BetNoticeData } from '../../common/Const'
import { BetList } from '../../mock/BetList'
import Betitem from './BetItem';
class BetManage {
    public betList: Betitem[][] = [] //场次+用户Id 信息集合
    public requestBetList(): Promise<PromiseParam> {
        return new Promise((resolve: (param: PromiseParam) => void): void => {
            if (this.betList !== null) {
                resolve({ result: PromiseResult.SUCCESS, extObject: this.betList })
                return
            }
            if (config.appMode === appMode.LOCAL_TEST) {
                BetList.forEach((item: BetRecord): void => {
                    //   this.betList.push(new BetItem(item))
                })
            } else {
            }
            resolve({ result: PromiseResult.SUCCESS, extObject: this.betList })
        })
    }

    public reSet() {
        this.betList = []
    }

    public cancelBet(info: BetNoticeData) {
        let partLocation = info.betLocation
        let userId = info.userId
        let onRaceNum = info.raceNum
        try {
            this.betList[onRaceNum][userId][partLocation] = 0
        } catch (e) {
            cc.log(e)
        }
    }

    addBet(oningRaceNum: number, userId: string, location: betLocaion, val: number) {
        if (typeof (this.betList[oningRaceNum]) === 'undefined') {
            this.betList[oningRaceNum] = [];
        }
        if (typeof (this.betList[oningRaceNum][userId]) === 'undefined') {
            let item = {
                userId: userId,
                raceNum: oningRaceNum,
                sky: 0,
                land: 0,
                middle: 0,
                bridg: 0,
                skyCorner: 0,
                landCorner: 0,
            } as BetRecord
            this.betList[oningRaceNum][userId] = new Betitem(item)
        }
        this.betList[oningRaceNum][userId][location] = this.betList[oningRaceNum][userId][location] + val
    }
}

export default new BetManage