const AboutPage = () => {
    return (
        <main>
        <section id="About-Me" class="main-info">
            <h2>About Me</h2>
            <p>
            Hello my name is Alex. 
            <br />
            I am a Front End Web Developer.
            <br />
            I finished a Full Stack Coding Bootcamp through SMU and with the skills and technologies that i have
            learned I can say I am fully confident in my skills to become a Front End Developer.
            <br />
            </p>
            <div className='technologies'>
                <p>Here are a few technologies I've been working with:</p>
            <div className='single-technology'>
              <p>HTML</p>
            </div>
            <div className='single-technology'>
              <p>CSS</p>
            </div>
            <div className='single-technology'>
              <p>JavaScript</p>
            </div>
            <div className='single-technology'>
              <p>React</p>
            </div>
            <div className='single-technology'>
              <p>MySQL</p>
            </div>
            <div className='single-technology'>
              <p>Node.js</p>
            </div>
            <div className='single-technology'>
              <p>HandleBars</p>
            </div>
          </div>
        </section>
        </main>

    );
};

export default AboutPage;