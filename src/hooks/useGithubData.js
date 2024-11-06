import { useQuery } from '@tanstack/react-query';
import api from '../js/api';

// Custom hook to fetch GitHub data
const useGithubData = (endpoint, options) => {
    return useQuery({
        queryKey: [endpoint],
        queryFn: async () => {
            const response = await api.get(endpoint);
            return response.data;
        },
        retry: false,
        ...options
    });
};

export default useGithubData;