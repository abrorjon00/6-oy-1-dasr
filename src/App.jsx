import './App.css'


function App() {
    return (
        <div>
            <header>
                <div className="container">
                    <div className="logo">myteam</div>
                    <nav>
                        <a href="#">home</a>
                        <a href="#">about</a>
                    </nav>
                    <button className="contact-btn">contact us</button>
                </div>
            </header>

            <section className="hero">
                <div className="container">
                    <h1>Find the <br /> <span>best talent</span></h1>
                    <p>Finding the right people and building high <br /> performing teams can be hard. Most companies <br /> aren’t tapping into the abundance of global talent. <br /> We’re about to change that.</p>
                </div>
            </section>

            <section className="features">
                <div className="container">
                    <h2>Build & manage <br /> distributed teams <br /> like no one else.</h2>
                    <div className="feature-list">
                        <div className="feature-item">
                            <h3>Experienced Individuals</h3>
                            <p>Our network is made up of highly experienced professionals <br /> who are passionate about what they do.</p>
                        </div>
                        <div className="feature-item">
                            <h3>Easy to Implement</h3>
                            <p>Our processes have been refined over years of implementation <br /> meaning our teams always deliver.</p>
                        </div>
                        <div className="feature-item">
                            <h3>Enhanced Productivity</h3>
                            <p>Our customized platform with in-built analytics helps you <br /> manage your distributed teams.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default App;
