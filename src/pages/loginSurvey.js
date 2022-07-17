import Layout from 'components/core/Layout'
import Information from 'components/pageRefs/LoginSurvey/Information'
import Inspection from 'components/pageRefs/LoginSurvey/Inspection'
import WeightCheck from 'components/pageRefs/LoginSurvey/WeightCheck'

import classes from 'styles/survey.module.scss'

const loginSurvey = () => {
  return (
    <Layout
      titleID={'Login Survey:'}
      style={{ backgroundColor: 'rgb(25, 50, 200)' }}
    >
      <div className={classes.container}>
      <WeightCheck />
      <Inspection />
      <Information />
      </div>
    </Layout>
  )
}

export default loginSurvey
