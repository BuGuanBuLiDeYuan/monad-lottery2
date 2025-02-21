import { motion } from 'framer-motion';

const phases = [
    {
        phase: 'Q1 2024',
        title: '项目启动',
        items: [
            '完成产品设计和规划',
            '核心团队组建',
            'MVP版本开发',
            '社区建设启动'
        ],
        status: 'current'
    },
    {
        phase: 'Q2 2024',
        title: '产品发布',
        items: [
            '主网正式上线',
            '首轮空投活动',
            '合作伙伴计划启动',
            '社区治理机制上线'
        ],
        status: 'upcoming'
    },
    {
        phase: 'Q3 2024',
        title: '生态扩展',
        items: [
            '跨链功能实现',
            'DAO治理升级',
            '更多奖励机制',
            '全球市场拓展'
        ],
        status: 'upcoming'
    },
    {
        phase: 'Q4 2024',
        title: '全面发展',
        items: [
            '移动端应用发布',
            '生态基金成立',
            '全球性活动举办',
            '更多创新功能'
        ],
        status: 'upcoming'
    }
];

export default function Roadmap() {
    return (
        <div className="bg-white py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        发展路线图
                    </h2>
                    <p className="mt-4 text-xl text-gray-500">
                        我们的愿景是打造 Monad 生态最具影响力的哈希彩票平台
                    </p>
                </motion.div>

                <div className="mt-20">
                    <div className="space-y-16">
                        {phases.map((phase, phaseIdx) => (
                            <motion.div
                                key={phase.phase}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: phaseIdx * 0.1 }}
                                className="relative"
                            >
                                <div className="flex items-center">
                                    <div className={`h-12 w-12 rounded-full flex items-center justify-center
                    ${phase.status === 'current' ? 'bg-indigo-600' : 'bg-gray-200'}`}>
                                        <span className={`text-sm font-semibold
                      ${phase.status === 'current' ? 'text-white' : 'text-gray-700'}`}>
                                            {phase.phase}
                                        </span>
                                    </div>
                                    <div className="ml-6">
                                        <h3 className="text-xl font-bold text-gray-900">{phase.title}</h3>
                                    </div>
                                </div>

                                <div className="mt-6 ml-14">
                                    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        {phase.items.map((item) => (
                                            <li
                                                key={item}
                                                className="flex items-start"
                                            >
                                                <svg
                                                    className={`mt-1 h-5 w-5 flex-shrink-0
                            ${phase.status === 'current' ? 'text-indigo-600' : 'text-gray-400'}`}
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                <span className="ml-3 text-gray-500">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}