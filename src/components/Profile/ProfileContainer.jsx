import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {getProfile} from '../../api/api'

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) userId = 2;     // пока жестко указываем пользователя '2'
        
        getProfile(userId).then(data => {
                this.props.setUserProfile(data);
            });
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
}

let mapStateToprops = (state) => ({
    profile: state.profilePage.profile
})

let WithUrlDataProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToprops, {setUserProfile})(WithUrlDataProfileContainer);