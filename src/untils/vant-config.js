import { Tabbar, TabbarItem, Swipe, SwipeItem, Button, Checkbox, CheckboxGroup, ShareSheet, Cell, CellGroup, RadioGroup, Radio,Switch,DatetimePicker,Popup,Calendar } from 'vant';

export default {
    install(Vue) {
        Vue.use(Tabbar);
        Vue.use(TabbarItem);
        Vue.use(Swipe);
        Vue.use(SwipeItem);
        Vue.use(Button);
        Vue.use(Checkbox);
        Vue.use(CheckboxGroup);
        Vue.use(ShareSheet);
        Vue.use(Cell);
        Vue.use(CellGroup);
        Vue.use(Radio);
        Vue.use(RadioGroup);
        Vue.use(Switch);
        Vue.use(DatetimePicker);
        Vue.use(Popup);
        Vue.use(Calendar);
    }
}
