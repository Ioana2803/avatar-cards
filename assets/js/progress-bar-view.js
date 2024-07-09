export default class ProgressBarView{
    constructor(parentDOMElement, progresBarModel){
        this.parentDOMElement = parentDOMElement;

        this.progresBarModel = progresBarModel;
        this.init();
        this.update();
    }

    init(){
        // TODO: should create the PROGRESS BAR DOM elements
        // console.log('Initialising PROGRGESS BAR DOM elements...');
        this.statsDiv = document.createElement('div');
        this.statsDiv.classList.add('stats');
        this.parentDOMElement.append(this.statsDiv);

        //creating stats item div
        this.itemDiv = document.createElement('div');
        this.itemDiv.classList.add('stats-item');
        this.statsDiv.append(this.itemDiv);

        //creating text span
        this.value = document.createElement('span');
        this.itemDiv.append(this.value);

        //creating bars div
        const valueName = this.progresBarModel.valueName;
        this.bars = document.createElement('div');
        this.bars.classList.add(`${valueName}`, 'bar');
        this.itemDiv.append(this.bars);

        //creating bars fill div
        this.fill = document.createElement('div');
        this.fill.classList.add('bar-fill');
        this.bars.append(this.fill);
    }

    update(){
        // TODO: should update the PROGRESS BAR new values in the created DOM elements
        // console.log('Rendering the PROGRGESS BAR new values');
        const text = this.progresBarModel.statName;
        const maxValue = this.progresBarModel.maxValue;
        const initialValue = this.progresBarModel.value;
        this.value.innerText = `${text} ${initialValue}/${maxValue}`;
        this.fill.style.width = `${initialValue * 100 / maxValue}%`;

        console.log(this.progresBarModel);
    }
}