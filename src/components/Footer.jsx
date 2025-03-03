import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                            产品
                        </h3>
                        <ul className="mt-4 space-y-4">
                            <li>
                                <Link to="/roadmap" className="text-base text-gray-500 hover:text-gray-900">
                                    路线规划
                                </Link>
                            </li>
                            <li>
                                <Link to="/rewards" className="text-base text-gray-500 hover:text-gray-900">
                                    奖励机制
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                            支持
                        </h3>
                        <ul className="mt-4 space-y-4">
                            <li>
                                <a href="/product" className="text-base text-gray-500 hover:text-gray-900">
                                    帮助中心
                                </a>
                            </li>
                            <li>
                                <a href="/Product" className="text-base text-gray-500 hover:text-gray-900">
                                    功能介绍
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                            社区
                        </h3>
                        <ul className="mt-4 space-y-4">
                            <li>
                                <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                                    Telegram
                                </a>
                            </li>
                            <li>
                                <a href="https://x.com/longlonglongbtc" className="text-base text-gray-500 hover:text-gray-900">
                                    X/Twitter
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                            关于
                        </h3>
                        <ul className="mt-4 space-y-4">
                            <li>
                                <Link to="/about" className="text-base text-gray-500 hover:text-gray-900">
                                    关于我们
                                </Link>
                            </li>
                            <li>
                                <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                                    赞助合作
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 border-t border-gray-200 pt-8">
                    <p className="text-base text-gray-400 text-center">
                        &copy; 2025 TxLottery on Monad. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}