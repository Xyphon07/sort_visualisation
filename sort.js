// const can= document.querySelector("canvas");
// const can_mode= can.getContext("2d");
// can_mode.fillStyle="red";
// function line(num){
//   let postion=0;
//  let width=7;
//  for(let i=0;i<num.length-1;i++){
// let height = num[i]+30;
//  can_mode.fillRect(postion,can.height-height,width,height);   
//     postion+= width+1;
//  }

// }
// function insertion_sort(val){
// for(let i;i<val.length-1;i++){
//     let temp=val[i];
// val[i+1]=temp;
  



// }


//     }
// line(insertion_sort(custom_val))
const can = document.querySelector("canvas");
const can_mode = can.getContext("2d");
can_mode.fillStyle = "red";

function line(num) {
  can_mode.clearRect(0, 0, can.width, can.height);
  let position = 0;
  let width = 7;
  for (let i = 0; i < num.length; i++) {
    let height = num[i] * 2;
    can_mode.fillRect(position, can.height - height, width, height);
    position += width + 1;
  }
}


 let custom_val=[3,5,2,9,7,8,9,10,4,13,23,12,15,1,20,26,18,16,17,21,24,29,30,27,26,31,33,37,39,40,45,55,51,52,60,65,67,70];
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function insertion_sort(val) {
  for (let i = 1; i < val.length; i++) {
    let temp = val[i];
    let j = i - 1;
    
    while (j >= 0 && val[j] > temp) {
      val[j + 1] = val[j];
      j--;
      
      line(val); 
      
      await sleep(50); 
    }
    val[j + 1] = temp;
    
    line(val);
    await sleep(50);
  }
}

insertion_sort(custom_val);

