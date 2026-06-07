import { useState } from 'react';
import Topbar from './components/Topbar';
import PortfolioLeftSidebar from './components/portfolioleftsidebar';
import Portfolio from './pages/home/portfolio';
import About from './pages/home/about';
function App() {
    const [currentTab, setCurrentTab] = useState('contact');
    const [activeFilter, setActiveFilter] = useState('all');

    return (
        <div>
            <Topbar 
              onSwitchTab={(tab) => { setCurrentTab(tab); setActiveFilter('all'); }} 
              currentTab={currentTab} 
            />

            <div className="main">
                {currentTab === 'portfolio' && <Portfolio filter={activeFilter} />}
                {currentTab === 'about'     && <About />}
                {currentTab === 'contact'   && <div style={{padding: '32px'}}>Contact content</div>}
            </div>

        </div>
    );
}

export default App;