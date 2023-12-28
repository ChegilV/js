
const slides = document.querySelectorAll('.slide');
const lines = document.querySelectorAll('.line');
const linesFilling = document.querySelectorAll('.fill-line');

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
    
    lines.forEach((line, index) => {
        line.addEventListener('click', () =>{
            
            slide.style.transform = `translateX(-${index * 100}%)`;

            linesFilling.forEach((line, indexL) => {
                if(indexL !== index){
                    line.classList.remove('active');
                }else{
                    
                    line.classList.add('active');
                    
                }

                
                counter = index;
                // clearInterval(setInterval(carousel, 4000));
                
            });   
           
        });


    });
});



let counter = 0;


carousel();




   
   




// function carousel(){

//     if(counter < 0){
//         counter = 0;
//     }
//     if(counter === slides.length){
//         counter = slides.length-1;
//     }
//     setInterval(() => {
//         slides.forEach((slide, sIndex) => {
//             slide.style.transform = `translateX(-${counter * 100}%)`; 

//         });

//         linesFilling.forEach((line, index) => {
//             if(counter === index){
//                 line.classList.add('active');
//             }else{
//                 line.classList.remove('active');
//             }
            
//         });
//         counter++;
//         if(counter === slides.length){
//             counter = 0;
//         }

        
        

//     }, 4000);
    
    
// }


// setInterval(function carousel(){

//         if(counter < 0){
//             counter = 0;
//         }
//         // if(counter === slides.length){
//         //     counter = slides.length-1;
//         // }

//         slides.forEach((slide, sIndex) => {
//             slide.style.transform = `translateX(-${counter * 100}%)`; 

//         });

//         linesFilling.forEach((line, index) => {
//             if(counter === index){
//                 line.classList.add('active');
//             }else{
//                 line.classList.remove('active');
//             }
            
//         });
//         counter++;
//         if(counter === slides.length){
//             counter = 0;
//         }

//         return carousel;
// }(), 3000)



function carousel(){

    if(counter < 0){
        counter = 0;
    }
    // if(counter === slides.length){
    //     counter = slides.length-1;
    // }

    slides.forEach((slide, sIndex) => {
        slide.style.transform = `translateX(-${counter * 100}%)`; 

    });

    linesFilling.forEach((line, index) => {
        if(counter === index){
            line.classList.add('active');
        }else{
            line.classList.remove('active');
        }
        
    });
    counter++;
    if(counter === slides.length){
        counter = 0;
    }

    
}


setInterval(carousel, 4000);