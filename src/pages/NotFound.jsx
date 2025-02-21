import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
            >
                <h1 className="text-6xl font-bold text-indigo-600">404</h1>
                <p className="mt-4 text-xl text-gray-600">页面未找到</p>
                <Link
                    to="/"
                    className="mt-8 inline-block px-6 py-3 rounded-md bg-indigo-600 text-white hover:bg-indigo-700"
                >
                    返回首页
                </Link>
            </motion.div>
        </div>
    );
}