import { motion } from 'framer-motion';

export default function Statistics() {
    // 这里可以接入实际的数据
    const stats = [
        {
            name: '当前奖池',
            value: '123,456 USDC',
            description: '实时奖池金额'
        },
        {
            name: '参与人数',
            value: '8,234',
            description: '今日累计参与'
        },
        {
            name: '已发放奖励',
            value: '532,891 USDC',
            description: '历史总发放金额'
        },
        {
            name: '中奖概率',
            value: '12.5%',
            description: '当前中奖概率'
        }
    ];

    const TableHeader = () => (
        <div className="flex items-center justify-between text-indigo-200 text-sm border-b border-indigo-100/20 pb-2 mb-3">
            <span className="hidden md:block w-24 truncate">地址</span>
            <span className="w-24 text-center">项目</span>
            <span className="w-24 text-right">奖金</span>
            <span className="hidden md:block w-20 text-right">GAS</span>
            <span className="w-28 text-right">收益率</span>
            <span className="w-20 text-right">时间</span>
        </div>
    );

    // 修改数据结构，移除第一行作为标题的做法
    const recentWinners = [
        {
            address: '0x7a...3f9',
            amount: '50 USDC',
            gas: '0.002 U',
            PnL: '2,500,000%',
            time: '2分钟前',
            type: '日常奖励'
        },
        {
            address: '0x4b...2e8',
            amount: '200 USDC',
            gas: '0.0018 U',
            PnL: '11,111,111%',
            time: '15小时前',
            type: '周度大奖'
        },
        {
            address: '0x9c...5d4',
            amount: '1000 USDC',
            gas: '0.0034 U',
            PnL: '29,411,764%',
            time: '5天前',
            type: '月度特奖'
        }
    ];

    return (
        <div className="py-12 bg-gradient-to-r from-indigo-500 to-purple-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-white">实时数据</h2>
                    <p className="mt-4 text-xl text-indigo-100">实时跟踪抽奖数据，透明公正</p>
                </div>

                <dl className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="px-6 py-8 bg-white/10 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden"
                        >
                            <dt className="text-sm font-medium text-indigo-100 truncate">
                                {stat.name}
                            </dt>
                            <dd className="mt-2 text-3xl font-semibold text-white">
                                {stat.value}
                            </dd>
                            <dd className="mt-1 text-sm text-indigo-200">
                                {stat.description}
                            </dd>
                        </motion.div>
                    ))}
                </dl>

                {/* 实时中奖记录 */}
                <div className="mt-12 bg-white/10 backdrop-blur-lg rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">最新中奖记录</h3>
                    <div className="space-y-4">
                        <TableHeader />
                        {recentWinners.map((winner, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex items-center justify-between text-indigo-100 text-sm flex-wrap md:flex-nowrap"
                            >
                                <span className="hidden md:block w-24 truncate">{winner.address}</span>
                                <span className="w-24 text-center">{winner.type}</span>
                                <span className="w-24 text-right">{winner.amount}</span>
                                <span className="hidden md:block w-20 text-right">{winner.gas}</span>
                                <span className="w-28 text-right text-green-400 text-xs md:text-sm">{winner.PnL}</span>
                                <span className="w-20 text-right">{winner.time}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}