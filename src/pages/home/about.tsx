function About(){
    return(
        <div className = "view" id = "view-about">
            <div className="hero">
                <div className="hero-eyebrow" style={{ marginBottom: '12px' }}>// ABOUT</div>
                <div className="hero-name">WHO <span>AM I?</span></div>
                <div className="hero-title">INDIE DEVELOPER & DESIGNER</div>
                <div className="hero-bio">
                    I'm Dale, I currently work as an outdoor instructor in New Zealand, and I've been making games in my spare time.
                    And I am currently working on a project called <a href="/games/the-pilgrims-journey">The Pilgrim's Journey</a>, an adventure game where you are the bullet hell protagonist.
                    as well as a slew of prototypes and other projects. I have a passion for engaging mechanics and giving players enjoyable experiences.
                    I'm looking for opportunities to collaborate on projects, and I'm looking to work in game development, design, or related fields. If you're interested in working together, feel free to reach out!
                </div>
            </div>

            <div className="section-title">TECH STACK</div>
            <div className="tag-row" style={{ marginBottom: '32px' }}>
                <span className="tag primary">C#</span>
                <span className="tag primary">Unity</span>
                <span className="tag primary">Git</span>
                <span className="tag primary">ShaderGraph</span>
                <span className="tag">Python</span>
                <span className="tag">Accredo</span>
                <span className="tag">Max Basic</span>
            </div>

            <div className="section-title">AREAS OF INTEREST</div>
            <div className="tag-row">
                <span className="tag primary">Procedural Generation</span>
                <span className="tag primary">Game Feel</span>
                <span className="tag primary">Systems Design</span>
                <span className="tag">Narrative Design</span>
                <span className="tag">AI / Pathfinding</span>
                <span className="tag">Shader Programming</span>
                <span className="tag">Game Jams</span>
            </div>

            <div className="section-title">CURRENTLY LEARNING</div>
            <div className="tag-row">
                <span className="tag">React</span>
                <span className="tag">TypeScript</span>
            </div>
        </div>
    );
}

export default About;