import { motion } from 'framer-motion';

const rewardTiers = [
    {
        name: '阳光普照：日常奖励',
        amount: '~ 10U',
        frequency: '每日',
        description: '每24小时抽取多名幸运用户',
        features: [
            '无门槛参与',
            '无限次参与机会',
            '交易越多，中奖机会越大',
            '授权用户自动发放USDC',
            '未授权用户需手动领取'
        ]
    },
    {
        name: '众星拱月：周度大奖',
        amount: '~ 200U',
        frequency: '每周',
        description: '每周抽取3名幸运用户',
        features: [
            '无门槛参与',
            '无限次参与机会',
            '交易越多，中奖机会越大',
            '授权用户自动发放USDC',
            '未授权用户需手动领取',
            '社区专属徽章'
        ]
    },
    {
        name: '银河之光：月度特奖',
        amount: '~ 1000U',
        frequency: '每月',
        description: '每月抽取2名幸运用户',
        features: [
            '无门槛参与',
            '无限次参与机会',
            '交易越多，中奖机会越大',
            '授权用户自动发放USDC',
            '未授权用户需手动领取',
            '社区专属徽章',
            '参与社区治理'
        ]
    },
    {
        name: '闪耀宇宙：年度特奖',
        amount: '~ 100,000U',
        frequency: '每年',
        description: '每年抽取1名超级幸运用户',
        features: [
            '无门槛参与',
            '无限次参与机会',
            '交易越多，中奖机会越大',
            '授权用户自动发放USDC',
            '未授权用户需手动领取',
            '社区专属徽章',
            '参与社区治理',
            'Monad公链年度幸运星'
        ]
    }
];

export default function Rewardss() {
    return (
        <div className="bg-gray-50 py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        奖励机制
                    </h2>
                    <p className="mt-4 text-xl text-gray-500">
                        多层次奖励体系，让每次交易都充满期待
                    </p>
                </motion.div>

                <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {rewardTiers.map((tier, index) => (
                        <motion.div
                            key={tier.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-lg shadow-lg overflow-hidden"
                        >
                            <div className="px-6 py-8  flex flex-col h-full">
                                <div className="mb-8">
                                    <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                                        {tier.name}
                                    </h3>
                                    <div className="text-4xl font-extrabold text-indigo-600 text-center">
                                        {tier.amount}
                                    </div>
                                    <p className="mt-2 text-sm text-gray-500 text-center">
                                        {tier.frequency}
                                    </p>
                                    <p className="mt-4 text-gray-600 text-center">
                                        {tier.description}
                                    </p>
                                </div>
                                <ul className="mt-6 space-y-4">
                                    {tier.features.map((feature) => (
                                        <li key={feature} className="flex items-center">
                                            <svg
                                                className="flex-shrink-0 h-5 w-5 text-green-500  mt-1"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <span className="ml-2 text-gray-500">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}