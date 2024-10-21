import { request, APIRequestContext } from '@playwright/test';
import dotenv from 'dotenv';
// Load the environment variables from the .env file
dotenv.config();
const baseUrl = "https://api.trello.com/";
const apiKey =  process.env.TRELLO_API_KEY;
const apiToken = process.env.TRELLO_API_TOKEN;

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