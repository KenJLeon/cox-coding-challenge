# DealersAndVehicles.VehiclesApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getIds**](VehiclesApi.md#getIds) | **GET** /api/{datasetId}/vehicles | Get a list of all vehicleids in dataset
[**getVehicle**](VehiclesApi.md#getVehicle) | **GET** /api/{datasetId}/vehicles/{vehicleid} | Get information about a vehicle


<a name="getIds"></a>
# **getIds**
> VehicleIdsResponse getIds(datasetId)

Get a list of all vehicleids in dataset

### Example
```javascript
var DealersAndVehicles = require('dealers_and_vehicles');

var apiInstance = new DealersAndVehicles.VehiclesApi();

var datasetId = "datasetId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getIds(datasetId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **datasetId** | **String**|  | 

### Return type

[**VehicleIdsResponse**](VehicleIdsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getVehicle"></a>
# **getVehicle**
> VehicleResponse getVehicle(datasetId, vehicleid)

Get information about a vehicle

### Example
```javascript
var DealersAndVehicles = require('dealers_and_vehicles');

var apiInstance = new DealersAndVehicles.VehiclesApi();

var datasetId = "datasetId_example"; // String | 

var vehicleid = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getVehicle(datasetId, vehicleid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **datasetId** | **String**|  | 
 **vehicleid** | **Number**|  | 

### Return type

[**VehicleResponse**](VehicleResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

