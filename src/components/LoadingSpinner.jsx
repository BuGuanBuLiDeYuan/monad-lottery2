import { motion } from 'framer-motion';

export default function LoadingSpinner() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full"
            />
        </div>
    );
}