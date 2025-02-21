import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

export default function Product() {
    const { t } = useTranslation();

    return (
        <>
            <SEO
                title="产品介绍"
                description="了解 Monad Lottery 的核心特性：快速交易、安全可靠、数据透明。"
                keywords={['Monad Lottery', '产品特性', '区块链彩票', '智能合约']}
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">产品介绍</h1>
                    <p className="mt-4 text-xl text-gray-500">了解 Monad Lottery 的核心特性</p>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-white p-6 rounded-lg shadow-lg"
                    >
                        <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-medium mb-2">快速交易</h3>
                        <p className="text-gray-600">基于 Monad 的高性能区块链，实现毫秒级交易确认。</p>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-white p-6 rounded-lg shadow-lg"
                    >
                        <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-medium mb-2">安全可靠</h3>
                        <p className="text-gray-600">智能合约经过严格审计，确保资金安全和抽奖公平。</p>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-white p-6 rounded-lg shadow-lg"
                    >
                        <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-medium mb-2">数据透明</h3>
                        <p className="text-gray-600">所有抽奖记录和奖励发放过程完全公开，可在链上验证。</p>
                    </motion.div>
                </div>
            </div>
        </>
    );
}
