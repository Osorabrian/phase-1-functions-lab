// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation){
    return Math.abs(pickupLocation - 42)
}

function distanceFromHqInFeet(pickupLocation){
    const feet = 264 * distanceFromHqInBlocks(pickupLocation)
    return feet
}


function distanceTravelledInFeet (start, destination){
    return Math.abs(start-destination) * 264
}

function calculatesFarePrice (start, destination){
    const ride = distanceTravelledInFeet(start,destination)
    let price, distance;

    if (ride <= 400){
        price = 0;   
    }else if (ride > 400 && ride < 2000){
        price = (ride-400)* 0.02
    }else if(ride > 2000 && ride <= 2500){
        price = 25
    }else if(ride > 2500){
        price = 'cannot travel that far'
    }

    return price
}
