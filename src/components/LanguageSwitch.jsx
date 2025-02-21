import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function LanguageSwitch() {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'zh' ? 'en' : 'zh';
        i18n.changeLanguage(newLang);
        localStorage.setItem('language', newLang); // 保存语言设置
    };

    return (
        <motion.button
            onClick={toggleLanguage}
            className="px-3 py-1 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {i18n.language === 'zh' ? 'EN' : '中文'}
        </motion.button>
    );
}