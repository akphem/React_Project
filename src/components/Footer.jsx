
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">
        <div>
          <h5 className="font-bold">MORENT</h5>
          <p>Our vision is to provide convenience and help increase your sales business.</p>
        </div>
        <div>
          <h5 className="font-bold">About</h5>
          <ul>
            <li>How it works</li>
            <li>Featured</li>
            <li>Partnership</li>
            <li>Business Relation</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold">Community</h5>
          <ul>
            <li>Events</li>
            <li>Blog</li>
            <li>Podcast</li>
            <li>Invite a friend</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold">Socials</h5>
          <ul>
            <li>Discord</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Facebook</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>&copy;2022 MORENT. All rights reserved</p>
        <p>
          <a href="#" className="text-blue-400">Privacy & Policy</a> | <a href="#" className="text-blue-400">Terms & Condition</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
