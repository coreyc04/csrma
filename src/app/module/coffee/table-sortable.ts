import { Component, Directive, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { CoffeeOrder } from '../../data/service/coffee-orders.service';

export type SortDirection = 'asc' | 'desc' | '';
const rotate: { [key: string]: SortDirection } = { 'asc': 'desc', 'desc': '', '': 'asc' };
export const compare = (v1, v2) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

export interface SortEvent {
    column: string;
    direction: SortDirection;
}

@Directive({
    selector: 'th[sortable]',
    host: {
        '[class.asc]': 'direction === "asc"',
        '[class.desc]': 'direction === "desc"',
        '(click)': 'rotate()'
    }
})
class NgbdSortableHeader {

    @Input() sortable: string;
    @Input() direction: SortDirection = '';
    @Output() sort = new EventEmitter<SortEvent>();

    rotate() {
        this.direction = rotate[this.direction];
        this.sort.emit({ column: this.sortable, direction: this.direction });
    }
}

@Component({
    selector: 'ngbd-table-sortable',
    templateUrl: './table-sortable.html',
    styles: [`
        .table .thead-light-blue {
            background-color: rgba(0, 123, 255, 0.5);
        }
    `]
})
class NgbdTableSortable {
    @Input() coffeeOrders: CoffeeOrder[] = [];
    coffeeOrdersSorty: CoffeeOrder[] = this.coffeeOrders;

    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

    onSort({ column, direction }: SortEvent) {

        // resetting other headers
        this.headers.forEach(header => {
            if (header.sortable !== column) {
                header.direction = '';
            }
        });

        // sorting countries
        if (direction === '') {
            this.coffeeOrdersSorty = this.coffeeOrders;
        } else {
            this.coffeeOrdersSorty = [...this.coffeeOrders].sort((a, b) => {
                const res = compare(a[column], b[column]);
                return direction === 'asc' ? res : -res;
            });
        }
    }
}

export {NgbdSortableHeader, NgbdTableSortable}