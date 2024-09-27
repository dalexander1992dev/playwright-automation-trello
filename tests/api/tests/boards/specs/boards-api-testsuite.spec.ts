import { test, expect } from '@playwright/test';
import { BoardsApiHelper } from '../helpers/boards-api-helper'
const boardsApiHelper = new BoardsApiHelper()

test.describe('Boards API Test Suite', () => {
    
    test.afterEach(async ({ }) => {
       await boardsApiHelper.deleteAllBoards()
    });

    test('API - Create a Board', async ({ }) => {
        const createRequest = await boardsApiHelper.createBoard()
        expect(createRequest.status()).toBe(200);
        expect(createRequest.ok()).toBeTruthy();
        const createResponseBody = await createRequest.json();
        expect(createResponseBody.name).toBe('New Board Name');
        console.log(createResponseBody.id)
    });

    test('API - Get a Board', async ({ }) => {
        const createRequest = await boardsApiHelper.createBoard()
        const createResponseBody = await createRequest.json();
        console.log(createResponseBody.id)
        const getRequest = await boardsApiHelper.getBoardById(createResponseBody.id)
        expect(getRequest.ok()).toBeTruthy();
    });

    test('API - Update a Board', async ({ }) => {
        const createRequest = await boardsApiHelper.createBoard()
        const createResponseBody = await createRequest.json();
        const updateRequest = await boardsApiHelper.updateBoard(createResponseBody.id)
        const updateResponseBody = await updateRequest.json();
        expect(updateRequest.ok()).toBeTruthy();
        expect(updateRequest.status()).toBe(200);
        expect(updateResponseBody.name).toBe('Board Name Updated');
    });

    test('API - Delete a Board', async ({ }) => {
        const createRequest = await boardsApiHelper.createBoard()
        const createResponseBody = await createRequest.json();
        const deleteRequest = await boardsApiHelper.deleteBoardById(createResponseBody.id)
        expect(deleteRequest.ok()).toBeTruthy();
        expect(deleteRequest.status()).toBe(200);
    });

});