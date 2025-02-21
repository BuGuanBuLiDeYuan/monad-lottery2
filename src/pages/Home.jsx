import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import MonadAdvantages from '../components/MonadAdvantages';
import Statistics from '../components/Statistics';


export default function Home() {
    const { t } = useTranslation();

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SEO
                title="首页"
                description="Monad Lottery 是一个创新的区块链彩票平台，提供零门槛参与、完全透明的抽奖机制。"
                keywords={['Monad', '区块链', '彩票', '抽奖', '智能合约']}
            />
            {/* Hero Section */}
            <div className="py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-left"
                >
                    <h1 className="text-4xl tracking-tight font-bold sm:text-5xl md:text-6xl">
                        <span>首发于 Monad 公链的</span>{' '}
                        <span className="text-indigo-600">创新哈希彩票</span>
                    </h1>
                    <p className="mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl max-w-3xl">
                        零门槛参与，交易即可抽奖。通过智能合约实现完全透明的抽奖机制，让每一笔交易都充满期待。与每一位用户共享利益，极大提升公链的活跃度和用户粘性。
                    </p>
                    <div className="mt-5 sm:flex sm:items-center sm:space-x-4">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <a href="https://www.monad.xyz/ecosystem" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                                开始体验
                            </a>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-3 sm:mt-0"
                        >
                            <a href="/rewards" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                                了解更多
                            </a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
            {/* Statistics Section */}
            <Statistics />

            {/* Monad Advantages Section */}
            <MonadAdvantages />
            {/* Features Section */}
            <Features />
            {/* How to Participate Section */}
            <HowItWorks />
        </div>
    );
}
