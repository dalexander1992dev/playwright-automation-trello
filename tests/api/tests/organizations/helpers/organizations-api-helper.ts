import { OrganizationsEndpointsConstants } from "../constants/organizations-endpoints-constants"
import ApiCalls from "../../../helpers/api-calls"
const apiCalls = new ApiCalls()

export class OrganizationsApiHelper {
    
    async getBoardsInOrganization(){
        const endpoint = OrganizationsEndpointsConstants.GET_BOARDS_IN_ORGANIZATION
        return await  apiCalls.get(endpoint) 
    }
} 