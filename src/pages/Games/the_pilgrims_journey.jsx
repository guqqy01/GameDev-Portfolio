import { useState } from 'react';
import Topbar from '../../components/Topbar';
import LeftSidebar from '../../components/portfolioleftsidebar';
function PilgrimsJourney()
{
    const [currentTab, setCurrentTab] = useState('');
    const tabs = [];

    return (
        <div>
            <Topbar 
                returnTo = {() => window.history.back()}
                logo="◆ Dale Gush.dev" 
                tabs={tabs} 
                rightBar="OPEN TO WORK" 
                onSwitchTab={setCurrentTab} 
                currentTab={currentTab} 
            />

            <div className = "layout2">
                <LeftSidebar onFilter={() => {}} currentFilter="" sideBarSections={[]} />
                <div className="view" id="view-pilgrims-journey">
                    <div className="hero">
                        <div className="hero-eyebrow">// THE PILGRIM'S JOURNEY</div>
                        <div className="hero-name">THE PILGRIM'S JOURNEY</div>
                        <div className="hero-title">AN ADVENTURE BULLET HELL GAME</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PilgrimsJourney;