'use strict';

function Booking(id, orderNumber, customerName, customerAddress, customerPhone, customerCity, status, total) {

    // Private attributes
    var _id = undefined;
    var _orderNumber = undefined;
    var _customerName = undefined;
    var _customerAddress = undefined;
    var _customerPhone = undefined;
    var _customerCity = undefined;
    var _status = undefined;
    var _total = undefined;

    /**
     *
     * @param id
     * @param orderNumber
     * @param customerName
     * @param customerAddress
     * @param customerPhone
     * @param customerCity
     * @param status
     * @param total
     */

    this.constructor = function(id, orderNumber, customerName, customerAddress, customerPhone, customerCity, status, total) {
        this.setId(id);
        this.setOrderNumber(orderNumber);
        this.setCustomerName(customerName);
        this.setCustomerAddress(customerAddress);
        this.setCustomerPhone(customerPhone);
        this.setCustomerCity(customerCity);
        this.setStatus(status);
        this.setTotal(total);
    };

    /**
     *
     * @returns {undefined}
     */
    this.getId = function(){
        return _id;
    };

    /**
     *
     * @param id
     */
    this.setId = function(id){
        _id = id;
    };

    /**
     *
     * @returns {undefined}
     */
    this.getOrderNumber = function(){
        return _orderNumber;
    };

    /**
     *
     * @param orderNumber
     */
    this.setOrderNumber = function(orderNumber){
        _orderNumber = orderNumber;
    };

    /**
     *
     * @returns {undefined}
     */
    this.getCustomerName = function(){
        return _customerName;
    };

    /**
     *
     * @param customerName
     */
    this.setCustomerName = function(customerName){
        _customerName = customerName;
    };

    /**
     *
     * @returns {undefined}
     */
    this.getCustomerAddress = function(){
        return _customerAddress;
    };

    /**
     *
     * @param customerAddress
     */
    this.setCustomerAddress = function(customerAddress){
        _customerAddress = customerAddress;
    };

    /**
     *
     * @returns {undefined}
     */
    this.getCustomerPhone = function(){
        return _customerPhone;
    };

    /**
     *
     * @param customerPhone
     */
    this.setCustomerPhone = function(customerPhone){
        _customerPhone = customerPhone;
    };

    /**
     *
     * @returns {undefined}
     */
    this.getCustomerCity = function(){
        return _customerCity;
    };

    /**
     *
     * @param customerCity
     */
    this.setCustomerCity = function(customerCity){
        _customerCity = customerCity;
    };

    /**
     *
     * @returns {undefined}
     */
    this.getStatus = function(){
        return _status;
    };

    /**
     *
     * @param status
     */
    this.setStatus = function(status){
        _status = status;
    };

    /**
     *
     * @returns {undefined}
     */
    this.getTotal = function(){
        return _total;
    };

    /**
     *
     * @param total
     */
    this.setTotal = function(total){
        _total = total;
    };


    this.constructor(id, orderNumber, customerName, customerAddress, customerPhone, customerCity, status, total);

};