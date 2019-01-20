import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import './index.scss';

const SectionHeader = ({ children, className, title }) => (
  <div className={classNames(className, 'SectionHeader')}>
    <h4 className="SectionHeader__title">{title}</h4>
    {children && <div className="SectionHeader__info">{children}</div>}
  </div>
);

SectionHeader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  className: PropTypes.string,
  title: PropTypes.string.isRequired
};

SectionHeader.defaultProps = {
  children: null,
  className: ''
};

export default SectionHeader;
