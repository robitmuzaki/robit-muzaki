import dictionary from '../assets/dictionary.png';
import currency from '../assets/currency.png';
import wordpress from '../assets/wordpress.png';

export default function Profile() {
    return (
        <div className="works">
          <div className="work">
            <img src={currency} alt="Currency App Picture" />
            <div>
              <p><strong>Date:</strong> october 2026</p>
              <p><strong>Title:</strong> Currency converter app</p>
              <p><strong>Type:</strong> Personal project</p>
              <p><strong>Description:</strong> Creating currency converter app with react</p>
              <p><strong>Demo:</strong> <a href="https://robit-curren.netlify.app/" target="_blank" rel="noopener noreferrer">Click here</a></p>
              <p><strong>Source Code:</strong> <a href="https://github.com/robitmuzaki/currency" target="_blank" rel="noopener noreferrer">Click here</a></p>
            </div>
          </div>
          <div className="work">
            <img src={dictionary} alt="Dictionary App Picture" />
            <div>
              <p><strong>Date:</strong> october 2026</p>
              <p><strong>Title:</strong> English Dictioanary app</p>
              <p><strong>Type:</strong> Personal project</p>
              <p><strong>Description:</strong> Creating English Dictioanary app with react</p>
              <p><strong>Demo:</strong> <a href="https://robit-my-dictionary.netlify.app/" target="_blank" rel="noopener noreferrer">Click here</a></p>
              <p><strong>Source Code:</strong> <a href="https://github.com/robitmuzaki/my-dictionary" target="_blank" rel="noopener noreferrer">Click here</a></p>
            </div>
          </div>
          <div className="work">
            <img src={wordpress} alt="Wordpress Picture" />
            <div>
              <p><strong>Date:</strong> 2014 - present</p>
              <p><strong>Title:</strong> Freelance web developer</p>
              <p><strong>Type:</strong> Client project</p>
              <p><strong>Description:</strong> Building and fixing dozens of wordpress website</p>
              <p><strong>Upwrok Profile:</strong> <a href="https://www.upwork.com/freelancers/~01a3074bee7c8dc601" target="_blank" rel="noopener noreferrer">Click here</a></p>
            </div>
          </div>
        </div>
    );
}