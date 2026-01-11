import React from 'react'
import {Bookmark} from 'lucide-react' 
const card = (props) => {
  return (
    <div>
      <div className="card">
            <div className="top">
              <img src={props.brand} alt={`${props.company} logo`}/>
              <button className="btns">SAVE <Bookmark size={10} /></button>
            </div>
            <div className = "center">
                <h3>{props.company}<span>{props.date}</span></h3>
                <h2>{props.post}</h2>
                <div>
                  <h4>{props.tag_1}</h4>
                  <h4>{props.tag_2}</h4>
                </div>
            </div>
            <div className = "bottom">
            <div>
              <div>
                <h3>{props.pay}</h3>
                <p>{props.location}</p>
              </div>
              <button>Apply Now</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default card
