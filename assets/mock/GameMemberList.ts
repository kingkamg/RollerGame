import { GameMember, gameMemberType } from '../store/GameMember/GameMemberBase'

export const GameMemberList: GameMember[] = [ //数据默认第一个是房主
    {
        userId: '24',
        roleType: gameMemberType.PLAYER,
        nick: '张三',
        icon: 'test/33',
        count:0
    },
    {
        userId: '23',
        roleType: gameMemberType.PLAYER,
        nick: '王五',
        icon: 'test/11',
        count:0
    },
    {
        userId: '25',
        roleType: gameMemberType.PLAYER,
        nick: '二哈',
        icon: 'test/44',
        count:0
    },
    {
        userId: '26',
        roleType: gameMemberType.PLAYER,
        nick: '李四',
        icon: 'test/22',
        count:0
    },
    {
        userId: '27',
        roleType: gameMemberType.PLAYER,
        nick: '飘',
        icon: 'test/22',
        count:0
    },
    {
        userId: '28',
        roleType: gameMemberType.PLAYER,
        nick: '风吹屁屁凉',
        icon: 'test/22',
        count:0
    },
    {
        userId: '29',
        roleType: gameMemberType.PLAYER,
        nick: '这里有眼',
        icon: 'test/22',
        count:0
    },
    {
        userId: '30',
        roleType: gameMemberType.PLAYER,
        nick: '眼在兜里',
        icon: 'test/22',
        count:0
    }
]