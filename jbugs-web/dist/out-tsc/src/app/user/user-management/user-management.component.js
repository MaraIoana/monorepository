import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let UserManagementComponent = class UserManagementComponent {
    constructor() {
        this.category = [
            {
                id: 1,
                name: 'Science'
            },
            {
                id: 2,
                name: 'Phylosophy'
            }
        ];
        this.text1 = 'asdasdasdasdasdasdasdasdasda';
        this.text2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non diam phasellus vestibulum lorem sed risus. Ac orci phasellus egestas tellus. Scelerisque purus semper eget duis at tellus. Consectetur a erat nam at lectus urna duis. Potenti nullam ac tortor vitae. Congue nisi vitae suscipit tellus mauris a diam maecenas sed. Vel eros donec ac odio tempor orci. Tristique magna sit amet purus gravida. Arcu risus quis varius quam quisque. Convallis convallis tellus id interdum velit laoreet id donec. Tellus molestie nunc non blandit massa.\n' +
            '\n' +
            'Quis vel eros donec ac. Velit scelerisque in dictum non consectetur a erat nam at. Nunc sed augue lacus viverra vitae congue eu consequat ac. Facilisis mauris sit amet massa. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Odio tempor orci dapibus ultrices in iaculis nunc sed augue. Dictum varius duis at consectetur lorem donec massa sapien faucibus. Leo vel orci porta non pulvinar. Mi quis hendrerit dolor magna. Quis blandit turpis cursus in hac habitasse. Libero id faucibus nisl tincidunt. Nisi quis eleifend quam adipiscing vitae proin sagittis. Odio morbi quis commodo odio aenean sed adipiscing. Etiam sit amet nisl purus in mollis nunc sed. Ac turpis egestas integer eget aliquet nibh praesent.';
    }
    ngOnInit() {
    }
    log(x) {
        console.log(x);
    }
    submit(form) {
        console.log(form);
    }
};
UserManagementComponent = tslib_1.__decorate([
    Component({
        selector: 'app-user-management',
        templateUrl: './user-management.component.html',
        styleUrls: ['./user-management.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], UserManagementComponent);
export { UserManagementComponent };
//# sourceMappingURL=user-management.component.js.map