/*
 * DealersAndVehicles
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.24
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.DealersAndVehicles) {
      root.DealersAndVehicles = {};
    }
    root.DealersAndVehicles.VehicleIdsResponse = factory(root.DealersAndVehicles.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The VehicleIdsResponse model module.
   * @module model/VehicleIdsResponse
   * @version v1
   */

  /**
   * Constructs a new <code>VehicleIdsResponse</code>.
   * @alias module:model/VehicleIdsResponse
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>VehicleIdsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VehicleIdsResponse} obj Optional instance to populate.
   * @return {module:model/VehicleIdsResponse} The populated <code>VehicleIdsResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('vehicleIds'))
        obj.vehicleIds = ApiClient.convertToType(data['vehicleIds'], ['Number']);
    }
    return obj;
  }

  /**
   * @member {Array.<Number>} vehicleIds
   */
  exports.prototype.vehicleIds = undefined;


  return exports;

}));
