import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Roadmap() {
    const { t } = useTranslation();

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
                <h1 className="text-3xl font-bold">Monad Lottery 项目路线图</h1>
                <p className="mt-4 text-xl text-gray-500">我们的发展计划。部分内容可能会有所调整，依赖于 Monad 公链的进度。</p>
            </div>

            <div className="mt-16">
                <div className="relative">
                    {/* 时间线 */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-indigo-200"></div>

                    {/* Q1 2024 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative mb-16"
                    >
                        <div className="flex items-center justify-center mb-4">
                            <div className="bg-indigo-600 text-white px-4 py-2 rounded-full">
                                Q1 2024
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl mx-auto">
                            <h3 className="text-lg font-medium mb-2">产品启动</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>• 完成智能合约开发</li>
                                <li>• 完成安全审计</li>
                                <li>• 上线测试网</li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Q2 2024 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative mb-16"
                    >
                        <div className="flex items-center justify-center mb-4">
                            <div className="bg-indigo-600 text-white px-4 py-2 rounded-full">
                                Q2 2024
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl mx-auto">
                            <h3 className="text-lg font-medium mb-2">功能扩展</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>• 推出移动端应用</li>
                                <li>• 添加更多奖励机制</li>
                                <li>• 社区治理功能上线</li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Q3 2024 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="relative"
                    >
                        <div className="flex items-center justify-center mb-4">
                            <div className="bg-indigo-600 text-white px-4 py-2 rounded-full">
                                Q3 2024
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl mx-auto">
                            <h3 className="text-lg font-medium mb-2">生态扩展</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>• 跨链功能支持</li>
                                <li>• NFT 集成</li>
                                <li>• 更多合作伙伴</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
