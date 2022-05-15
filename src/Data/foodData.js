export const foodItems = [
    {
        name:'cheese pizza',
        img:'Images/Pizza-ost.jpg',
        section: 'Pizza',
        price: 1,
        ingredients: "pizza dough,pizza sauce,pepperoni,mozzarella cheese, grated,black pepper,oregano,salt, black peper,egg"
   
    },

    {
        name:'Pepperoni Pizza',
        img:'Images/pizza-pepperoni.jpg',
        section: 'Pizza',
        price: 2,
        ingredients: "  "
    },

    {
        name:'Oliven pizza',
        img:'Images/pizza-oliven-rucola.jpg',
        section: 'Pizza',
        price: 3,
        ingredients: "  "
    },

    {
        name:'Shrimp Pizza',
        img:'Images/pizza-shrimp.jpg',
        section: 'Pizza',
        price: 4,
        ingredients: "  "
    },
    {
        name:'Cherry Pizza',
        img:'Images/pizza-cherry-tomato.jpg',
        section: 'Pizza',
        price: 5,
        ingredients: "  "
    },
    {
        name:'French Fries',
        img:'Images/fries.jpg',
        section: 'Fries',
        price: 6,
        ingredients: "  "
    },

    {
        name:'Cheese Burger',
        img:'Images/burger.jpg',
        section: 'Burger',
        price: 7,
        ingredients: "  "
    },
    {
        name:'Chicken Sandwich',
        img:'Images/sandwich.jpg',
        section: 'Sandwich',
        price: 8,
        ingredients: "  "
    },
    {
        name:'Soda',
        img:'Images/soda.jpg',
        section: 'Drinks',
        price: 9,
        ingredients: "  "
         
    }


];
// reduce method = takes the same value call res and put the current value food and keep the result and add the value
export const foods = foodItems.reduce((res, food)=> {
    if (!res[food.section]){
        res[food.section] = [];

    }
    res[food.section].push(food);
    return res;
}, {} );


// Price formater
export function formatPrice(price){
    return price.toLocaleString('da-DK',{
        style: 'currency',
        currency: 'DKK'
    })

}
