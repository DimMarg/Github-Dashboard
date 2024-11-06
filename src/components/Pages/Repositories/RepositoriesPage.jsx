import { useEffect, useState } from "react";
import useGithubData from "../../../hooks/useGithubData";
import { useParams } from "react-router-dom";

const RepositoriesPage = () => {
    const { username } = useParams();
    const { data, error, isLoading, isError } = useGithubData(`${username}/repos`);
    
    const [sortedData, setSortedData] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc');
    
    useEffect(() => {
        if (data && data.length > 0) {
            const sorted = [...data].sort((a,b) => {
                return sortOrder === 'asc' 
                ? a.stargazers_count - b.stargazers_count
                : b.stargazers_count - a.stargazers_count;
            });
            setSortedData(sorted);
        }
    }, [data, sortOrder]);
    
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: {error.message}</div>;
    
    return (
        <div className="repositories">
            <div className="container">
                <div className="row">
                    <div className="col">    
                        <div className="sort-buttons">
                            <div onClick={() => setSortOrder('asc')}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                    <path d="M151.6 42.4C145.5 35.8 137 32 128 32s-17.5 3.8-23.6 10.4l-88 96c-11.9 13-11.1 33.3 2 45.2s33.3 11.1 45.2-2L96 146.3 96 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-301.7 32.4 35.4c11.9 13 32.2 13.9 45.2 2s13.9-32.2 2-45.2l-88-96zM320 480l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm0-128l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm0-128l160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm0-128l224 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32z"/>
                                </svg>
                            </div>
                            <div onClick={() => setSortOrder('desc')}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                    <path d="M151.6 469.6C145.5 476.2 137 480 128 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L96 365.7 96 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 301.7 32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L320 96z"/>
                                </svg>
                            </div>
                        </div>
                        <ul className="data-list">
                            {sortedData?.map(repo => (
                                <li key={repo.id}>
                                    <div className="data-list-item">
                                        <div className="repo-header">
                                            <p className="repo-name">{repo?.name}</p>
                                            <div className="repo-stars">
                                                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
                                                    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
                                                </svg>
                                                <p>{repo?.stargazers_count}</p>
                                            </div>
                                        </div>
                                        <div className="repo-desc">
                                            <p>{repo?.description}</p>
                                        </div>
                                        <div className="repo-languages">
                                            <span className="repo-language-color"></span>
                                            <p>{repo?.language}</p>
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

export default RepositoriesPage;