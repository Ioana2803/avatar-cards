export default class ProgressBarModel {
    constructor(statName, valueName, maxValue, initialValue){
        this.statName = statName;
        this.valueName = valueName;
        this.maxValue = maxValue;
        this.currentValue = initialValue;
    }

    set value(newValue){
        if(newValue <= this.currentValue){
            this.currentValue = newValue;
        }
        else{
            console.error(`ProgressBarModel error: the value exceeds the maximum value`)
        }
    }

    get value(){
        return this.currentValue;
    }
}