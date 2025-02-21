import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Rewardss from '../components/Rewards';


export default function Rewards() {
    const { t } = useTranslation();

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Rewardss />

            <div className="mt-16">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white p-6 rounded-lg shadow-lg"
                    >
                        <h3 className="text-lg font-medium mb-4">交易奖励</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <svg className="w-6 h-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>每笔交易自动参与抽奖</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-6 h-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>中奖自动发放 USDC</span>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white p-6 rounded-lg shadow-lg"
                    >
                        <h3 className="text-lg font-medium mb-4">推荐奖励[TBD]</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <svg className="w-6 h-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>邀请好友获得额外奖励</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-6 h-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>被邀请人中奖可获分成</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>

        </div>
    );
}

