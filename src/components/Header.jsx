import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitch from './LanguageSwitch';

export default function Header() {
    const { t } = useTranslation();

    return (
        <header className="bg-white shadow">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="flex items-center space-x-2">
                            <svg className="h-8 w-8 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-xl font-bold">Monad Lottery</span>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="text-gray-700 hover:text-indigo-600">
                            {t('nav.home')}
                        </Link>
                        <Link to="/product" className="text-gray-700 hover:text-indigo-600">
                            {t('nav.product')}
                        </Link>
                        <Link to="/rewards" className="text-gray-700 hover:text-indigo-600">
                            {t('nav.rewards')}
                        </Link>
                        <Link to="/roadmap" className="text-gray-700 hover:text-indigo-600">
                            {t('nav.roadmap')}
                        </Link>
                        <Link to="/about" className="text-gray-700 hover:text-indigo-600">
                            {t('nav.about')}
                        </Link>
                        <LanguageSwitch />
                        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                            {t('nav.start')}
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
}