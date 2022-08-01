import React from 'react';
import { BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/nicodev06">
        <BsGithub />
      </a>
    </div>
    <div>
      <a href="https://instagram.com/nyco_tina">
        <BsInstagram />
      </a>
    </div>
    <div>
      <a href="https://twitter.com/TeseoNicolo">
        <BsTwitter />
      </a>
    </div>
  </div>
);

export default SocialMedia;
