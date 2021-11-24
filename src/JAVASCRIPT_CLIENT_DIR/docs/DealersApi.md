# DealersAndVehicles.DealersApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDealer**](DealersApi.md#getDealer) | **GET** /api/{datasetId}/dealers/{dealerid} | Get information about a dealer


<a name="getDealer"></a>
# **getDealer**
> DealersResponse getDealer(datasetId, dealerid)

Get information about a dealer

### Example
```javascript
var DealersAndVehicles = require('dealers_and_vehicles');

var apiInstance = new DealersAndVehicles.DealersApi();

var datasetId = "datasetId_example"; // String | 

var dealerid = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDealer(datasetId, dealerid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **datasetId** | **String**|  | 
 **dealerid** | **Number**|  | 

### Return type

[**DealersResponse**](DealersResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

