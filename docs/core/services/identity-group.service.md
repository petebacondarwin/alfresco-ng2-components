---
Title: Identity Group service
Added: v3.4.0
Status: Active
Last reviewed: 2019-07-13
---

# [Identity Group service](../../../lib/core/userinfo/services/identity-group.service.ts "Defined in identity-group.service.ts")

Performs CRUD operations on identity groups.

## Class members

### Methods

-   **checkGroupHasAnyClientAppRole**(groupId: `string`, clientId: `string`, roleNames: `string[]`): [`Observable`](http://reactivex.io/documentation/observable.html)`<boolean>`<br/>
    Check if a group has any of the client app roles in the supplied list.
    -   _groupId:_ `string`  - Id of the target group
    -   _clientId:_ `string`  - Id of the client
    -   _roleNames:_ `string[]`  - Array of role names to check
    -   **Returns** [`Observable`](http://reactivex.io/documentation/observable.html)`<boolean>` - True if the group has one or more of the roles, false otherwise
-   **checkGroupHasClientApp**(groupId: `string`, clientId: `string`): [`Observable`](http://reactivex.io/documentation/observable.html)`<boolean>`<br/>
    Checks if a group has a client app.
    -   _groupId:_ `string`  - Id of the target group
    -   _clientId:_ `string`  - Id of the client
    -   **Returns** [`Observable`](http://reactivex.io/documentation/observable.html)`<boolean>` - True if the group has the client app, false otherwise
-   **checkGroupHasRole**(groupId: `string`, roleNames: `string[]`): [`Observable`](http://reactivex.io/documentation/observable.html)`<boolean>`<br/>
    Check that a group has one or more roles from the supplied list.
    -   _groupId:_ `string`  - Id of the target group
    -   _roleNames:_ `string[]`  - Array of role names
    -   **Returns** [`Observable`](http://reactivex.io/documentation/observable.html)`<boolean>` - True if the group has one or more of the roles, false otherwise
-   **createGroup**(newGroup: [`IdentityGroupModel`](../../../lib/core/userinfo/models/identity-group.model.ts)): [`Observable`](http://reactivex.io/documentation/observable.html)`<any>`<br/>
    Creates new group.
    -   _newGroup:_ [`IdentityGroupModel`](../../../lib/core/userinfo/models/identity-group.model.ts)  - Object of containing the new group details.
    -   **Returns** [`Observable`](http://reactivex.io/documentation/observable.html)`<any>` - Empty response when the group created.
-   **deleteGroup**(groupId: `string`): [`Observable`](http://reactivex.io/documentation/observable.html)`<any>`<br/>
    Deletes Group.
    -   _groupId:_ `string`  - Id of the group.
    -   **Returns** [`Observable`](http://reactivex.io/documentation/observable.html)`<any>` - Empty response when the group deleted.
-   **findGroupsByName**(searchParams: [`IdentityGroupSearchParam`](../../../lib/core/userinfo/models/identity-group.model.ts)): [`Observable`](http://reactivex.io/documentation/observable.html)`<any>`<br/>
    Finds groups filtered by name.
    -   _searchParams:_ [`IdentityGroupSearchParam`](../../../lib/core/userinfo/models/identity-group.model.ts)  - Object containing the name filter string
    -   **Returns** [`Observable`](http://reactivex.io/documentation/observable.html)`<any>` - List of group information
-   **getClientIdByApplicationName**(applicationName: `string`): [`Observable`](http://reactivex.io/documentation/observable.html)`<string>`<br/>
    Gets the client Id using the app name.
    -   _applicationName:_ `string`  - Name of the app
    -   **Returns** [`Observable`](http://reactivex.io/documentation/observable.html)`<string>` - client Id string
-   **getClientRoles**(groupId: `string`, clientId: `string`): [`Observable`](http://reactivex.io/documentation/observable.html)`<`[`IdentityRoleModel`](../../../lib/core/userinfo/models/identity-role.model.ts)`[]>`<br/>
    Gets client roles.
    -   _groupId:_ `string`  - Id of the target group
    -   _clientId:_ `string`  - Id of the client
    -   **Returns** [`Observable`](http://reactivex.io/documentation/observable.html)`<`[`IdentityRoleModel`](../../../lib/core/userinfo/models/identity-role.model.ts)`[]>` - List of roles
-   **getGroupRoles**(groupId: `string`): [`Observable`](http://reactivex.io/documentation/observable.html)`<`[`IdentityRoleModel`](../../../lib/core/userinfo/models/identity-role.model.ts)`[]>`<br/>
    Gets details for a specified group.
    -   _groupId:_ `string`  - Id of the target group
    -   **Returns** [`Observable`](http://reactivex.io/documentation/observable.html)`<`[`IdentityRoleModel`](../../../lib/core/userinfo/models/identity-role.model.ts)`[]>` - Group details
-   **getGroups**(): [`Observable`](http://reactivex.io/documentation/observable.html)`<`[`IdentityGroupModel`](../../../lib/core/userinfo/models/identity-group.model.ts)`[]>`<br/>
    Gets all groups.
    -   **Returns** [`Observable`](http://reactivex.io/documentation/observable.html)`<`[`IdentityGroupModel`](../../../lib/core/userinfo/models/identity-group.model.ts)`[]>` - Array of group information objects
-   **getTotalGroupsCount**(): [`Observable`](http://reactivex.io/documentation/observable.html)`<`[`IdentityGroupCountModel`](../../../lib/core/userinfo/models/identity-group.model.ts)`>`<br/>
    Gets groups total count.
    -   **Returns** [`Observable`](http://reactivex.io/documentation/observable.html)`<`[`IdentityGroupCountModel`](../../../lib/core/userinfo/models/identity-group.model.ts)`>` - Number of groups count.
-   **queryGroups**(requestQuery: [`IdentityGroupQueryCloudRequestModel`](../../../lib/core/userinfo/models/identity-group.model.ts)): [`Observable`](http://reactivex.io/documentation/observable.html)`<`[`IdentityGroupQueryResponse`](../../../lib/core/userinfo/models/identity-group.model.ts)`>`<br/>
    Queries groups.
    -   _requestQuery:_ [`IdentityGroupQueryCloudRequestModel`](../../../lib/core/userinfo/models/identity-group.model.ts)  - 
    -   **Returns** [`Observable`](http://reactivex.io/documentation/observable.html)`<`[`IdentityGroupQueryResponse`](../../../lib/core/userinfo/models/identity-group.model.ts)`>` - Array of user information objects
-   **updateGroup**(groupId: `string`, updatedGroup: [`IdentityGroupModel`](../../../lib/core/userinfo/models/identity-group.model.ts)): [`Observable`](http://reactivex.io/documentation/observable.html)`<any>`<br/>
    Updates group details.
    -   _groupId:_ `string`  - Id of the targeted group.
    -   _updatedGroup:_ [`IdentityGroupModel`](../../../lib/core/userinfo/models/identity-group.model.ts)  - Object of containing the group details
    -   **Returns** [`Observable`](http://reactivex.io/documentation/observable.html)`<any>` - Empty response when the group updated.

## See also

-   [Identity user service](../../core/userInfo/services/identity-user.service.md)
