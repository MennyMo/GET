
//Method 1
//  const another =  document.querySelector('.another')
 function displayList(){
let name = '' ;
     let url = 'https://jsonplaceholder.typicode.com/posts';
     fetch(url)
     .then(response => response.json())
     .then(result => {
        //  console.log(result.slice(0, 10))
        let details = result.slice(0, 10)
        console.log(details);
        details.forEach(user => {
            name += `<ul>
            <li><strong id ='title'>Title:</strong>${user.title}</li>
            <li><strong>Body:</strong>${user.body}</li>
            </ul>`

        } )
        document.querySelector('.another').innerHTML = name;
     })

 }

 //Method 2 --Async/Await--
//  async function displayAgain(){
//      //in case of error in the link
//      try{
//         let name = '' ;
//         let url = 'https://jsonplaceholder.typicode.com/posts';
//         let data = await fetch(url)
//         let result = await data.json()
//         console.log(result.slice(0,10))
//      }
//      catch(error){
//          console.log('An Error Occurred' , error)

//      }
    

//  }
//  displayAgain()



//  //post

//  fetch(url, {

//  })



 




























//  //print 1-5
// for(let i=1; i<=12; i++){
//     let miracle = '2 * ' + i + "=" + 2*i ;
//         console.log(miracle);

// }
// //print multiplication table

