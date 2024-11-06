import ProfilePage from "../components/Pages/Profile/ProfilePage";
import RepositoriesPage from "../components/Pages/Repositories/RepositoriesPage";
import FollowersPage from "../components/Pages/Followers/FollowersPage";
import NotFoundPage from "../components/Pages/NotFound/NotFoundPage";

const allRoutes = [
    { path: '/', page: ProfilePage },
    { path: '/profile/:username', page: ProfilePage },
    { path: '/repositories/:username', page: RepositoriesPage },
    { path: '/followers/:username', page: FollowersPage },
    { path: '*', page: NotFoundPage },
];

export const routes = [...allRoutes];
