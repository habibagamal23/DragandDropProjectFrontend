let btn = document.getElementById('btn');
let inp = document.getElementById('inp');
let box = document.querySelectorAll('.Box');
let drag = null;


btn.onclick= function(){
    if(inp.value != ''){
        box[0].innerHTML +=`<p class"item" draggable="true" > ${inp.value} <p/>` 
        inp.value ='';
    }
dragItem();
}
function dragItem(){

    let items = document.querySelectorAll('.item');
    items.forEach(item => {
        item.addEventListener('dragstart', function(){
            console.log('dragstart');
           drag = item;
           item.style.opacity= '0.5';
        })
        
        item.addEventListener('dragend', function(){
            drag= null;
            item.style.opacity= '1';
        })
        
box.forEach(boxs=>{
    boxs.addEventListener('dragover', function(e){

        e.preventDefault();
        this.style.background = '#090';
        this.style.color = '#fff';
    })

 boxs.addEventListener('dragleave', function(){

        this.style.background = '#fff';
        this.style.color = '#090' ;
      })
    
      boxs.addEventListener('drop', function(){

        boxs.append(drag);
        this.style.background = '#fff';
        this.style.color = '#090' ;
      })

})

    });
}