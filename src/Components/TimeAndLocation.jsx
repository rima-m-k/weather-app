import React from 'react'
import { formatToLocalTime } from '../services/weatherService'

function TimeAndLocation({ weather: { dt, timezone, name, country } }) {
  return (
    <div>
      <div className="flex items-left justify-left md:my-6 ">
        <p className="text-white text-lg font-extralight  ">
          {formatToLocalTime(dt, timezone)}
        </p>
      </div>

      <div className="flex items-center  justify-center   my-3">
        <p className="text-white text-2xl font-medium">
            {`${name}, ${country}`}
            </p>
      </div>
    </div>
  )
}

export default TimeAndLocation
