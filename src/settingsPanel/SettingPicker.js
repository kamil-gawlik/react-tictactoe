import React from "react";
import {MenuItem, SelectField} from "material-ui";


export default class SettingPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.startVal
        }
    }

    handleChange = (event, index, value) => {
        this.setState({value});
        this.props.changeAction(value)
    };


    render() {
        const values = this.props.values;

        const items = values.map(el =>
            <MenuItem key={el} value={el} primaryText={el}/>
        );

        return (
            <SelectField
                floatingLabelText={this.props.title}
                value={this.state.value}
                maxHeight={200}
                onChange={this.handleChange}
            >
                {items}
            </SelectField>
        )
    }
}
