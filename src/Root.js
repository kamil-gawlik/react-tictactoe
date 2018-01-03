import Game from "./model/Game";
import SettingsPanel from "./settingsPanel/SettingsPanel";
import * as React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default class Root extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <SettingsPanel/>
                    <Game />
                </div>

            </MuiThemeProvider>)
    }
}