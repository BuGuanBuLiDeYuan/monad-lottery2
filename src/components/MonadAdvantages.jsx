export default function MonadAdvantages() {
    return (
        <div className="py-12">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">为什么选择 Monad 公链?</h2>
                <p className="mt-4 text-xl text-gray-500">高性能、低成本的新一代区块链基础设施</p>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* 高性能 */}
                <div className="text-center">
                    <div className="w-12 h-12 mx-auto bg-indigo-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-medium">极致性能</h3>
                    <p className="mt-2 text-gray-500">每秒处理10,000+笔交易，确认时间小于1秒，实现真正的快速响应。</p>
                </div>

                {/* 低成本 */}
                <div className="text-center">
                    <div className="w-12 h-12 mx-auto bg-indigo-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-medium">超低费用</h3>
                    <p className="mt-2 text-gray-500">交易成本仅为其他公链的千分之一，让每笔交易都更经济实惠。</p>
                </div>

                {/* EVM兼容 */}
                <div className="text-center">
                    <div className="w-12 h-12 mx-auto bg-indigo-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                        </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-medium">完全兼容</h3>
                    <p className="mt-2 text-gray-500">与以太坊虚拟机(EVM)完全兼容，轻松迁移现有智能合约。</p>
                </div>

                {/* 安全可靠 */}
                <div className="text-center">
                    <div className="w-12 h-12 mx-auto bg-indigo-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-medium">安全可靠</h3>
                    <p className="mt-2 text-gray-500">采用创新的共识机制，确保网络安全性和去中心化程度。</p>
                </div>
            </div>
        </div>
    );
}