import React from "react";
import Drawer from 'material-ui/Drawer';
import {connect} from "react-redux";
import {changeSize, changeStartingPlayer, changeWinningSeqLength, toggleDrawer} from "../redux/actions";
import SettingPicker from "./SettingPicker";
import {startConfig} from "../redux/reducers";

class SettingsPanelBase extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            size: startConfig.size,
            winningSeq: startConfig.winningSeq,
            startingPlayer: startConfig.startingPlayer
        }
    }

    render() {
        return (
            <Drawer
                docked={false}
                open={this.props.active}
                onRequestChange={(open) => this.props.closeDrawer()}
                width={350}
            >
                <div className="settingContent">
                    <h2>Settings panel</h2>
                    <SettingPicker
                        title={'size'}
                        values={getIntsInRange(3, 15)}
                        startVal={this.state.size}
                        changeAction={(v) => this.props.handleSizeChange(v)}
                    />
                    <SettingPicker
                        title={'winning sequence length'}
                        values={getIntsInRange(3, 15)}
                        startVal={this.state.winningSeq}
                        changeAction={(v) => this.props.handleWinSeqChange(v)}
                    />
                    <SettingPicker
                        value={this.state.startingPlayer}
                        floatingLabelText={'starting player'}
                        startVal={'X'}
                        values={['X', 'O']}
                        changeAction={(v) => this.props.handleStartingPlayerChange(v)}
                    />
                </div>

            </Drawer>
        )
    }
};

const getIntsInRange = (lowerBound, upperBound) => {
    return Array.from(Array(upperBound + 1), (x, i) => {
        if (i >= lowerBound) {
            return i
        }
        return null;
    }).filter(e => e !== null);
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        active: state.drawerVisibility
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        closeDrawer: () => dispatch(toggleDrawer()),
        handleSizeChange: (v) => dispatch(changeSize(v)),
        handleWinSeqChange: (v) => dispatch(changeWinningSeqLength(v)),
        handleStartingPlayerChange: (v) => dispatch(changeStartingPlayer(v))
    }
};

const SettingsPanel = connect(mapStateToProps, mapDispatchToProps)(SettingsPanelBase);
export default SettingsPanel;
