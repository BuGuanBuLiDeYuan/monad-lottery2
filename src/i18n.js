import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    zh: {
        translation: {
            'welcome': '欢迎来到 Monad Lottery',
            'welcome.subtitle': '创新的区块链彩票平台',
            'nav.home': '首页',
            'nav.product': '产品介绍',
            'nav.rewards': '奖励机制',
            'nav.roadmap': '路线图',
            'nav.about': '关于我们',
            'nav.start': '立即体验',
            'hero.title': 'Monad 上的创新哈希彩票',
            'hero.subtitle': '零门槛参与，交易即可抽奖。通过智能合约实现完全透明的抽奖机制。',
            'hero.start': '开始体验',
            'hero.learnMore': '了解更多'
        }
    },
    en: {
        translation: {
            'welcome': 'Welcome to Monad Lottery',
            'welcome.subtitle': 'Innovative Blockchain Lottery Platform',
            'nav.home': 'Home',
            'nav.product': 'Product',
            'nav.rewards': 'Rewards',
            'nav.roadmap': 'Roadmap',
            'nav.about': 'About',
            'nav.start': 'Get Started',
            'hero.title': 'Innovative Hash Lottery on Monad',
            'hero.subtitle': 'Participate with zero barriers, draw with every transaction. Fully transparent lottery mechanism through smart contracts.',
            'hero.start': 'Get Started',
            'hero.learnMore': 'Learn More'
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: localStorage.getItem('language') || 'zh',
        fallbackLng: 'en',
        debug: true,
        interpolation: {
            escapeValue: false,
        }
    });

export default i18n;