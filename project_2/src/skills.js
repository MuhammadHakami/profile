import React, { Component } from 'react'

export default class skills extends Component {
  render() {
      const pro=this.props.skillsPro.map((item,index)=>{
          return <img className='col-md-3 skill-img col-sm-6 mt-1' src={item} key={index}/>
      })
      const fam=this.props.skillsFam.map((item,index)=>{
        return <img className='col-md-3 skill-img col-sm-6 mt-1' src={item}/>
    })
    return (
      <div>
        <h6 className='mt-5 center-text'>Proficient</h6>
        {pro}
        <h6 className='mt-5'>Familiar</h6>
        {fam}
      </div>
    )
  }
}
