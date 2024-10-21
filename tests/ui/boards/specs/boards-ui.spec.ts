import { expect, test } from '@playwright/test';
import { LoginPage } from '../../login/pages/login-page';
import { HeaderPage } from '../../headers/pages/header-page';
import { BoardsPage } from '../pages/boards-page';
import { CreateBoardPage } from '../../create-boards/pages/create-board-page';
import { BoardsApiHelper } from '../../../api/tests//boards/helpers/boards-api-helper'
const boardsApiHelper = new BoardsApiHelper()

import createBoardData from '../../../fixtures/api/boards/requestBody/board-create-body.json';


test.describe('Boards Test Suite', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://trello.com/');
        const loginPage = new LoginPage(page);
    
        await loginPage.login('cypresstrello@gmail.com', '123Queso!');
        await expect(page.locator('.boards-page-section-header-name')).toHaveText('YOUR WORKSPACES');
    });

    test.afterEach(async ({ }) => {
        await boardsApiHelper.deleteAllBoards();
     });
  
    test('UI - Create Board', async ({ page }) => {

        const headerPage = new HeaderPage(page)
        const createBoardPage = new CreateBoardPage(page)
        const boardPage = new BoardsPage(page)
        const boardName = createBoardData.name

        try {
            await headerPage.navigateToCreateBoard();
            await createBoardPage.createNewBoard(boardName);
            await boardPage.validateBoardTitleText(boardName);           
        } catch (error) {
            console.error('Error during test execution:', error);
            throw error; // Re-throw the error to ensure the test fails
        }	    
        
    });

});
