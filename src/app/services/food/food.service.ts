import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/model/food';
import { Tag } from 'src/app/shared/model/tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getFoodById(id:number): Foods{
    return this.getAll().find(food => food.id == id)!;
  }
  getAllFoodByTag(tag: string): Foods[] {
    if (tag == 'All')

      return this.getAll()
    else
      return this.getAll().filter(food => food.tags?.includes(tag));
  }
  getAllTag(): Tag[] {
    return [
      { name: 'All', count: 14 },
      { name: 'Fastfood', count: 4 },
      { name: 'pizza', count: 3 },
      { name: 'somosha', count: 2 },
      { name: 'Ice-Cream', count: 2 },
      { name: 'burger', count: 3 },
      { name: 'cake', count: 2 },
      { name: 'soup', count: 2 },
      { name: 'momos', count: 2 },
    ];
  }


  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: ' Choccolate Ice-Cream',
        cooktime: '10-20',
        price: 50,
        favorite: true,
        origins: ['india'],
        star: 4.5,
        imageUrl: '/assets/img11.JPG',
        tags: ['Ice-Cream']
      },
      {
        id: 2,
        name: 'Choccolate Cherry cake',
        cooktime: '10-50',
        price: 80,
        favorite: true,
        origins: ['india'],
        star: 4.5,
        imageUrl: '/assets/img14.jpg',
        tags: ['cake']
      },
      {
        id: 3,
        name: 'Crisp Capsicum & Fresh Tomato Pizza',
        cooktime: '10-60',
        price: 120,
        favorite: false,
        origins: ['india'],
        star: 4.3,
        imageUrl: '/assets/img3.jpg',
        tags: ['Fastfood', 'pizza']
      },
      {
        id: 4,
        name: 'Potato Corn Burger',
        cooktime: '10-20',
        price: 150,
        favorite: false,
        origins: ['india'],
        star: 4.1,
        imageUrl: '/assets/img12.jpg',
        tags: ['Fastfood', 'burger']
      },
      {
        id: 5,
        name: 'Chilli Cheese Samosa',
        cooktime: '10-20',
        price: 50,
        favorite: false,
        origins: ['india'],
        star: 4.5,
        imageUrl: 'dist/foodorder/assets/img15.jpg',
        tags: ['Fastfood', 'somosha']
      },
      {
        id: 6,
        name: 'Kolkata Egg Roll',
        cooktime: '10-20',
        price: 60,
        favorite: true,
        origins: ['india'],
        star: 4.5,
        imageUrl: '/assets/img19.jpg',
        tags: ['Fastfood', 'egg roll']
      },
      {
        id: 7,
        name: 'Green Tea',
        cooktime: '10-20',
        price: 40,
        favorite: false,
        origins: ['india'],
        star: 4.6,
        imageUrl: 'dist/foodorder/assets/img9.jpg',
        tags: ['Green tea']
      },
      {
        id: 8,
        name: 'Cappuccino',
        cooktime: '10-20',
        price: 70,
        favorite: true,
        origins: ['india'],
        star: 4.5,
        imageUrl: '/assets/img16.jpg',
        tags: ['Cappuccino']
      },
      {
        id: 9,
        name: 'Chocolate mousse',
        cooktime: '10-20',
        price: 150,
        favorite: false,
        origins: ['india'],
        star: 4,
        imageUrl: '/assets/img17.jpg',
        tags: ['Fastfood', 'Desert']
      },
      {
        id: 10,
        name: 'Steamed Momo',
        cooktime: '10-20',
        price: 90,
        favorite: true,
        origins: ['india'],
        star: 4.5,
        imageUrl: '/assets/img18.jpg',
        tags: ['Fastfood', 'momos']
      },
      {
        id: 11,
        name: 'Cheese Pizza',
        cooktime: '10-40',
        price: 120,
        favorite: true,
        origins: ['india'],
        star: 4.5,
        imageUrl: '/assets/img20.jpg',
        tags: ['Fastfood', 'pizza']
      },
      {
        id: 12,
        name: 'Hut Soup',
        cooktime: '10-20',
        price: 90,
        favorite: true,
        origins: ['india'],
        star: 4.5,
        imageUrl: '/assets/img21.jpg',
        tags: ['Fastfood', 'soup']
      },
      {
        id: 13,
        name: 'Mutton Soup',
        cooktime: '10-20',
        price: 90,
        favorite: true,
        origins: ['india'],
        star: 4.5,
        imageUrl: '/assets/img22.jpg',
        tags: ['Fastfood', 'soup']
      },
      {
        id: 14,
        name: 'Pizza Hut',
        cooktime: '10-30',
        price: 90,
        favorite: true,
        origins: ['india'],
        star: 4.5,
        imageUrl: '/assets/img23.jpg',
        tags: ['Fastfood', 'pizza']
      },
      {
        id: 15,
        name: 'Burger King',
        cooktime: '10-20',
        price: 160,
        favorite: true,
        origins: ['india'],
        star: 4.5,
        imageUrl: '/assets/img24.jpg',
        tags: ['Fastfood', 'burger']
      },
      {
        id: 16,
        name: 'Cheese Burger',
        cooktime: '10-20',
        price: 80,
        favorite: true,
        origins: ['india'],
        star: 4.5,
        imageUrl: '/assets/img25.jpg',
        tags: ['Fastfood', 'burger']
      },
      {
        id: 17,
        name: 'Panner Somosha',
        cooktime: '10-20',
        price: 80,
        favorite: true,
        origins: ['india'],
        star: 4.5,
        imageUrl: '/assets/img26.jpg',
        tags: ['Fastfood', 'somosha']
      },
      {
        id: 18,
        name: 'Steamed Momo',
        cooktime: '10-30',
        price: 50,
        favorite: false,
        origins: ['india'],
        star: 4.5,
        imageUrl: '/assets/img27.jpg',
        tags: ['Fastfood', 'momos']
      },
      {
        id: 19,
        name: 'Cup Cake',
        cooktime: '10-20',
        price: 90,
        favorite: true,
        origins: ['india'],
        star: 4.5,
        imageUrl: '/assets/img28.jpg',
        tags: ['Fastfood', 'cake']
      },
      {
        id: 20,
        name: 'Vanilla Ice-Cream',
        cooktime: '10-20',
        price: 90,
        favorite: true,
        origins: ['india'],
        star: 4.5,
        imageUrl: '/assets/img29.jpg',
        tags: ['Fastfood', 'Ice-Cream']
      },
    ];
  }
}
