import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addRecipe, removeFromCalendar} from '../actions'

class App extends Component {

  render() {
    console.log(this.props)
    return (
       <div>
          Hello World
      </div>
    )
  }
}

function mapStateToProps(calender) {
  const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

  return {
    calender: dayOrder.map((day) => ({
      day,
      meals: Object.keys(calender[day]).reduce((meals, meal) => {
        meals[meal] = calender[day][meal]
          ? calender[day][meal]
          : null

      return meals
     }, {})
    })),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    selectRecipe: (data) => dispatch(addRecipe(data)),
    remove: (data) => dispatch(removeFromCalendar(data))
  }
}

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(App)
