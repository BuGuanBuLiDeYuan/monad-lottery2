import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const team = [
    {
        name: '不管不理的员',
        role: '创始人',
        image: '/images/team/longlonglongbtc_400x400.jpg',
        bio: '8 年华语地区高端社区运营经验，五年区块链行业和项目经验',
        X: <a href="https://x.com/longlonglongbtc"> 关注他的 X: longlonglongbtc </a>
    },

    {
        name: 'MingLau',
        role: '顾问',
        image: '/images/team/minglaugodel_400x400.jpg',
        bio: 'BTC布道者和信仰者，波场联合创始人&COO',
        X: <a href="https://x.com/minglaugodel"> 关注他的 X: minglaugodel </a>
    },
    {
        name: '法恒',
        role: '联合创始人',
        image: '/images/team/0xfaheng_400x400.jpg',
        bio: '华语 KOL，区块链行业资深从业者，社区运营专家',
        X: <a href="https://x.com/0xfaheng"> 关注他的 X: 0xfaheng </a>
    }
];

export default function About() {
    const { t } = useTranslation();

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
                <h1 className="text-3xl font-bold">我们的愿景</h1>
                <p className="mt-4 text-xl text-gray-500"></p>
            </div>

            <motion.div
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-2xl font-bold"></h2>
                <p className="text-gray-600 leading-relaxed">
                    Monad Lottery 致力于打造最公平、透明的区块链彩票平台。我们利用智能合约技术，
                    确保每一次抽奖都是完全随机和公正的。我们的目标是为用户提供一个安全、可靠、
                    有趣的区块链彩票体验。
                </p>
            </motion.div>


            {/* 团队成员展示部分 */}
            <motion.div
                className="mt-24"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-2xl font-bold mb-12 text-center">核心团队</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {team.map((member, index) => (
                        <motion.div
                            key={member.name}
                            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="w-48 h-48 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-40 lg:h-40 xl:w-48 xl:h-48 overflow-hidden rounded-full mx-auto mt-6">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                                <p className="text-sm text-[#7B3FE4] mt-1">{member.role}</p>
                                <p className="mt-4 text-gray-600">{member.bio}</p>
                                <p className="mt-4 text-gray-600">{member.X}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}