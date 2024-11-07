import useGithubData from "../../../hooks/useGithubData";
import { useParams } from 'react-router-dom';
import NotFoundPage from "../NotFound/NotFoundPage";

const FollowersPage = () => {
    const { username } = useParams();
    const { data, isLoading, isError } = useGithubData(`${username}/followers`);
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <NotFoundPage />;
    
    const totalFollowers = data ? data.length : 0;
    const textFollowers = (data && data.length > 1 ? 'Followers' : 'Follower');
    
    return (
        <div className="followers-view">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <ul className="data-list">
                            {data?.map(follower => (
                                <li key={follower.id}>
                                    <div className="data-list-item">
                                        <div className="avatar-wrapper">
                                            <img src={follower?.avatar_url} alt={follower?.login} width={50} height={50} className="avatar" />
                                        </div>
                                        <div className="username">
                                            <span>{follower?.login}</span>
                                        </div>
                                        <div className="total-followers">
                                            <span>{totalFollowers} {textFollowers}</span>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FollowersPage;