import { Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MainLayout() {
    const location = useLocation();

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <motion.main
                key={location.pathname}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="pt-16"
            >
                <Outlet />
            </motion.main>
            <Footer />
        </div>
    );
}