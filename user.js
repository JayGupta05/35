class User{
    constructor(){}
    readCount(){
        var playerCountRef = database.ref("peopleCount");
        playerCountRef.on('value',function(data){
            peopleCount = data.val();
        })
    }
    updateCount(count){
        database.ref('/').update({
            peoplerCount : count
        })
    }
    update(username,useremail,userans,peopleCount){
        var playerIndex = "voter" + peopleCount + "/";
        database.ref(playerIndex).set({
            name: username,
            email: useremail,
            ans: userans
        });
    }
}