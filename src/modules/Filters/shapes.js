import PropTypes from 'prop-types';

export const FilterOptionShape = PropTypes.shape({
  name: PropTypes.string,
  value: PropTypes.string
});

export const FilterValidationShape = PropTypes.shape({
  max: PropTypes.number,
  min: PropTypes.number,
  primitiveType: PropTypes.string.isRequired,
  entityType: PropTypes.string
});

export const FilterFieldShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(FilterOptionShape),
  validation: FilterValidationShape
});

export const FilterValuesShape = PropTypes.objectOf(PropTypes.string);
