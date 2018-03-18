exports.printMsg = function(message, loglevel="info") {
    switch(loglevel) {
        case "debug":
            console.log("[DEBUG]: ", message);
            break;
        case "warn":
            console.log("[WARN] : ", message);
            break;
        default:
            console.log("[INFO] : ", message);
    }
}