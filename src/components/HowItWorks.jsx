import { motion } from 'framer-motion';

const steps = [
    {
        id: 1,
        title: '交易授权（非必选）',
        description: '使用MetaMask/OKX等Web3钱包连接到Monad网络，进行授权（无需 GAS）',
    },
    {
        id: 2,
        title: '进行交易',
        description: '在Monad链上进行任意交易，自动参与抽奖',
    },
    {
        id: 3,
        title: '实时查看',
        description: '随时查看您的参与记录和中奖机会',
    },
    {
        id: 4,
        title: '领取奖励',
        description: '中奖后，已在第一步授权的地址，自动发放USDC奖励到相应钱包；未授权地址，需要手动领取',
    },
];

export default function HowItWorks() {
    return (
        <div className="bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        如何参与抽奖？
                    </h2>
                    <p className="mt-4 text-xl text-gray-500">
                        简单四步，开启您的幸运之旅
                    </p>
                </motion.div>

                <div className="mt-16">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative"
                            >
                                <div className="flex flex-col items-center">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white">
                                        <span className="text-lg font-semibold">{step.id}</span>
                                    </div>
                                    <h3 className="mt-6 text-lg font-medium text-gray-900">{step.title}</h3>
                                    <p className="mt-2 text-base text-gray-500 text-center">{step.description}</p>

                                    {index < steps.length - 1 && (
                                        <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gray-200">
                                            <div className="absolute right-0 -mt-1 h-3 w-3 rounded-full bg-gray-200"></div>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}