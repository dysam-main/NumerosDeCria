import React from 'react'

import PropTypes from 'prop-types'

import './testimonial.css'

const Testimonial = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial-max-width thq-section-max-width">
        <div className="testimonial-container">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="testimonial-text01 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card">
                <div className="testimonial-container02">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial-image"
                  />
                  <div className="testimonial-container03">
                    <strong className="thq-body-large">
                      {props.author1Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text04 thq-body-small">
                  {props.review1}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card1">
                <div className="testimonial-container04">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial-image1"
                  />
                  <div className="testimonial-container05">
                    <strong className="thq-body-large">
                      {props.author2Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text07 thq-body-small">
                  {props.review2}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card2">
                <div className="testimonial-container06">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial-image2"
                  />
                  <div className="testimonial-container07">
                    <strong className="thq-body-large">
                      {props.author3Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text10 thq-body-small">
                  {props.review3}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card3">
                <div className="testimonial-container08">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial-image3"
                  />
                  <div className="testimonial-container09">
                    <strong className="thq-body-large">
                      {props.author4Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text13 thq-body-small">
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
  author3Src:
    'https://images.unsplash.com/photo-1624561261145-351e786934b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTYwMDQwMHw&ixlib=rb-4.0.3&q=80&w=1080',
  review3:
    'As a livestock consultant, I often recommend the resources on this site to my clients. The worksheets are user-friendly and provide valuable insights.',
  author2Name: 'Jane Doe',
  author2Alt: 'Image of Jane Doe',
  author2Position: 'Ranch Owner',
  author2Src:
    'https://images.unsplash.com/photo-1482849297070-f4fae2173efe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTYwMDM5OXw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Name: 'Sarah Williams',
  review1:
    'The worksheets provided on this site have been instrumental in helping me accurately evaluate my livestock production costs. Highly recommended!',
  author3Position: 'Livestock Consultant',
  author4Alt: 'Image of Sarah Williams',
  author4Src:
    'https://images.unsplash.com/photo-1521341957697-b93449760f30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTYwMDM5OXw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Name: 'Robert Johnson',
  content1:
    'The worksheets provided on this site have been instrumental in helping me accurately evaluate my livestock production costs. Highly recommended!',
  author1Name: 'John Smith',
  review2:
    'I have found the book associated with this site to be a valuable resource in optimizing my livestock production processes. The worksheets are a bonus!',
  author4Position: 'Animal Science Professor',
  author1Position: 'Livestock Farmer',
  author1Src:
    'https://images.unsplash.com/photo-1427434948077-29d1f1a67f32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTYwMDM5OXw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: 'Testimonials',
  author1Alt: 'Image of John Smith',
  author3Alt: 'Image of Robert Johnson',
  review4:
    'I incorporate the worksheets from this site into my livestock production courses. They offer a practical approach to understanding production costs.',
}

Testimonial.propTypes = {
  author3Src: PropTypes.string,
  review3: PropTypes.string,
  author2Name: PropTypes.string,
  author2Alt: PropTypes.string,
  author2Position: PropTypes.string,
  author2Src: PropTypes.string,
  author4Name: PropTypes.string,
  review1: PropTypes.string,
  author3Position: PropTypes.string,
  author4Alt: PropTypes.string,
  author4Src: PropTypes.string,
  author3Name: PropTypes.string,
  content1: PropTypes.string,
  author1Name: PropTypes.string,
  review2: PropTypes.string,
  author4Position: PropTypes.string,
  author1Position: PropTypes.string,
  author1Src: PropTypes.string,
  heading1: PropTypes.string,
  author1Alt: PropTypes.string,
  author3Alt: PropTypes.string,
  review4: PropTypes.string,
}

export default Testimonial
