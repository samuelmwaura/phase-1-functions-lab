// Code your solution in this file!

const distanceFromHqInBlocks = function(pickUpLocationForCustomers){
       let difference = pickUpLocationForCustomers - 42;
    if(difference > 0){
        return difference;
    }else{
        difference = 42 - pickUpLocationForCustomers;
        return difference;
    }
     
}


const distanceFromHqInFeet = function(pickUpLocationForCustomers){
     const distanceBlocks = distanceFromHqInBlocks(pickUpLocationForCustomers);
     return distanceBlocks*264;
}

const distanceTravelledInFeet = function(start, destination){
    let distance = destination - start;
    if(distance > 0){
        return distance*264
    }else{
        distance = start-destination;
     return (distance)*264;
    }
}

const calculatesFarePrice = function(start,destination){
    let distance = distanceTravelledInFeet(start, destination);
    if(distance <= 400){
        return 0;
    }else if(distance > 400 && distance <= 2000){
        distance = distance-400;
        return 0.02*distance;
    }else if(distance > 2000 && distance <=2500){
        return 25;
    }else {
        return 'cannot travel that far';
    }
}