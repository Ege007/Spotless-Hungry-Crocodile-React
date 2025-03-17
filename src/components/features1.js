import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './features1.css'

const Features1 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features1-container2 thq-section-max-width">
        <div className="features1-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features1-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features1-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features1-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
        <div className="features1-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features1-tab-horizontal1"
          >
            <div className="features1-divider-container1">
              {activeTab === 0 && <div className="features1-container3"></div>}
            </div>
            <div className="features1-content1">
              <h2 className="thq-heading-2">{props.feature1Title}</h2>
              <span className="thq-body-small">
                {props.feature1Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features1-tab-horizontal2"
          >
            <div className="features1-divider-container2">
              {activeTab === 1 && <div className="features1-container4"></div>}
            </div>
            <div className="features1-content2">
              <h2 className="thq-heading-2">{props.feature2Title}</h2>
              <span className="thq-body-small">
                {props.feature2Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features1-tab-horizontal3"
          >
            <div className="features1-divider-container3">
              {activeTab === 2 && <div className="features1-container5"></div>}
            </div>
            <div className="features1-content3">
              <h2 className="thq-heading-2">{props.feature3Title}</h2>
              <span className="thq-body-small">
                {props.feature3Description}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features1.defaultProps = {
  feature2ImgAlt: 'Navigation Bar Example',
  feature1Title: 'Hosting & Accessibility',
  feature2Title: 'Navigation & Sections',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1512138664757-360e0aad5132?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MjIyNDg1Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MjIyNDg1MXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3ImgAlt: 'Project Explanation Image',
  feature3Description:
    'This section should contain a detailed explanation of the project, including its purpose, technologies used, key functionalities, and visuals.',
  feature1Description:
    'The website should be deployable on GitHub Pages and provide a clear link to its repository for public access.',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1504270997636-07ddfbd48945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MjIyNDg1MXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Description:
    'Implement a simple navigation bar at the top with links to different sections on the page.',
  feature3Title: 'About Section',
  feature1ImgAlt: 'GitHub Pages Logo',
}

Features1.propTypes = {
  feature2ImgAlt: PropTypes.string,
  feature1Title: PropTypes.string,
  feature2Title: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature3Description: PropTypes.string,
  feature1Description: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature2Description: PropTypes.string,
  feature3Title: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
}

export default Features1
