import React from 'react'
import PropTypes from 'prop-types'
import { TeamTemplate } from '../../templates/team-page'

const TeamPagePreview = ({ entry, widgetFor }) => (
  <TeamTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

TeamPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default TeamPagePreview
