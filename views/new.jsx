var React = require('react');
var Default = require('./default')
var Form = require('./form')

class New extends React.Component {
    render() {
        return (
            <Default>
                <Form artist={this.props}/>
            </Default>
        );
    }
}

module.exports = New;
