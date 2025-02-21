import { motion } from 'framer-motion';
import {
    CurrencyDollarIcon,
    ShieldCheckIcon,
    UserGroupIcon,
    ChartBarIcon
} from '@heroicons/react/24/outline';

const features = [
    {
        name: '零门槛参与',
        description: '任何 Monad 链上交易都可以参与抽奖，无需额外费用。',
        icon: UserGroupIcon,
    },
    {
        name: '透明公正',
        description: '基于智能合约的随机算法，确保每次抽奖都公平透明。',
        icon: ShieldCheckIcon,
    },
    {
        name: 'USDC奖励',
        description: '中奖即可获得USDC稳定币奖励，价值稳定，随时可提现。',
        icon: CurrencyDollarIcon,
    },
    {
        name: '数据可视化',
        description: '实时展示参与数据和以往中奖数据，让每次参与都一目了然。',
        icon: ChartBarIcon,
    },
];

export default function Features() {
    return (
        <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold text-gray-900 sm:text-4xl"
                    >
                        哈希彩票为什么值得参与？
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto"
                    >
                        创新的哈希彩票系统，为您带来全新的链上体验
                    </motion.p>
                </div>

                <div className="mt-20">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <h3 className="mt-6 text-lg font-medium text-gray-900">{feature.name}</h3>
                                    <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
