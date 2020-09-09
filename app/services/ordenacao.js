import Service from '@ember/service';

export default class OrdenacaoService extends Service {
    order (array) {
      if (array.length > 10 || array.length < 4 || !this.hasFiveDigits(array)) {
        return 0;
      }
        var len = array.length;
        for (var i = len-1; i>=0; i--) {
          for (var j = 1; j<=i; j++) {
            if (array[j-1]>array[j]) {
                var temp = array[j-1];
                array[j-1] = array[j];
                array[j] = temp;
             }
          }
        }

        return 1;
    }

    hasFiveDigits(array) {
      array.forEach(element => {
        if (element > 99999 || element < 10000 || !Number.isInteger(element)) {
          return false;
        }
      });

      return true;
    }
}
