import { BoardsEndpointConstants } from "../constants/boards-endpoint-constants"
export default class BoardEndpoints {

    getBoardById(boardId: string) {
        return BoardsEndpointConstants.GET_BOARD.replace(
            '{boardId}',
            boardId
        )
    }

    updateBoardById(boardId: string) {
        return BoardsEndpointConstants.PUT_BOARD.replace(
            '{boardId}',
            boardId
        )
    }

    deleteBoardById(boardId: string) {
        return BoardsEndpointConstants.DELETE_BOARD.replace(
            '{boardId}',
            boardId
        )
    }
}