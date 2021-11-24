# DealersAndVehicles.DataSetApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCheat**](DataSetApi.md#getCheat) | **GET** /api/{datasetId}/cheat | Get correct answer for dataset (cheat)
[**getDataSetId**](DataSetApi.md#getDataSetId) | **GET** /api/datasetId | Creates new dataset and returns its ID
[**postAnswer**](DataSetApi.md#postAnswer) | **POST** /api/{datasetId}/answer | Submit answer for dataset


<a name="getCheat"></a>
# **getCheat**
> Answer getCheat(datasetId)

Get correct answer for dataset (cheat)

### Example
```javascript
var DealersAndVehicles = require('dealers_and_vehicles');

var apiInstance = new DealersAndVehicles.DataSetApi();

var datasetId = "datasetId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCheat(datasetId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **datasetId** | **String**|  | 

### Return type

[**Answer**](Answer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="getDataSetId"></a>
# **getDataSetId**
> DatasetIdResponse getDataSetId()

Creates new dataset and returns its ID

### Example
```javascript
var DealersAndVehicles = require('dealers_and_vehicles');

var apiInstance = new DealersAndVehicles.DataSetApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDataSetId(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**DatasetIdResponse**](DatasetIdResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="postAnswer"></a>
# **postAnswer**
> AnswerResponse postAnswer(datasetId, opts)

Submit answer for dataset

### Example
```javascript
var DealersAndVehicles = require('dealers_and_vehicles');

var apiInstance = new DealersAndVehicles.DataSetApi();

var datasetId = "datasetId_example"; // String | 

var opts = { 
  'answer': new DealersAndVehicles.Answer() // Answer | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postAnswer(datasetId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **datasetId** | **String**|  | 
 **answer** | [**Answer**](Answer.md)|  | [optional] 

### Return type

[**AnswerResponse**](AnswerResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

