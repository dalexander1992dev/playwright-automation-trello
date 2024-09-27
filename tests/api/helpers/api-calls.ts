import { request, APIRequestContext } from '@playwright/test';

const baseUrl = "https://api.trello.com/";
const apiKey =  "e5ba702016f58a8af68166685c519682";
const apiToken = "ATTA8e60476baa3d31e2f3608e367cb836fa94debd439c86d154ea6718dd5d4a4fef6E316488";

export default class ApiCalls {
    private requestContext: APIRequestContext;

    constructor() {
        this.initialize();
    }

    private async initialize() {
        this.requestContext = await request.newContext({
            baseURL: baseUrl,
            extraHTTPHeaders: {
                'Authorization': `Bearer ${apiToken}`
            }
        });
    }

    async post(endpoint: string, body: any) {
        return this.sendRequest('POST', endpoint, body);
    }

    async get(endpoint: string) {
        return this.sendRequest('GET', endpoint);
    }

    async delete(endpoint: string) {
        return this.sendRequest('DELETE', endpoint);
    }

    async put(endpoint: string, body: any) {
        return this.sendRequest('PUT', endpoint, body);
    }

    private async sendRequest(method: string, endpoint: string, body?: any) {
        const response = await this.requestContext[method.toLowerCase()]( `/1/${endpoint}?key=${apiKey}&token=${apiToken}`, {
            data: body
        });
        return response;
    }
}