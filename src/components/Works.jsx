import photo from '../assets/photo.jpg';

export default function Profile() {
    return (
        <div className="works">
          <div className="work">
            <img src={photo} alt="Profile Picture" />
            <div>
              <p><strong>Date:</strong> october 2026</p>
              <p><strong>Title:</strong> Currency converter app</p>
              <p><strong>Type:</strong> Personal project</p>
              <p><strong>Description:</strong> Creating currency converter app with react</p>
              <p><strong><a href="https://robit-curren.netlify.app/" target="_blank">demo</a></strong></p>
              <p><strong><a href="https://github.com/robitmuzaki/currency" target="_blank">source code</a></strong></p>
            </div>
          </div>
          <div className="work">
            <img src={photo} alt="Profile Picture" />
            <div>
              <p><strong>Date:</strong> october 2026</p>
              <p><strong>Title:</strong> English Dictioanary app</p>
              <p><strong>Type:</strong> Personal project</p>
              <p><strong>Description:</strong> Creating English Dictioanary app with react</p>
              <p><strong><a href="https://robit-my-dictionary.netlify.app/" target="_blank">demo</a></strong></p>
              <p><strong><a href="https://github.com/robitmuzaki/my-dictionary" target="_blank">source code</a></strong></p>
            </div>
          </div>
          <div className="work">
            <img src={photo} alt="Profile Picture" />
            <div>
              <p><strong>Date:</strong> 2014 - present</p>
              <p><strong>Title:</strong> Freelance web developer</p>
              <p><strong>Type:</strong> Client project</p>
              <p><strong>Description:</strong> Building and fixing dozens of wordpress website</p>
            </div>
          </div>
        </div>
    );
}