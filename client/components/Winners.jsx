import React from 'react'
import {connect} from 'react-redux'

import WinnerRow from './WinnerRow'

function Winners (props) {
  return (
    <div className='winner-section'>
      <h2>Winners</h2>
      <table>
        <tbody>
          {props.winnersData.map(winnerRecord => {
            return (
              <WinnerRow name={winnerRecord.name} score={winnerRecord.score} key={winnerRecord.id} />
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    winnersData: state.winners
  }
}

// const provideCorrectProps = connect(mapStateToProps)
// const connectedWinners = provideCorrectProps(Winners)
//
// export default connectedWinners

export default connect(mapStateToProps)(Winners)
