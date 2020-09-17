module.exports = function(app){
    var BlockCard = Object.getPrototypeOf(app).BlockCard = new app.Component("block-card");
    //BlockCard.debug = true;
    BlockCard.createdAt      = "2.0.0";
    BlockCard.lastUpdate     = "2.0.0";
    BlockCard.version        = "1";
    // BlockCard.factoryExclude = true;
    // BlockCard.loadingMsg     = "This message will display in the console when component will be loaded.";
    // BlockCard.requires       = [];

    // BlockCard.prototype.onCreate = function(){
    // do thing after element's creation
    // }
    return BlockCard;
}