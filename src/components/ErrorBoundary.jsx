import React from 'react';
import { Link } from 'react-router-dom';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error('Error:', error);
        console.error('Error Info:', errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center px-4">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-red-600">出错了</h1>
                        <p className="mt-4 text-xl text-gray-600">抱歉，页面加载出现错误</p>
                        <Link
                            to="/"
                            className="mt-8 inline-block px-6 py-3 rounded-md bg-indigo-600 text-white hover:bg-indigo-700"
                            onClick={() => this.setState({ hasError: false })}
                        >
                            返回首页
                        </Link>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;