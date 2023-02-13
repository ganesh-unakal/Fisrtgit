console.log('person1 :shows ticket');
console.log('person2 :shows ticket');


// const promiseWifeBringingTickes= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('ticket');
//     },3000)
// })

// const getpopCorn= promiseWifeBringingTickes.then((t)=>{
//     console.log('husband: we should go in')
//     console.log('wife :no i am hungry');
//     return new Promise((resolve,reject)=>
//      resolve(`${t} popcorn`))
// });

// const getButter=getpopCorn.then((t)=>{
// console.log('husband: i got some popcorn');
// console.log('husband: we shulod go in');
// console.log('wife: i need butter on my popcorn');
// return new Promise ((resolve, reject)=>resolve(`${t} butter`));
// });

// const getDrinks = getButter.then((t) => {
//    console.log('Husband : Shall we go in ?')
//    console.log('Wife : No i need a Drink')
//    return new Promise((resolve,reject) => resolve(`${t} Drink`))
// })
// getDrinks.then((t) => console.log(t))*/



// console.log('person4: shows ticket');
// console.log('person5: ticket')



//............................
// console.log('person1: shows ticket');
// console.log('person2:shows ticket');



 const preMovie=async()=>{

   const PromiseWifeBringingticks= new Promise ((resolve ,reject)=>{
      setTimeout(()=>resolve('ticket'),3000)
   });

   const getpopCorn=new Promise((resolve,reject)=>resolve(`popcorn`))

   const addButter= new Promise((resolve, reject)=> resolve(`butter`))

   const getColdDrink = new Promise((resolve, reject)=> resolve(`Drink`))

   let ticket=await PromiseWifeBringingticks;
   console.log(`wife: i have the ${ticket}`)
   console.log('husband: we should go in')
   console.log('wife: no im hungry');
   //console.log('wife :no i am hungry');

   let popcorn= await getpopCorn

   console.log(`husband: i got some ${popcorn}`);
   console.log('husband: we should go in')
   console.log('wife :no i need some butter on popcorn');

   let butter= await addButter

 
   console.log(`husband: i got some ${butter}`)
   console.log('husband: anything else?')
   console.log('wife : haa i need cold drinks')
   
   
   
  let drink= await getColdDrink;
  console.log(`husband: take your ${drink}`)
  console.log('husband : shall we go now')
  console.log('wife : yes we can go nw')

   
   return ticket ;//hete we return the ticket at lone no 260
 }

 preMovie().then((m)=>console.log(`person3: shows ${m}`))

console.log('person4: shows ticket');
console.log('person5: shows ticket');



const posts=[
   {title: 'post 1',body:'this is post 1', createdAt: new Date().getTime()},
   {title: 'post 2', body: 'this is post 2', createdAt: new Date().getTime()}
]

async function callPost(){
   const getPosts=()=>{
      setTimeout(()=>{
         let output=" ";
         posts.forEach((post)=>{
            output=output+`<li>${post.title} last updated ${(new Date().getTime()-post.createdAt)/1000}seconds ago</li>`

         })
         document.body.innerHTML=output
      },3000)
   }

   const createpost=(post)=>{
      return new Promise ((resolve , reject)=>{
         setTimeout(()=>{ 
         posts.push({...post,createdAt: new Date().getTime()})
         const error=false

         if(!error){
            resolve(posts)
         }else{
            reject('error: somthing went wrong')
         }
      },1000)
   })
}

const deletepost=()=>{
   return new Promise((resolve,reject)=>{
      setTimeout(()=>{
         if(posts.length>0){
            const lastElement=posts.pop()
            resolve(lastElement)
         }else{
            reject('array is empty now')
         }

      },1000)
   })
}

let createdposts = await createpost
createdposts({title: 'post three', body:'this is post three', createdAt:new Date().getTime()})
 getPosts()

 let postsdeleted= await deletepost
 postsdeleted().then(a=> console.log(a))
 getPosts();
}
callPost();

