import { useParams } from "react-router-dom";
import useGithubData from "../../../hooks/useGithubData";

const ProfileSidebar = () => {
    const { username } = useParams();
    const { data, error, isLoading, isError } = useGithubData(`${username}`, {enabled: !!username});
    
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: {error.message}</div>;
    
    return (
        <div key={data?.id} className="col user-info">
            {data && (
                <>
                    <div className="basic-info">
                        <img src={data?.avatar_url} alt={data?.login} width={260} height={260} className="avatar" />
                        <div className="names">
                            <h1 className="name">{data?.name}</h1>
                            <h2 className="username">{data?.login}</h2>  
                        </div>
                    </div>
                    <p className="bio">{data?.bio}</p>
                    <button>Edit Profile</button>
                    <div className="followers">
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
                            <path d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018 5.01 5.01 0 0 1 2.56 3.012.749.749 0 0 1-.885.954.752.752 0 0 1-.549-.514 3.507 3.507 0 0 0-2.522-2.372.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5.75.75 0 0 1 11 4Zm-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5Z"></path>
                        </svg>
                        <p>{data?.followers} followers</p>
                    </div>
                    <div className="location">
                        <svg viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m12.596 11.596-3.535 3.536a1.5 1.5 0 0 1-2.122 0l-3.535-3.536a6.5 6.5 0 1 1 9.192-9.193 6.5 6.5 0 0 1 0 9.193Zm-1.06-8.132v-.001a5 5 0 1 0-7.072 7.072L8 14.07l3.536-3.534a5 5 0 0 0 0-7.072ZM8 9a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 9Z"></path></svg>
                        <p>{data?.location}</p>
                    </div>
                    <div className="repos">
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
                            <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
                        </svg>
                        <p>{data?.public_repos} repositories</p>
                    </div>
                </>
                )}
        </div>
    )
}

export default ProfileSidebar;