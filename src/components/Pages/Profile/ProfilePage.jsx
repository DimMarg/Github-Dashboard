import ProfileRepos from "./ProfileRepos";
import ProfileSidebar from "./ProfileSidebar";

const ProfilePage = () => {
    
    return (
        <div className="profile">
            <div className="container">
                <div className="row">
                    <ProfileSidebar />
                    <ProfileRepos />
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;