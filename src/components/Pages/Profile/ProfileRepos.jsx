import repos from "../../../js/repos";

const ProfileRepos = () => {
    return (
        <div className="col popular-repos">
            <p>Popular Repositories</p>
            <div className="repos">
                {repos.map(({id, name, desc, technology, status}) => <div key={id} className="box">
                    <div className="box-inner">
                        <div className="box-header">
                            <span className="repo">
                            {name}
                            </span>
                            <span className="label">{status}</span>
                        </div>

                        <p className="desc">
                            {desc}
                        </p>

                        <p className="box-footer">
                            <span className="repo-language-color"></span>
                            <span className="programming-language">{technology}</span>
                        </p>
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default ProfileRepos;