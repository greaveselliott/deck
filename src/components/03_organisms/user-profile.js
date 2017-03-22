import React from "react";
import IconProfile from '../01_atoms/icon-profile';

export default class UserProfile extends React.Component {

    render() {
        return (
            <figure className="profile">
                {this._get_profile_image(this.props.profile_image, "profile__image")}
                {this._get_profile_name(this.props.profile_name, "profile__name")}
            </figure>
        )
    }

    _get_profile_image(profile_image_url, profile_image_class) {
        return profile_image_url ?
            <img src={profile_image_url} className={profile_image_class} /> :
                <IconProfile/>;
    }

    _get_profile_name(profile_name = "Enter your name", profile__name_class) {
        return <figcaption className={profile__name_class}>{profile_name}</figcaption>;
    }
}