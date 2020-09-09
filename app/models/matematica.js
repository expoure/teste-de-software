import Model from '@ember-data/model';

export default class MatematicaModel extends Model {
    soma (value1, value2) {
        return value1 + value2;
    }

    divide (value1, value2) {
        return value1 / value2;
    }
}
