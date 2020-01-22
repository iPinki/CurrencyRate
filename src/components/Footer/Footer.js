import React from 'react';
import './Footer.css';

class Footer extends React.Component {

  render() {
    return (
      <footer id="footer" className="footer">
        <div className="footer-bottom">
          <div className="container">
            <div className="flex-container">
              <div className="flex-item">
                <h1 className="footer-title">2020 &copy; React. Currency Rate</h1>
                <p>All Rights Reserved</p>
              </div>
              <div className="flex-item">
                <div className="module-body">
                  <ul className="list-unstyled">
                    <li><a href="/sitemap/" tooltip="Site Map">Site Map</a></li>
                    <li><a href="/sitemaps.xml" target="_blank" tooltip="Google Sitemap">Google Sitemap</a></li>
                  </ul>
                </div>
              </div>
              <div className="flex-item">
                <div className="module-body">
                  <ul className="list-unstyled">
                    <li><a href="/contact/" tooltip="Contacts">Contacts</a></li>
                    <li><a href="/d">Guarantees</a></li>
                    <li><a href="/s">About Service</a></li>
                    <li><a href="/o">Return Conditions</a></li>
                    <li><a href="/p">Service Agreement</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-bar">
          <div className="flex-container">
            <div className="flex-item">
              <ul className="link">

              </ul>
            </div>
            <div className="flex-item">
              <div className="clearfix">
                <ul><img src="" alt="" data-toggle="tooltip" data-placement="top"
                         data-original-title="www.webmoney.ru"/>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
