module.exports = function(){
    let BlockCard = Object.getPrototypeOf(fw).BlockCard = class BlockCard extends fw.Component{
        static {
            this.debug = false;
            this.createdAt  = "3.0.0";
            this.lastUpdate = "3.0.0";
            this.version = "2.0.0";
            this.tpl = utils.getNodeFromString(require('bundle-tpl:./block-card.html')).outerHTML;
            // this.describe();
        }
        onCreate(){
            let block = this;
            block.parent = block.el.parentNode;
            if (block.parent && block.parent.classList) {
                if (block.parent.classList.contains('item-grid'))
                    block.parent = block.parent.parentNode;
                if (!block.parent.classList.contains('block-card__container'))
                    block.parent.classList.add('block-card__container');
                if (getComputedStyle(block.parent.style.display === 'grid'))
                    block.parent.classList.add('isGrid');
                if (getComputedStyle(block.parent.style.display === 'flex'))
                    block.parent.classList.add('isFlex');
            }
        }
    }
    return BlockCard;
}