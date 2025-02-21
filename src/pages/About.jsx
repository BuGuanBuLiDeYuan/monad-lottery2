import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const team = [
    {
        name: '张本振',
        role: '创始人 & CEO',
        image: '/team/member1.jpg',
        bio: '拥有10年区块链行业经验，曾参与多个知名项目开发'
    },
    {
        name: '王闯',
        role: 'CTO',
        image: '/team/member2.jpg',
        bio: '全栈工程师，智能合约专家，5年以上区块链开发经验'
    },
    {
        name: '李开山',
        role: '产品副总裁',
        image: '/team/member3.jpg',
        bio: '连续创业者，对Web3产品有独特见解'
    },
    {
        name: 'MingLau',
        role: '顾问',
        image: '/team/member4.jpg',
        bio: 'BTC布道者和信仰者'
    },
    {
        name: 'WM',
        role: '市场营销副总裁',
        image: '/team/member5.jpg',
        bio: '某世界 500 强公司营销负责人'
    }
];

export default function About() {
    const { t } = useTranslation();

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
                <h1 className="text-3xl font-bold">关于我们</h1>
                <p className="mt-4 text-xl text-gray-500">创新的区块链彩票平台</p>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-2xl font-bold mb-6">我们的愿景</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Monad Lottery 致力于打造最公平、透明的区块链彩票平台。我们利用智能合约技术，
                        确保每一次抽奖都是完全随机和公正的。我们的目标是为用户提供一个安全、可靠、
                        有趣的区块链彩票体验。
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-2xl font-bold mb-6">联系我们</h2>
                    <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                            <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <a href="mailto:contact@monadlottery.com" className="text-indigo-600 hover:text-indigo-800">
                                contact@monadlottery.com
                            </a>
                        </div>
                        <div className="flex items-center space-x-4">
                            <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <a href="#" className="text-indigo-600 hover:text-indigo-800">
                                帮助中心
                            </a>
                        </div>
                        <div className="flex items-center space-x-4">
                            <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                            </svg>
                            <a href="#" className="text-indigo-600 hover:text-indigo-800">
                                Twitter
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}