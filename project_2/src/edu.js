import React, { Component } from 'react'

export default class edu extends Component {
  render() {
    return (
      <div>
        <div className='row mt-5'>
            <div className='col-sm'>
                <h3 className=''>{this.props.eduName}</h3>
                <h6>{this.props.eduPoint}</h6>
                <ul className=''>
                    <li>{this.props.eduDesc}</li>
                </ul>
            </div>
            <img className='edu-img' src={process.env.PUBLIC_URL+"/assets/"+this.props.eduImage} alt=""/>
        </div>
      </div>
    )
  }
}
