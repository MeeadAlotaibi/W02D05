const toDos =[{name :"Meead"} ,{isComplated : false} ];



$("#btnChanges").click( (index)=> {
    let edit = '' ;
    toDos.index = edit ;
    toDos[index] = update  ; 
     } ,



$('#btnRemove').click( (index)=>{
    $(".ist-data").splice(index,1) ;

    toDos.splice(index,1);
        renderList();  
    },
    
    

    function renderList(i) {

        $(".listOfTasks").html("");

        toDos.forEach(function (item, index) {
            $(".listOfTasks").append(`<li class="list-data" onclick="Complated(${index})">
        <p class="${item.isComplated ? 'Complated' : ''} > ${item.name}</p>
        <button class="btnChanges" id="btnChanges" onclick="updateListItem(${index}">EDIT</button>
        <button class="btnChanges" id="btnRemove" onclick="deleteListItem(${index}">REMOVE</button>
        </li>`);
        });

        const notComplated = toDos.filter((item) => !item.isComplated);
        $("p").html(`You have ${notComplated.length} todos left`);
    } ,

        
        function addToList() {
            if ($("inputBox").html('')) { 
                toDos.push($("inputBox").val()); 
                renderList();
                $("inputBox").html(''); 
        }
    } 


    // $('.btnAdd').on('click' ,  addToList()) 