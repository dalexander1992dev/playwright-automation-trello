import createBoardRequestBody from "../../../../fixtures/api/boards/requestBody/board-create-body.json"
import updateBoardRequestBody from "../../../../fixtures/api/boards/requestBody/board-update-body.json";
import { BoardsEndpointConstants } from "../constants/boards-endpoint-constants";
import BoardsEndpoints from "../endpoints/boards-endpoints";
import ApiCalls from '../../../helpers/api-calls';
import { OrganizationsApiHelper } from '../../organizations/helpers/organizations-api-helper';

const boardsEndpoints = new BoardsEndpoints()
const apiCalls = new ApiCalls()
const organizationsApiHelper = new OrganizationsApiHelper()

export class BoardsApiHelper {

    async createBoard() {    
        const requestBody = createBoardRequestBody
        return await apiCalls.post(BoardsEndpointConstants.POST_BOARD, requestBody) 
    }

    async updateBoard(boardId: string) {    
        const requestBody = updateBoardRequestBody
        const endpoint = boardsEndpoints.updateBoardById(boardId)

        return await apiCalls.put(endpoint, requestBody) 
    }

    async getBoardById(boardId: string) {
        const endpoint = boardsEndpoints.getBoardById(boardId)
        
        return await apiCalls.get(endpoint) 
    }

    async deleteBoardById(boardId: string) {
        const endpoint = boardsEndpoints.deleteBoardById(boardId)

        return await apiCalls.delete(endpoint)
    }
    
    async deleteAllBoards() {
  
        try {
            const allBoardsInOrganizationRequest = await organizationsApiHelper.getBoardsInOrganization();
            console.log('allBoardsInOrganizationRequest: ' + allBoardsInOrganizationRequest);

            const allBoardsResponseBody = await allBoardsInOrganizationRequest.json();
            for (let i = 0; i < allBoardsResponseBody.length; i++) {
        
             await this.deleteBoardById(allBoardsResponseBody[i].id);
            }
        } catch (error) {
            console.error('Error deleting all boards:', error);
        }
    }
}