import _ from 'lodash';
import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { Product } from './product.model';

console.log(_.shuffle([1, 2, 3]));

const products = [
    { title: 'A carpet', price: 3.33 },
    { title: 'A book', price: 4.44 },
];
//const p1 = new Product('A book', 4.44);

const newProd = new Product('', -3.33);
validate(newProd).then(errors => {
    if (errors.length > 0) {
        console.log('ERRORS *********',errors);

    }
    
});
console.log(newProd.getInformation());

const loadedP = plainToClass(Product, products);

for (const p of loadedP) {
    console.log(p.getInformation());
}
