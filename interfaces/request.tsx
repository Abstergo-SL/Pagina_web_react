

export interface request{
    baseUrl:string;
    endpoint:string;
    method: 'POST' | 'GET' | 'PUT';
    headers: {};
    body?: any
}
