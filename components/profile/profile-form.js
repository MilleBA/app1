import classes from './profile-form.module.css';
import Wrapper from "@/components/Wrapper";

function ProfileForm() {
    return (
        <Wrapper>
            <form className={classes.form}>
                <div className={classes.control}>
                    <label htmlFor='new-password'>New Password</label>
                    <input type='password' id='new-password'/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='old-password'>Old Password</label>
                    <input type='password' id='old-password'/>
                </div>
                <div className={classes.action}>
                    <button>Change Password</button>
                </div>
            </form>
        </Wrapper>
    );
}

export default ProfileForm;
