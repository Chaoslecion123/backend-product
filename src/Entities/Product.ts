import {Entity,BaseEntity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Products extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    brand: string;

    @Column()
    category: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @Column()
    image: string;

    @Column()
    countInStock: number;



}