const subscribers = {};

function subscribe(type, callback) {
    console.log('Subsriber for' + type);
    if (subscribers[type] == undefined) {
subscribers[type] = [];
    }

    subscribers[type].push(callback)
}

function publish(type, data) {
    console.log('resive pubisher' + type);
const currentSubsribers = subscribers[type];

if(currentSubsribers) {
    for (const subs of currentSubsribers) {
        subs(data);
    }
}
}

module.exports = {
    subscribe,
    publish
}