import React, { Component } from 'react'
export default class exp extends Component {
  render() {
    return (
    <div className="project mt-5 each-card">
        <div className="col-sm">
        <h6 className="card-text mb-1 exetitle">{this.props.expTitle}</h6>
            <a href={this.props.expUrl} target="_blank" rel="noopener noreferrer"><img src={process.env.PUBLIC_URL+this.props.expImage} className="card-img" alt=""/></a>
            <div className="card-body">
                <ul>
                    <li>
                        {this.props.expDesc1}
                    </li>
                    <li>
                        {this.props.expDesc2}
                    </li>
                </ul>
            </div>
        </div>
        <hr/>
    </div>
    )
  }
}
