import { TypeAnimation } from 'react-type-animation';

const Index = () => {
  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <nav className="portfolio-nav">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-text">MAHADEVAN B</span>
          </div>
          <div className="nav-links">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#education" className="nav-link">Education</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#certifications" className="nav-link">Certifications</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </div>
      </nav>

    {/* Hero Section */}
<section id="home" className="hero-section">
  <div className="particles-bg">
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>
  </div>

  <div className="hero-content">
    {/* Left: Photo */}
    <div className="hero-left">
      <div className="hero-photo">
        <img
          src="/assets/photo.jpg"
          alt="Mahadevan's photo"
          className="profile-image"
        />
      </div>
    </div>

    {/* Right: Text */}
    <div className="hero-right">
      <div className="hero-3d-icons">
        <div className="icon-3d icon-code"></div>
        <div className="icon-3d icon-design"></div>
        <div className="icon-3d icon-mobile"></div>
      </div>

      <h1 className="hero-title">
        <TypeAnimation
          sequence={[
            'Data Scientist', 2500,
            'Data Analyst', 2500,
            'ML Engineer', 2500,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="title-line"
        />
      </h1>

      <p className="hero-subtitle">
        Transforming data into impactful insights and intelligent systems. <br />
        Bridging analytics and machine learning to drive real-world innovation.
      </p>

      <div className="hero-buttons">
        <a href="#contact" className="cta-button primary">Contact Me</a>
        <a href="/assets/MAHADEVAN B.pdf" className="cta-button secondary" target="_blank" rel="noopener noreferrer">
          View Resume
        </a>
      </div>

      <div className="social-links">
        <a 
          href="https://www.linkedin.com/in/mahadevanbdatascientist/"
          className="social-link linkedin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <img
            src="/assets/linkedin.png"
            className="social-icon"
            width={20}
            height={20}
          />
        </a>
        <a 
          href="https://github.com/b-mahadevan"
          className="social-link github"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <img
            src="/assets/github.png"
            className="social-icon"
            width={20}
            height={20}
          />
        </a>
      </div>
    </div>
  </div>
</section>


      {/* About Section */}
      <section id="about" className="about-section">
        <div className="section-blur-bg"></div>
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p className="about-paragraph">
                I am a passionate Data Science graduate with a strong foundation in Statistics and hands-on experience in data analysis, machine learning, and AI. 
                I hold a B.Sc. in Statistics from Government Arts College, Coimbatore, where I developed a deep understanding of probability, statistical inference, and data modeling. 
                I further enhanced my skills by completing an M.Sc. in Data Science from Bharathiar University, where I worked extensively with Python, machine learning, deep learning, and data visualization tools such as Power BI and Matplotlib.
                I’ve also completed projects including an AI-powered waste classification system and a player recommendation engine for IPL 2024, both of which demonstrated my ability to apply data science to real-world challenges.
              </p>
              <p className="about-paragraph">
                I’m driven by curiosity and love turning raw data into meaningful insights. I’m currently seeking opportunities in Data Science, Machine Learning, or Data Analytics where I can contribute, learn, and grow. 
                Let’s connect if you’re looking for someone skilled in Python, data analytics, and AI-driven solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education-section">
        <div className="section-blur-bg"></div>
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-timeline">
            <div className="education-item">
              <div className="education-date">2023 - 2025</div>
              <div className="education-content">
                <h3 className="education-title">M.Sc. in Data Science</h3>
                <h4 className="education-institution">Bharathiar University, Coimbatore</h4>
                <p className="education-description">
                  This postgraduate program provided a strong foundation in both theoretical and applied aspects of data science.<br /><br />
                  <strong>Core Areas:</strong> Data Science, Statistics, Data Mining, Multivariate Data Analysis<br />
                  <strong>Foundational Skills:</strong> Python Programming, Probability and Statistics, DBMS, Matplotlib, Power BI<br />
                  <strong>Advanced Topics:</strong> Machine Learning, Deep Learning Techniques, Big Data Analytics<br /><br />
                  Throughout the program, I gained hands-on experience in building predictive models, performing statistical analysis, and working with large-scale datasets using modern tools and technologies like Python, SQL, TensorFlow, and more.
                </p>

                <div className="education-achievements">
                  <span className="achievement-tag">CGPA: 8.52/10.00</span>
                </div>
              </div>
            </div>
            
            <div className="education-item">
              <div className="education-date">2020 - 2023</div>
              <div className="education-content">
                <h3 className="education-title">B.Sc. in Statistics</h3>
                <h4 className="education-institution">Government of Arts College, Coimbatore</h4>
                <p className="education-description">
                  This undergraduate program provided a strong foundation in statistical theory and applied methods, with exposure to programming, analytics, and mathematical modeling.<br /><br />
                  <strong>Core Areas:</strong> Descriptive Statistics, Probability and Distributions, Time Series & Index Numbers, Statistical Inference, Design of Experiments, Basic Sampling Theory, Statistical Quality Control<br />
                  <strong>Applied Skills:</strong> Elements of Econometrics, Operations Research, Actuarial Science, Psychological Statistics, Demographic Methods<br />
                  <strong>Tools & Technologies:</strong> C Programming for Statistical Analysis, Numerical Analysis, Optimization Techniques, Office Automation<br /><br />
                  Completed practical labs and a final project with viva voce, demonstrating strong applied analytical skills.
                </p>

                <div className="education-achievements">
                  <span className="achievement-tag">CGPA: 8.83/10.00</span>
                </div>
              </div>
            </div>
            
            <div className="education-item">
              <div className="education-date">Mar 2020</div>
              <div className="education-content">
                <h3 className="education-title">12th Standard (HSC)</h3>
                <h4 className="education-institution">PACM Boys Higher Secondary School, Rajapalayam</h4>
                <p className="education-description">
                  Completed Higher Secondary (Class 12) with a focus on Mathematics, Physics, Chemistry and Biology under the Tamil Nadu State Board.
                </p>
                <div className="education-achievements">
                  <span className="achievement-tag">CGPA: 8.83/10.00</span>
                </div>
              </div>
            </div>

            <div className="education-item">
              <div className="education-date">Mar 2018</div>
              <div className="education-content">
                <h3 className="education-title">10th Standard (SSLC)</h3>
                <h4 className="education-institution">PACM Boys Higher Secondary School, Rajapalayam</h4>
                <p className="education-description">
                  Completed Secondary Schooling (Class 10) with core subjects including Tamil, English, Mathematics, Science, and Social Science under the Tamil Nadu State Board.
                </p>
                <div className="education-achievements">
                  <span className="achievement-tag">CGPA: 9.36/10.00</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <div className="section-blur-bg"></div>
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">Nov 2024 - Present</div>
              <div className="timeline-content">
                <h3 className="timeline-title"> Data Analyst Intern</h3>
                <h4 className="timeline-company">LETS UNBOUND (ONLINE EDUCATION PLATFORM)</h4>
                <p className="timeline-description">
                  During my internship, I automated data pipelines by scraping over 5,000 LinkedIn profiles using Apollo.io and Sales Navigator, significantly reducing lead generation time by 35%. 
                  I handled data cleansing for more than 10,000 records using Excel and Python, which improved the accuracy of university program datasets by 20%. 
                  Additionally, I developed scalable Python scripts to extract over 50,000 data points, cutting down manual work by 30% and streamlining data processing tasks.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-date">Nov 2023 - May 2025</div>
              <div className="timeline-content">
                <h3 className="timeline-title">Maths Content Associate</h3>
                <h4 className="timeline-company">LETS UNBOUND</h4>
                <p className="timeline-description">
                  As a Math Content Associate at Lets Unbound, I developed over 100 A-level mathematics presentations using Canva, which have been adopted by more than 500 students worldwide. 
                  I also designed mock assessments for competitive exams like Math Kangaroo and SCAT, contributing to a 25% improvement in student performance through well-structured practice and evaluation tools.
                </p>
              </div>
            </div>
            
      
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-card-inner">
                <div className="project-card-front">
                  <div className="project-image"></div>
                  <h3 className="project-title">IPL 2024 Best XI</h3>
                  <p className="project-description">IPL team selector using Python & Power BI</p>
                </div>
                <div className="project-card-back">
                  <div className="project-details">
                    <h3>IPL 2024 Best XI</h3>
                    <p>Developed a data-driven IPL 2024 Best XI selection tool using Python and Power BI by analyzing over 17,000 deliveries and 260+ player profiles from ESPNcricinfo.</p>
                    <div className="project-tech">
                      <span className="tech-tag">Microsoft Power BI</span>
                      <span className="tech-tag">Pandas</span>
                      <span className="tech-tag">Web Scraping</span>
                    </div>
                    <div className="project-links">
                      <a href="https://www.linkedin.com/posts/mahadevanbdatascientist_ipl2024-cricketanalytics-datascienceproject-activity-7332991575892910080-aZaY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFITlsoB-_Ii2IEvKj-UotTM8x0wyvK0MP8" className="project-link">View Demo</a>
                      <a href="https://github.com/b-mahadevan/ipl_2024_smart_xi_selector" className="project-link">GitHub</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-card-inner">
                <div className="project-card-front">
                  <div className="project-image project-image-2"></div>
                  <h3 className="project-title">Rubbish Resolver</h3>
                  <p className="project-description">AI waste classifier with TensorFlow & Django</p>
                </div>
                <div className="project-card-back">
                  <div className="project-details">
                    <h3>Rubbish Resolver</h3>
                    <p>AI-powered waste classification system using CNN and TensorFlow, deployed via Streamlit and Django with 80%+ test accuracy.</p>
                    <div className="project-tech">
                      <span className="tech-tag">Python</span>
                      <span className="tech-tag">Deep Learning</span>
                      <span className="tech-tag">Convolutional Neural Networks</span>
                      <span className="tech-tag">TensorFlow</span>
                      <span className="tech-tag">Django</span>
                      <span className="tech-tag">Streamlit</span>
                    </div>
                    <div className="project-links">
                      <a href="https://www.linkedin.com/posts/mahadevanbdatascientist_django-machinelearning-deeplearning-activity-7327929177960062976-pI1E?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFITlsoB-_Ii2IEvKj-UotTM8x0wyvK0MP8" className="project-link">View Demo</a>
                      <a href="https://github.com/b-mahadevan/rubbish-resolver" className="project-link">GitHub</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-card-inner">
                <div className="project-card-front">
                  <div className="project-image project-image-3"></div>
                  <h3 className="project-title">Visualizing Data with Python</h3>
                  <p className="project-description">Data visualization with Python, Matplotlib, Plotly</p>
                </div>
                <div className="project-card-back">
                  <div className="project-details">
                    <h3>Visualizing Data with Python</h3>
                    <p>Used Python, Matplotlib, and Plotly to create static and interactive visualizations for simulations, weather analysis, and global earthquake mapping, showcasing skills in data extraction and transformation.</p>
                    <div className="project-tech">
                      <span className="tech-tag">Python</span>
                      <span className="tech-tag">Matplotlib</span>
                      <span className="tech-tag">Plotly</span>
                    </div>
                    <div className="project-links">
                      <a href="https://www.linkedin.com/posts/mahadevanbdatascientist_python-datavisualization-plotly-activity-7332264338864431104-ZaHK?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFITlsoB-_Ii2IEvKj-UotTM8x0wyvK0MP8" className="project-link">View Demo</a>
                      <a href="https://github.com/b-mahadevan/visualizing_data_with_python" className="project-link">GitHub</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="section-blur-bg"></div>
        <div className="container">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="skills-container">
            <div className="skills-category">
              <h3 className="category-title">Programming Languages</h3>
              <div className="skills-grid">
                <div className="skill-card">
                  <div className="skill-icon skill-icon-95"></div>
                  <h4 className="skill-name">Python</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '95%'}}></div>
                  </div>
                  <span className="skill-percentage">95%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-80"></div>
                  <h4 className="skill-name">R</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '80%'}}></div>
                  </div>
                  <span className="skill-percentage">80%</span>
                </div>
              </div>
            </div>

            <div className="skills-category">
              <h3 className="category-title">Data Analysis & Manipulation</h3>
              <div className="skills-grid">
                <div className="skill-card">
                  <div className="skill-icon skill-icon-95"></div>
                  <h4 className="skill-name">Pandas</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '95%'}}></div>
                  </div>
                  <span className="skill-percentage">95%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-93"></div>
                  <h4 className="skill-name">NumPy</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '93%'}}></div>
                  </div>
                  <span className="skill-percentage">93%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-98"></div>
                  <h4 className="skill-name">Microsoft Excel</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '98%'}}></div>
                  </div>
                  <span className="skill-percentage">98%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-85"></div>
                  <h4 className="skill-name">SQL</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '85%'}}></div>
                  </div>
                  <span className="skill-percentage">85%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-90"></div>
                  <h4 className="skill-name">Data Cleaning</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '90%'}}></div>
                  </div>
                  <span className="skill-percentage">90%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-80"></div>
                  <h4 className="skill-name">Data Wrangling</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '80%'}}></div>
                  </div>
                  <span className="skill-percentage">80%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-90"></div>
                  <h4 className="skill-name">Exploratory Data Analysis (EDA)</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '90%'}}></div>
                  </div>
                  <span className="skill-percentage">90%</span>
                </div>
              </div>
            </div>

            <div className="skills-category">
              <h3 className="category-title">Machine Learning & AI</h3>
              <div className="skills-grid">
                <div className="skill-card">
                  <div className="skill-icon skill-icon-85"></div>
                  <h4 className="skill-name">Scikit-learn</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '85%'}}></div>
                  </div>
                  <span className="skill-percentage">85%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-85"></div>
                  <h4 className="skill-name">TensorFlow</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '85%'}}></div>
                  </div>
                  <span className="skill-percentage">85%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-75"></div>
                  <h4 className="skill-name">Keras</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '75%'}}></div>
                  </div>
                  <span className="skill-percentage">75%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-75"></div>
                  <h4 className="skill-name">PyTorch</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '75%'}}></div>
                  </div>
                  <span className="skill-percentage">75%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-93"></div>
                  <h4 className="skill-name">Convolutional Neural Networks (CNNs)</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '93%'}}></div>
                  </div>
                  <span className="skill-percentage">93%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-93"></div>
                  <h4 className="skill-name">Deep Learning</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '93%'}}></div>
                  </div>
                  <span className="skill-percentage">93%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-93"></div>
                  <h4 className="skill-name">Model Evaluation</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '93%'}}></div>
                  </div>
                  <span className="skill-percentage">93%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-90"></div>
                  <h4 className="skill-name">Model Deployment</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '90%'}}></div>
                  </div>
                  <span className="skill-percentage">90%</span>
                </div>
              </div>
            </div>

            <div className="skills-category">
              <h3 className="category-title">Data Visualization</h3>
              <div className="skills-grid">
                <div className="skill-card">
                  <div className="skill-icon skill-icon-95"></div>
                  <h4 className="skill-name">Matplotlib</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '95%'}}></div>
                  </div>
                  <span className="skill-percentage">95%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-80"></div>
                  <h4 className="skill-name">Seaborn</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '80%'}}></div>
                  </div>
                  <span className="skill-percentage">80%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-90"></div>
                  <h4 className="skill-name">Plotly</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '90%'}}></div>
                  </div>
                  <span className="skill-percentage">90%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-95"></div>
                  <h4 className="skill-name">Power BI</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '95%'}}></div>
                  </div>
                  <span className="skill-percentage">95%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-75"></div>
                  <h4 className="skill-name">Tableau</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '75%'}}></div>
                  </div>
                  <span className="skill-percentage">75%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-98"></div>
                  <h4 className="skill-name">Canva</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '98%'}}></div>
                  </div>
                  <span className="skill-percentage">98%</span>
                </div>
              </div>
            </div>

            <div className="skills-category">
              <h3 className="category-title">Web & App Development</h3>
              <div className="skills-grid">
                <div className="skill-card">
                  <div className="skill-icon skill-icon-93"></div>
                  <h4 className="skill-name">Django</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '93%'}}></div>
                  </div>
                  <span className="skill-percentage">93%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-93"></div>
                  <h4 className="skill-name">Streamlit</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '93%'}}></div>
                  </div>
                  <span className="skill-percentage">93%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-85"></div>
                  <h4 className="skill-name">Web Scraping (BeautifulSoup, Selenium)</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '85%'}}></div>
                  </div>
                  <span className="skill-percentage">85%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-75"></div>
                  <h4 className="skill-name">REST APIs</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '75%'}}></div>
                  </div>
                  <span className="skill-percentage">75%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-75"></div>
                  <h4 className="skill-name">HTML/CSS (basic)</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '75%'}}></div>
                  </div>
                  <span className="skill-percentage">75%</span>
                </div>
              </div>
            </div>

            

            <div className="skills-category">
              <h3 className="category-title">Statistics & Math Libraries</h3>
              <div className="skills-grid">
                <div className="skill-card">
                  <div className="skill-icon skill-icon-85"></div>
                  <h4 className="skill-name">SciPy</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '85%'}}></div>
                  </div>
                  <span className="skill-percentage">85%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-80"></div>
                  <h4 className="skill-name">StatsModels</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '80%'}}></div>
                  </div>
                  <span className="skill-percentage">80%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-98"></div>
                  <h4 className="skill-name">Probability & Distributions</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '98%'}}></div>
                  </div>
                  <span className="skill-percentage">98%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-95"></div>
                  <h4 className="skill-name">Hypothesis Testing</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '95%'}}></div>
                  </div>
                  <span className="skill-percentage">95%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-98"></div>
                  <h4 className="skill-name">Regression Analysis</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '98%'}}></div>
                  </div>
                  <span className="skill-percentage">98%</span>
                </div>
              </div>
            </div>

            <div className="skills-category">
              <h3 className="category-title">Cloud & Dev Tools</h3>
              <div className="skills-grid">
                <div className="skill-card">
                  <div className="skill-icon skill-icon-85"></div>
                  <h4 className="skill-name">Google Cloud Platform (GCP)</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '85%'}}></div>
                  </div>
                  <span className="skill-percentage">85%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-90"></div>
                  <h4 className="skill-name">Git</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '90%'}}></div>
                  </div>
                  <span className="skill-percentage">90%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-90"></div>
                  <h4 className="skill-name">GitHub</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '90%'}}></div>
                  </div>
                  <span className="skill-percentage">90%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-90"></div>
                  <h4 className="skill-name">Jupyter Notebook</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '90%'}}></div>
                  </div>
                  <span className="skill-percentage">90%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-93"></div>
                  <h4 className="skill-name"> Google Colab</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '93%'}}></div>
                  </div>
                  <span className="skill-percentage">93%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-98"></div>
                  <h4 className="skill-name">VS Code</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '98%'}}></div>
                  </div>
                  <span className="skill-percentage">98%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-75"></div>
                  <h4 className="skill-name">Firebase CLI</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '75%'}}></div>
                  </div>
                  <span className="skill-percentage">75%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-75"></div>
                  <h4 className="skill-name">npm</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{width: '75%'}}></div>
                  </div>
                  <span className="skill-percentage">75%</span>
                </div>
              </div>
            </div>

            
          </div>
        </div>
        
      </section>
      
      {/* Certificates Section */}
<section id="certifications" className="certifications-section">
  <div className="section-blur-bg"></div>
  <div className="container">
    <h2 className="section-title">Certifications</h2>
    <div className="certificates-grid">
      <div className="certificate-card">
        <h4 className="certificate-title">Python Course - Updated [2025]</h4>
        <p className="certificate-org">GeeksforGeeks</p>
        <p className="certificate-date">May 2025</p>
        <a
          href="https://media.geeksforgeeks.org/courses/certificates/e0ceb1224df3d6a6492e2e1efa2ef073.pdf"
          target="_blank"
          className="view-certificate"
        >
          View Certificate
        </a>
      </div>

      <div className="certificate-card">
        <h4 className="certificate-title">Git for Beginners</h4>
        <p className="certificate-org">Udemy</p>
        <p className="certificate-date">May 2025</p>
        <a
          href="https://www.udemy.com/certificate/UC-2f6ce925-0f6b-4dd5-8e1e-ddc868b07980/"
          target="_blank"
          className="view-certificate"
        >
          View Certificate
        </a>
      </div>

      <div className="certificate-card">
        <h4 className="certificate-title">Google Cloud Computing Foundations</h4>
        <p className="certificate-org">NPTEL</p>
        <p className="certificate-date">Oct 2024</p>
        <p className="credential-id">NPTEL24CS131S552400116</p>
        <a
          href="https://nptel.ac.in/noc/E_Certificate/NPTEL24CS131S55240011603994609"
          target="_blank"
          className="view-certificate"
        >
          View Certificate
        </a>
      </div>

      <div className="certificate-card">
        <h4 className="certificate-title">Data Analytics with Python</h4>
        <p className="certificate-org">NPTEL</p>
        <p className="certificate-date">Apr 2024</p>
        <p className="credential-id">NPTEL24CS20S970100116</p>
        <a
          href="https://nptel.ac.in/noc/E_Certificate/NPTEL24CS20S97010011630461262"
          target="_blank"
          className="view-certificate"
        >
          View Certificate
        </a>
      </div>

      <div className="certificate-card">
        <h4 className="certificate-title">Senior Grade Typewriting English</h4>
        <p className="certificate-org">Government of Tamil Nadu Department of Technical Education Chennai</p>
        <p className="certificate-date">Feb 2023</p>
        <p className="credential-id">GTE 1177972</p>
      </div>

      <div className="certificate-card">
        <h4 className="certificate-title">Junior Grade Typewriting English</h4>
        <p className="certificate-org">Government of Tamil Nadu Department of Technical Education Chennai</p>
        <p className="certificate-date">Aug 2022</p>
        <p className="credential-id">GTE 1145849</p>
      </div>

      
    </div>
  </div>
</section>



      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3 className="contact-subtitle">Let's work together</h3>
              <p className="contact-text">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <span>mahadevanb2002@gmail.com</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <span>+91 7339658543</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>Chennai, Tamil Nadu</span>
                </div>
              </div>
            </div>
            <form
              className="contact-form"
              action="https://formspree.io/f/xblyddzg"
              method="POST"
            >
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" className="form-input" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Your Email" className="form-input" required />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Your Message" className="form-textarea" rows={5} required></textarea>
              </div>
                <button type="submit" className="form-submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
