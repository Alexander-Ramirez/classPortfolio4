const Project = () => {
    return (
        <main>

        <section id="Projects" class="main-info">
            <h2>Projects</h2>
            <h3>International Travel Helper</h3>
          <p className='section-text'>
          This website assists new and frequent travellers in finding the best places to travel internationally. 
          It will show you areas where someone may not have originally thought of as a great place to travel.
          </p>
          <div className='technologies'>
            <p>HandleBars</p>
            <p>MySQL</p>
            <p>Node.js</p>
            <p>Express</p>
            <p>Sequelize</p>
          </div>
          <div className='project-social'>
            <a href='https://github.com/Alexander-Ramirez/WishTravelP2' target="_blank" rel="noopener noreferrer">
              GitHub Repo
            </a>
            <a href='https://desolate-bastion-60870.herokuapp.com/' target="_blank" rel="noopener noreferrer">
              Deployment Link
            </a>
          </div>        
        </section>
        <section id="Projects" class="main-info">
        <h3>ReadME Generator</h3>
          <p className='section-text'>
          This project allows users to set up a simple ReadME.md file to upload to GitHub
          </p>
          <div className='technologies'>
            <p>JavaScript</p>
          </div>
          <div className='project-social'>
            <a href='https://github.com/Alexander-Ramirez/ReadMeGeneratorHW' target="_blank" rel="noopener noreferrer">
              GitHub Repo
            </a>
          </div>     
          <h3>Tech Blog</h3>
          <p className='section-text'>
          This project allows users the ability to make a blog and be able to post important info about tech
          </p>
          <div className='technologies'>
            <p>Handlebars</p>
            <p>CSS</p>
            <p>JavaScript</p>
          </div>
          <div className='project-social'>
            <a href='https://github.com/Alexander-Ramirez/techBlogHW' target="_blank" rel="noopener noreferrer">
              GitHub Repo
            </a>
            <a href='https://intense-dusk-22332.herokuapp.com/' target="_blank" rel="noopener noreferrer">
              Deployment Link
            </a>
          </div> 
        </section>
        </main>

    );
};

export default Project;