import React from 'react';
import { Route, Routes, BrowserRouter as Router, useParams } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import SuccessPage from './pages/SuccessPage';
import ProductLandingPage from './components/ProductLandingPage';

function ProductLandingPageWrapper() {
    const { slug } = useParams();
    return <ProductLandingPage slug={slug} />;
}

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/success" element={<SuccessPage />} />
                <Route path="/products/:slug" element={<ProductLandingPageWrapper />} />
            </Routes>
        </Router>
    );
}

export default App;
