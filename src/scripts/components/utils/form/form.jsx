import React from 'react';

class Form extends React.Component {
    render() {
        const {id, width} = this.props;
        return (
            <form id={name}
                  className={`form form-${name}`}
                  style={{maxWidth: width ? width : 'auto', margin: 'auto'}}
            >
                {this.props.children}
            </form>
        )
    }

    static defaultProps = {
        id: 'simple'
    }
}

export default Form;