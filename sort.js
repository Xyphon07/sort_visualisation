//line renderer here
function line(num) {
  can_mode.clearRect(0, 0, can.width, can.height);
  let position = 0;
  let width = 1;
  for (let i = 0; i < num.length; i++) {
    let height = num[i] ;
    can_mode.fillRect(position, can.height - height, width, height);
    position += width + 1;
  }
}
//====================================================================================/////
//===================================================================================//////
//canvas intilization 
const can = document.querySelector("canvas");
const can_mode = can.getContext("2d");
const choosed_algo=document.getElementById("sort");
//===================================================================================
//for chaginging line color
//===================================================================================
can_mode.fillStyle = "red";
const color_change_line= document.getElementById("favcolor");
color_change_line.addEventListener('change', (event) => {
can_mode.fillStyle = event.target.value;
  });
//=====================================================================================
//=====================================================================================
//choose sort algo to render 
choosed_algo.addEventListener("change", (event) => {
let choice=event.target.value;
  if(choice === "insertion_sort"){
insertion_sort(structuredClone(custom_val));
  }
    else if(choice == "heap_sort"){
        heapSort(structuredClone(custom_val));


    }
    else if(choice =="choose"){
line(0);

    }
    else{
        line(0);
    }
});
//======================================================================================
//=====================================================================================
// primary data
 let custom_val=[3,55,28,9,78,8,9,10,49,13,23,
     12,15,100,20,26,18,16,70,21,24,29,30,27,26,31,33,37,39,40
     ,45,55,51,52,60,65,67,70,3,55,28,9,78,8,9,10,49,13,23,12,15,
     100,20,26,18,16,70,21,24,29,30,27,26,31,33,37,39,40,45,55,51,52,60,
     65,67,70,3,55,28,9,78,8,9,10,49,13,23,12,15,100,20,26,18,16,70,21,24,29,30,27,26,31,
     33,37,39,40,45,55,51,52,60,65,67,70,55,28,78,8,9,10,49,13,23,12,15,100,20,26,18,70,21
     ,24,29,30,27,26,31,33,37,39,40,45,55,51,52,60,65,67,70 ];
//=======================================================================================
//=======================================================================================
//define sleep function to provide time for renderer to draw
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
//=======================================================================================
//=======================================================================================
//defination of diffrent sort algo here
//===========================================
//insertion sort
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
//===================================================================================
//heap sort
//===================================================================================
async function heapSort(arr) {
  const n = arr.length;
line(arr);
 await sleep(10);

  // 1. Build a max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    let curr = i;
    while (true) {
      let largest = curr;
      const left = 2 * curr + 1;
      const right = 2 * curr + 2;
line(arr);
 await sleep(50);

      if (left < n && arr[left] > arr[largest]) largest = left;
      if (right < n && arr[right] > arr[largest]) largest = right;

      if (largest === curr) break;

      [arr[curr], arr[largest]] = [arr[largest], arr[curr]];
      curr = largest;
    }
  }

line(arr);
 await sleep(10);

  // 2. Extract elements from the heap one by one
  for (let i = n - 1; i > 0; i--) {
    // Move current root to the end
    [arr[0], arr[i]] = [arr[i], arr[0]];

    // Call heapify on the reduced heap
    let curr = 0;
    while (true) {
      let largest = curr;
      const left = 2 * curr + 1;
      const right = 2 * curr + 2;
line(arr);
 await sleep(50);

      if (left < i && arr[left] > arr[largest]) largest = left;
      if (right < i && arr[right] > arr[largest]) largest = right;

      if (largest === curr) break;

      [arr[curr], arr[largest]] = [arr[largest], arr[curr]];
      curr = largest;
    }
  }
line(arr);
 await sleep(10);
}
