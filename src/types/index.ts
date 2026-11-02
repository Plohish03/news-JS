export enum Endpoint {
    Sources = 'sources',
    Everything = 'everything',
}

export enum HttpMethod {
    Get = 'GET',
}

export interface Source {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface ArticleSource {
    id: string | null;
    name: string;
}

export interface Article {
    source: ArticleSource;
    author: string | null;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string | null;
}

export interface SourcesResponse {
    status: string;
    sources: Source[];
}

export interface ArticlesResponse {
    status: string;
    totalResults: number;
    articles: Article[];
}

export type Callback<T> = (data: T) => void;

export interface RequestOptions {
    apiKey: string;
    sources: string;
}

export type LoaderOptions = Partial<RequestOptions>;
export type NewsQuery = Pick<RequestOptions, 'sources'>;

export interface GetRespParams {
    endpoint: Endpoint;
    options?: Partial<NewsQuery>;
}
