import React from 'react'

import PropTypes from 'prop-types'

import './testimonial.css'

const Testimonial = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial-max-width thq-section-max-width">
        <div className="testimonial-container10">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="testimonial-text11 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card1">
                <div className="testimonial-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial-image1"
                  />
                  <div className="testimonial-container13">
                    <strong className="thq-body-large">
                      {props.author1Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text14 thq-body-small">
                  {props.review1}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card2">
                <div className="testimonial-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial-image2"
                  />
                  <div className="testimonial-container15">
                    <strong className="thq-body-large">
                      {props.author2Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text17 thq-body-small">
                  {props.review2}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card3">
                <div className="testimonial-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial-image3"
                  />
                  <div className="testimonial-container17">
                    <strong className="thq-body-large">
                      {props.author3Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text20 thq-body-small">
                  {props.review3}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card4">
                <div className="testimonial-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial-image4"
                  />
                  <div className="testimonial-container19">
                    <strong className="thq-body-large">
                      {props.author4Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text23 thq-body-small">
                  {props.review4}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial.defaultProps = {
  author3Name: 'David Johnson',
  author4Src:
    'https://images.unsplash.com/photo-1527525443983-6e60c75fff46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MjIyNDg1MXw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Name: 'Sarah Lee',
  author2Name: 'Jane Smith',
  author3Position: 'Founder, Startup XYZ',
  review1:
    'Working with this team was a game-changer for our project. Their expertise and dedication are unmatched.',
  review2:
    'I highly recommend their services. The quality of work delivered exceeded our expectations.',
  author3Alt: 'David Johnson - Founder, Startup XYZ',
  heading1: 'Testimonials',
  content1:
    'Read what our clients have to say about their experience working with us.',
  author1Name: 'John Doe',
  author2Position: 'CTO, Tech Solutions Inc.',
  author4Position: 'Head of Marketing, Global Corp',
  author2Alt: 'Jane Smith - CTO, Tech Solutions Inc.',
  author2Src:
    'https://images.unsplash.com/photo-1593507526070-c48458a74909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MjIyNDg1MXw&ixlib=rb-4.0.3&q=80&w=1080',
  review3:
    'Exceptional professionalism and timely delivery. Will definitely collaborate with them again in the future.',
  author1Position: 'CEO, Company ABC',
  author1Alt: 'John Doe - CEO, Company ABC',
  author4Alt: 'Sarah Lee - Head of Marketing, Global Corp',
  author3Src:
    'https://images.unsplash.com/photo-1587677171791-8b93c752999b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MjIyNDg1MXw&ixlib=rb-4.0.3&q=80&w=1080',
  review4:
    'Their attention to detail and creative solutions added tremendous value to our project.',
  author1Src:
    'https://images.unsplash.com/photo-1632922267756-9b71242b1592?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MjIyNDg1MHw&ixlib=rb-4.0.3&q=80&w=1080',
}

Testimonial.propTypes = {
  author3Name: PropTypes.string,
  author4Src: PropTypes.string,
  author4Name: PropTypes.string,
  author2Name: PropTypes.string,
  author3Position: PropTypes.string,
  review1: PropTypes.string,
  review2: PropTypes.string,
  author3Alt: PropTypes.string,
  heading1: PropTypes.string,
  content1: PropTypes.string,
  author1Name: PropTypes.string,
  author2Position: PropTypes.string,
  author4Position: PropTypes.string,
  author2Alt: PropTypes.string,
  author2Src: PropTypes.string,
  review3: PropTypes.string,
  author1Position: PropTypes.string,
  author1Alt: PropTypes.string,
  author4Alt: PropTypes.string,
  author3Src: PropTypes.string,
  review4: PropTypes.string,
  author1Src: PropTypes.string,
}

export default Testimonial
