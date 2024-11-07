import { useParams } from "react-router-dom";
import useGithubData from "../../../hooks/useGithubData";
import ProfileRepos from "./ProfileRepos";
import ProfileSidebar from "./ProfileSidebar";
import NotFoundPage from "../NotFound/NotFoundPage";

const ProfilePage = () => {
    const { username } = useParams();
    const { data, isLoading, isError } = useGithubData(`${username}`, {enabled: !!username});
    
    if (isLoading) return <div>Loading...</div>;
    
    return (
        <div className="profile">
            {!isError ? 
                (
                <div className="container">
                    <div className="row">
                        <ProfileSidebar data={data}/>
                        <ProfileRepos />
                    
                    </div>
                </div>
                ) : 
                (
                    <NotFoundPage />
                )
            }
        </div>
    );
}

export default ProfilePage;