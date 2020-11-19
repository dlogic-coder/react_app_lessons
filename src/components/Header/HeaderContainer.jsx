import React from 'react';
import Header from "./Header";
import { connect } from "react-redux";
import { setAuthUserData } from "../../redux/authReduser";
import {getMe} from '../../api/api'

class HeaderContainer extends React.Component {
    componentDidMount() {

        getMe().then(data => {
            if (data.resultCode === 0) {
                let { id, login, email } = data.data;
                this.props.setAuthUserData(id, login, email);/* debugger */
            }
        });
        // в "response.data" находится json-ответ с API
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);