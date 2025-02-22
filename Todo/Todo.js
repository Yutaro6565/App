const TodoList=[];
let command
while(true){
    command=prompt("コマンドを入力してください(new,list,delete,quit)");
    if (command==="new"){
        let NewVal=prompt("新しいTodoを入力してください");
        TodoList[TodoList.length]=NewVal;
        console.log(NewVal+"を追加しました");
    }
    else if (command==="list"){
        console.log("**********");
        for(let i=0;i<TodoList.length;i++){
            console.log(i+": "+TodoList[i]);
        }
        console.log("**********");
    }
    else if (command==="delete"){
        let DeleteIndex=prompt("削除するインデックスを入力してください");
        DeleteIndex=parseInt(DeleteIndex);
        console.log(TodoList[DeleteIndex]+"を削除します");
        TodoList.splice(DeleteIndex,1);
    }
    else if (command ==="quit"){
        console.log("アプリを終了しました");
        break;
    }
}