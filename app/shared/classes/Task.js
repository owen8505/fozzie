'use strict';

function Task(id, booking, name, startDate, endDate, code) {

    // Private attributes
    var _id = undefined;
    var _booking = undefined;
    var _name = undefined;
    var _startDate = undefined;
    var _endDate = undefined;
    var _code = undefined;

    /**
     *
     * @param id
     * @param booking
     * @param name
     * @param startDate
     * @param endDate
     * @param code
     */

    this.constructor = function(id, booking, name, startDate, endDate, code) {
        this.setId(id);
        this.setBooking(booking);
        this.setName(name);
        this.setStartDate(startDate);
        this.setEndDate(endDate);
        this.setCode(code);
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

    /**
     *
     * @returns {undefined}
     */
    this.getCode = function(){
        return _code;
    };

    /**
     *
     * @param code
     */
    this.setCode = function(code){
        _code = code;
    };

    /**
     * 
     * @returns {string}
     */
    this.toString = function() {
        return 'Task[' +
                'id: ' + _id +
                ', booking: ' + _booking.toString() +
                ', name: ' + _name +
                ', startDate: ' + _startDate +
                ', endDate: ' + _endDate +
                ', code: ' + _code +
            ']';
    };


    this.constructor(id, booking, name, startDate, endDate, code);

};