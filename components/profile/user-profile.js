import classes from './user-profile.module.css';
import Wrapper from "@/components/Wrapper";
import ProfileForm from "@/components/profile/profile-form";

function UserProfile() {
    return (

        <Wrapper className={classes.profile}>
            <h1>Your User Profile</h1>
            <ProfileForm/>
        </Wrapper>
    );
}

export default UserProfile;
