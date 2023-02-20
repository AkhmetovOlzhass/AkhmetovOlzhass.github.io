const AppFilter = (props) => {
    const buttonsData = [
        {name: 'Brazil', label: "Brazil"},
        {name: 'Kenya', label: "Kenya"},
        {name: 'Columbia', label: "Columbia"}
    ];

    const buttons =  buttonsData.map(({name, label}) => {
        let active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';

        return (
            <button type="button" onClick = {() => {props.onFilter(name) }} className={`buy__wrapper-button ${clazz}`}>{label}</button>
        )
    });

    return (
        <div class="buy__wrapper-btns">
            {buttons}
        </div>
    )
}

export default AppFilter;