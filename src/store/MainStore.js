import { observable } from 'mobx';

class MainStore {
    @observable counter = 0;
    @observable time = new Date();
    @observable names = [];
    // @observable ans = '';
    // @observable from = '';
    // @observable to = '';
    // @observable amount = '';

    addCounter(){
        this.counter++;
    }
    subCounter(){
        this.counter--;
    }
    updateTime(newTime){
        this.time = newTime;
    }
    setNames(list){
        this.names = list;
    }
    // setAns(ans){
    //     this.ans = ans;
    // }
    // setFrom(ans){
    //     this.from = ans;
    // }
    // setTo(ans){
    //     this.to = ans;
    // }
    // setAmount(ans){
    //     this.amount = ans;
    // }
    setoo(ans){
        this.ans = ans;
    }
}

const store = window.store = new MainStore;
export default store;