import React, { Component } from 'react'

export default class skills extends Component {
  render() {
      const pro=this.props.skillsPro.map((item,index)=>{
          return <img className='col-md-3 skill-img col-sm-6 mt-1' src={item} key={index}/>
      })
      const fam=this.props.skillsFam.map((item,index)=>{
        return <img className='col-md-3 skill-img col-sm-6 mt-1' src={item} key={index}/>
    })
    return (
      <div>
        <h5 className='mt-5 center-text'>Proficient:</h5>
        {pro}
        <h5 className='mt-5'>Familiar:</h5>
        {fam}
      </div>
    )
  }
}
