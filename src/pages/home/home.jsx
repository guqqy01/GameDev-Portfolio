import { useState } from 'react';
import Topbar from '../../components/Topbar';
import Portfolio from './portfolio';
import About from './about';
import Contact from './contact';

function Home(){
    const [currentTab, setCurrentTab] = useState('portfolio');
    const tabs = [
        { key: 'portfolio', label: 'PORTFOLIO' },
        { key: 'about', label: 'ABOUT' },
        { key: 'contact', label: 'CONTACT' },
    ];
    return (
        <div>
            <Topbar 
              logo="◆ Dale Gush.dev"
              tabs={tabs}
              rightBar="OPEN TO WORK"
              onSwitchTab={(tab) => { setCurrentTab(tab); }} 
              currentTab={currentTab} 
            />

            <div className="main">
                {currentTab === 'portfolio' && <Portfolio />}
                {currentTab === 'about'     && <About />}
                {currentTab === 'contact'   && <Contact />}
            </div>

        </div>
    );
}

export default Home;