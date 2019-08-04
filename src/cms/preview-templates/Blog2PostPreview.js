import React from 'react'
import PropTypes from 'prop-types'
import { Blog2PostTemplate } from '../../templates/blog2-post'

const Blog2PostPreview = ({ entry, widgetFor }) => (
  <Blog2PostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

Blog2PostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default Blog2PostPreview
