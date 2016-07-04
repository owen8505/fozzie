'use strict';

function Task(id, booking) {

    // Private attributes
    var _id = undefined;
    var _booking = undefined;


    /**
     *
     * @param id
     * @param booking
     *
     */

    this.constructor = function(id, booking) {
        this.setId(id);
        this.setBooking(booking);
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


    this.constructor(id, booking);

};