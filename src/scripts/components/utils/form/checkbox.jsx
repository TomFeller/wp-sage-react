import React from 'react';

class Checkbox extends React.Component {
    render() {
        const {id, label, name, value, change, dataName, filterType, mBottom, mTop, notValid, errorMessage} = this.props;

        return (
            <div className='field'
                 style={{
                     padding: '0 2rem',
                     marginBottom: mBottom ? mBottom : '0',
                     marginTop: mTop ? mTop : '0'
                 }}>
                <div className='control'>
                    <label className='checkbox' style={{cursor: 'pointer'}}>
                        <input type='checkbox'
                               data-id={id}
                               data-filter={filterType}
                               data-name={dataName}
                               name={name}
                               checked={value}
                               onChange={change}
                               style={{marginRight: '-2rem'}}
                        />
                        <p dangerouslySetInnerHTML={{__html: label}}/>
                        {errorMessage && <p style={{visibility: notValid ? 'visible' : 'hidden'}}>
                            {errorMessage ? errorMessage : 'שדה לא תקין'}
                        </p>}
                    </label>
                </div>
            </div>
        )
    }
}

export default Checkbox;