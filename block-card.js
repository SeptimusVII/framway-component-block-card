module.exports = function(app){
    var BlockCard = Object.getPrototypeOf(app).BlockCard = new app.Component("block-card");
    // BlockCard.debug = true;
    BlockCard.createdAt      = "2.0.0";
    BlockCard.lastUpdate     = "2.4.3";
    BlockCard.version        = "1.0.5";
    // BlockCard.factoryExclude = true;
    // BlockCard.loadingMsg     = "This message will display in the console when component will be loaded.";
    // BlockCard.requires       = [];

    BlockCard.prototype.onCreate = function(){
        var block = this;
        block.$parent = block.$el.parent();
        if (block.$parent.hasClass('item-grid'))
            block.$parent = block.$parent.parent();

        if (!block.$parent.hasClass('block-card__container'))
            block.$parent.addClass('block-card__container');
        if (!block.$parent.hasClass('hasFillers') && block.$parent.hasClass('addFillers') && getComputedStyle(block.$parent.get(0)).display !== 'grid')
            block.$parent.append('<div class="block-card"></div><div class="block-card"></div><div class="block-card"></div>').addClass('hasFillers').removeClass('addFillers');
        if (getComputedStyle(block.$parent.get(0)).display === 'grid')
            block.$parent.addClass('isGrid');
        if (getComputedStyle(block.$parent.get(0)).display === 'flex')
            block.$parent.addClass('isFlex');
    }
    return BlockCard;
}