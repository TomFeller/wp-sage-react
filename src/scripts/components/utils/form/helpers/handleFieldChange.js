const handleFieldChange = (e, _this) => {
    const target = e.target,
        value = target.value,
        name = target.name;

    _this.setState({
        [name]: value
    })
};

export {handleFieldChange}