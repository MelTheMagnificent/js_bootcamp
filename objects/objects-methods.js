let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount

        return partysize <= seatsLeft
    }
}

// a method is nothoing more than an object property whose value is a function

restaurant.checkAvailability(4)