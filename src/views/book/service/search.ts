import {useRouter} from 'vue-router';
class SearchService{
    static searchService:SearchService = new SearchService()
    static router = useRouter()
    backRouter() {
        SearchService.router.back();
    }
}

export const searchService = SearchService.searchService
