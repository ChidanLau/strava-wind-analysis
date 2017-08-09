
class Vector{
    constructor(latitude, longitude, speed){
        this.latitude = latitude;
        this.longitude = longitude;
        this.speed = speed;

        this.unitLatitude = getUnitValue(latitude);
        this.unitLongitude = getUnitValue(longitude);
    }

    // Returns the unit value of primary
    getUnitValue(primary, secondary){
        return primary / (Math.sqrt(Math.pow(primary, 2) + Math.pow(secondary, 2)));
    }

    static addVectors(){

    }

    static getLatitudeFromBearing(bearing){
        return Math.cos(2 * Math.PI - (bearing * Math.PI / 180)- Math.PI / 2);
    }

    static getLongitudeFromBearing(bearing){
        return Math.sin(2 * Math.PI - (bearing * Math.PI / 180)-Math.PI / 2);
    }
}

exports.Vector = Vector;