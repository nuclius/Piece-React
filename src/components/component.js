import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className="component-container">
      <input type="checkbox" checked="true" />
      <ul className="list">
        <li className="list-item">
          <span>Text</span>
        </li>
        <li className="list-item">
          <span>Text</span>
        </li>
        <li className="list-item">
          <span>Text</span>
        </li>
      </ul>
      <textarea
        placeholder={props.textarea_placeholder}
        className="textarea"
      ></textarea>
      <button className="component-button button">{props.button}</button>
    </div>
  )
}

AppComponent.defaultProps = {
  textarea_placeholder: 'placeholder',
  button: 'Button',
}

AppComponent.propTypes = {
  textarea_placeholder: PropTypes.string,
  button: PropTypes.string,
}

export default AppComponent
