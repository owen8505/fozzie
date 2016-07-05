'use strict';

function Task(id, booking, status, name, startDate, endDate) {

    // Private attributes
    var _id = undefined;
    var _booking = undefined;
    var _status = undefined;
    var _name = undefined;
    var _startDate = undefined;
    var _endDate = undefined;

    /**
     *
     * @param id
     * @param booking
     *
     */

    this.constructor = function(id, booking, status, name, startDate, endDate) {
        this.setId(id);
        this.setBooking(booking);
        this.setStatus(status);
        this.setName(name);
        this.setStartDate(startDate);
        this.setEndDate(endDate);
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
    this.getBooking = function(){
        return _booking;
    };

    /**
     *
     * @param booking
     */
    this.setBooking = function(booking){
        _booking = booking;
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
    this.getName = function(){
        return _name;
    };

    /**
     *
     * @param name
     */
    this.setName = function(name){
        _name = name;
    };

    /**
     *
     * @returns {undefined}
     */
    this.getStartDate = function(){
        return _startDate;
    };

    /**
     *
     * @param startDate
     */
    this.setStartDate = function(startDate){
        _startDate = startDate;
    };

    /**
     *
     * @returns {undefined}
     */
    this.getEndDate = function(){
        return _endDate;
    };

    /**
     *
     * @param endDate
     */
    this.setEndDate = function(endDate){
        _endDate = endDate;
    };


    this.constructor(id, booking, status, name, startDate, endDate);

};