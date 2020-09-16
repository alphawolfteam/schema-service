# SchemaApi

## HTTP Requests

| HTTP REQUEST | DEFINITION            | 
| ----------- | --------------- |
| GET /api/schema/[id]     |  Get schema by id          |
| GET /api/schema       | Get schemas list |
| POST /api/schema       | Create schema |
| PUT /api/schema/[id]       | Update schema |
| DELETE /api/schema/[id]       | Delete schema by id |
| DELETE /api/schema/[id]/[propertyId]       | Delete property from schema by id |

## Schema Interface

    {
        schemaName: string,
        schemaProperties: IProperty[],
        permissions: string,
        createdAt: Date,
        updatedAt: Date,
    }

## Property Interface

    {
        propertyName: string,
        propertyType: string,
        defaultValue?: [propertyType],
        propertyRef?: string,
        enum?: [propertyType][],
        isUnique: boolean,
        index?: boolean,
        required?: boolean,
        validateFunctions?: Function[],
        createdAt: Date,
        updatedAt: Date,
        permissions?: string
    }

## Property Type Options

* String
* Number
* Boolean
* Date
* ObjectId
* Array

## Request & Response Examples
  
### GET /api/schema/[id]

Response body:

    {
        "schemaProperties": [
            "5f60f0b30f0b504044b149bb"
        ],
        "_id": "5f60f0b30f0b504044b149bc",
        "schemaName": "Schema1",
        "permissions": "schema premissions",
        "createdAt": "2013-10-01T00:00:00.000Z",
        "updatedAt": "2013-10-01T00:00:00.000Z",
        "__v": 0
    }
    
### GET /api/schema

Response body:

    [
        {
            "schemaProperties": [
                "5f60f0b30f0b504044b149bb"
            ],
            "_id": "5f60f0b30f0b504044b149bc",
            "schemaName": "Schema1",
            "permissions": "schema premissions",
            "createdAt": "2013-10-01T00:00:00.000Z",
            "updatedAt": "2013-10-01T00:00:00.000Z",
            "__v": 0
        },
        {
            "schemaProperties": [
                "5f60f0b30f0b504044b149bc"
            ],
            "_id": "5f60f0b30f0b504044b149bd",
            "schemaName": "Schema2",
            "permissions": "schema premissions",
            "createdAt": "2013-10-01T00:00:00.000Z",
            "updatedAt": "2013-10-01T00:00:00.000Z",
            "__v": 0
        }
    ]
    
### POST /api/schema

Request body:

    {
     "schemaName": "Schema1",
     "schemaProperties":[
        {
           "propertyName":"property1",
           "propertyType":"Number",
           "defaultValue":1,
           "propertyRef":"property ref",
           "enum":[
              1,
              2,
              3
           ],
           "isUnique":true,
           "index":true,
           "required":true,
           "createdAt":"2013-10-01T00:00:00.000Z",
           "updatedAt":"2013-10-01T00:00:00.000Z",
           "permissions":"property premissions"
        }
      ],
      "permissions":"schema premissions",
      "createdAt":"2013-10-01T00:00:00.000Z",
      "updatedAt":"2013-10-01T00:00:00.000Z"
    }
    
### PUT /api/schema/[id]

Request body:

    {
     "schemaName": "NewSchema1",
     "schemaProperties":[
        {
           "propertyName":"newProperty1",
           "propertyType":"Number",
           "defaultValue":1,
           "propertyRef":"property ref",
           "enum":[
              1,
              2,
              3
           ],
           "isUnique":true,
           "index":true,
           "required":true,
           "createdAt":"2013-10-01T00:00:00.000Z",
           "updatedAt":"2013-10-01T00:00:00.000Z",
           "permissions":"property premissions"
        }
      ],
      "permissions":"schema premissions",
      "createdAt":"2013-10-01T00:00:00.000Z",
      "updatedAt":"2013-10-01T00:00:00.000Z"
    }  
    
## Http Errors

Error responses includes a common HTTP status code, error name and message for the developer. For example:

    {
    "name": "InvalidId",
    "message": "Invalid id",
    "status": 404
    }

Error codes and meanings:
* 200 - OK
* 400 - Bad Request
* 404 - User Error
* 500 - Internal Server Error
