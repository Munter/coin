function Coin (value) {
    this.table = this.createTable();

    this.setValue(value || 0);
}

Coin.prototype = {
    createTable: function () {
        var table = document.createElement('table'),
            row,
            cell,
            i,
            j,
            canvas = [
                [1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1],
                [1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1],
                [1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1],
                [1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1],
                [1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1],
                [1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1],
                [1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1]
            ];

        for (i = 0; i < 16; i += 1) {
            row = document.createElement('tr');
            for (j = 0; j < 16; j += 1) {
                cell = document.createElement('td');
                if (canvas[i][j]) {
                    cell.style.background = 'black';
                }
                row.appendChild(cell);
            }
            table.appendChild(row);
        }

        return table;
    },

    updateTable: function () {
        var bits = [
                [ 1, 1],[ 1, 2],[ 2, 1],[ 2, 2],
                [ 1,13],[ 1,14],[ 2,13],[ 2,14],
                [13, 1],[13, 2],[14, 1],[14, 2],
                [13,13],[13,14],[14,13],[14,14]
            ],
            cell

        for (var i = 0; i < bits.length; i += 1) {
            cell = this.table.rows[bits[i][0]].cells[bits[i][1]];

            if (this.value & 1 << i) {
                cell.style.background = 'black';
            } else {
                cell.style.background = '';
            }
        }
    },

    getTable: function () {
        return this.table;
    },

    getValue: function () {
        return this.value;
    },

    setValue: function (value) {
        var n = 0xFFFF + 1;
        this.value = (n + (value % n)) % n;
        this.updateTable(this.value);
    },

    next: function () {
        this.setValue(this.value + 1);
    },

    prev: function () {
        this.setValue(this.value - 1);
    }
};