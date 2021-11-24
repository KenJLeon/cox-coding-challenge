var { ApiClient, Answer, AnswerResponse, DatasetIdResponse, DealerAnswer, DealersResponse, VehicleAnswer, VehicleIdsResponse, 
    VehicleResponse, ClientApi, DataSetApi, DealersApi, VehiclesApi} = require('./JAVASCRIPT_CLIENT_DIR/src/index'); 
var apiClient = new ApiClient(); 
console.log(ApiClient);


var dataSetApi = new DataSetApi(apiClient);
var dealersApi =  new DealersApi(apiClient);
var vehiclesApi =  new VehiclesApi(apiClient);
var datasetIdResponse;
var vehicleIdsResponse; //[id, id, id, id,...]
var vehicleResponseList = []; //[{vehicleId, year, make, model, dealerId}, ...]
var dealerIdsList = []; //[id, id, ...]
var dealersResponse = []; // [{dealerId, name}, ...]

var callback = (error, data, response, todo) => {
    if (error) {
        console.error(error);
    } 
    else {
        todo(data);
    }
}

var getAnswer = (vehicleResponseList, dealersResponse) => {
    var answer = {}
    answer.dealers = [];
    var vehicleInfoBydealer = {};

    vehicleResponseList.forEach(element => {
        if(vehicleInfoBydealer[element.dealerId]) {
            vehicleInfoBydealer[element.dealerId].push(VehicleAnswer.constructFromObject(element)); 
        }
        else {
            vehicleInfoBydealer[element.dealerId] = [];
            vehicleInfoBydealer[element.dealerId].push(element);
        }
    });

    dealersResponse.forEach(element => {
        let dealer = {...element};
        dealer.vehicles = vehicleInfoBydealer[element.dealerId];
        answer.dealers.push(DealerAnswer.constructFromObject(dealer));
    });
    return answer;
};

dataSetApi.getDataSetId((error, data, response) => {
    callback(error, data, response, (data) => {
        datasetIdResponse = data;
        vehiclesApi.getIds(datasetIdResponse.datasetId, (error, data, response) => {
            callback(error, data, response, (data) => {
                vehicleIdsResponse = data;
                vehicleIdsResponse.vehicleIds.forEach(element => {
                    vehiclesApi.getVehicle(datasetIdResponse.datasetId, element, (error, data, response) => {
                        callback(error, data, response, (data) => {
                            vehicleResponseList.push(data);
                            if(!dealerIdsList.includes(data.dealerId)) {
                                dealerIdsList.push(data.dealerId);
                            }
                            if (vehicleResponseList.length === vehicleIdsResponse.vehicleIds.length) {
                                dealerIdsList.forEach(element => {
                                    dealersApi.getDealer(datasetIdResponse.datasetId, element, (error, data, response) => {
                                        callback(error, data, response, (data) => {
                                            dealersResponse.push(data);
                                            if (dealerIdsList.length === dealersResponse.length) {
                                                var answer = getAnswer(vehicleResponseList, dealersResponse);
                                                dataSetApi.postAnswer(datasetIdResponse.datasetId, {'answer': answer}, (error, data, response) => {
                                                    callback(error, data, response, (data) => {
                                                        console.log(data);
                                                    });
                                                });
                                            }
                                        });
                                    });
                                    
                                });
                            }
                        });
                    });
                });
            });
        });
    });
});



